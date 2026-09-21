# Mastery Architecture

This document translates the product vision in `VISION.md` into an incremental architecture that can be introduced without replacing the current topic, question, or session systems.

## Goal

Move mAIth from topic-level quiz history toward concept-level mastery while preserving:

- the canonical content registry;
- stable public topic slugs;
- existing question packs and dynamic loading;
- current quiz and result flows;
- Bonafides, MasterMinds, Vault, glossary, formula, and editorial boundaries;
- existing profile/session data during migration.

The first implementation should be deliberately small. The mastery system is an additional semantic layer over existing content, not a rewrite of the content model.

## Core entities

### Concept

A concept is the smallest durable unit that mAIth wants to reason about pedagogically.

Recommended shape:

```ts
interface Concept {
  id: string;
  label: string;
  field: string;
  topics: string[];
  prerequisites: string[];
  related?: string[];
  applications?: string[];
  formulaIds?: string[];
  glossaryIds?: string[];
  thinkerIds?: string[];
  status: "active" | "experimental" | "deprecated";
}
```

Concept IDs are stable public-semantic identifiers. They should not encode database IDs, difficulty, language, or UI location.

A question may map to one primary concept and zero or more supporting concepts.

### Evidence

Evidence is an observation about a learner performing work related to a concept.

Recommended first-pass shape:

```ts
interface MasteryEvidence {
  conceptId: string;
  questionId: string;
  correct: boolean;
  difficulty: "easy" | "hard" | "sota";
  answeredAt: string;
  hintsUsed: number;
  eliminatedOptions?: number;
  responseTimeMs?: number;
}
```

Future challenge types can add evidence without changing the concept model.

### Mastery state

Mastery state is derived from evidence. It should initially remain simple and inspectable.

Recommended first version:

```ts
interface ConceptMastery {
  conceptId: string;
  attempts: number;
  correct: number;
  accuracy: number;
  lastAttemptAt: string | null;
  recentDifficulty: "easy" | "hard" | "sota" | null;
  status: "unseen" | "learning" | "developing" | "strong" | "mastered";
}
```

The product should be able to explain why a status was assigned.

## Relationship to existing taxonomy

The topic registry remains the canonical routing, loading, and presentation layer.

Concepts sit below and across topics.

Example:

```
Linear Algebra
├── vectors
├── matrix multiplication
├── linear independence
├── eigenvalues
└── eigenvectors
    ├── prerequisite: matrix multiplication
    ├── prerequisite: linear independence
    ├── application: principal component analysis
    ├── application: dynamical systems
    └── related formula(s)
```

A concept can belong to multiple topics when the underlying idea genuinely crosses boundaries. That relationship should be explicit rather than achieved by duplicating concept definitions.

## Question mapping

Add optional semantic metadata to the canonical question schema rather than creating a parallel question store.

Preferred direction:

```ts
{
  // existing fields...
  conceptIds?: string[];
}
```

Rules:

- the first entry is the primary concept;
- every referenced concept must exist;
- unavailable compatibility topics do not own concepts;
- special collections may reference concepts without becoming part of the standard quiz pool;
- translation files never change concept mapping.

Initially, only a small representative cohort needs concept IDs. Coverage can expand gradually behind validation.

## Validation

Add a mastery integrity check before relying on the graph in product behavior.

It should eventually fail on:

- duplicate concept IDs;
- unknown prerequisite IDs;
- self-dependencies;
- prerequisite cycles;
- unknown topic references;
- unknown formula/glossary/thinker references;
- question concept references that do not exist;
- deprecated concepts used as primary mappings;
- concepts disconnected from both questions and reference material.

A diagnostic report should also expose:

- concepts with fewer than N mapped questions;
- concepts assessed only at one difficulty;
- high-degree prerequisite bottlenecks;
- topics with poor concept coverage;
- concepts with no explanatory/reference surface.

## Semantic coverage wave 2

The concept graph now extends beyond the original Linear Algebra and Calculus pilots into two fully mapped 24-question topics:

- **Probability & Statistics**: probability rules, Bayesian inference, expectation/variance, distributions, sampling/convergence, dependence/correlation, statistical inference, and information measures.
- **Optimization**: objectives/convexity, gradient descent, stochastic optimization, regularization, generalization/model selection, training stability, and model compression/efficiency.

Every standard question in those two topics carries at least one concept mapping, and every new concept has at least two independent mapped questions. The density rule is intentional: mAIth should not claim concept-level mastery from a semantic label backed by a single question.

The prerequisite graph now crosses topic boundaries where the dependency is pedagogically real. For example:

```
Probability Rules
└── Expectation & Variance
    └── Stochastic Optimization

Continuity
└── Derivatives
    ├── Gradient
    │   └── Gradient Descent
    └── Objectives & Convexity
        └── Gradient Descent
```

Topic Learn pages now render a **Mastery map** before the existing formula/glossary/MasterMinds knowledge cluster. This makes concept units, prerequisites, cross-topic prerequisite links, and applications visible before practice. The graph therefore serves both adaptive behavior and discovery rather than remaining hidden implementation metadata.

## Current evidence implementation

The first runtime evidence layer now lives in `src/domain/mastery`. It is deliberately pure and inspectable:

- standard mapped questions emit one evidence record per concept;
- the first mapped concept is marked primary;
- correctness, difficulty, hint use, 50/50 use, timeout, and skips are preserved;
- unmapped questions emit no concept evidence and continue through the legacy path unchanged;
- evidence is held in quiz state for the current round and reset when a new round begins;
- `deriveConceptMastery` produces deterministic `learning`, `developing`, `strong`, and `mastered` states;
- assisted correct answers remain successful attempts but do not count as independent-correct evidence.

