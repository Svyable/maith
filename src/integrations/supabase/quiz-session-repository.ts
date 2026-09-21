import type { QuizSessionRepository } from '@/domain/quiz/session-repository';
import { supabase } from '@/integrations/supabase/client';

function buildClientSessionId(sessionTag: string, userId: string): string {
  return `${sessionTag}-${userId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export const supabaseQuizSessionRepository: QuizSessionRepository = {
  async submit(userId, sessionTag, params) {
    const { error } = await supabase.rpc('submit_quiz_session', {
      p_client_session_id: buildClientSessionId(sessionTag, userId),
      p_topics: params.topics,
      p_difficulty: params.difficulty,
      p_score: Math.round(params.score),
      p_total_answered: params.totalAnswered,
      p_correct_answered: params.correctAnswered,
      p_best_streak: params.bestStreak,
      p_topic_breakdown: params.topicBreakdown,
      p_content_version: params.contentVersion,
      p_concept_evidence: params.conceptEvidence,
    });

    if (error) throw new Error(error.message);
  },
};
