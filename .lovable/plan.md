

# Profile Onboarding and Leaderboard Alignment

## Problem
- New users (both email signup and OAuth) get auto-generated usernames like `user_a3f8b2c1` with no opportunity to choose a display name
- OAuth users (Google/Apple) often have `null` display_name since the trigger only reads `raw_user_meta_data`
- The leaderboard shows `display_name || username`, resulting in cryptic entries
- There is no post-signup onboarding screen to collect a preferred username
- The Profile page displays but cannot edit the username/display_name

## Solution

### 1. Add a username onboarding screen (`src/pages/Onboarding.tsx`)
A simple page shown after first login when the user has no custom display_name set. Contains:
- A text input for choosing a display name (required, 2-20 chars)
- An optional avatar emoji picker (or keep default)
- A "Save and Continue" button that writes to the `profiles` table
- Redirects to `/` after saving

### 2. Create a `useProfile` hook (`src/hooks/useProfile.ts`)
- Fetches the current user's profile row on auth state change
- Exposes `profile`, `loading`, `updateProfile(fields)`, and `needsOnboarding` (true when display_name is null or matches the auto-generated pattern `user_XXXXXXXX`)
- Used by Index.tsx, Profile.tsx, and Onboarding.tsx to avoid scattered `supabase.from('profiles')` calls

### 3. Update the `handle_new_user` trigger (DB migration)
- For OAuth users, also extract `full_name` / `name` from `raw_user_meta_data` (Google/Apple provide these)
- Store it as `display_name` so OAuth users at least have a real name as fallback

### 4. Add onboarding redirect logic in `App.tsx`
- After auth state resolves, if user is logged in and `needsOnboarding` is true, redirect to `/onboarding`
- The onboarding route is protected (requires auth)

### 5. Make Profile page editable
- Add an "Edit" button next to the display name on `Profile.tsx`
- Inline edit field that calls `updateProfile({ display_name })` on save
- Updates reflect immediately on the leaderboard views

### 6. Ensure leaderboard views show the right name
- The existing views (`leaderboard_all_time`, `leaderboard_weekly`, `leaderboard_by_topic`) already join on `profiles.display_name` and `profiles.username`
- No schema change needed -- once profiles have proper display_names, leaderboard displays correctly

---

## Technical Details

### New files
| File | Purpose |
|---|---|
| `src/pages/Onboarding.tsx` | Post-signup username picker screen |
| `src/hooks/useProfile.ts` | Shared profile fetch/update hook |

### Modified files
| File | Change |
|---|---|
| `src/App.tsx` | Add `/onboarding` route, add redirect guard |
| `src/pages/Index.tsx` | Use `useProfile` instead of inline profile fetch |
| `src/pages/Profile.tsx` | Use `useProfile`, add inline display_name editing |
| `src/pages/Auth.tsx` | After successful login, navigate to `/onboarding` if needed |

### Database migration
```sql
-- Improve handle_new_user to extract name from OAuth providers
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  base_username text;
  v_display_name text;
BEGIN
  base_username := 'user_' || substr(NEW.id::text, 1, 8);
  
  -- Try multiple metadata fields (Google sends full_name/name, Apple sends name)
  v_display_name := COALESCE(
    NEW.raw_user_meta_data->>'display_name',
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'name',
    NULL
  );

  INSERT INTO public.profiles (id, username, display_name, avatar_url, locale, is_public)
  VALUES (
    NEW.id,
    base_username,
    v_display_name,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NULL),
    COALESCE(NEW.raw_user_meta_data->>'locale', 'en'),
    true
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$;
```

### `useProfile` hook shape
```typescript
interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  locale: string;
}

interface UseProfileReturn {
  profile: Profile | null;
  loading: boolean;
  needsOnboarding: boolean;
  updateProfile: (fields: Partial<Profile>) => Promise<void>;
}
```

### Onboarding flow
```text
[User signs up / OAuth] --> [handle_new_user trigger creates profile row]
        |
        v
[App.tsx checks needsOnboarding]
        |
  true  |  false
   v         v
[/onboarding]  [/ (home)]
   |
   v
[User picks display name] --> [UPDATE profiles SET display_name = ...]
   |
   v
[Redirect to /]
```

### Sequencing
1. DB migration (update `handle_new_user` trigger)
2. Create `useProfile` hook
3. Create `Onboarding.tsx` page
4. Wire routing in `App.tsx`
5. Refactor `Index.tsx` and `Profile.tsx` to use `useProfile`
6. Add edit capability to `Profile.tsx`

