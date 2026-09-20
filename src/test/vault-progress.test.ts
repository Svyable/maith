import { describe, expect, it } from 'vitest';
import {
  getClearanceLevel,
  mergeUnlockedIds,
  missingUnlockedIds,
} from '@/domain/vault/progress';

describe('vault progress domain', () => {
  it('maps unlocked counts to clearance thresholds', () => {
    expect(getClearanceLevel(0)).toMatchObject({ label: 'Uncleared', tier: 0 });
    expect(getClearanceLevel(1)).toMatchObject({ label: 'Confidential', tier: 1 });
    expect(getClearanceLevel(9)).toMatchObject({ label: 'Secret', tier: 2 });
    expect(getClearanceLevel(10)).toMatchObject({ label: 'Top Secret', tier: 3 });
    expect(getClearanceLevel(40)).toMatchObject({ label: 'Ultra', tier: 6, next: null });
  });

  it('merges local and remote progress without losing anonymous unlocks', () => {
    const merged = mergeUnlockedIds(
      ['entry-1', 'entry-2'],
      ['entry-2', 'entry-3'],
      'entry-1',
      ['entry-1', 'entry-2', 'entry-3'],
    );

    expect(new Set(merged)).toEqual(new Set(['entry-1', 'entry-2', 'entry-3']));
  });

  it('drops stale progress ids that are no longer in the vault catalog', () => {
    const merged = mergeUnlockedIds(
      ['entry-1', 'retired-entry'],
      ['entry-2', 'legacy-entry'],
      'entry-1',
      ['entry-1', 'entry-2'],
    );

    expect(new Set(merged)).toEqual(new Set(['entry-1', 'entry-2']));
  });

  it('finds only unlocks missing from the persisted repository', () => {
    expect(
      missingUnlockedIds(
        ['entry-1', 'entry-2'],
        ['entry-1', 'entry-2', 'entry-3'],
      ),
    ).toEqual(['entry-3']);
  });
});
