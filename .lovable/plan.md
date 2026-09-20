# Backend hardening follow-up (optional)

Two issues found in the read-only audit. No repository or credential changes needed.

## 1. Narrow achievement-table reads

Today any signed-in user can read every row of the thinker-achievements table.

Options (pick one):
- **Self-only:** replace the read rule so a user sees only their own achievement rows. Profile badge walls keep working; other users' achievement rows stop being readable.
- **Public-profile-scoped:** allow reading rows only when the owning profile is marked public, matching how profiles and leaderboards already behave.

Implementation: one migration replacing the `achievements_select_public` policy. Insert/update/delete rules stay unchanged.

## 2. Turn on leaked-password protection

Enable breach-password checking in auth settings so sign-ups and password changes reject passwords found in known leak lists. Existing accounts are unaffected until their next password change.

## Out of scope

- No secret rotation (none exposed).
- No changes to gameplay, content, routes, or the publishable client keys.

## Verification

Re-run the security scan and confirm profile and achievement views still render for a signed-in user.
