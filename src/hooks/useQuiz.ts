// ── useQuiz — thin React wrapper over the quiz domain service ─────────
// Business logic lives in src/domain/quiz/. This hook only manages React state.

import { useState, useCallback } from 'react';
import { type Difficulty, DEFAULT_QUIZ_CAP, toQuestionDifficulty } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  fetchQuestions,
  checkAnswer,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';
import { allQuestions } from '@/content';

export type { PublicQuestion, CheckResult, QuizState } from '@/domain/quiz';

export function useQuiz(selectedTopics: string[] = [], difficulties: Difficulty[] = ['HARD']) {
  const [state, setState] = useState<QuizState>(() => buildInitialState());

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const initQuiz = useCallback((topics: string[], diffs: Difficulty[]) => {
    setState(buildInitialState());
    const questions = fetchQuestions(allQuestions, topics, diffs.map(toQuestionDifficulty), DEFAULT_QUIZ_CAP);
    setState((prev) => ({ ...prev, currentQuestions: questions, loading: false }));
  }, []);

  const answer = useCallback(
    async (optionIndex: number): Promise<CheckResult | null> => {
      if (!currentQuestion) return null;

      const result = await checkAnswer(currentQuestion.id, optionIndex, allQuestions);
      if (!result) return null;

      setState((prev) => applyAnswer(prev, result, currentQuestion, optionIndex));
      return result;
    },
    [currentQuestion],
  );

  const nextQuestion = useCallback(() => {
    setState(advanceQuestion);
  }, []);

  const skipQuestion = useCallback(() => {
    setState(skipCurrentQuestion);
  }, []);

  const endQuiz = useCallback(() => {
    setState(endQuizEngine);
  }, []);

  const restartQuiz = useCallback(
    (topics: string[] = [], diffs: Difficulty[] = difficulties) => {
      initQuiz(topics, diffs);
    },
    [difficulties, initQuiz],
  );

  return {
    state,
    currentQuestion,
    answer,
    nextQuestion,
    skipQuestion,
    endQuiz,
    restartQuiz,
    totalQuestions: state.currentQuestions.length,
  };
}
