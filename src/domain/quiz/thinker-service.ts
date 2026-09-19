import { allThinkerQuestions } from '@/content/thinkers';
import { DEFAULT_QUIZ_CAP, type QuestionDifficulty } from '@/config/constants';
import { fisherYatesShuffle, stripAnswers } from './engine';
import { localFallbackCheck, localFallbackEliminate } from './service';
import type { CheckResult, PublicQuestion } from './types';

export function fetchThinkerQuestions(slug: string, difficulties: QuestionDifficulty[], cap = DEFAULT_QUIZ_CAP): PublicQuestion[] {
  let pool = allThinkerQuestions.filter((question) => question.topic === slug);
  if (difficulties.length > 0 && difficulties.length < 3) {
    pool = pool.filter((question) => difficulties.includes(question.difficulty));
  }
  return fisherYatesShuffle(pool).slice(0, cap).map(stripAnswers);
}

export function checkThinkerAnswer(questionId: number, selectedIndex: number): CheckResult | null {
  return localFallbackCheck(questionId, selectedIndex, allThinkerQuestions);
}

export function getThinkerEliminatedOptions(questionId: number, originalIndices: number[]): number[] {
  return localFallbackEliminate(questionId, originalIndices, allThinkerQuestions);
}