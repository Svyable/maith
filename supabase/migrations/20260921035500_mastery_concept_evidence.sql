-- Durable concept evidence for the mastery layer.
-- Writes remain atomic with quiz-session submission and are not exposed for
-- direct client mutation.

CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon;
GRANT USAGE ON SCHEMA private TO authenticated;

CREATE TABLE public.user_concept_evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  client_session_id text NOT NULL REFERENCES public.quiz_sessions(client_session_id) ON DELETE CASCADE,
  concept_id text NOT NULL CHECK (length(trim(concept_id)) > 0),
  question_id integer NOT NULL CHECK (question_id >= 0),
  topic text NOT NULL CHECK (length(trim(topic)) > 0),
  difficulty public.difficulty NOT NULL,
  outcome text NOT NULL CHECK (outcome IN ('answered', 'skipped')),
  correct boolean NOT NULL DEFAULT false,
  hint_used boolean NOT NULL DEFAULT false,
  eliminate_used boolean NOT NULL DEFAULT false,
  timed_out boolean NOT NULL DEFAULT false,
  primary_concept boolean NOT NULL DEFAULT false,
  content_version text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT user_concept_evidence_answer_consistency
    CHECK (NOT correct OR outcome = 'answered'),
  CONSTRAINT user_concept_evidence_session_question_concept_key
    UNIQUE (user_id, client_session_id, question_id, concept_id)
);

CREATE INDEX user_concept_evidence_user_created_idx
  ON public.user_concept_evidence (user_id, created_at DESC);

CREATE INDEX user_concept_evidence_user_concept_created_idx
  ON public.user_concept_evidence (user_id, concept_id, created_at DESC);

ALTER TABLE public.user_concept_evidence ENABLE ROW LEVEL SECURITY;

CREATE POLICY user_concept_evidence_select_self
ON public.user_concept_evidence
FOR SELECT TO authenticated
USING ((select auth.uid()) = user_id);

REVOKE ALL ON TABLE public.user_concept_evidence FROM anon, authenticated;
GRANT SELECT ON TABLE public.user_concept_evidence TO authenticated;

-- Remove historical overloads so PostgREST has one unambiguous RPC contract.
DROP FUNCTION IF EXISTS public.submit_quiz_session(
  text, text[], public.difficulty, integer, integer, integer, integer, jsonb, text
);
DROP FUNCTION IF EXISTS public.submit_quiz_session(
  text, public.difficulty, integer, integer, integer, integer, text[], jsonb, text
);

