
CREATE TABLE public.user_thinker_achievements (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  thinker_slug TEXT NOT NULL,
  achieved_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  PRIMARY KEY (user_id, thinker_slug)
);

ALTER TABLE public.user_thinker_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "achievements_select_public" ON public.user_thinker_achievements
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "achievements_insert_self" ON public.user_thinker_achievements
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "achievements_deny_update" ON public.user_thinker_achievements
  FOR UPDATE TO authenticated USING (false) WITH CHECK (false);

CREATE POLICY "achievements_deny_delete" ON public.user_thinker_achievements
  FOR DELETE TO authenticated USING (false);
