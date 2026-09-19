import { useEffect, useState } from 'react';
import type {
  LeaderboardRepository,
  LeaderboardSnapshot,
} from '@/domain/leaderboard/repository';
import { supabaseLeaderboardRepository } from '@/integrations/supabase/leaderboard-repository';

const EMPTY_LEADERBOARD: LeaderboardSnapshot = {
  allTime: [],
  weekly: [],
  topicData: [],
};

export function useLeaderboardData(
  repository: LeaderboardRepository = supabaseLeaderboardRepository,
) {
  const [data, setData] = useState<LeaderboardSnapshot>(EMPTY_LEADERBOARD);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    repository.load()
      .then((snapshot) => {
        if (active) setData(snapshot);
      })
      .catch((reason: unknown) => {
        if (!active) return;
        setError(reason instanceof Error ? reason : new Error(String(reason)));
        setData(EMPTY_LEADERBOARD);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [repository]);

  return { ...data, loading, error };
}
