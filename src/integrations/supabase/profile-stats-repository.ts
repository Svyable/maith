import type {
  DifficultyStat,
  ProfileStatsRepository,
  ProfileStatsSnapshot,
  RecentSession,
  TopicStat,
  UserStats,
} from '@/domain/profile/repository';
import { supabase } from '@/integrations/supabase/client';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

export const supabaseProfileStatsRepository: ProfileStatsRepository = {
  async load(userId): Promise<ProfileStatsSnapshot> {
    const [statsRes, topicRes, difficultyRes, sessionsRes] = await Promise.all([
      supabase
        .from('user_stats')
        .select('score_total,total_answered,correct_answered,best_streak')
        .eq('user_id', userId)
        .maybeSingle(),
      supabase
        .from('user_topic_stats')
        .select('topic,total_answered,correct_answered')
        .eq('user_id', userId),
      supabase
        .from('user_difficulty_stats')
        .select('difficulty,score_total,total_answered,correct_answered,best_streak')
        .eq('user_id', userId),
      supabase
        .from('quiz_sessions')
        .select('id,created_at,difficulty,score,total_answered,correct_answered,best_streak,topics')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(10),
    ]);

    throwIfError(statsRes.error);
    throwIfError(topicRes.error);
    throwIfError(difficultyRes.error);
    throwIfError(sessionsRes.error);

    return {
      stats: (statsRes.data ?? null) as UserStats | null,
      topicStats: (topicRes.data ?? []) as TopicStat[],
      difficultyStats: (difficultyRes.data ?? []) as DifficultyStat[],
      recentSessions: (sessionsRes.data ?? []) as RecentSession[],
    };
  },
};
