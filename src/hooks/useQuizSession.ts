// ── useQuizSession — shared session orchestration for all quiz modes ──
// Extracts the duplicated confetti, timer, session counters, and DB
// submission logic that was copy-pasted between Index.tsx and Thinkers.tsx.

import { useState, useCallback, useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useTimer } from '@/hooks/useTimer';
import { useAuth } from '@/hooks/useAuth';
import { supabaseQuizSessionRepository } from '@/integrations/supabase/quiz-session-repository';
import {
  highestDifficulty,
  CONTENT_VERSION,
  QUESTION_TIME_SECONDS,
  type Difficulty,
} from '@/config/constants';
import type { QuizSessionRepository, QuizState } from '@/domain/quiz';

interface UseQuizSessionOptions {
  difficulties: Difficulty[];
  /** Whether the quiz screen is currently active */
  isQuizActive: boolean;
  /** Quiz engine state — needed for finish detection & submission */
  quizState: QuizState;
  /** Tag to distinguish session types in the DB (e.g. 'quiz' | 'thnk') */
  sessionTag: string;
  /** Topics to record when submitting (fallback to topicBreakdown keys) */
  topics: string[];
  /** Called when the timer expires — the parent should handle auto-answering */
  onTimeout?: () => void;
}

export function useQuizSession(
  {
    difficulties,
    isQuizActive,
    quizState,
    sessionTag,
    topics,
    onTimeout,
  }: UseQuizSessionOptions,
  sessionRepository: QuizSessionRepository = supabaseQuizSessionRepository,
) {
  const { user } = useAuth();
  const prefersReducedMotion = useReducedMotion();
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const submittedRef = useRef(false);

  // Universal timer — same duration for all difficulties
  const timerDuration = QUESTION_TIME_SECONDS;

  // Timer
  const handleTimeout = useCallback(() => {
    if (isQuizActive) {
      // QuizScreen records the timed-out attempt through handleSessionUpdate.
      // Keeping the counter in one place prevents timeout attempts from counting twice.
      onTimeout?.();
    }
  }, [isQuizActive, onTimeout]);

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
      if (prefersReducedMotion) return;
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#22d3ee', '#f59e0b', '#22c55e'],
      });
    }
  }, [prefersReducedMotion]);

  // Reset counters for a new session
  const resetSession = useCallback(() => {
    setSessionCorrect(0);
    setSessionTotal(0);
    submittedRef.current = false;
    resetTimer();
  }, [resetTimer]);

  // Submit to DB when quiz finishes (single-submission guard).
  // NOTE: We intentionally do NOT gate on `isQuizActive` here because the
  // parent screen may transition away (e.g. screen → 'results') in the same
  // render cycle that sets isFinished=true, causing a race where submission
  // is skipped. The `submittedRef` guard is sufficient to prevent duplicates.
  useEffect(() => {
    if (quizState.isFinished && user && !submittedRef.current) {
      submittedRef.current = true;
      void sessionRepository.submit(user.id, sessionTag, {
        topics: topics.length > 0 ? topics : Object.keys(quizState.topicBreakdown),
        difficulty: highestDifficulty(difficulties),
        score: quizState.score,
        totalAnswered: quizState.totalAnswered,
        correctAnswered: quizState.correctAnswered,
        bestStreak: quizState.bestStreak,
        topicBreakdown: quizState.topicBreakdown,
        contentVersion: CONTENT_VERSION,
      }).catch((error: unknown) => {
        console.error(
          '[quiz] Failed to submit session:',
          error instanceof Error ? error.message : error,
        );
      });
    }
    if (!quizState.isFinished) submittedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState.isFinished, sessionRepository, user]);

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
