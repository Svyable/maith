# AGENTS.md

## Objective

Increase mAIth's rate of **correct, validated, mergeable improvement**. Optimize for end-to-end throughput, not visible activity.

## Execution boundary

GitHub is the sole development and mutation surface for mAIth.

- Use the connected GitHub repository `Svyable/maith` for all source reads/writes, branches, commits, pull requests, reviews, CI inspection, and merges.
- Do **not** use Lovable agents, Lovable chat, Lovable planning mode, Lovable code editing, or Lovable credits for enhancements.
- Lovable may remain passive hosting/deployment infrastructure until it is replaced. Do not invoke Lovable to author, plan, refactor, audit-and-fix, or mutate the application.
- Track database/schema changes as reviewable SQL migrations under `supabase/migrations/**`. Do not use Lovable as an ad hoc database-mutation surface.
- Do not commit Lovable planning artifacts such as `.lovable/plan*`.
- Keep credentials out of Git. Browser-public configuration may remain client-visible by design; server secrets belong in provider/GitHub secret stores.
- Prefer GitHub auto-merge when the repository settings, `merge-gate`, mergeability, and review state objectively allow it.

## 10x operating rules

1. **Start from current reality.**
   - Inspect the default branch, recent commits, and open PRs before changing anything.
   - Do not duplicate work that is merged, in flight, or already superseded.

2. **Parallelize independent work.**
   - Batch independent reads, searches, and checks.
   - Split broad work into non-overlapping file/topic slices whenever that avoids coordination.
   - Never parallelize writes to the same file or dependent operations that require ordered SHAs.

3. **Prefer one coherent batch over many tiny loops.**
   - Gather enough context to make the edit once.
   - Change the smallest set of files that fully solves the task.
   - Avoid cosmetic churn, drive-by refactors, and unrelated cleanup.

4. **Use a validation funnel.**
   - During iteration, run the cheapest check that can disprove the change.
   - Before merge, run the repository checks relevant to the changed surface.
   - GitHub's stable required check is `merge-gate`; do not configure path-filtered subchecks as independently required.
   - Let GitHub Actions provide the final objective gate where local execution is unavailable.

5. **Keep PRs conflict-light and mergeable.**
   - Reuse/update an existing compatible PR when possible.
   - Prefer narrow ownership boundaries and additive/reversible changes.
   - Do not add human-review blockers merely as process; rely on tests, schemas, generated inventories, and CI protections.
   - Enable auto-merge when repository settings and the `merge-gate` check allow it.

6. **Treat failures as routing information.**
   - Fix deterministic test/schema/content failures directly.
   - Re-run only the failed CI job when supported instead of restarting successful work.
   - If a failure is unrelated and pre-existing, document it rather than expanding scope without evidence.

7. **Protect content quality while scaling volume.**
   - For question-set work, prioritize mathematical correctness, concept coverage, meaningful variation, plausible distractors, balanced difficulty, and concise explanations.
   - Preserve canonical IDs, registries, loaders, localization expectations, and generated inventories.
   - Do not increase raw question count at the expense of correctness or redundancy.

8. **Finish or stop.**
   - A run should end in a validated commit/PR, a clean no-op because no meaningful safe change exists, or a precise blocker.
   - Do not create placeholder PRs, speculative TODO files, or filler changes merely to show progress.

## CI/CD contract

`.github/workflows/merge-gate.yml` is the single PR orchestration layer. It always emits the stable `merge-gate` status, enforces the GitHub-only source policy, and calls the content, site, SEO, and app workflows only when their file surfaces changed. The specialized workflows are reusable/manual workflows rather than separately path-filtered PR gates.

For repository protection, require only `merge-gate` on `main`. This keeps required checks deterministic for docs-only and narrowly scoped PRs while still running all relevant validation in parallel.

## Fast path by change type

### Content-only question changes

Iterate with:

```bash
bun run validate:ci
```

Use additional targeted reports/audits only when the content area requires them. CI is the final merge gate.

### Site/UI changes

Iterate with the relevant Vitest target or:

```bash
bun run validate:site
```

Then rely on the merge gate for the full required PR check.

### SEO/reference changes

Iterate with:

```bash
bun run validate:seo
```

Run/build prerender validation when the changed route or metadata surface requires it.

## Throughput metric

Prefer improvements that reduce **time from task selection → validated merge** while keeping regression risk flat or lower. Useful optimizations include fewer redundant CI runs, fewer overlapping PRs, targeted validation, generated consistency checks, smaller conflict surfaces, and parallel work on truly independent slices.
