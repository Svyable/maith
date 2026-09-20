export interface ThinkerAchievement {
  thinker_slug: string;
  achieved_at: string;
  score: number;
  total_questions: number;
}

export interface ThinkerAchievementAward {
  thinkerSlug: string;
  score: number;
  totalQuestions: number;
}

export function isPerfectThinkerScore(
  correctAnswered: number,
  totalQuestions: number,
): boolean {
  return totalQuestions > 0 && correctAnswered === totalQuestions;
}
