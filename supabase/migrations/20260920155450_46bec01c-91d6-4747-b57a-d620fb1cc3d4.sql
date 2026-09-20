DROP POLICY IF EXISTS "achievements_select_public" ON public.user_thinker_achievements;

CREATE POLICY "achievements_select_self"
ON public.user_thinker_achievements
FOR SELECT TO authenticated
USING (user_id = auth.uid());