// ── useThinkerQuiz — thin React wrapper for the Thinker quiz mode ─────
// Delegates all logic to src/domain/quiz/. No duplicated business logic.

import { useState, useCallback } from 'react';
import { questionsForDifficulties, toQuestionDifficulty, type Difficulty } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  fetchThinkerQuestions,
  checkThinkerAnswer,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';

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
      const count = questionsForDifficulties(difficulties);
      const levels = difficulties.map(toQuestionDifficulty);
      const questions = fetchThinkerQuestions(slug, levels, count);
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

  // Expose questions as alias
  const questions = state.currentQuestions;

  return {
    state,
    questions,
    currentQuestion,
    startThinker,
    answer,
    nextQuestion,
    skipQuestion,
    endQuiz,
  };
}
