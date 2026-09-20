# Fix the two backend findings from the audit

Nothing in the repository needs changing, and no credential needs rotating. Both fixes are backend settings/rules.

## 1. Restrict who can read achievement records

Right now any signed-in person can read every achievement record in the system. The app only ever shows a person their own badge wall.

Change: replace the read rule so a signed-in person can read their own achievement rows only. Recording new achievements, and the existing blocks on editing and deleting, stay exactly as they are.

If you'd rather other people's achievements stay visible on public profiles later, say so and I'll scope reads to publicly visible profiles instead.

## 2. Turn on leaked-password checking

Enable the breach-password check so new sign-ups and password changes reject passwords that already appear on known leak lists. Existing accounts keep working; the check applies the next time a password is set.

## Not changing

Content, quiz behaviour, scoring, routes, sign-in methods, the published client keys, or performance.

## Verification

Re-run the security scan, then sign in and confirm the profile badge wall and achievement recording still work.
