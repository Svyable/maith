// ── useQuiz — thin React wrapper over the quiz domain service ─────────
// Business logic lives in src/domain/quiz/. This hook only manages React state.

import { useState, useCallback } from 'react';
import { type Difficulty, DEFAULT_QUIZ_CAP } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  fetchQuestionsLocalFirst,
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

    // 1. Instantly load local questions — quiz can start with 0ms wait
    const localQuestions = fetchQuestionsLocalFirst(
      topics,
      diffs,
      allQuestions,
      DEFAULT_QUIZ_CAP,
      // 2. If server returns better data, swap in (only if user hasn't started answering)
      (serverQuestions) => {
        setState((prev) => {
          // Only swap if user hasn't answered any questions yet
          if (prev.totalAnswered > 0) return prev;
          return { ...prev, currentQuestions: serverQuestions, loading: false };
        });
      },
    );

    setState((prev) => ({ ...prev, currentQuestions: localQuestions, loading: false }));
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
