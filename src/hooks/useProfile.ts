import { useState, useEffect, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  locale: string;
}

const PROFILE_SELECT = 'id, username, display_name, avatar_url, locale';
const AUTO_NAME_PATTERN = /^user_[a-f0-9]{8}$/;

function getDefaultUsername(userId: string) {
  return `user_${userId.slice(0, 8)}`;
}

function getMetadataString(user: User, key: string) {
  const value = user.user_metadata?.[key];
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
}

function getInitialProfile(user: User): Profile {
  return {
    id: user.id,
    username: getDefaultUsername(user.id),
    display_name:
      getMetadataString(user, 'display_name') ||
      getMetadataString(user, 'full_name') ||
      getMetadataString(user, 'name'),
    avatar_url: getMetadataString(user, 'avatar_url'),
    locale: getMetadataString(user, 'locale') || 'en',
  };
}

export function useProfile() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadProfile(currentUser: User) {
      setLoading(true);

      const { data, error } = await supabase
        .from('profiles')
        .select(PROFILE_SELECT)
        .eq('id', currentUser.id)
        .maybeSingle();

      if (!active) return;

      if (error) {
        setProfile(null);
        setLoading(false);
        return;
      }

      if (data) {
        setProfile(data as Profile);
        setLoading(false);
        return;
      }

      const seed = getInitialProfile(currentUser);
      const { data: created } = await supabase
        .from('profiles')
        .upsert(seed, { onConflict: 'id' })
        .select(PROFILE_SELECT)
        .eq('id', currentUser.id)
        .maybeSingle();

      if (!active) return;

      setProfile((created as Profile | null) ?? seed);
      setLoading(false);
    }

    if (authLoading) return () => {
      active = false;
    };

    if (!user) {
      setProfile(null);
      setLoading(false);
      return () => {
        active = false;
      };
    }

    loadProfile(user);

    return () => {
      active = false;
    };
  }, [user, authLoading]);

  const needsOnboarding =
    !!user &&
    !loading &&
    (!profile?.display_name?.trim() || AUTO_NAME_PATTERN.test(profile.display_name));

  const updateProfile = useCallback(
    async (fields: Partial<Pick<Profile, 'display_name' | 'avatar_url' | 'locale'>>) => {
      if (!user) return { error: 'Not authenticated' };

      const { data, error } = await supabase
        .from('profiles')
        .update(fields)
        .eq('id', user.id)
        .select(PROFILE_SELECT)
        .maybeSingle();

      if (error) return { error: error.message };
      if (data) {
        setProfile(data as Profile);
        return { error: null };
      }

      const seed = { ...getInitialProfile(user), ...fields };
      const { data: created, error: createError } = await supabase
        .from('profiles')
        .upsert(seed, { onConflict: 'id' })
        .select(PROFILE_SELECT)
        .eq('id', user.id)
        .maybeSingle();

      if (createError) return { error: createError.message };
      if (created) setProfile(created as Profile);

      return { error: null };
    },
    [user],
  );

  return { profile, loading: authLoading || loading, needsOnboarding, updateProfile };
}

