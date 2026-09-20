import type { VaultProgressStore } from '@/domain/vault/repository';

const STORAGE_KEY = 'vault_unlocked_ids';

function storage(): Storage | null {
  return typeof globalThis.localStorage === 'undefined'
    ? null
    : globalThis.localStorage;
}

export const browserVaultProgressStore: VaultProgressStore = {
  load() {
    try {
      const raw = storage()?.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed: unknown = JSON.parse(raw);
      return Array.isArray(parsed)
        ? parsed.filter((value): value is string => typeof value === 'string')
        : [];
    } catch {
      return [];
    }
  },

  save(entryIds) {
    try {
      storage()?.setItem(STORAGE_KEY, JSON.stringify([...new Set(entryIds.filter(Boolean))]));
    } catch {
      // Storage can be unavailable in privacy-restricted browser contexts.
    }
  },
};
