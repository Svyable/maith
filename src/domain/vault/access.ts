export type VaultEntryAccess = 'unlocked' | 'sealed' | 'locked';

export const GUEST_VAULT_LEVEL_CAP = 2;

export function getVaultEntryAccess(
  isUnlocked: boolean,
  previousUnlocked: boolean,
): VaultEntryAccess {
  if (isUnlocked) return 'unlocked';
  return previousUnlocked ? 'sealed' : 'locked';
}

export function canGuestChallenge(
  entryIndex: number,
  levelCap: number = GUEST_VAULT_LEVEL_CAP,
): boolean {
  return entryIndex < levelCap;
}
