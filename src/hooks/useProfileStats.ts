import { useEffect, useState } from 'react';
import type {
  ProfileStatsRepository,
  ProfileStatsSnapshot,
} from '@/domain/profile/repository';
import { supabaseProfileStatsRepository } from '@/integrations/supabase/profile-stats-repository';

const EMPTY_PROFILE_STATS: ProfileStatsSnapshot = {
  stats: null,
  topicStats: [],
  difficultyStats: [],
  recentSessions: [],
};

export function useProfileStats(
  userId: string | undefined,
  repository: ProfileStatsRepository = supabaseProfileStatsRepository,
) {
  const [data, setData] = useState<ProfileStatsSnapshot>(EMPTY_PROFILE_STATS);
  const [loading, setLoading] = useState(Boolean(userId));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;

    if (!userId) {
      setData(EMPTY_PROFILE_STATS);
      setLoading(false);
      setError(null);
      return () => {
        active = false;
      };
    }

    setLoading(true);
    setError(null);

    repository.load(userId)
      .then((snapshot) => {
        if (!active) return;
        setData(snapshot);
      })
      .catch((reason: unknown) => {
        if (!active) return;
        setError(reason instanceof Error ? reason : new Error(String(reason)));
        setData(EMPTY_PROFILE_STATS);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [repository, userId]);

  return { ...data, loading, error };
}
