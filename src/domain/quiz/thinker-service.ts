import { allThinkerQuestions } from '@/content/thinkers';
import type { Question } from '@/content/types';
import { DEFAULT_QUIZ_CAP, type QuestionDifficulty } from '@/config/constants';
import { fisherYatesShuffle, stripAnswers } from './engine';
import { localFallbackCheck, localFallbackEliminate } from './service';
import type { CheckResult, PublicQuestion } from './types';

function matchesDifficulty(question: Question, difficulties: QuestionDifficulty[]): boolean {
  return difficulties.length === 0 || difficulties.length === 3 || difficulties.includes(question.difficulty);
}

export interface ThinkerQuestionAvailability {
  total: number;
  available: number;
}

/** Count all authored questions and the questions playable at the selected levels in one pass. */
export function getThinkerQuestionAvailability(difficulties: QuestionDifficulty[]): Map<string, ThinkerQuestionAvailability> {
  const counts = new Map<string, ThinkerQuestionAvailability>();
  for (const question of allThinkerQuestions) {
    const entry = counts.get(question.topic) ?? { total: 0, available: 0 };
    entry.total += 1;
    if (matchesDifficulty(question, difficulties)) entry.available += 1;
    counts.set(question.topic, entry);
  }
  return counts;
}

export function fetchThinkerQuestions(slug: string, difficulties: QuestionDifficulty[], cap = DEFAULT_QUIZ_CAP): PublicQuestion[] {
  const pool = allThinkerQuestions.filter((question) =>
    question.topic === slug && matchesDifficulty(question, difficulties),
  );
  return fisherYatesShuffle(pool).slice(0, cap).map(stripAnswers);
}

export function checkThinkerAnswer(questionId: number, selectedIndex: number): CheckResult | null {
  return localFallbackCheck(questionId, selectedIndex, allThinkerQuestions);
}

export function getThinkerEliminatedOptions(questionId: number, originalIndices: number[]): number[] {
  return localFallbackEliminate(questionId, originalIndices, allThinkerQuestions);
}