
-- Topic leaderboard: all-time per topic
CREATE OR REPLACE VIEW public.leaderboard_by_topic AS
SELECT
  uts.user_id,
  p.username,
  p.display_name,
  p.avatar_url,
  uts.topic,
  uts.total_answered,
  uts.correct_answered,
  ROUND(uts.correct_answered * 100.0 / NULLIF(uts.total_answered, 0)) AS accuracy_percent
FROM public.user_topic_stats uts
JOIN public.profiles p ON p.id = uts.user_id AND p.is_public = true
WHERE uts.total_answered > 0
ORDER BY uts.correct_answered DESC;

-- Grant access
GRANT SELECT ON public.leaderboard_by_topic TO anon, authenticated;
