import type {
  AllTimeLeaderboardRow,
  LeaderboardRepository,
  LeaderboardSnapshot,
  TopicLeaderboardRow,
  WeeklyLeaderboardRow,
} from '@/domain/leaderboard/repository';
import { supabase } from '@/integrations/supabase/client';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

function text(value: string | null): string {
  return value ?? '';
}

function number(value: number | null): number {
  return value ?? 0;
}

export const supabaseLeaderboardRepository: LeaderboardRepository = {
  async load(): Promise<LeaderboardSnapshot> {
    const [allTimeRes, weeklyRes, topicRes] = await Promise.all([
      supabase.from('leaderboard_all_time').select('*').limit(50),
      supabase.from('leaderboard_weekly').select('*').limit(50),
      supabase.from('leaderboard_by_topic').select('*').limit(500),
    ]);

    throwIfError(allTimeRes.error);
    throwIfError(weeklyRes.error);
    throwIfError(topicRes.error);

    const allTime: AllTimeLeaderboardRow[] = (allTimeRes.data ?? [])
      .filter((row) => row.user_id !== null)
      .map((row) => ({
        user_id: row.user_id!,
        username: text(row.username),
        display_name: text(row.display_name),
        avatar_url: row.avatar_url,
        score_total: number(row.score_total),
        total_answered: number(row.total_answered),
        correct_answered: number(row.correct_answered),
        accuracy_percent: number(row.accuracy_percent),
        best_streak: number(row.best_streak),
        updated_at: text(row.updated_at),
        games_played: number(row.games_played),
        member_since: text(row.member_since),
      }));

    const weekly: WeeklyLeaderboardRow[] = (weeklyRes.data ?? [])
      .filter((row) => row.user_id !== null)
      .map((row) => ({
        user_id: row.user_id!,
        username: text(row.username),
        display_name: text(row.display_name),
        avatar_url: row.avatar_url,
        score_total_week: number(row.score_total_week),
        total_answered_week: number(row.total_answered_week),
        correct_answered_week: number(row.correct_answered_week),
        accuracy_percent_week: number(row.accuracy_percent_week),
        best_streak_week: number(row.best_streak_week),
        games_played_week: number(row.games_played_week),
      }));

    const topicData: TopicLeaderboardRow[] = (topicRes.data ?? [])
      .filter((row) => row.user_id !== null && row.topic !== null)
      .map((row) => ({
        user_id: row.user_id!,
        username: text(row.username),
        display_name: text(row.display_name),
        avatar_url: row.avatar_url,
        topic: row.topic!,
        total_answered: number(row.total_answered),
        correct_answered: number(row.correct_answered),
        accuracy_percent: number(row.accuracy_percent),
      }));

    return { allTime, weekly, topicData };
  },
};
