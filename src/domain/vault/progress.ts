export interface ClearanceLevel {
  min: number;
  label: string;
  emoji: string;
  tier: number;
}

export interface ClearanceState extends ClearanceLevel {
  next: ClearanceLevel | null;
}

export const CLEARANCE_LEVELS: readonly ClearanceLevel[] = [
  { min: 0, label: 'Uncleared', emoji: '🔒', tier: 0 },
  { min: 1, label: 'Confidential', emoji: '📋', tier: 1 },
  { min: 5, label: 'Secret', emoji: '🔑', tier: 2 },
  { min: 10, label: 'Top Secret', emoji: '🛡️', tier: 3 },
  { min: 20, label: 'TS/SCI', emoji: '⚡', tier: 4 },
  { min: 30, label: 'Cosmic Top Secret', emoji: '🌌', tier: 5 },
  { min: 40, label: 'Ultra', emoji: '👁️', tier: 6 },
] as const;

export function getClearanceLevel(unlocked: number): ClearanceState {
  let current = CLEARANCE_LEVELS[0];

  for (let index = CLEARANCE_LEVELS.length - 1; index >= 0; index--) {
    if (unlocked >= CLEARANCE_LEVELS[index].min) {
      current = CLEARANCE_LEVELS[index];
      break;
    }
  }

  return {
    ...current,
    next: CLEARANCE_LEVELS.find((level) => level.min > unlocked) ?? null,
  };
}

export function mergeUnlockedIds(
  remoteIds: readonly string[],
  localIds: readonly string[],
  initialEntryId: string,
  validEntryIds?: readonly string[],
): string[] {
  const valid = validEntryIds ? new Set(validEntryIds) : null;
  const merged = new Set(
    [...remoteIds, ...localIds].filter(
      (id) => Boolean(id) && (!valid || valid.has(id)),
    ),
  );

  if (initialEntryId && (!valid || valid.has(initialEntryId))) {
    merged.add(initialEntryId);
  }

  return [...merged];
}

export function missingUnlockedIds(
  persistedIds: readonly string[],
  desiredIds: readonly string[],
): string[] {
  const persisted = new Set(persistedIds);
  return desiredIds.filter((id) => !persisted.has(id));
}
