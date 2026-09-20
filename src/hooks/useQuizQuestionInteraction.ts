import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from 'react';
import type {
  CheckResult,
  PublicQuestion,
} from '@/domain/quiz';
import { toVisibleCheckResult } from '@/domain/quiz';
import { calculatePoints } from '@/domain/scoring';
import { useKeyboard } from '@/hooks/useKeyboard';

export type QuizAnswerState =
  | 'pending'
  | 'checking'
  | 'correct'
  | 'wrong';

interface UseQuizQuestionInteractionOptions {
  question: PublicQuestion;
  streak: number;
  onAnswer: (index: number) => Promise<CheckResult | null>;
  onEliminate: () => number[];
  onNext: () => void;
  onSkip: () => void;
  onSessionUpdate: (correct: boolean) => void;
  timeoutRef?: MutableRefObject<(() => void) | null>;
}

export function useQuizQuestionInteraction({
  question,
  streak,
  onAnswer,
  onEliminate,
  onNext,
  onSkip,
  onSessionUpdate,
  timeoutRef,
}: UseQuizQuestionInteractionOptions) {
  const [selectedOption, setSelectedOption] =
    useState<number | null>(null);
  const [answerState, setAnswerState] =
    useState<QuizAnswerState>('pending');
  const [hintShown, setHintShown] = useState(false);
  const [eliminateUsed, setEliminateUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] =
    useState<number[]>([]);
  const [checkResult, setCheckResult] =
    useState<CheckResult | null>(null);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const questionIdRef = useRef(question.id);

  const resetQuestionState = useCallback(() => {
    setSelectedOption(null);
    setAnswerState('pending');
    setHintShown(false);
    setEliminateUsed(false);
    setEliminatedOptions([]);
    setCheckResult(null);
    setPointsAwarded(0);
  }, []);

  useEffect(() => {
    if (questionIdRef.current === question.id) return;
    questionIdRef.current = question.id;
    resetQuestionState();
  }, [question.id, resetQuestionState]);

  const handleSelect = useCallback(
    async (visibleIndex: number) => {
      if (answerState !== 'pending') return;
      if (eliminatedOptions.includes(visibleIndex)) return;

      const originalIndex =
        question.originalIndices[visibleIndex];
      if (originalIndex === undefined) return;

      const questionId = question.id;
      setSelectedOption(visibleIndex);
      setAnswerState('checking');

      const result = await onAnswer(originalIndex);

      if (questionIdRef.current !== questionId) return;

      if (!result) {
        setAnswerState('pending');
        setSelectedOption(null);
        return;
      }

      const reviewResult = toVisibleCheckResult(
        result,
        question.originalIndices,
      );

      setCheckResult(reviewResult);
      setPointsAwarded(
        result.correct
          ? calculatePoints(question.difficulty, streak + 1)
          : 0,
      );
      setAnswerState(result.correct ? 'correct' : 'wrong');
      onSessionUpdate(result.correct);
    },
    [
      answerState,
      eliminatedOptions,
      onAnswer,
      onSessionUpdate,
      question.difficulty,
      question.id,
      question.originalIndices,
      streak,
    ],
  );

  const handleTimeoutAnswer = useCallback(async () => {
    if (answerState !== 'pending') return;

    const questionId = question.id;
    setAnswerState('checking');

    const result = await onAnswer(-1);

    if (questionIdRef.current !== questionId) return;

    if (!result) {
      setAnswerState('pending');
      return;
    }

    setCheckResult(
      toVisibleCheckResult(
        result,
        question.originalIndices,
      ),
    );
    setPointsAwarded(0);
    setAnswerState('wrong');
    setSelectedOption(-1);
    onSessionUpdate(false);
  }, [
    answerState,
    onAnswer,
    onSessionUpdate,
    question.id,
    question.originalIndices,
  ]);

  useEffect(() => {
    if (!timeoutRef) return;

    timeoutRef.current = handleTimeoutAnswer;

    return () => {
      timeoutRef.current = null;
    };
  }, [handleTimeoutAnswer, timeoutRef]);

  const handleNext = useCallback(() => {
    resetQuestionState();
    onNext();
  }, [onNext, resetQuestionState]);

  const handleSkip = useCallback(() => {
    resetQuestionState();
    onSkip();
  }, [onSkip, resetQuestionState]);

  const handleShowHint = useCallback(() => {
    if (hintShown || answerState !== 'pending') return;
    setHintShown(true);
  }, [answerState, hintShown]);

  const handleEliminate = useCallback(() => {
    if (eliminateUsed || answerState !== 'pending') return;

    const indices = onEliminate();
    if (indices.length === 0) return;

    setEliminateUsed(true);
    setEliminatedOptions(indices);
  }, [answerState, eliminateUsed, onEliminate]);

  const isAnswered =
    answerState === 'correct'
    || answerState === 'wrong';

  useKeyboard({
    onOption:
      answerState === 'pending'
        ? handleSelect
        : undefined,
    onHint:
      answerState === 'pending'
        ? handleShowHint
        : undefined,
    onNext: isAnswered ? handleNext : undefined,
    onSkip:
      answerState === 'pending'
        ? handleSkip
        : undefined,
    enabled: true,
  });

  return {
    selectedOption,
    answerState,
    hintShown,
    eliminateUsed,
    eliminatedOptions,
    checkResult,
    pointsAwarded,
    isAnswered,
    handleSelect,
    handleNext,
    handleSkip,
    handleShowHint,
    handleEliminate,
  };
}