CREATE OR REPLACE FUNCTION private.submit_quiz_session_impl(
  p_client_session_id text,
  p_difficulty public.difficulty,
  p_score integer,
  p_total_answered integer,
  p_correct_answered integer,
  p_best_streak integer,
  p_topics text[],
  p_topic_breakdown jsonb DEFAULT '{}'::jsonb,
  p_content_version text DEFAULT NULL,
  p_concept_evidence jsonb DEFAULT '[]'::jsonb
)
RETURNS public.user_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_stats public.user_stats;
  v_session_id uuid;
  v_key text;
  v_val jsonb;
  v_evidence jsonb;
  v_concept_id text;
  v_question_id integer;
  v_topic text;
  v_evidence_difficulty public.difficulty;
  v_outcome text;
  v_correct boolean;
  v_hint_used boolean;
  v_eliminate_used boolean;
  v_timed_out boolean;
  v_primary boolean;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_score < 0 THEN RAISE EXCEPTION 'Invalid score'; END IF;
  IF p_total_answered < 0 THEN RAISE EXCEPTION 'Invalid total_answered'; END IF;
  IF p_correct_answered < 0 OR p_correct_answered > p_total_answered THEN
    RAISE EXCEPTION 'Invalid correct_answered';
  END IF;
  IF p_best_streak < 0 OR p_best_streak > p_total_answered THEN
    RAISE EXCEPTION 'Invalid best_streak';
  END IF;
  IF p_client_session_id IS NULL OR length(trim(p_client_session_id)) = 0 THEN
    RAISE EXCEPTION 'client_session_id required';
  END IF;
  IF p_concept_evidence IS NULL OR jsonb_typeof(p_concept_evidence) <> 'array' THEN
    RAISE EXCEPTION 'concept_evidence must be a JSON array';
  END IF;

  INSERT INTO public.quiz_sessions (
    user_id, client_session_id, difficulty, score,
    total_answered, correct_answered, best_streak,
    topics, topic_breakdown, content_version
  ) VALUES (
    v_uid, p_client_session_id, p_difficulty, p_score,
    p_total_answered, p_correct_answered, p_best_streak,
    p_topics, COALESCE(p_topic_breakdown, '{}'::jsonb), p_content_version
  )
  ON CONFLICT (client_session_id) DO NOTHING
  RETURNING id INTO v_session_id;

  -- Idempotent retries return current stats without re-applying aggregates/evidence.
  IF v_session_id IS NULL THEN
    SELECT * INTO v_stats FROM public.user_stats WHERE user_id = v_uid;
    RETURN v_stats;
  END IF;

  INSERT INTO public.user_stats (
    user_id, score_total, total_answered, correct_answered, best_streak
  ) VALUES (
    v_uid, p_score, p_total_answered, p_correct_answered, p_best_streak
  )
  ON CONFLICT (user_id) DO UPDATE SET
    score_total      = public.user_stats.score_total + EXCLUDED.score_total,
    total_answered   = public.user_stats.total_answered + EXCLUDED.total_answered,
    correct_answered = public.user_stats.correct_answered + EXCLUDED.correct_answered,
    best_streak      = GREATEST(public.user_stats.best_streak, EXCLUDED.best_streak),
    updated_at       = now();

  FOR v_key, v_val IN
    SELECT * FROM jsonb_each(COALESCE(p_topic_breakdown, '{}'::jsonb))
  LOOP
    IF v_key IS NULL OR length(trim(v_key)) = 0 THEN
      CONTINUE;
    END IF;

    INSERT INTO public.user_topic_stats (
      user_id, topic, total_answered, correct_answered
    ) VALUES (
      v_uid,
      trim(v_key),
      COALESCE((v_val->>'total')::bigint, 0),
      COALESCE((v_val->>'correct')::bigint, 0)
    )
    ON CONFLICT (user_id, topic) DO UPDATE SET
      total_answered   = public.user_topic_stats.total_answered + EXCLUDED.total_answered,
      correct_answered = public.user_topic_stats.correct_answered + EXCLUDED.correct_answered,
      updated_at       = now();
  END LOOP;

  INSERT INTO public.user_difficulty_stats (
    user_id, difficulty, score_total, total_answered, correct_answered, best_streak
  ) VALUES (
    v_uid, p_difficulty::text, p_score, p_total_answered, p_correct_answered, p_best_streak
  )
  ON CONFLICT (user_id, difficulty) DO UPDATE SET
    score_total      = public.user_difficulty_stats.score_total + EXCLUDED.score_total,
    total_answered   = public.user_difficulty_stats.total_answered + EXCLUDED.total_answered,
    correct_answered = public.user_difficulty_stats.correct_answered + EXCLUDED.correct_answered,
    best_streak      = GREATEST(public.user_difficulty_stats.best_streak, EXCLUDED.best_streak),
    updated_at       = now();

  FOR v_evidence IN SELECT value FROM jsonb_array_elements(p_concept_evidence)
  LOOP
    v_concept_id := trim(COALESCE(v_evidence->>'conceptId', ''));
    v_topic := trim(COALESCE(v_evidence->>'topic', ''));
    v_outcome := COALESCE(v_evidence->>'outcome', '');
    v_question_id := NULLIF(v_evidence->>'questionId', '')::integer;

    IF v_concept_id = '' OR v_topic = '' OR v_question_id IS NULL OR v_question_id < 0 THEN
      RAISE EXCEPTION 'Invalid concept evidence identity';
    END IF;
    IF v_outcome NOT IN ('answered', 'skipped') THEN
      RAISE EXCEPTION 'Invalid concept evidence outcome';
    END IF;

    BEGIN
      v_evidence_difficulty := upper(COALESCE(v_evidence->>'difficulty', ''))::public.difficulty;
    EXCEPTION WHEN invalid_text_representation THEN
      RAISE EXCEPTION 'Invalid concept evidence difficulty';
    END;

    v_correct := COALESCE((v_evidence->>'correct')::boolean, false);
    v_hint_used := COALESCE((v_evidence->>'hintUsed')::boolean, false);
    v_eliminate_used := COALESCE((v_evidence->>'eliminateUsed')::boolean, false);
    v_timed_out := COALESCE((v_evidence->>'timedOut')::boolean, false);
    v_primary := COALESCE((v_evidence->>'primary')::boolean, false);

    IF v_correct AND v_outcome <> 'answered' THEN
      RAISE EXCEPTION 'Skipped evidence cannot be correct';
    END IF;

    INSERT INTO public.user_concept_evidence (
      user_id, client_session_id, concept_id, question_id, topic,
      difficulty, outcome, correct, hint_used, eliminate_used,
      timed_out, primary_concept, content_version
    ) VALUES (
      v_uid, p_client_session_id, v_concept_id, v_question_id, v_topic,
      v_evidence_difficulty, v_outcome, v_correct, v_hint_used, v_eliminate_used,
      v_timed_out, v_primary, p_content_version
    )
    ON CONFLICT (user_id, client_session_id, question_id, concept_id) DO NOTHING;
  END LOOP;

  SELECT * INTO v_stats FROM public.user_stats WHERE user_id = v_uid;
  RETURN v_stats;
END;
$$;

REVOKE ALL ON FUNCTION private.submit_quiz_session_impl(
  text, public.difficulty, integer, integer, integer, integer, text[], jsonb, text, jsonb
) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.submit_quiz_session_impl(
  text, public.difficulty, integer, integer, integer, integer, text[], jsonb, text, jsonb
) TO authenticated;

CREATE OR REPLACE FUNCTION public.submit_quiz_session(
  p_client_session_id text,
  p_difficulty public.difficulty,
  p_score integer,
  p_total_answered integer,
  p_correct_answered integer,
  p_best_streak integer,
  p_topics text[],
  p_topic_breakdown jsonb DEFAULT '{}'::jsonb,
  p_content_version text DEFAULT NULL,
  p_concept_evidence jsonb DEFAULT '[]'::jsonb
)
RETURNS public.user_stats
LANGUAGE sql
SECURITY INVOKER
SET search_path = ''
AS $$
  SELECT private.submit_quiz_session_impl(
    p_client_session_id,
    p_difficulty,
    p_score,
    p_total_answered,
    p_correct_answered,
    p_best_streak,
    p_topics,
    p_topic_breakdown,
    p_content_version,
    p_concept_evidence
  );
$$;

REVOKE ALL ON FUNCTION public.submit_quiz_session(
  text, public.difficulty, integer, integer, integer, integer, text[], jsonb, text, jsonb
) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.submit_quiz_session(
  text, public.difficulty, integer, integer, integer, integer, text[], jsonb, text, jsonb
) TO authenticated;
