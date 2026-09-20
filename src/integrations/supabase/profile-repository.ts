import {
  getInitialProfile,
  type Profile,
  type ProfileIdentity,
  type ProfileUpdate,
} from '@/domain/profile/profile';
import type { ProfileRepository } from '@/domain/profile/profile-repository';
import { supabase } from '@/integrations/supabase/client';

const PROFILE_SELECT = 'id, username, display_name, avatar_url, locale';

function throwIfError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

export const supabaseProfileRepository: ProfileRepository = {
  async loadOrCreate(identity): Promise<Profile> {
    const { data, error } = await supabase
      .from('profiles')
      .select(PROFILE_SELECT)
      .eq('id', identity.id)
      .maybeSingle();

    throwIfError(error);

    if (data) return data;

    const seed = getInitialProfile(identity);
    const { data: created, error: createError } = await supabase
      .from('profiles')
      .upsert(seed, { onConflict: 'id' })
      .select(PROFILE_SELECT)
      .eq('id', identity.id)
      .maybeSingle();

    throwIfError(createError);
    return created ?? seed;
  },

  async update(
    identity: ProfileIdentity,
    fields: ProfileUpdate,
  ): Promise<Profile> {
    const { data, error } = await supabase
      .from('profiles')
      .update(fields)
      .eq('id', identity.id)
      .select(PROFILE_SELECT)
      .maybeSingle();

    throwIfError(error);

    if (data) return data;

    const seed = { ...getInitialProfile(identity), ...fields };
    const { data: created, error: createError } = await supabase
      .from('profiles')
      .upsert(seed, { onConflict: 'id' })
      .select(PROFILE_SELECT)
      .eq('id', identity.id)
      .maybeSingle();

    throwIfError(createError);
    return created ?? seed;
  },
};