Durable persistence is now specified by `supabase/migrations/20260921035500_mastery_concept_evidence.sql`. The migration introduces append-only `user_concept_evidence`, ties each evidence row to the existing idempotent quiz-session submission, permits only owner reads over the Data API, and keeps writes inside the session transaction. The public RPC is `SECURITY INVOKER`; the privileged implementation lives in a non-exposed `private` schema with an empty search path.

The application sends concept evidence with the existing session payload and Profile derives mastery from raw evidence rather than a separately mutable aggregate. Profile loading deliberately treats a missing evidence relation as an empty mastery history so frontend deployment remains backwards-compatible while the database migration propagates.

The repository-side migration and client contract are ready, but the migration must not be applied to an unrelated Supabase project. The currently connected Supabase project does not match the project ref configured by mAIth, so production application/verification remains pending the correct project connection.

Practice Weak Spots now uses the same semantic layer. Missed/skipped primary concepts are expanded through transitive prerequisites; fresh mapped questions are preferred, immediate repeats are excluded when alternatives exist, and old unresolved-question replay remains the fallback for unmapped content.

## Learner-model computation

Do not begin with a black-box score.

The first mastery estimator should be deterministic and testable. It can combine:

- attempts;
- recent accuracy;
- highest recently demonstrated difficulty;
- recency;
- repeated correct answers;
- hint dependence.

Example policy, not a permanent formula:

- `unseen`: no evidence;
- `learning`: evidence exists but is sparse or mostly incorrect;
- `developing`: repeated success at easy or mixed performance at hard;
- `strong`: repeated recent success including hard evidence;
- `mastered`: sustained high-quality evidence across difficulty and time.

SOTA performance should enrich evidence but should not be required to master foundational concepts.

## First adaptive loop

The first adaptive feature should remain narrow:

**Practice Weak Spots**

Instead of replaying only missed question IDs, it should:

1. identify concepts represented by missed/skipped questions;
2. include unmet prerequisite concepts;
3. choose fresh questions for those concepts when available;
4. avoid immediate repeats unless the bank is too small;
5. explain the selected focus to the learner.

This creates meaningful adaptation without requiring an AI tutor.

## Profile evolution

The current topic heatmap can evolve in stages:

1. retain field/topic summaries;
2. add concept mastery underneath;
3. show prerequisite blockers;
4. show stale mastery separately from weak mastery;
5. show recent improvements;
6. eventually provide a graph view for exploration.

The default view should remain understandable on mobile. The graph is a drill-down, not the only interface.

## Storage strategy

Raw concept evidence is the persistence source of truth. Mastery state remains derived.

The storage contract is:

- append-only `user_concept_evidence` rows owned by the authenticated user;
- one evidence row per session/question/concept, guarded by a uniqueness constraint;
- server timestamps for recency;
- difficulty, answer/skip outcome, correctness, hint use, 50/50 use, timeout state, and primary/supporting concept position;
- atomic insertion inside the idempotent quiz-session transaction;
- no direct client insert/update/delete grant;
- owner-only reads through RLS;
- concept mastery recomputed from evidence in the application so threshold changes do not rewrite history.

The Profile repository pages through the evidence history rather than relying on the Data API's default row limit. A future scale pass may introduce server-side read models or snapshots, but those should remain reconstructable from raw evidence.

## Adaptive sequencing principles

The selector should prefer work that is:

- relevant to the learner’s explicit goal;
- neither trivial nor hopeless;
- informative about uncertain mastery;
- useful for unlocking prerequisites;
- sufficiently varied to prevent memorization.

It should not optimize solely for session length, streak protection, or easy wins.

## Mentor boundary

The Socratic mentor comes after concept evidence exists.

The mentor should receive:

- current question/challenge;
- mapped concepts;
- prerequisite context;
- learner mastery state;
- canonical explanation/hint;
- approved reference content;
- provenance metadata when relevant.

It should not receive unrestricted authority to silently rewrite canonical facts or mastery records.

## Implementation sequence

### Slice 1 — semantic substrate

- add a concept registry;
- map a small high-quality cohort of questions;
- add graph validation;
- generate a concept coverage report;
- no user-visible behavior change.

### Slice 2 — evidence

- record concept IDs in in-session quiz evidence;
- preserve hint, elimination, timeout, difficulty, and skip signals;
- derive concept mastery locally with deterministic thresholds;
- add tests for deterministic status assignment;
- persist raw evidence only after the storage contract is explicitly designed.

### Slice 3 — profile

- expose concept-level mastery;
- show weak concepts and prerequisite blockers;
- preserve the existing field/topic overview.

### Slice 4 — adaptation

- upgrade Practice Weak Spots to select new questions through concept evidence;
- expand weak concepts through transitive prerequisites;
- prefer fresh mapped questions and avoid immediate repeats when possible;
- retain legacy replay as fallback for unmapped questions;
- instrument outcomes after evidence persistence lands.

### Slice 5 — expansion

- grow concept mapping field by field;
- connect formulas, glossary, MasterMinds, and Bonafides;
- add richer challenge types.

### Slice 6 — intelligence

- add grounded mentor behaviors and generated practice only after evaluation gates exist.

## Success criteria

The mastery substrate is succeeding when mAIth can answer, with inspectable evidence:

- What does this learner understand?
- What are they missing?
- What prerequisite is blocking them?
- What should they practice next?
- Why was that practice selected?
- Has the learner demonstrated transfer, or only memorized a question?
- How fresh is the evidence?
- Which canonical content can teach the missing idea?

That capability is the foundation for every larger adaptive, AI, social, and institutional feature in the product vision.
