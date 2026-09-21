import type {
  DifficultyStat,
  ProfileStatsRepository,
  ProfileStatsSnapshot,
  RecentSession,
  TopicStat,
  UserStats,
} from '@/domain/profile/repository';
import { supabase } from '@/integrations/supabase/client';
import { deriveConceptMastery, type ConceptEvidence } from '@/domain/mastery';
import type { QuestionDifficulty } from '@/content/types';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

function isMissingConceptEvidenceRelation(error: { code?: string; message?: string } | null): boolean {
  if (!error) return false;
  return error.code === '42P01'
    || error.code === 'PGRST205'
    || Boolean(error.message?.includes('user_concept_evidence'));
}

async function loadConceptEvidence(userId: string): Promise<ConceptEvidence[]> {
  const pageSize = 500;
  let from = 0;
  const rows: Array<{
    concept_id: string;
    question_id: number;
    topic: string;
    difficulty: 'EASY' | 'HARD' | 'SOTA';
    outcome: string;
    correct: boolean;
    hint_used: boolean;
    eliminate_used: boolean;
    timed_out: boolean;
    primary_concept: boolean;
    created_at: string;
  }> = [];

  while (true) {
    const { data, error } = await supabase
      .from('user_concept_evidence')
      .select('concept_id,question_id,topic,difficulty,outcome,correct,hint_used,eliminate_used,timed_out,primary_concept,created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: true })
      .range(from, from + pageSize - 1);

    if (error) {
      // Deploys remain backwards-compatible while the migration propagates.
      if (isMissingConceptEvidenceRelation(error)) return [];
      throw new Error(error.message);
    }

    const page = data ?? [];
    rows.push(...page);
    if (page.length < pageSize) break;
    from += pageSize;
  }

  return rows
    .filter((row) => row.outcome === 'answered' || row.outcome === 'skipped')
    .map((row) => ({
      conceptId: row.concept_id,
      questionId: row.question_id,
      topic: row.topic,
      difficulty: row.difficulty.toLowerCase() as QuestionDifficulty,
      outcome: row.outcome as ConceptEvidence['outcome'],
      correct: row.correct,
      hintUsed: row.hint_used,
      eliminateUsed: row.eliminate_used,
      timedOut: row.timed_out,
      primary: row.primary_concept,
      createdAt: row.created_at,
    }));
}

export const supabaseProfileStatsRepository: ProfileStatsRepository = {
  async load(userId): Promise<ProfileStatsSnapshot> {
    const [statsRes, topicRes, difficultyRes, sessionsRes, conceptEvidence] = await Promise.all([
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
      loadConceptEvidence(userId),
    ]);

    throwIfError(statsRes.error);
    throwIfError(topicRes.error);
    throwIfError(difficultyRes.error);
    throwIfError(sessionsRes.error);

    return {
      stats: (statsRes.data ?? null) as UserStats | null,
      topicStats: (topicRes.data ?? []) as TopicStat[],
      difficultyStats: (difficultyRes.data ?? []) as DifficultyStat[],
      conceptMastery: deriveConceptMastery(conceptEvidence),
      recentSessions: (sessionsRes.data ?? []) as RecentSession[],
    };
  },
};
