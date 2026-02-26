
-- Table to persist vault unlock progress per user
CREATE TABLE public.user_vault_progress (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  entry_id TEXT NOT NULL,
  unlocked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, entry_id)
);

-- RLS
ALTER TABLE public.user_vault_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_vault_progress_select_self"
  ON public.user_vault_progress FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "user_vault_progress_insert_self"
  ON public.user_vault_progress FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "user_vault_progress_delete_self"
  ON public.user_vault_progress FOR DELETE
  USING (user_id = auth.uid());
