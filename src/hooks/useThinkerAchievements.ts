// ── useThinkerAchievements — Q.E.D. badges for perfect thinker scores ──
// "Quod Erat Demonstrandum" — you proved mastery, now wear the badge.

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from '@/hooks/useAuth';
import {
  isPerfectThinkerScore,
  type ThinkerAchievement,
} from '@/domain/thinker/achievement';
import type { ThinkerAchievementRepository } from '@/domain/thinker/achievement-repository';
import { supabaseThinkerAchievementRepository } from '@/integrations/supabase/thinker-achievement-repository';

export type { ThinkerAchievement } from '@/domain/thinker/achievement';

/**
 * Fetches and manages thinker achievements (perfect score badges).
 * A perfect score means correctAnswered === totalQuestions for a thinker quiz.
 */
export function useThinkerAchievements(
  repository: ThinkerAchievementRepository = supabaseThinkerAchievementRepository,
) {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState<ThinkerAchievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    if (!user) {
      setAchievements([]);
      setLoading(false);
      return () => {
        active = false;
      };
    }

    setLoading(true);

    void repository.load(user.id)
      .then((rows) => {
        if (active) setAchievements(rows);
      })
      .catch(() => {
        if (active) setAchievements([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [repository, user]);

  const achievedSlugs = useMemo(
    () => new Set(achievements.map((achievement) => achievement.thinker_slug)),
    [achievements],
  );

  /**
   * Award an achievement only for a perfect score.
   * Returns true when a new badge is persisted, false otherwise.
   */
  const awardIfPerfect = useCallback(
    async (
      slug: string,
      correctAnswered: number,
      totalQuestions: number,
      score: number,
    ): Promise<boolean> => {
      if (!user) return false;
      if (!isPerfectThinkerScore(correctAnswered, totalQuestions)) return false;
      if (achievedSlugs.has(slug)) return false;

      try {
        const achievement = await repository.award(user.id, {
          thinkerSlug: slug,
          score,
          totalQuestions,
        });

        setAchievements((previous) => (
          previous.some((item) => item.thinker_slug === achievement.thinker_slug)
            ? previous
            : [...previous, achievement]
        ));
        return true;
      } catch {
        return false;
      }
    },
    [achievedSlugs, repository, user],
  );

  return {
    achievements,
    achievedSlugs,
    loading,
    awardIfPerfect,
  };
}
