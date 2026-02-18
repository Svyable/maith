
-- =========================================================
-- Drop old tables + functions
-- =========================================================
DROP TABLE IF EXISTS public.topic_accuracy CASCADE;
DROP TABLE IF EXISTS public.game_sessions CASCADE;
DROP TABLE IF EXISTS public.topics CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;

-- =========================================================
-- Extensions
-- =========================================================
CREATE EXTENSION IF NOT EXISTS citext;

-- =========================================================
-- Difficulty enum
-- =========================================================
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'difficulty') THEN
    CREATE TYPE public.difficulty AS ENUM ('EASY','ADVN','SOTA');
  END IF;
END $$;

-- =========================================================
-- Profiles
-- =========================================================
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username citext UNIQUE NOT NULL,
  display_name text,
  avatar_url text,
  locale text NOT NULL DEFAULT 'en',
  is_public boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- =========================================================
-- Append-only quiz sessions
-- =========================================================
CREATE TABLE public.quiz_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  topics text[] NOT NULL,
  difficulty public.difficulty NOT NULL,
  score int NOT NULL CHECK (score >= 0),
  total_answered int NOT NULL CHECK (total_answered >= 0),
  correct_answered int NOT NULL CHECK (correct_answered >= 0 AND correct_answered <= total_answered),
  best_streak int NOT NULL CHECK (best_streak >= 0 AND best_streak <= total_answered),
  topic_breakdown jsonb NOT NULL DEFAULT '{}'::jsonb,
  content_version text,
  client_session_id text NOT NULL UNIQUE
);

-- =========================================================
-- Aggregated user stats
-- =========================================================
CREATE TABLE public.user_stats (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  score_total bigint NOT NULL DEFAULT 0,
  total_answered bigint NOT NULL DEFAULT 0,
  correct_answered bigint NOT NULL DEFAULT 0,
  best_streak int NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- =========================================================
-- Per-topic stats
-- =========================================================
CREATE TABLE public.user_topic_stats (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic text NOT NULL CHECK (length(trim(topic)) > 0),
  total_answered bigint NOT NULL DEFAULT 0,
  correct_answered bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, topic)
);

-- =========================================================
-- Indexes
-- =========================================================
CREATE INDEX quiz_sessions_user_created_idx ON public.quiz_sessions (user_id, created_at DESC);
CREATE INDEX quiz_sessions_created_idx ON public.quiz_sessions (created_at DESC);
CREATE INDEX quiz_sessions_difficulty_created_idx ON public.quiz_sessions (difficulty, created_at DESC);
CREATE INDEX quiz_sessions_topics_gin_idx ON public.quiz_sessions USING gin (topics);
CREATE INDEX profiles_is_public_idx ON public.profiles (is_public);
CREATE INDEX user_stats_score_total_idx ON public.user_stats (score_total DESC);
CREATE INDEX user_topic_stats_user_idx ON public.user_topic_stats (user_id);

-- =========================================================
-- Updated-at trigger
-- =========================================================
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =========================================================
-- Auth signup trigger
-- =========================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  base_username text;
BEGIN
  base_username := 'user_' || substr(NEW.id::text, 1, 8);

  INSERT INTO public.profiles (id, username, display_name, avatar_url, locale, is_public)
  VALUES (
    NEW.id,
    base_username,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NULL),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NULL),
    COALESCE(NEW.raw_user_meta_data->>'locale', 'en'),
    true
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================================================
-- RPC: submit_quiz_session
-- =========================================================
CREATE OR REPLACE FUNCTION public.submit_quiz_session(
  p_client_session_id text,
  p_topics text[],
  p_difficulty public.difficulty,
  p_score int,
  p_total_answered int,
  p_correct_answered int,
  p_best_streak int,
  p_topic_breakdown jsonb,
  p_content_version text DEFAULT NULL
)
RETURNS public.user_stats
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid;
  v_stats public.user_stats;
  tkey text;
  t_total bigint;
  t_correct bigint;
