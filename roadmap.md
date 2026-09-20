# mAIth Roadmap

The roadmap is organized around strategic horizons. Existing content-quality work remains the prerequisite for the mastery and intelligence layers.

## Horizon 1 — Foundation

### Content integrity and quality

- [x] Canonical topic registry and explicit content-kind boundaries
- [x] Generated question loaders and content inventory
- [x] Structural content validation
- [x] Machine-readable question-quality audit
- [x] Provenance-ready question schema
- [x] Localization regression baseline and validation
- [x] Site structure/navigation integrity gate
- [ ] Continue reducing historical hard-error quality debt
- [ ] Finish thin-topic balancing, with Engineering and Human Sciences prioritized
- [ ] Complete Vault evidentiary-boundary cleanup
- [ ] Continue distractor hardening and answer-position balancing
- [ ] Expand synchronized multilingual question coverage
- [ ] Keep SOTA/current claims sourced and freshness-reviewed

### Product/documentation foundation

- [x] Define product mission and long-term vision
- [x] Define initial mastery architecture
- [ ] Keep README, architecture docs, and generated inventory aligned with major product changes

## Horizon 2 — Mastery

### Semantic substrate

- [ ] Add a canonical concept registry below the topic layer
- [ ] Define prerequisite, related, and application relationships
- [ ] Add optional question-to-concept mappings
- [ ] Add concept graph integrity validation
- [ ] Generate concept coverage diagnostics
- [ ] Map a small, high-quality pilot cohort before broad rollout

### Learner evidence

- [ ] Record concept IDs alongside quiz evidence
- [ ] Define deterministic, explainable concept mastery states
- [ ] Include recency, difficulty, repeated success, and hint dependence
- [ ] Add unit tests for mastery-state derivation
- [ ] Preserve raw evidence as the source of truth

### Profile

- [ ] Add concept-level mastery below field/topic summaries
- [ ] Surface prerequisite blockers
- [ ] Distinguish weak, unseen, and stale knowledge
- [ ] Show improvement and recent evidence

## Horizon 3 — Intelligence

- [ ] Upgrade Practice Weak Spots to select fresh questions by concept
- [ ] Add prerequisite-aware sequencing
- [ ] Add repeat avoidance and uncertainty-aware practice selection
- [ ] Add lightweight diagnostics for new learners/goals
- [ ] Introduce goal-driven learning journeys
- [ ] Add a grounded Socratic mentor only after concept evidence is available
- [ ] Add evaluation gates for generated hints, explanations, and practice

## Horizon 4 — Interaction

- [ ] Support numerical/free-response challenges
- [ ] Add ordering and derivation-step challenges
- [ ] Add proof/reasoning challenge primitives
- [ ] Add code-based challenges where appropriate
- [ ] Add interactive diagrams and simulations
- [ ] Connect formulas and glossary entries to manipulable examples
- [ ] Measure transfer separately from recognition/memorization

## Horizon 5 — Network

- [ ] Daily global challenge
- [ ] Topic-specific asynchronous duels
- [ ] Team/cohort leaderboards
- [ ] Cooperative multi-step problems
- [ ] Seasonal field leagues
- [ ] Competition metrics that reward improvement, breadth, and depth

## Horizon 6 — Institution

- [ ] Teacher/mentor dashboards built on concept mastery
- [ ] Assign concepts, journeys, or challenge sets
- [ ] Cohort misconception analysis
- [ ] Organization/classroom progress views
- [ ] Exportable evidence of demonstrated mastery
- [ ] Bonafides pathways with explicit capability evidence

## Horizon 7 — Frontier

- [ ] Treat SOTA content as versioned living knowledge
- [ ] Add review queues driven by `factualAsOf` and `reviewedAt`
- [ ] Connect reproducible mAIth Research experiments to educational content
- [ ] Add frontier explainers with explicit uncertainty/provenance
- [ ] Explore public knowledge-graph and mastery APIs only after internal semantics stabilize

## Release discipline

Every horizon inherits the existing quality rules.

Content and architecture changes should continue to pass the relevant gates:

```bash
bun run validate:all-content
bun run validate:site
bun run check:locales
bun test
bun run build
```

SEO-affecting changes should also pass:

```bash
bun run validate:seo
```

The guiding constraint is simple: **do not trade trust and maintainability for feature velocity.**
