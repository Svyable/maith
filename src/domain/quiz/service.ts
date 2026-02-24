// ── Quiz Service — I/O layer, zero React ──────────────────────────────
// All server calls and local fallback logic live here.
// Hooks remain thin React wrappers that call this layer.

import { supabase } from '@/integrations/supabase/client';
import { allQuestions } from '@/content';
import { allThinkerQuestions } from '@/content/thinkers';
import { getLocale } from '@/i18n';
import { tQuestion, tQuestionOptions } from '@/i18n/tQuestion';
import { toQuestionDifficulty, type Difficulty, type QuestionDifficulty } from '@/config/constants';
import { fisherYatesShuffle, stripAnswers } from './engine';
import type { PublicQuestion, CheckResult, SessionSubmitParams } from './types';
import type { Question } from '@/content/types';

// ── Local helpers ────────────────────────────────────────────────────

function applyClientTranslations(q: PublicQuestion): PublicQuestion {
  return {
    ...q,
    question: tQuestion(q.id, 'question', q.question),
    hint: tQuestion(q.id, 'hint', q.hint),
    options: tQuestionOptions(q.id, q.options),
  };
}

/**
 * Local fallback: select from a given question pool, filter by topic &
 * difficulty, shuffle, strip, translate.
 */
export function selectQuestionsLocal(
  pool: Question[],
  topics: string[],
  difficulties: QuestionDifficulty[],
): PublicQuestion[] {
  let filtered = topics.length === 0 ? pool : pool.filter((q) => topics.includes(q.topic));

  // Filter by difficulty levels (skip if all 3 selected = no filter)
  if (difficulties.length > 0 && difficulties.length < 3) {
    filtered = filtered.filter((q) => difficulties.includes(q.difficulty));
  }

  return fisherYatesShuffle(filtered)
    .map((q) => applyClientTranslations(stripAnswers(q)));
}

/**
 * Client-side answer check against a question pool.
 */
export function localFallbackCheck(
  questionId: number,
  selectedIndex: number,
  pool: Question[],
): CheckResult | null {
  const q = pool.find((x) => x.id === questionId);
  if (!q) return null;
  return {
    correct: selectedIndex === q.correctIndex,
    correctIndex: q.correctIndex,
    explanation: tQuestion(q.id, 'explanation', q.explanation),
    realWorld: tQuestion(q.id, 'realWorld', q.realWorld),
  };
}

// ── Server calls ─────────────────────────────────────────────────────

/**
 * Fetch sanitized questions from the edge function, falling back to local
 * selection from `pool` if the edge function is unavailable.
 */
export async function fetchQuestions(
  topics: string[],
  difficulties: Difficulty[],
  pool: Question[] = allQuestions,
): Promise<PublicQuestion[]> {
  const locale = getLocale();
  const levels = difficulties.map(toQuestionDifficulty);
  try {
    const { data, error } = await supabase.functions.invoke('quiz-next', {
      body: { topics, difficulties: levels, seenIds: [], count: 9999, locale },
    });
    if (error) throw error;
    const serverQuestions = (data?.questions as PublicQuestion[]) ?? [];
    // Fall back to local pool if server returned nothing but local content exists
    if (serverQuestions.length === 0) {
      return selectQuestionsLocal(pool, topics, levels);
    }
    return serverQuestions;
  } catch {
    return selectQuestionsLocal(pool, topics, levels);
  }
}

/**
 * Check an answer via the edge function, with local fallback.
 * Pass `pool` to select the correct local pool (main vs. thinker).
 */
export async function checkAnswer(
  questionId: number,
  selectedIndex: number,
  pool: Question[] = allQuestions,
): Promise<CheckResult | null> {
  const locale = getLocale();
  try {
    const { data, error } = await supabase.functions.invoke('quiz-check', {
      body: { questionId, selectedIndex, locale },
    });
    if (error) throw error;
    return data as CheckResult;
  } catch {
    return localFallbackCheck(questionId, selectedIndex, pool);
  }
}

/**
 * Submit a completed quiz session to the database.
 * Idempotent — caller is responsible for dedup (see submittedRef pattern).
 */
export async function submitSession(
  userId: string,
  sessionTag: string,
  params: SessionSubmitParams,
): Promise<void> {
  const clientSessionId = `${sessionTag}-${userId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await supabase.rpc('submit_quiz_session', {
    p_client_session_id: clientSessionId,
    p_topics: params.topics,
    p_difficulty: params.difficulty,
    p_score: Math.round(params.score),
    p_total_answered: params.totalAnswered,
    p_correct_answered: params.correctAnswered,
    p_best_streak: params.bestStreak,
    p_topic_breakdown: params.topicBreakdown,
    p_content_version: params.contentVersion,
  });
}

// ── Thinker-mode helpers (uses thinker pool instead of main pool) ────

export function fetchThinkerQuestions(
  slug: string,
  difficulties: QuestionDifficulty[],
): PublicQuestion[] {
  let pool = allThinkerQuestions.filter((q) => q.topic === slug);

  if (difficulties.length > 0 && difficulties.length < 3) {
    pool = pool.filter((q) => difficulties.includes(q.difficulty));
  }

  return fisherYatesShuffle(pool)
    .map(stripAnswers);
}

export function checkThinkerAnswer(
  questionId: number,
  selectedIndex: number,
): CheckResult | null {
  return localFallbackCheck(questionId, selectedIndex, allThinkerQuestions);
}
