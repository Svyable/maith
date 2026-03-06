DROP POLICY IF EXISTS user_difficulty_stats_select_self ON public.user_difficulty_stats;
CREATE POLICY user_difficulty_stats_select_self ON public.user_difficulty_stats
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());