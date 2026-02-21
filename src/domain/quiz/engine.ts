// ── Quiz Engine — pure, testable, zero React, zero I/O ────────────────
import { calculatePoints } from '@/domain/scoring';
import type { Difficulty } from '@/config/constants';
import type { PublicQuestion, CheckResult, QuizState } from './types';
import type { Question } from '@/content/types';

/**
 * Unbiased Fisher-Yates shuffle — single source of truth.
 * Does NOT mutate the input array.
 */
export function fisherYatesShuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Strip private fields from a full Question, producing a PublicQuestion
 * safe to expose to the client without leaking the correct answer.
 */
export function stripAnswers(q: Question): PublicQuestion {
  const { correctIndex: _c, explanation: _e, realWorld: _r, ...pub } = q;
  return pub;
}

/** Factory for a clean initial QuizState */
export function buildInitialState(): QuizState {
  return {
    currentIndex: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalAnswered: 0,
    correctAnswered: 0,
    answeredIds: [],
    topicBreakdown: {},
    isFinished: false,
    currentQuestions: [],
    loading: true,
    lastCheckResult: null,
    missedQuestions: [],
  };
}

/**
 * Pure state transition for answering a question.
 * Returns the next QuizState given the previous state + check result.
 */
export function applyAnswer(
  prev: QuizState,
  result: CheckResult,
  question: PublicQuestion,
  difficulty: Difficulty,
  selectedIndex?: number,
): QuizState {
  const newStreak = result.correct ? prev.streak + 1 : 0;
  const newBestStreak = Math.max(prev.bestStreak, newStreak);
  const points = result.correct
    ? calculatePoints(difficulty, question.difficulty, newStreak)
    : 0;

  const topicBreakdown = { ...prev.topicBreakdown };
  const existing = topicBreakdown[question.topic] ?? { correct: 0, total: 0 };
  topicBreakdown[question.topic] = {
    correct: existing.correct + (result.correct ? 1 : 0),
    total: existing.total + 1,
  };

  const missedQuestions = result.correct
    ? prev.missedQuestions
    : [...prev.missedQuestions, { question, selectedIndex: selectedIndex ?? -1, checkResult: result }];

  return {
    ...prev,
    score: prev.score + points,
    streak: newStreak,
    bestStreak: newBestStreak,
    totalAnswered: prev.totalAnswered + 1,
    correctAnswered: prev.correctAnswered + (result.correct ? 1 : 0),
    answeredIds: [...prev.answeredIds, question.id],
    topicBreakdown,
    lastCheckResult: result,
    missedQuestions,
  };
}

/** Advance to the next question, or finish the quiz */
export function advanceQuestion(prev: QuizState): QuizState {
  if (prev.currentIndex >= prev.currentQuestions.length - 1) {
    return { ...prev, isFinished: true, lastCheckResult: null };
  }
  return { ...prev, currentIndex: prev.currentIndex + 1, lastCheckResult: null };
}
