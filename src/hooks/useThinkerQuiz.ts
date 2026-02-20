// ── useThinkerQuiz — thin React wrapper for the Thinker quiz mode ─────
// Delegates all logic to src/domain/quiz/. No duplicated business logic.

import { useState, useCallback } from 'react';
import { getDifficultyMeta, type Difficulty } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  fetchThinkerQuestions,
  checkThinkerAnswer,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';

export type { PublicQuestion, CheckResult };

export interface ThinkerQuizState extends QuizState {
  // Alias currentQuestions as questions for backward compat
  questions: PublicQuestion[];
}

export function useThinkerQuiz(difficulty: Difficulty = 'ADVN') {
  const [state, setState] = useState<QuizState>(() => buildInitialState());

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const startThinker = useCallback(
    (slug: string) => {
      const m = getDifficultyMeta(difficulty);
      const questions = fetchThinkerQuestions(slug, m.questionsPerQuiz);
      setState({
        ...buildInitialState(),
        currentQuestions: questions,
        loading: false,
      });
    },
    [difficulty],
  );

  const answer = useCallback(
    async (optionIndex: number): Promise<CheckResult | null> => {
      if (!currentQuestion) return null;
      const result = checkThinkerAnswer(currentQuestion.id, optionIndex);
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
  };
}
