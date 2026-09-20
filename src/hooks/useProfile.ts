import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import {
  needsProfileOnboarding,
  type Profile,
  type ProfileIdentity,
  type ProfileUpdate,
} from '@/domain/profile/profile';
import type { ProfileRepository } from '@/domain/profile/profile-repository';
import { supabaseProfileRepository } from '@/integrations/supabase/profile-repository';

export type { Profile } from '@/domain/profile/profile';

function toProfileIdentity(
  user: NonNullable<ReturnType<typeof useAuth>['user']>,
): ProfileIdentity {
  return {
    id: user.id,
    metadata: user.metadata,
  };
}

export function useProfile(
  repository: ProfileRepository = supabaseProfileRepository,
) {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    if (authLoading) {
      return () => {
        active = false;
      };
    }

    if (!user) {
      setProfile(null);
      setLoading(false);
      return () => {
        active = false;
      };
    }

    setLoading(true);

    void repository.loadOrCreate(toProfileIdentity(user))
      .then((loadedProfile) => {
        if (active) setProfile(loadedProfile);
      })
      .catch(() => {
        if (active) setProfile(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [authLoading, repository, user]);

  const needsOnboarding =
    !!user &&
    !loading &&
    needsProfileOnboarding(profile);

  const updateProfile = useCallback(
    async (fields: ProfileUpdate) => {
      if (!user) return { error: 'Not authenticated' };

      try {
        const updated = await repository.update(
          toProfileIdentity(user),
          fields,
        );
        setProfile(updated);
        return { error: null };
      } catch (error) {
        return {
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
    [repository, user],
  );

  return {
    profile,
    loading: authLoading || loading,
    needsOnboarding,
    updateProfile,
  };
}
