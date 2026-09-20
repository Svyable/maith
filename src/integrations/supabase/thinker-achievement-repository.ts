import type {
  ThinkerAchievement,
  ThinkerAchievementAward,
} from '@/domain/thinker/achievement';
import type { ThinkerAchievementRepository } from '@/domain/thinker/achievement-repository';
import { supabase } from '@/integrations/supabase/client';

const ACHIEVEMENT_SELECT =
  'thinker_slug, achieved_at, score, total_questions';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

export const supabaseThinkerAchievementRepository: ThinkerAchievementRepository = {
  async load(userId): Promise<ThinkerAchievement[]> {
    const { data, error } = await supabase
      .from('user_thinker_achievements')
      .select(ACHIEVEMENT_SELECT)
      .eq('user_id', userId);

    throwIfError(error);
    return data ?? [];
  },

  async award(
    userId: string,
    award: ThinkerAchievementAward,
  ): Promise<ThinkerAchievement> {
    const { data, error } = await supabase
      .from('user_thinker_achievements')
      .insert({
        user_id: userId,
        thinker_slug: award.thinkerSlug,
        score: award.score,
        total_questions: award.totalQuestions,
      })
      .select(ACHIEVEMENT_SELECT)
      .single();

    throwIfError(error);
    return data;
  },
};
