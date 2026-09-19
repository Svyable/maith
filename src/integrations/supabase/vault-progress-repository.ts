import type { VaultProgressRepository } from '@/domain/vault/repository';
import { supabase } from '@/integrations/supabase/client';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

export const supabaseVaultProgressRepository: VaultProgressRepository = {
  async load(userId) {
    const { data, error } = await supabase
      .from('user_vault_progress')
      .select('entry_id')
      .eq('user_id', userId);

    throwIfError(error);
    return (data ?? []).map((row) => row.entry_id);
  },

  async unlock(userId, entryId) {
    const { error } = await supabase
      .from('user_vault_progress')
      .upsert(
        { user_id: userId, entry_id: entryId },
        { onConflict: 'user_id,entry_id' },
      );

    throwIfError(error);
  },

  async unlockMany(userId, entryIds) {
    if (entryIds.length === 0) return;

    const { error } = await supabase
      .from('user_vault_progress')
      .upsert(
        entryIds.map((entry_id) => ({ user_id: userId, entry_id })),
        { onConflict: 'user_id,entry_id' },
      );

    throwIfError(error);
  },

  async reset(userId, initialEntryId) {
    const { error: deleteError } = await supabase
      .from('user_vault_progress')
      .delete()
      .eq('user_id', userId);

    throwIfError(deleteError);

    if (initialEntryId) {
      const { error: insertError } = await supabase
        .from('user_vault_progress')
        .upsert(
          { user_id: userId, entry_id: initialEntryId },
          { onConflict: 'user_id,entry_id' },
        );

      throwIfError(insertError);
    }
  },
};
