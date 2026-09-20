export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  locale: string;
}

export interface ProfileIdentity {
  id: string;
  metadata: Record<string, unknown>;
}

export type ProfileUpdate = Partial<
  Pick<Profile, 'display_name' | 'avatar_url' | 'locale'>
>;

const AUTO_NAME_PATTERN = /^user_[a-f0-9]{8}$/;

function getMetadataString(
  metadata: Record<string, unknown>,
  key: string,
): string | null {
  const value = metadata[key];
  return typeof value === 'string' && value.trim().length > 0
    ? value.trim()
    : null;
}

export function getDefaultUsername(userId: string): string {
  return `user_${userId.slice(0, 8)}`;
}

export function getInitialProfile(identity: ProfileIdentity): Profile {
  return {
    id: identity.id,
    username: getDefaultUsername(identity.id),
    display_name:
      getMetadataString(identity.metadata, 'display_name') ||
      getMetadataString(identity.metadata, 'full_name') ||
      getMetadataString(identity.metadata, 'name'),
    avatar_url: getMetadataString(identity.metadata, 'avatar_url'),
    locale: getMetadataString(identity.metadata, 'locale') || 'en',
  };
}

export function needsProfileOnboarding(profile: Profile | null): boolean {
  return !profile?.display_name?.trim()
    || AUTO_NAME_PATTERN.test(profile.display_name);
}
