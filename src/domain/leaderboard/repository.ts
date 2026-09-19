export interface AllTimeLeaderboardRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  accuracy_percent: number;
  best_streak: number;
  updated_at: string;
  games_played: number;
  member_since: string;
}

export interface WeeklyLeaderboardRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  score_total_week: number;
  total_answered_week: number;
  correct_answered_week: number;
  accuracy_percent_week: number;
  best_streak_week: number;
  games_played_week: number;
}

export interface TopicLeaderboardRow {
  user_id: string;
  username: string;
  display_name: string;
  avatar_url: string | null;
  topic: string;
  total_answered: number;
  correct_answered: number;
  accuracy_percent: number;
}

export interface LeaderboardSnapshot {
  allTime: AllTimeLeaderboardRow[];
  weekly: WeeklyLeaderboardRow[];
  topicData: TopicLeaderboardRow[];
}

export interface LeaderboardRepository {
  load(): Promise<LeaderboardSnapshot>;
}
