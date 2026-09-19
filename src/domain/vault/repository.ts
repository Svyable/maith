export interface VaultProgressRepository {
  load(userId: string): Promise<string[]>;
  unlock(userId: string, entryId: string): Promise<void>;
  unlockMany(userId: string, entryIds: string[]): Promise<void>;
  reset(userId: string, initialEntryId: string): Promise<void>;
}

export interface VaultProgressStore {
  load(): string[];
  save(entryIds: string[]): void;
}
