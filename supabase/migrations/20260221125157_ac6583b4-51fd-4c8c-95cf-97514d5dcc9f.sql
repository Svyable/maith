-- Per-difficulty stats so users can track EASY / ADVN / SOTA progress separately
CREATE TABLE IF NOT EXISTS public.user_difficulty_stats (
  user_id UUID NOT NULL,
  difficulty TEXT NOT NULL,
  score_total BIGINT NOT NULL DEFAULT 0,
  total_answered BIGINT NOT NULL DEFAULT 0,
  correct_answered BIGINT NOT NULL DEFAULT 0,
  best_streak INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, difficulty)
);

ALTER TABLE public.user_difficulty_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_difficulty_stats_select_self"
  ON public.user_difficulty_stats
  FOR SELECT
  USING (user_id = auth.uid());

-- Update submit_quiz_session to also upsert user_difficulty_stats
CREATE OR REPLACE FUNCTION public.submit_quiz_session(
  p_client_session_id TEXT,
  p_difficulty public.difficulty,
  p_score INTEGER,
  p_total_answered INTEGER,
  p_correct_answered INTEGER,
  p_best_streak INTEGER,
  p_topics TEXT[],
  p_topic_breakdown JSONB DEFAULT '{}'::jsonb,
  p_content_version TEXT DEFAULT NULL
)
RETURNS SETOF public.user_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_key TEXT;
  v_val JSONB;
BEGIN
  -- 1. Insert quiz session
  INSERT INTO public.quiz_sessions (
    user_id, client_session_id, difficulty, score,
    total_answered, correct_answered, best_streak,
    topics, topic_breakdown, content_version
  ) VALUES (
    v_uid, p_client_session_id, p_difficulty, p_score,
    p_total_answered, p_correct_answered, p_best_streak,
    p_topics, p_topic_breakdown, p_content_version
  );

  -- 2. Upsert aggregate user_stats
  INSERT INTO public.user_stats (user_id, score_total, total_answered, correct_answered, best_streak)
  VALUES (v_uid, p_score, p_total_answered, p_correct_answered, p_best_streak)
  ON CONFLICT (user_id) DO UPDATE SET
    score_total      = user_stats.score_total + EXCLUDED.score_total,
    total_answered   = user_stats.total_answered + EXCLUDED.total_answered,
    correct_answered = user_stats.correct_answered + EXCLUDED.correct_answered,
    best_streak      = GREATEST(user_stats.best_streak, EXCLUDED.best_streak),
    updated_at       = now();

  -- 3. Upsert per-topic stats
  FOR v_key, v_val IN SELECT * FROM jsonb_each(p_topic_breakdown)
  LOOP
    INSERT INTO public.user_topic_stats (user_id, topic, total_answered, correct_answered)
    VALUES (v_uid, v_key, (v_val->>'total')::BIGINT, (v_val->>'correct')::BIGINT)
    ON CONFLICT (user_id, topic) DO UPDATE SET
      total_answered   = user_topic_stats.total_answered + EXCLUDED.total_answered,
      correct_answered = user_topic_stats.correct_answered + EXCLUDED.correct_answered,
      updated_at       = now();
  END LOOP;

  -- 4. Upsert per-difficulty stats
  INSERT INTO public.user_difficulty_stats (user_id, difficulty, score_total, total_answered, correct_answered, best_streak)
  VALUES (v_uid, p_difficulty::TEXT, p_score, p_total_answered, p_correct_answered, p_best_streak)
  ON CONFLICT (user_id, difficulty) DO UPDATE SET
    score_total      = user_difficulty_stats.score_total + EXCLUDED.score_total,
    total_answered   = user_difficulty_stats.total_answered + EXCLUDED.total_answered,
    correct_answered = user_difficulty_stats.correct_answered + EXCLUDED.correct_answered,
    best_streak      = GREATEST(user_difficulty_stats.best_streak, EXCLUDED.best_streak),
    updated_at       = now();

  RETURN QUERY SELECT * FROM public.user_stats WHERE user_id = v_uid;
END;
$$;