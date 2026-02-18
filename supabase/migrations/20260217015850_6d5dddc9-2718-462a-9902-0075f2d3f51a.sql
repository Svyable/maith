
-- Fix views: drop cascade and recreate as security invoker
DROP VIEW IF EXISTS public.leaderboard_all_time CASCADE;
DROP VIEW IF EXISTS public.leaderboard_weekly CASCADE;

-- Move citext: drop cascade and recreate
ALTER TABLE public.profiles ALTER COLUMN username TYPE text;
DROP EXTENSION IF EXISTS citext CASCADE;
CREATE EXTENSION IF NOT EXISTS citext SCHEMA extensions;
ALTER TABLE public.profiles ALTER COLUMN username TYPE extensions.citext USING username::extensions.citext;

-- Recreate views as security invoker
CREATE VIEW public.leaderboard_all_time
WITH (security_invoker = true)
AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  s.score_total,
  s.total_answered,
  s.correct_answered,
  CASE WHEN s.total_answered > 0 THEN round((s.correct_answered::numeric / s.total_answered::numeric) * 100, 1) ELSE 0 END AS accuracy_percent,
  s.best_streak,
  s.updated_at
FROM public.user_stats s
JOIN public.profiles p ON p.id = s.user_id
WHERE p.is_public = true
ORDER BY s.score_total DESC, s.best_streak DESC;

CREATE VIEW public.leaderboard_weekly
WITH (security_invoker = true)
AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  sum(q.score)::bigint AS score_total_week,
  sum(q.total_answered)::bigint AS total_answered_week,
  sum(q.correct_answered)::bigint AS correct_answered_week,
  CASE WHEN sum(q.total_answered) > 0 THEN round((sum(q.correct_answered)::numeric / sum(q.total_answered)::numeric) * 100, 1) ELSE 0 END AS accuracy_percent_week,
  max(q.best_streak) AS best_streak_week
FROM public.quiz_sessions q
JOIN public.profiles p ON p.id = q.user_id
WHERE p.is_public = true AND q.created_at >= date_trunc('week', now())
GROUP BY p.id, p.username, p.display_name, p.avatar_url, p.locale
ORDER BY score_total_week DESC, best_streak_week DESC;

GRANT SELECT ON public.leaderboard_all_time TO anon, authenticated;
GRANT SELECT ON public.leaderboard_weekly TO anon, authenticated;
