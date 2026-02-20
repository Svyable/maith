// ── useQuiz — thin React wrapper over the quiz domain service ─────────
// Business logic lives in src/domain/quiz/. This hook only manages React state.

import { useState, useCallback } from 'react';
import { type Difficulty, getDifficultyMeta } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  fetchQuestions,
  checkAnswer,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';
import { allQuestions } from '@/content';

export type { PublicQuestion, CheckResult, QuizState } from '@/domain/quiz';

export function useQuiz(selectedTopics: string[] = [], difficulty: Difficulty = 'ADVN') {
  const [state, setState] = useState<QuizState>(() => buildInitialState());

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const initQuiz = useCallback(async (topics: string[], diff: Difficulty) => {
    const m = getDifficultyMeta(diff);
    setState(buildInitialState());
    const questions = await fetchQuestions(topics, m.questionsPerQuiz);
    setState((prev) => ({ ...prev, currentQuestions: questions, loading: false }));
  }, []);

  const answer = useCallback(
    async (optionIndex: number): Promise<CheckResult | null> => {
      if (!currentQuestion) return null;

      const result = await checkAnswer(currentQuestion.id, optionIndex, allQuestions);
      if (!result) return null;

      setState((prev) => applyAnswer(prev, result, currentQuestion, difficulty));
      return result;
    },
    [currentQuestion, difficulty],
  );

  const nextQuestion = useCallback(() => {
    setState(advanceQuestion);
  }, []);

  const skipQuestion = useCallback(() => {
    setState((prev) => ({ ...prev, streak: 0 }));
    nextQuestion();
  }, [nextQuestion]);

  const restartQuiz = useCallback(
    async (topics: string[] = [], diff: Difficulty = difficulty) => {
      await initQuiz(topics, diff);
    },
    [difficulty, initQuiz],
  );

  return {
    state,
    currentQuestion,
    answer,
    nextQuestion,
    skipQuestion,
    restartQuiz,
    totalQuestions: state.currentQuestions.length,
  };
}
