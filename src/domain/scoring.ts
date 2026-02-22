import { BASE_POINTS, STREAK_STEP, STREAK_CAP, toDifficulty, type QuestionDifficulty } from '@/config/constants';

/**
 * Calculate points for a single correct answer.
 * Points scale with the question's own difficulty level.
 */
export function calculatePoints(
  questionDifficulty: QuestionDifficulty,
  streak: number,
): number {
  const base = BASE_POINTS[toDifficulty(questionDifficulty)];
  const multiplier = Math.min(1 + streak * STREAK_STEP, STREAK_CAP);
  return Math.round(base * multiplier);
}

/**
 * Compute streak multiplier as a percentage bonus string (e.g. "+15%")
 */
export function streakBonusLabel(streak: number): string {
  const bonus = Math.min(streak * STREAK_STEP, STREAK_CAP - 1);
  return `+${Math.round(bonus * 100)}%`;
}
