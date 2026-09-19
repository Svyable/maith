export interface UserStats {
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
}

export interface TopicStat {
  topic: string;
  total_answered: number;
  correct_answered: number;
}

export interface DifficultyStat {
  difficulty: string;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
}

export interface RecentSession {
  id: string;
  created_at: string;
  difficulty: string;
  score: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
  topics: string[];
}

export interface ProfileStatsSnapshot {
  stats: UserStats | null;
  topicStats: TopicStat[];
  difficultyStats: DifficultyStat[];
  recentSessions: RecentSession[];
}

export interface ProfileStatsRepository {
  load(userId: string): Promise<ProfileStatsSnapshot>;
}
