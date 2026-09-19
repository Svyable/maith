// ── useQuiz — thin React wrapper over the quiz domain service ─────────
// Business logic lives in src/domain/quiz/. This hook only manages React state.

import { useState, useCallback, useRef } from 'react';
import { type Difficulty, DEFAULT_QUIZ_CAP, toQuestionDifficulty } from '@/config/constants';
import {
  buildInitialState,
  buildRemediationState,
  applyAnswer,
  getVisibleOptionIndex,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';
import { fetchQuestions, checkAnswer, getEliminatedOptions } from '@/domain/quiz/service';
import type { QuestionLoadProgress } from '@/content/question-loaders';

export type { PublicQuestion, CheckResult, QuizState } from '@/domain/quiz';

export function useQuiz(selectedTopics: string[] = [], difficulties: Difficulty[] = ['HARD']) {
  const [state, setState] = useState<QuizState>(() => buildInitialState());
  const questionPoolRef = useRef<import('@/content/types').Question[]>([]);
  const requestIdRef = useRef(0);

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const initQuiz = useCallback(async (topics: string[], diffs: Difficulty[]) => {
    const requestId = ++requestIdRef.current;
    setState(buildInitialState());
    try {
      const handleProgress = (loadingProgress: QuestionLoadProgress) => {
        if (requestId === requestIdRef.current) {
          setState((prev) => ({ ...prev, loadingProgress }));
        }
      };
      const { loadQuestionsForTopics } = await import('@/content/question-loaders');
      const pool = await loadQuestionsForTopics(topics, handleProgress);
      if (requestId !== requestIdRef.current) return;
      questionPoolRef.current = pool;
      const questions = fetchQuestions(pool, topics, diffs.map(toQuestionDifficulty), DEFAULT_QUIZ_CAP);
      setState((prev) => ({ ...prev, currentQuestions: questions, loading: false, loadingProgress: null }));
    } catch {
      if (requestId !== requestIdRef.current) return;
      setState((prev) => ({ ...prev, loading: false, loadingProgress: null, loadError: true }));
    }
  }, []);

  const answer = useCallback(
    async (optionIndex: number): Promise<CheckResult | null> => {
      if (!currentQuestion) return null;

      const result = await checkAnswer(currentQuestion.id, optionIndex, questionPoolRef.current);
      if (!result) return null;

      const visibleIndex = getVisibleOptionIndex(optionIndex, currentQuestion.originalIndices);
      setState((prev) => applyAnswer(prev, result, currentQuestion, visibleIndex));
      return result;
    },
    [currentQuestion],
  );

  const eliminateOptions = useCallback((): number[] => {
    if (!currentQuestion) return [];
    return getEliminatedOptions(
      currentQuestion.id,
      currentQuestion.originalIndices,
      questionPoolRef.current,
    );
  }, [currentQuestion]);

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

  const practiceUnresolved = useCallback(() => {
    setState(buildRemediationState);
  }, []);

  return {
    state,
    currentQuestion,
    answer,
    eliminateOptions,
    nextQuestion,
    skipQuestion,
    endQuiz,
    restartQuiz,
    practiceUnresolved,
    totalQuestions: state.currentQuestions.length,
  };
}
