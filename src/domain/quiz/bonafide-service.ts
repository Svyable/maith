import { allBonafideQuestions } from '@/content/bonafides';
import { DEFAULT_QUIZ_CAP, type QuestionDifficulty } from '@/config/constants';
import { fisherYatesShuffle, stripAnswers } from './engine';
import { localFallbackCheck } from './service';
import type { CheckResult, PublicQuestion } from './types';

export function fetchBonafideQuestions(topics: string[], difficulties: QuestionDifficulty[], cap = DEFAULT_QUIZ_CAP): PublicQuestion[] {
  let pool = topics.length === 0 ? allBonafideQuestions : allBonafideQuestions.filter((question) => topics.includes(question.topic));
  if (difficulties.length > 0 && difficulties.length < 3) {
    pool = pool.filter((question) => difficulties.includes(question.difficulty));
  }
  return fisherYatesShuffle(pool).slice(0, cap).map(stripAnswers);
}

export function checkBonafideAnswer(questionId: number, selectedIndex: number): CheckResult | null {
  return localFallbackCheck(questionId, selectedIndex, allBonafideQuestions);
}