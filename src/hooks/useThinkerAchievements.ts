// ── useThinkerAchievements — Q.E.D. badges for perfect thinker scores ──
// "Quod Erat Demonstrandum" — you proved mastery, now wear the badge.

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface ThinkerAchievement {
  thinker_slug: string;
  achieved_at: string;
  score: number;
  total_questions: number;
}

/**
 * Fetches and manages thinker achievements (perfect score badges).
 * A perfect score means correctAnswered === totalQuestions for a thinker quiz.
 */
export function useThinkerAchievements() {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState<ThinkerAchievement[]>([]);
  const [achievedSlugs, setAchievedSlugs] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Fetch achievements on mount / user change
  useEffect(() => {
    if (!user) {
      setAchievements([]);
      setAchievedSlugs(new Set());
      setLoading(false);
      return;
    }

    let active = true;

    async function fetch() {
      const { data } = await supabase
        .from('user_thinker_achievements' as any)
        .select('thinker_slug, achieved_at, score, total_questions')
        .eq('user_id', user!.id);

      if (!active) return;

      const rows = (data ?? []) as unknown as ThinkerAchievement[];
      setAchievements(rows);
      setAchievedSlugs(new Set(rows.map((r) => r.thinker_slug)));
      setLoading(false);
    }

    fetch();
    return () => { active = false; };
  }, [user]);

  /**
   * Award achievement if the user got a perfect score.
   * Idempotent — re-inserting the same slug is a no-op (PK conflict).
   * Returns true if newly awarded, false otherwise.
   */
  const awardIfPerfect = useCallback(
    async (slug: string, correctAnswered: number, totalQuestions: number, score: number): Promise<boolean> => {
      if (!user) return false;
      if (correctAnswered < totalQuestions || totalQuestions === 0) return false;
      if (achievedSlugs.has(slug)) return false; // already earned

      const { error } = await supabase
        .from('user_thinker_achievements' as any)
        .insert({
          user_id: user.id,
          thinker_slug: slug,
          score,
          total_questions: totalQuestions,
        } as any);

      if (error) return false;

      const newAchievement: ThinkerAchievement = {
        thinker_slug: slug,
        achieved_at: new Date().toISOString(),
        score,
        total_questions: totalQuestions,
      };

      setAchievements((prev) => [...prev, newAchievement]);
      setAchievedSlugs((prev) => new Set(prev).add(slug));
      return true;
    },
    [user, achievedSlugs],
  );

  return { achievements, achievedSlugs, loading, awardIfPerfect };
}
