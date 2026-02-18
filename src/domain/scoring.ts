import { BASE_POINTS, STREAK_STEP, STREAK_CAP, type Difficulty } from '@/config/constants';

/**
 * Calculate points for a single correct answer.
 * Formula: base * min(1 + streak * STREAK_STEP, STREAK_CAP)
 */
export function calculatePoints(
  difficulty: Difficulty,
  questionDifficulty: 'easy' | 'hard' | 'sota',
  streak: number,
): number {
  // Question-level difficulty adds a bonus on top of session difficulty
  const questionBonus = questionDifficulty === 'sota' ? 1.5 : questionDifficulty === 'hard' ? 1.2 : 1.0;
  const base = BASE_POINTS[difficulty] * questionBonus;
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
