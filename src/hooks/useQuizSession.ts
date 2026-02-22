// ── useQuizSession — shared session orchestration for all quiz modes ──
// Extracts the duplicated confetti, timer, session counters, and DB
// submission logic that was copy-pasted between Index.tsx and Thinkers.tsx.

import { useState, useCallback, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useTimer } from '@/hooks/useTimer';
import { useAuth } from '@/hooks/useAuth';
import { submitSession } from '@/domain/quiz';
import {
  getDifficultyMeta,
  highestDifficulty,
  CONTENT_VERSION,
  QUESTION_TIME,
  type Difficulty,
  type QuestionDifficulty,
} from '@/config/constants';
import type { QuizState } from '@/domain/quiz';

interface UseQuizSessionOptions {
  difficulties: Difficulty[];
  /** Current question's difficulty — drives the per-question timer */
  currentQuestionDifficulty?: QuestionDifficulty;
  /** Whether the quiz screen is currently active */
  isQuizActive: boolean;
  /** Quiz engine state — needed for finish detection & submission */
  quizState: QuizState;
  /** Tag to distinguish session types in the DB (e.g. 'quiz' | 'thnk') */
  sessionTag: string;
  /** Topics to record when submitting (fallback to topicBreakdown keys) */
  topics: string[];
}

export function useQuizSession({
  difficulties,
  currentQuestionDifficulty,
  isQuizActive,
  quizState,
  sessionTag,
  topics,
}: UseQuizSessionOptions) {
  const { user } = useAuth();
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const submittedRef = useRef(false);

  // Per-question timer duration based on question's difficulty
  const timerDuration = currentQuestionDifficulty
    ? QUESTION_TIME[currentQuestionDifficulty]
    : getDifficultyMeta(highestDifficulty(difficulties)).timePerQuestion;

  // Timer
  const handleTimeout = useCallback(() => {
    if (isQuizActive) setSessionTotal((t) => t + 1);
  }, [isQuizActive]);

  const { timeLeft, reset: resetTimer, fraction } = useTimer(
    timerDuration,
    handleTimeout,
    isQuizActive,
  );

  // Session update (called per answer)
  const handleSessionUpdate = useCallback((correct: boolean) => {
    setSessionTotal((t) => t + 1);
    if (correct) {
      setSessionCorrect((c) => c + 1);
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#22d3ee', '#f59e0b', '#22c55e'],
      });
    }
  }, []);

  // Reset counters for a new session
  const resetSession = useCallback(() => {
    setSessionCorrect(0);
    setSessionTotal(0);
    submittedRef.current = false;
    resetTimer();
  }, [resetTimer]);

  // Submit to DB when quiz finishes (single-submission guard)
  useEffect(() => {
    if (quizState.isFinished && isQuizActive && user && !submittedRef.current) {
      submittedRef.current = true;
      submitSession(user.id, sessionTag, {
        topics: topics.length > 0 ? topics : Object.keys(quizState.topicBreakdown),
        difficulty: highestDifficulty(difficulties),
        score: quizState.score,
        totalAnswered: quizState.totalAnswered,
        correctAnswered: quizState.correctAnswered,
        bestStreak: quizState.bestStreak,
        topicBreakdown: quizState.topicBreakdown,
        contentVersion: CONTENT_VERSION,
      });
    }
    if (!quizState.isFinished) submittedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState.isFinished, isQuizActive, user]);

  return {
    sessionCorrect,
    sessionTotal,
    timeLeft,
    fraction,
    resetTimer,
    resetSession,
    handleSessionUpdate,
  };
}