BEGIN
  v_uid := auth.uid();
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

  -- Insert session idempotently
  INSERT INTO public.quiz_sessions (
    user_id, client_session_id, topics, difficulty,
    score, total_answered, correct_answered, best_streak,
    topic_breakdown, content_version
  )
  VALUES (
    v_uid, p_client_session_id, p_topics, p_difficulty,
    p_score, p_total_answered, p_correct_answered, p_best_streak,
    COALESCE(p_topic_breakdown, '{}'::jsonb), p_content_version
  )
  ON CONFLICT (client_session_id) DO NOTHING;

  -- Update aggregate stats
  INSERT INTO public.user_stats (
    user_id, score_total, total_answered, correct_answered, best_streak, updated_at
  )
  VALUES (
    v_uid, p_score, p_total_answered, p_correct_answered, p_best_streak, now()
  )
  ON CONFLICT (user_id) DO UPDATE
  SET
    score_total = public.user_stats.score_total + EXCLUDED.score_total,
    total_answered = public.user_stats.total_answered + EXCLUDED.total_answered,
    correct_answered = public.user_stats.correct_answered + EXCLUDED.correct_answered,
    best_streak = GREATEST(public.user_stats.best_streak, EXCLUDED.best_streak),
    updated_at = now();

  -- Update per-topic stats
  IF p_topic_breakdown IS NOT NULL AND jsonb_typeof(p_topic_breakdown) = 'object' THEN
    FOR tkey IN SELECT jsonb_object_keys(p_topic_breakdown) LOOP
      t_total := COALESCE((p_topic_breakdown->tkey->>'total')::bigint, 0);
      t_correct := COALESCE((p_topic_breakdown->tkey->>'correct')::bigint, 0);

      IF tkey IS NULL OR length(trim(tkey)) = 0 THEN
        CONTINUE;
      END IF;

      INSERT INTO public.user_topic_stats (user_id, topic, total_answered, correct_answered, updated_at)
      VALUES (v_uid, trim(tkey), t_total, t_correct, now())
      ON CONFLICT (user_id, topic) DO UPDATE
      SET
        total_answered = public.user_topic_stats.total_answered + EXCLUDED.total_answered,
        correct_answered = public.user_topic_stats.correct_answered + EXCLUDED.correct_answered,
        updated_at = now();
    END LOOP;
  END IF;

  SELECT * INTO v_stats FROM public.user_stats WHERE user_id = v_uid;
  RETURN v_stats;
END;
$$;

-- =========================================================
-- Leaderboard views
-- =========================================================
CREATE OR REPLACE VIEW public.leaderboard_all_time AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  p.locale,
  s.score_total,
  s.total_answered,
  s.correct_answered,
  CASE
    WHEN s.total_answered > 0 THEN round((s.correct_answered::numeric / s.total_answered::numeric) * 100, 1)
    ELSE 0
  END AS accuracy_percent,
  s.best_streak,
  s.updated_at
FROM public.user_stats s
JOIN public.profiles p ON p.id = s.user_id
WHERE p.is_public = true
ORDER BY s.score_total DESC, s.best_streak DESC, s.updated_at ASC;

CREATE OR REPLACE VIEW public.leaderboard_weekly AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  p.locale,
  sum(q.score)::bigint AS score_total_week,
  sum(q.total_answered)::bigint AS total_answered_week,
  sum(q.correct_answered)::bigint AS correct_answered_week,
  CASE
    WHEN sum(q.total_answered) > 0 THEN round((sum(q.correct_answered)::numeric / sum(q.total_answered)::numeric) * 100, 1)
    ELSE 0
  END AS accuracy_percent_week,
  max(q.best_streak) AS best_streak_week
FROM public.quiz_sessions q
JOIN public.profiles p ON p.id = q.user_id
WHERE p.is_public = true AND q.created_at >= date_trunc('week', now())
GROUP BY p.id, p.username, p.display_name, p.avatar_url, p.locale
ORDER BY score_total_week DESC, best_streak_week DESC;

-- =========================================================
-- RLS
-- =========================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_topic_stats ENABLE ROW LEVEL SECURITY;

-- Profiles
CREATE POLICY "profiles_select_public_or_self"
ON public.profiles FOR SELECT
USING (is_public = true OR id = auth.uid());

CREATE POLICY "profiles_insert_self"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

CREATE POLICY "profiles_update_self"
ON public.profiles FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Quiz sessions: read own only (writes via RPC)
CREATE POLICY "quiz_sessions_select_self"
ON public.quiz_sessions FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- User stats: public or self
CREATE POLICY "user_stats_select_public_or_self"
ON public.user_stats FOR SELECT
USING (
  user_id = auth.uid()
  OR EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = user_id AND p.is_public = true
  )
);

-- User topic stats: self only
CREATE POLICY "user_topic_stats_select_self"
ON public.user_topic_stats FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- =========================================================
-- Grants
-- =========================================================
GRANT usage ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.profiles TO anon, authenticated;
GRANT SELECT ON public.user_stats TO anon, authenticated;
GRANT SELECT ON public.leaderboard_all_time TO anon, authenticated;
GRANT SELECT ON public.leaderboard_weekly TO anon, authenticated;
GRANT SELECT ON public.quiz_sessions TO authenticated;
GRANT SELECT ON public.user_topic_stats TO authenticated;
GRANT INSERT, UPDATE ON public.profiles TO authenticated;

REVOKE ALL ON FUNCTION public.submit_quiz_session(
  text, text[], public.difficulty, int, int, int, int, jsonb, text
) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.submit_quiz_session(
  text, text[], public.difficulty, int, int, int, int, jsonb, text
) TO authenticated;
