# Development operations

## Source of truth

`Svyable/maith` on GitHub is the canonical source of truth for application code, content, database migrations, automation instructions, CI/CD policy, and development history.

All development work must happen through GitHub. Agents should inspect current `main`, open pull requests, recent commits, and repository instructions before making changes.

## Lovable boundary

Lovable is **passive hosting/deployment infrastructure only** while the current site still depends on it.

Do not use:

- Lovable agents or chat;
- Lovable planning mode;
- Lovable code editing or refactoring;
- Lovable-generated audits that mutate the repository;
- Lovable credits for enhancements;
- Lovable as an ad hoc database/schema mutation surface.

Do not commit `.lovable/plan*` artifacts. Hosting/runtime files that the deployed application genuinely needs may remain, but Lovable-generated planning/work artifacts are not part of the development workflow.

## Normal change path

1. Read current `main`, open PRs, and `AGENTS.md`.
2. Create or reuse a narrowly scoped GitHub branch.
3. Make the smallest coherent change directly through GitHub.
4. Run the cheapest relevant validation while iterating.
5. Open/update a pull request.
6. Let `merge-gate` run the required source-policy and relevant validation jobs.
7. Enable GitHub auto-merge when the PR is non-draft, correctly scoped, mergeable, review-clear, and the required checks are successful.
8. Treat the hosting layer as a downstream consumer of the merged repository state.

## Database changes

Schema and policy changes must be represented as SQL migrations under `supabase/migrations/**`.

A database change is not complete merely because a migration file exists. The production application and production database should be verified after the deployment mechanism applies the migration. Until a GitHub-controlled database deployment path exists, do not hide manual/provider-side mutations behind an agent tool; keep the repository migration as the auditable source and report any deployment step that still requires external execution.

## Secrets and public client configuration

Never commit server secrets, service-role keys, database passwords, private keys, PATs, or third-party secret API keys.

Browser-facing publishable configuration is not treated as a secret merely because it appears in `.env`; its safety depends on backend authorization such as Supabase RLS and RPC policy. Any new credential must be classified before it is committed.

## CI and merge policy

`.github/workflows/merge-gate.yml` is the stable required check. It:

- rejects Lovable-generated development commits and planning artifacts;
- detects which product surfaces changed;
- runs the relevant validators in parallel;
- avoids duplicate production builds where possible;
- emits the single final `merge-gate` result.

Do not configure path-sensitive subchecks as independently required checks.

## If a Lovable-authored mutation appears

Do not automatically build on it. Inspect the exact diff first.

- Revert planning artifacts or unintended repository mutations.
- Preserve a legitimate code/database fix only after it is represented and reviewed as ordinary GitHub-tracked work.
- Continue subsequent work through GitHub only.
