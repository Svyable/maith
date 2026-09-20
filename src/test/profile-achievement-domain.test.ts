import { describe, expect, it } from 'vitest';
import {
  getDefaultUsername,
  getInitialProfile,
  needsProfileOnboarding,
} from '@/domain/profile/profile';
import { isPerfectThinkerScore } from '@/domain/thinker/achievement';

describe('profile domain policy', () => {
  it('derives deterministic defaults from auth identity metadata', () => {
    const profile = getInitialProfile({
      id: 'abcdef1234567890',
      metadata: {
        full_name: ' Ada Lovelace ',
        avatar_url: 'https://example.test/ada.png',
        locale: 'fr',
      },
    });

    expect(profile).toEqual({
      id: 'abcdef1234567890',
      username: 'user_abcdef12',
      display_name: 'Ada Lovelace',
      avatar_url: 'https://example.test/ada.png',
      locale: 'fr',
    });
  });

  it('falls back to a stable generated username and English locale', () => {
    expect(getDefaultUsername('1234567890abcdef')).toBe('user_12345678');

    expect(getInitialProfile({
      id: '1234567890abcdef',
      metadata: {},
    })).toMatchObject({
      username: 'user_12345678',
      display_name: null,
      avatar_url: null,
      locale: 'en',
    });
  });

  it('requires onboarding for missing or generated display names', () => {
    expect(needsProfileOnboarding(null)).toBe(true);
    expect(needsProfileOnboarding({
      id: '1',
      username: 'user_12345678',
      display_name: '',
      avatar_url: null,
      locale: 'en',
    })).toBe(true);
    expect(needsProfileOnboarding({
      id: '1',
      username: 'user_12345678',
      display_name: 'user_abcdef12',
      avatar_url: null,
      locale: 'en',
    })).toBe(true);
    expect(needsProfileOnboarding({
      id: '1',
      username: 'ada',
      display_name: 'Ada',
      avatar_url: null,
      locale: 'en',
    })).toBe(false);
  });
});

describe('thinker achievement domain policy', () => {
  it('awards only non-empty perfect scores', () => {
    expect(isPerfectThinkerScore(10, 10)).toBe(true);
    expect(isPerfectThinkerScore(9, 10)).toBe(false);
    expect(isPerfectThinkerScore(0, 0)).toBe(false);
  });
});
