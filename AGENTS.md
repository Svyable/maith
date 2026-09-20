# AGENTS.md

## Objective

Increase mAIth's rate of **correct, validated, mergeable improvement**. Optimize for end-to-end throughput, not visible activity.

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
   - Let GitHub Actions provide the final objective gate where local execution is unavailable.

5. **Keep PRs conflict-light and mergeable.**
   - Reuse/update an existing compatible PR when possible.
   - Prefer narrow ownership boundaries and additive/reversible changes.
   - Do not add human-review blockers merely as process; rely on tests, schemas, generated inventories, and CI protections.
   - Enable auto-merge when repository settings and required checks allow it.

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

Then rely on App CI for the full test/build gate.

### SEO/reference changes

Iterate with:

```bash
bun run validate:seo
```

Run/build prerender validation when the changed route or metadata surface requires it.

## Throughput metric

Prefer improvements that reduce **time from task selection → validated merge** while keeping regression risk flat or lower. Useful optimizations include fewer redundant CI runs, fewer overlapping PRs, targeted validation, generated consistency checks, smaller conflict surfaces, and parallel work on truly independent slices.
