# mAIth

**Solve mAIth = Solve everything.**

mAIth is a game-driven system for mastering difficult ideas across mathematics, science, engineering, computing, finance, and adjacent quantitative disciplines.

The product combines fast testing, structured learning, reference material, historical context, professional pathways, frontier content, multilingual coverage, and competitive progression. The long-term goal is not to become a larger question bank; it is to become a living, evidence-based map of human knowledge and learner mastery.

## Mission

Make difficult thinking addictive, measurable, trustworthy, and accessible to anyone.

See [VISION.md](./VISION.md) for the long-term product thesis and [docs/mastery-architecture.md](./docs/mastery-architecture.md) for the first technical path toward concept-level mastery.

## Product surfaces

- **Test Time** — timed adaptive-ready quiz gameplay across canonical fields and topics.
- **Learn** — learning pages and topic exploration.
- **MasterMinds** — challenges and context organized around influential thinkers.
- **Bonafides** — professional and course-oriented collections.
- **Formulas** — important equations and mathematical relationships.
- **Glossary** — core terminology and concept reference.
- **Vault** — explicitly separated historical, classified, disputed, or unusual material.
- **Profile** — learner history, performance, and evolving mastery.
- **Leaderboard** — competitive progression.
- **SOTA** — current frontier material with provenance and freshness metadata.

## Architecture

mAIth uses a canonical content registry rather than duplicating taxonomy across the application.

Key documents:

- [Content architecture](./docs/content-architecture.md)
- [Site structure](./docs/site-structure.md)
- [Content standards](./docs/content-standards.md)
- [Content enhancement report](./docs/content-enhancement-report.md)
- [Localization](./docs/localization.md)
- [Mastery architecture](./docs/mastery-architecture.md)

Standard quiz questions remain in `src/content/**`. Lightweight canonical metadata, loader ownership, compatibility aliases, and field relationships live in configuration registries. Special collections such as Bonafides, MasterMinds, Vault, formulas, glossary, and editorial material retain explicit content boundaries.

## Quality philosophy

mAIth treats structural integrity and editorial quality as separate gates.

The project validates:

- canonical topic and field ownership;
- stable aliases and historical deep-link compatibility;
- question IDs and dynamic loader integrity;
- special-collection boundaries;
- generated content counts and inventory drift;
- localization completeness;
- question-quality regressions;
- site navigation and route integrity;
- SEO generation and prerender output.

Current content work prioritizes balanced coverage, stronger distractors, provenance for current/frontier claims, and reduction of historical quality debt rather than raw question-count growth.

## 10x execution protocol

mAIth is optimized for **safe throughput**, not serial ceremony. Agents and maintainers should minimize time-to-validated-change while preserving the quality gates above.

- **Parallelize discovery.** Read/search independent files, recent commits, and open PRs concurrently when the tooling supports it.
- **Partition work.** Prefer independent, non-overlapping slices that can be developed and validated without waiting on each other.
- **Batch coherent edits.** Make the smallest complete change that delivers value; avoid one-file-at-a-time conversational loops.
- **Validate narrowly first.** Run the cheapest relevant check while iterating, then the required CI/full validation before merge.
- **Reuse work in flight.** Update an existing compatible branch/PR instead of creating competing PRs for the same surface.
- **Let machines gate machines.** CI, schemas, tests, inventories, and quality ratchets should decide mergeability wherever possible.
- **Cancel obsolete work.** Superseded CI runs are automatically canceled so compute and attention stay on the newest commit.
- **Keep main moving.** Prefer mergeable, reversible increments and auto-merge when protections and CI allow it.
- **Do not manufacture work.** If there is no meaningful safe improvement, skip the change rather than producing churn.

Repository-specific agent instructions live in [AGENTS.md](./AGENTS.md).

## Development

Install dependencies and start the Vite app:

```bash
bun install
bun run dev
```

Core checks:

```bash
bun run validate:all-content
bun run validate:site
bun run validate:seo
bun test
bun run build
```

Useful content commands:

```bash
bun run generate:question-loaders
bun run generate:content-stats
bun run check:locales
bun run report:locales
bun run report:concepts
bun run audit:quality
```

## Strategic direction

The long-term product spine is:

**Human Knowledge Graph → Learner Model → Adaptive Engine → Challenge Engine → Socratic Mentor → Interactive Labs → Social Competition → Verified Mastery**

The implementation rule is intentionally conservative: preserve the rigor of the existing corpus and registries, introduce concept-level semantics incrementally, derive inspectable learner evidence, then build adaptive and AI experiences on top.

See [roadmap.md](./roadmap.md) for the staged execution plan.
