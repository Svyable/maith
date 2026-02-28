-- Fix security definer views by setting security_invoker
ALTER VIEW public.leaderboard_all_time SET (security_invoker = on);
ALTER VIEW public.leaderboard_weekly SET (security_invoker = on);
ALTER VIEW public.leaderboard_by_topic SET (security_invoker = on);