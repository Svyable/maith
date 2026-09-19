// ── useThinkerQuiz — thin React wrapper for the Thinker quiz mode ─────
// Delegates all logic to src/domain/quiz/. No duplicated business logic.

import { useState, useCallback } from 'react';
import { toQuestionDifficulty, type Difficulty } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  getVisibleOptionIndex,
  toVisibleCheckResult,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';
import { fetchThinkerQuestions, checkThinkerAnswer, getThinkerEliminatedOptions } from '@/domain/quiz/thinker-service';

export type { PublicQuestion, CheckResult };

export interface ThinkerQuizState extends QuizState {
  questions: PublicQuestion[];
}

export function useThinkerQuiz(difficulties: Difficulty[] = ['HARD']) {
  const [state, setState] = useState<QuizState>(() => buildInitialState());

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const startThinker = useCallback(
    (slug: string) => {
      const levels = difficulties.map(toQuestionDifficulty);
      // Fetch ALL matching questions (no count limit)
      const questions = fetchThinkerQuestions(slug, levels);
      setState({
        ...buildInitialState(),
        currentQuestions: questions,
        loading: false,
      });
    },
    [difficulties],
  );

  const answer = useCallback(
    async (optionIndex: number): Promise<CheckResult | null> => {
      if (!currentQuestion) return null;
      const result = checkThinkerAnswer(currentQuestion.id, optionIndex);
      if (!result) return null;
      const visibleIndex = getVisibleOptionIndex(optionIndex, currentQuestion.originalIndices);
      const reviewResult = toVisibleCheckResult(result, currentQuestion.originalIndices);
      setState((prev) => applyAnswer(prev, reviewResult, currentQuestion, visibleIndex));
      return result;
    },
    [currentQuestion],
  );

  const eliminateOptions = useCallback((): number[] => {
    if (!currentQuestion) return [];
    return getThinkerEliminatedOptions(currentQuestion.id, currentQuestion.originalIndices);
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

  // Expose questions as alias
  const questions = state.currentQuestions;

  return {
    state,
    questions,
    currentQuestion,
    startThinker,
    answer,
    eliminateOptions,
    nextQuestion,
    skipQuestion,
    endQuiz,
  };
}
