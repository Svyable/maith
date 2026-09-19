// ── useBonafideQuiz — thin React wrapper for the Bonafide quiz mode ───
// Delegates all logic to src/domain/quiz/. Mirrors useThinkerQuiz pattern.

import { useState, useCallback } from 'react';
import { toQuestionDifficulty, type Difficulty } from '@/config/constants';
import {
  buildInitialState,
  applyAnswer,
  advanceQuestion,
  skipCurrentQuestion,
  endQuiz as endQuizEngine,
  type QuizState,
  type PublicQuestion,
  type CheckResult,
} from '@/domain/quiz';
import { fetchBonafideQuestions, checkBonafideAnswer } from '@/domain/quiz/bonafide-service';

export function useBonafideQuiz(difficulties: Difficulty[] = ['HARD']) {
  const [state, setState] = useState<QuizState>(() => buildInitialState());

  const currentQuestion: PublicQuestion | null =
    state.currentQuestions[state.currentIndex] ?? null;

  const startBonafide = useCallback(
    (topics: string[]) => {
      const levels = difficulties.map(toQuestionDifficulty);
      const questions = fetchBonafideQuestions(topics, levels);
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
      const result = checkBonafideAnswer(currentQuestion.id, optionIndex);
      if (!result) return null;
      setState((prev) => applyAnswer(prev, result, currentQuestion, optionIndex));
      return result;
    },
    [currentQuestion],
  );

  const nextQuestion = useCallback(() => setState(advanceQuestion), []);
  const skipQuestion = useCallback(() => setState(skipCurrentQuestion), []);
  const endQuiz = useCallback(() => setState(endQuizEngine), []);

  return {
    state,
    questions: state.currentQuestions,
    currentQuestion,
    startBonafide,
    answer,
    nextQuestion,
    skipQuestion,
    endQuiz,
  };
}
