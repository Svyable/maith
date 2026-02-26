// ── Vault unlock progress — DB-backed when logged in, localStorage fallback ──
import { useState, useCallback, useEffect, useRef } from 'react';
import { VAULT_ENTRIES } from '@/config/vault';
import { vaultQuestions } from '@/content/vault';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { Question } from '@/content/types';

const STORAGE_KEY = 'vault_unlocked_ids';

/** Map each vault entry to its designated quiz question (by index) */
function getQuestionForEntry(entryIndex: number): Question | null {
  return vaultQuestions[entryIndex] ?? null;
}

/** Clearance level based on unlocked count */
const CLEARANCE_LEVELS = [
  { min: 0, label: 'Uncleared', emoji: '🔒', tier: 0 },
  { min: 1, label: 'Confidential', emoji: '📋', tier: 1 },
  { min: 5, label: 'Secret', emoji: '🔑', tier: 2 },
  { min: 10, label: 'Top Secret', emoji: '🛡️', tier: 3 },
  { min: 20, label: 'TS/SCI', emoji: '⚡', tier: 4 },
  { min: 30, label: 'Cosmic Top Secret', emoji: '🌌', tier: 5 },
  { min: 40, label: 'Ultra', emoji: '👁️', tier: 6 },
];

export function getClearanceLevel(unlocked: number) {
  let current = CLEARANCE_LEVELS[0];
  for (let i = CLEARANCE_LEVELS.length - 1; i >= 0; i--) {
    if (unlocked >= CLEARANCE_LEVELS[i].min) {
      current = CLEARANCE_LEVELS[i];
      break;
    }
  }
  const nextLevel = CLEARANCE_LEVELS.find((l) => l.min > unlocked);
  return { ...current, next: nextLevel ?? null };
}

export function useVaultProgress() {
  const { user } = useAuth();
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  const [dbLoaded, setDbLoaded] = useState(false);
  const syncingRef = useRef(false);

  // Load from DB or localStorage
  useEffect(() => {
    if (user) {
      // Load from DB
      supabase
        .from('user_vault_progress' as any)
        .select('entry_id')
        .eq('user_id', user.id)
        .then(({ data }) => {
          const ids = new Set<string>((data ?? []).map((r: any) => r.entry_id));
          // Always include first entry
          if (VAULT_ENTRIES[0]) ids.add(VAULT_ENTRIES[0].id);
          setUnlockedIds(ids);
          setDbLoaded(true);
        });
    } else {
      // localStorage fallback
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          setUnlockedIds(new Set(JSON.parse(raw) as string[]));
        } else {
          setUnlockedIds(new Set([VAULT_ENTRIES[0]?.id ?? '']));
        }
      } catch {
        setUnlockedIds(new Set([VAULT_ENTRIES[0]?.id ?? '']));
      }
      setDbLoaded(true);
    }
  }, [user]);

  // Persist to localStorage as fallback
  useEffect(() => {
    if (dbLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...unlockedIds]));
    }
  }, [unlockedIds, dbLoaded]);

  // Sync localStorage entries to DB on first login
  useEffect(() => {
    if (!user || !dbLoaded || syncingRef.current) return;
    syncingRef.current = true;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const localIds = JSON.parse(raw) as string[];
        const newIds = localIds.filter((id) => !unlockedIds.has(id));
        if (newIds.length > 0) {
          const rows = newIds.map((entry_id) => ({ user_id: user.id, entry_id }));
          supabase.from('user_vault_progress' as any).upsert(rows as any).then(() => {
            setUnlockedIds((prev) => {
              const next = new Set(prev);
              newIds.forEach((id) => next.add(id));
              return next;
            });
          });
        }
      }
    } catch { /* ignore */ }
  }, [user, dbLoaded]);

  const isUnlocked = useCallback((id: string) => unlockedIds.has(id), [unlockedIds]);

  const unlockNext = useCallback((currentId: string) => {
    const idx = VAULT_ENTRIES.findIndex((e) => e.id === currentId);
    const next = VAULT_ENTRIES[idx + 1];
    if (next) {
      setUnlockedIds((prev) => new Set([...prev, next.id]));
      if (user) {
        supabase.from('user_vault_progress' as any).upsert({ user_id: user.id, entry_id: next.id } as any);
      }
    }
  }, [user]);

  const unlockEntry = useCallback((id: string) => {
    setUnlockedIds((prev) => new Set([...prev, id]));
    if (user) {
      supabase.from('user_vault_progress' as any).upsert({ user_id: user.id, entry_id: id } as any);
    }
  }, [user]);

  const resetProgress = useCallback(() => {
    const initial = new Set([VAULT_ENTRIES[0]?.id ?? '']);
    setUnlockedIds(initial);
    if (user) {
      // Delete all except first entry
      supabase
        .from('user_vault_progress' as any)
        .delete()
        .eq('user_id', user.id)
        .neq('entry_id', VAULT_ENTRIES[0]?.id ?? '')
        .then(() => {});
    }
  }, [user]);

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
