-- Recreate leaderboard_all_time with games_played and member_since
CREATE OR REPLACE VIEW public.leaderboard_all_time AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  s.score_total,
  s.total_answered,
  s.correct_answered,
  CASE WHEN s.total_answered > 0
    THEN round(s.correct_answered::numeric / s.total_answered::numeric * 100, 1)
    ELSE 0
  END AS accuracy_percent,
  s.best_streak,
  s.updated_at,
  COALESCE(g.games_played, 0) AS games_played,
  p.created_at AS member_since
FROM user_stats s
JOIN profiles p ON p.id = s.user_id
LEFT JOIN (
  SELECT user_id, count(*)::bigint AS games_played
  FROM quiz_sessions
  GROUP BY user_id
) g ON g.user_id = s.user_id
WHERE p.is_public = true
ORDER BY s.score_total DESC, s.best_streak DESC;

-- Recreate weekly with games_played count
CREATE OR REPLACE VIEW public.leaderboard_weekly AS
SELECT
  p.id AS user_id,
  p.username,
  COALESCE(p.display_name, p.username::text) AS display_name,
  p.avatar_url,
  sum(q.score) AS score_total_week,
  sum(q.total_answered) AS total_answered_week,
  sum(q.correct_answered) AS correct_answered_week,
  CASE WHEN sum(q.total_answered) > 0
    THEN round(sum(q.correct_answered)::numeric / sum(q.total_answered)::numeric * 100, 1)
    ELSE 0
  END AS accuracy_percent_week,
  max(q.best_streak) AS best_streak_week,
  count(*)::bigint AS games_played_week
FROM quiz_sessions q
JOIN profiles p ON p.id = q.user_id
WHERE p.is_public = true
  AND q.created_at >= date_trunc('week', now())
GROUP BY p.id, p.username, p.display_name, p.avatar_url
ORDER BY sum(q.score) DESC, max(q.best_streak) DESC;