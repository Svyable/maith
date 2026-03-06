-- Deny all client-side writes on stats tables (writes go through SECURITY DEFINER RPC only)
-- quiz_sessions: deny direct INSERT/UPDATE/DELETE
CREATE POLICY quiz_sessions_deny_insert ON public.quiz_sessions FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY quiz_sessions_deny_update ON public.quiz_sessions FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
CREATE POLICY quiz_sessions_deny_delete ON public.quiz_sessions FOR DELETE TO authenticated USING (false);

-- user_stats: deny direct writes
CREATE POLICY user_stats_deny_insert ON public.user_stats FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY user_stats_deny_update ON public.user_stats FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
CREATE POLICY user_stats_deny_delete ON public.user_stats FOR DELETE TO authenticated USING (false);

-- user_topic_stats: deny direct writes
CREATE POLICY user_topic_stats_deny_insert ON public.user_topic_stats FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY user_topic_stats_deny_update ON public.user_topic_stats FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
CREATE POLICY user_topic_stats_deny_delete ON public.user_topic_stats FOR DELETE TO authenticated USING (false);

-- user_difficulty_stats: deny direct writes
CREATE POLICY user_difficulty_stats_deny_insert ON public.user_difficulty_stats FOR INSERT TO authenticated WITH CHECK (false);
CREATE POLICY user_difficulty_stats_deny_update ON public.user_difficulty_stats FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
CREATE POLICY user_difficulty_stats_deny_delete ON public.user_difficulty_stats FOR DELETE TO authenticated USING (false);

-- profiles: deny direct DELETE (users should not delete their own profiles client-side)
CREATE POLICY profiles_deny_delete ON public.profiles FOR DELETE TO authenticated USING (false);