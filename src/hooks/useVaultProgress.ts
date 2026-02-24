// ── Vault unlock progress — localStorage-backed ──────────────
import { useState, useCallback, useEffect } from 'react';
import { VAULT_ENTRIES } from '@/config/vault';
import { vaultQuestions } from '@/content/vault';
import type { Question } from '@/content/types';

const STORAGE_KEY = 'vault_unlocked_ids';

/** Map each vault entry to its designated quiz question (by index: entry 0 → question 0, etc.) */
function getQuestionForEntry(entryIndex: number): Question | null {
  return vaultQuestions[entryIndex] ?? null;
}

export function useVaultProgress() {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return new Set(JSON.parse(raw) as string[]);
    } catch { /* ignore */ }
    // First entry always unlocked
    return new Set([VAULT_ENTRIES[0]?.id ?? '']);
  });

  // Persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...unlockedIds]));
  }, [unlockedIds]);

  const isUnlocked = useCallback((id: string) => unlockedIds.has(id), [unlockedIds]);

  /** Unlock the next entry after the given one */
  const unlockNext = useCallback((currentId: string) => {
    const idx = VAULT_ENTRIES.findIndex((e) => e.id === currentId);
    const next = VAULT_ENTRIES[idx + 1];
    if (next) {
      setUnlockedIds((prev) => new Set([...prev, next.id]));
    }
  }, []);

  /** Unlock a specific entry by id */
  const unlockEntry = useCallback((id: string) => {
    setUnlockedIds((prev) => new Set([...prev, id]));
  }, []);

  /** Reset all progress */
  const resetProgress = useCallback(() => {
    const initial = new Set([VAULT_ENTRIES[0]?.id ?? '']);
    setUnlockedIds(initial);
  }, []);

  const totalUnlocked = unlockedIds.size;
  const totalEntries = VAULT_ENTRIES.length;

  return {
    isUnlocked,
    unlockNext,
    unlockEntry,
    resetProgress,
    totalUnlocked,
    totalEntries,
    getQuestionForEntry,
  };
}
