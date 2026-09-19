// ── Vault unlock progress — orchestration over injected persistence ports ──
import { useState, useCallback, useEffect } from 'react';
import { VAULT_ENTRIES } from '@/config/vault';
import { vaultQuestions } from '@/content/vault';
import { useAuth } from '@/hooks/useAuth';
import type { Question } from '@/content/types';
import type {
  VaultProgressRepository,
  VaultProgressStore,
} from '@/domain/vault/repository';
import {
  getClearanceLevel,
  mergeUnlockedIds,
  missingUnlockedIds,
} from '@/domain/vault/progress';
import { supabaseVaultProgressRepository } from '@/integrations/supabase/vault-progress-repository';
import { browserVaultProgressStore } from '@/integrations/browser/vault-progress-store';

export { getClearanceLevel } from '@/domain/vault/progress';

/** Map each vault entry to its designated quiz question (by index). */
function getQuestionForEntry(entryIndex: number): Question | null {
  return vaultQuestions[entryIndex] ?? null;
}

export function useVaultProgress(
  remoteRepository: VaultProgressRepository = supabaseVaultProgressRepository,
  localStore: VaultProgressStore = browserVaultProgressStore,
) {
  const { user } = useAuth();
  const initialEntryId = VAULT_ENTRIES[0]?.id ?? '';
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(
    () => new Set(initialEntryId ? [initialEntryId] : []),
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const localIds = localStore.load();

    if (!user) {
      const merged = mergeUnlockedIds([], localIds, initialEntryId);
      setUnlockedIds(new Set(merged));
      localStore.save(merged);
      setLoaded(true);

      return () => {
        active = false;
      };
    }

    setLoaded(false);

    async function hydrate() {
      let remoteIds: string[] = [];

      try {
        remoteIds = await remoteRepository.load(user.id);
      } catch (error) {
        console.error(
          '[vault] Failed to load progress:',
          error instanceof Error ? error.message : error,
        );
      }

      const merged = mergeUnlockedIds(remoteIds, localIds, initialEntryId);
      const missingRemote = missingUnlockedIds(remoteIds, merged);

      if (missingRemote.length > 0) {
        try {
          await remoteRepository.unlockMany(user.id, missingRemote);
        } catch (error) {
          console.error(
            '[vault] Failed to sync local progress:',
            error instanceof Error ? error.message : error,
          );
        }
      }

      if (!active) return;
      setUnlockedIds(new Set(merged));
      localStore.save(merged);
      setLoaded(true);
    }

    void hydrate();

    return () => {
      active = false;
    };
  }, [initialEntryId, localStore, remoteRepository, user]);

  useEffect(() => {
    if (loaded) localStore.save([...unlockedIds]);
  }, [loaded, localStore, unlockedIds]);

  const isUnlocked = useCallback((id: string) => unlockedIds.has(id), [unlockedIds]);

  const unlockEntry = useCallback((id: string) => {
    if (!id) return;

    setUnlockedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    if (user) {
      void remoteRepository.unlock(user.id, id).catch((error: unknown) => {
        console.error(
          '[vault] Failed to persist unlock:',
          error instanceof Error ? error.message : error,
        );
      });
    }
  }, [remoteRepository, user]);

  const unlockNext = useCallback((currentId: string) => {
    const index = VAULT_ENTRIES.findIndex((entry) => entry.id === currentId);
    const next = VAULT_ENTRIES[index + 1];
    if (next) unlockEntry(next.id);
  }, [unlockEntry]);

  const resetProgress = useCallback(() => {
    const initial = initialEntryId ? [initialEntryId] : [];
    setUnlockedIds(new Set(initial));
    localStore.save(initial);

    if (user) {
      void remoteRepository.reset(user.id, initialEntryId).catch((error: unknown) => {
        console.error(
          '[vault] Failed to reset progress:',
          error instanceof Error ? error.message : error,
        );
      });
    }
  }, [initialEntryId, localStore, remoteRepository, user]);

  const totalUnlocked = unlockedIds.size;
  const totalEntries = VAULT_ENTRIES.length;
  const clearance = getClearanceLevel(totalUnlocked);

  return {
    isUnlocked,
    unlockNext,
    unlockEntry,
    resetProgress,
    totalUnlocked,
    totalEntries,
    clearance,
    getQuestionForEntry,
  };
}
