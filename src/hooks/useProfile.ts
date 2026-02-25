import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  locale: string;
}

const AUTO_NAME_PATTERN = /^user_[a-f0-9]{8}$/;

export function useProfile() {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    supabase
      .from('profiles')
      .select('id, username, display_name, avatar_url, locale')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        setProfile(data as Profile | null);
        setLoading(false);
      });
  }, [user, authLoading]);

  const needsOnboarding =
    !!user &&
    !loading &&
    (!profile?.display_name || AUTO_NAME_PATTERN.test(profile.display_name));

  const updateProfile = useCallback(
    async (fields: Partial<Pick<Profile, 'display_name' | 'avatar_url' | 'locale'>>) => {
      if (!user) return;
      const { data } = await supabase
        .from('profiles')
        .update(fields)
        .eq('id', user.id)
        .select('id, username, display_name, avatar_url, locale')
        .single();
      if (data) setProfile(data as Profile);
    },
    [user],
  );

  return { profile, loading: authLoading || loading, needsOnboarding, updateProfile };
}
