import type {
  ThinkerAchievement,
  ThinkerAchievementAward,
} from './achievement';

export interface ThinkerAchievementRepository {
  load(userId: string): Promise<ThinkerAchievement[]>;
  award(
    userId: string,
    award: ThinkerAchievementAward,
  ): Promise<ThinkerAchievement>;
}
