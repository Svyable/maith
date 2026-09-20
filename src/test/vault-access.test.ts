import { describe, expect, it } from 'vitest';
import {
  canGuestChallenge,
  getVaultEntryAccess,
  GUEST_VAULT_LEVEL_CAP,
} from '@/domain/vault/access';

describe('vault access policy', () => {
  it('classifies unlocked, sealed-next, and deeper locked entries', () => {
    expect(getVaultEntryAccess(true, true)).toBe('unlocked');
    expect(getVaultEntryAccess(false, true)).toBe('sealed');
    expect(getVaultEntryAccess(false, false)).toBe('locked');
  });

  it('limits anonymous challenges to the configured early levels', () => {
    expect(GUEST_VAULT_LEVEL_CAP).toBe(2);
    expect(canGuestChallenge(0)).toBe(true);
    expect(canGuestChallenge(1)).toBe(true);
    expect(canGuestChallenge(2)).toBe(false);
    expect(canGuestChallenge(10)).toBe(false);
  });

  it('supports an alternate guest cap without changing policy code', () => {
    expect(canGuestChallenge(2, 3)).toBe(true);
    expect(canGuestChallenge(3, 3)).toBe(false);
  });
});
