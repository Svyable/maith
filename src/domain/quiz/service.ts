// ── Quiz Service — I/O layer, zero React ──────────────────────────────
// All server calls and local fallback logic live here.
// Hooks remain thin React wrappers that call this layer.

import { supabase } from '@/integrations/supabase/client';
import { tQuestion, tQuestionOptions } from '@/i18n/tQuestion';
import { DEFAULT_QUIZ_CAP, type QuestionDifficulty } from '@/config/constants';
import { fisherYatesShuffle, getSafeEliminationIndices, stripAnswers } from './engine';
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
 * difficulty, shuffle, strip, translate. Caps to `cap` questions.
 */
export function fetchQuestions(
  pool: Question[],
  topics: string[],
  difficulties: QuestionDifficulty[],
  cap: number = DEFAULT_QUIZ_CAP,
): PublicQuestion[] {
  let filtered = topics.length === 0 ? pool : pool.filter((q) => topics.includes(q.topic));

  // Filter by difficulty levels (skip if all 3 selected = no filter)
  if (difficulties.length > 0 && difficulties.length < 3) {
    filtered = filtered.filter((q) => difficulties.includes(q.difficulty));
  }

  return fisherYatesShuffle(filtered)
    .slice(0, cap)
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
    symbolLinks: q.symbolLinks,
    glossaryLinks: q.glossaryLinks,
    formulaLinks: q.formulaLinks,
  };
}

/**
 * Return visible option indices that can be safely removed by a 50/50 assist.
 */
export function localFallbackEliminate(
  questionId: number,
  originalIndices: number[],
  pool: Question[],
): number[] {
  const q = pool.find((x) => x.id === questionId);
  if (!q) return [];
  return getSafeEliminationIndices(q.correctIndex, originalIndices);
}

// ── Server calls ─────────────────────────────────────────────────────

/**
 * Check an answer locally against the question pool.
 */
export async function checkAnswer(
  questionId: number,
  selectedIndex: number,
  pool: Question[],
): Promise<CheckResult | null> {
  return localFallbackCheck(questionId, selectedIndex, pool);
}

/**
 * Resolve a 50/50 assist locally without leaking the correct index.
 */
export function getEliminatedOptions(
  questionId: number,
  originalIndices: number[],
  pool: Question[],
): number[] {
  return localFallbackEliminate(questionId, originalIndices, pool);
}

/**
 * Submit a completed quiz session to the database.
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

