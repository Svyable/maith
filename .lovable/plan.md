# Bonafides: Professional Certification Hub

## Overview

Create a dedicated **Bonafides** section that isolates all professional certification and credentialing content (CFA, CPA, Actuarial, ) from the general quiz pool into its own route, page, and content architecture -- mirroring how Thinkers and Vault already operate as separate game modes.

## What Moves to Bonafides attempt to be as robust as possible 


| Credential                                                                                                                                                                                                                                                                                                    | Current Field Slug | Topics                             | &nbsp; | &nbsp; | &nbsp; |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------- | ------ | ------ | ------ |
| CFA Program                                                                                                                                                                                                                                                                                                   | `cfa`              | cfa-level1, cfa-level2, cfa-level3 | &nbsp; | &nbsp; | &nbsp; |
| &nbsp;                                                                                                                                                                                                                                                                                                        | &nbsp;             | &nbsp;                             | &nbsp; | &nbsp; | &nbsp; |
| Make up proper sulgs and topics to match these exams                                                                                                                                                                                                                                                          | &nbsp;             | &nbsp;                             | &nbsp; | &nbsp; | &nbsp; |
| **Securities Industry Essentials Exam (SIE)** **FINRA Representative-level Exams** **FINRA Principal-level Exams** **Municipal Securities Rulemaking Board (MSRB) Exams** **National Futures Association (NFA) Exams** **North American Securities Administrators Association (NASAA) Exams** | &nbsp;             | &nbsp;                             | &nbsp; | &nbsp; | &nbsp; |


  



| Exam code  | Exam title                     | Introduced | Preceded by   | Ceased       | Superseded by | SOA eqv. |
| ---------- | ------------------------------ | ---------- | ------------- | ------------ | ------------- | -------- |
| **1**      | Probability                    | 2005       | Exam 1 (2000) | Current exam | **P**         |          |
| **2**      | Financial Mathematics          | 2005       | Exam 2 (2000) | Current exam | **FM**        |          |
| **MAS-I**  | Modern Actuarial Statistics I  | 2018       | Exam S        | Current exam | —N/a          |          |
| **MAS-II** | Modern Actuarial Statistics II | 2018       | Exam 4 (2005) | Current exam | —             |          |



| Exam code | Exam title                                | Introduced | Preceded by                 | Ceased       | Superseded by |
| --------- | ----------------------------------------- | ---------- | --------------------------- | ------------ | ------------- |
| **P**     | Probability                               | 2005       | Course 1                    | Current exam |               |
| **FM**    | Financial Mathematics                     | 2005       | Course 2                    | Current exam |               |
| **FAM**   | Fundamentals of Actuarial Mathematics     | 2023       | Part of exams LTAM and STAM | Current exam |               |
| **SRM**   | Statistics for Risk Modeling              | 2018       | *None*                      | Current exam |               |
| **ALTAM** | Advanced Long-Term Actuarial Mathematics  | 2023       | Part of exam LTAM           | Current exam |               |
| **ASTAM** | Advanced Short-Term Actuarial Mathematics | 2023       | Part of exam STAM           | Current exam |               |
| **PA**    | Predictive Analytics                      | 2018       | *None*                      | Current exam |               |


  
  
  
Architecture

### 1. New Content Aggregator

Create `src/content/bonafides/index.ts` that re-exports all professional certification questions from existing content directories (cfa/, cpa/, actuarial/, mba/, law/, medical/, data-science/). No content files move -- just a new aggregation layer.

### 2. Bonafides Config Registry

Create `src/config/bonafides.ts` defining a `BonafideMeta` interface (slug, label, emoji, description, topics[], color, sections for sub-areas). This mirrors how `src/config/thinkers.ts` and `src/config/vault.ts` work as standalone registries.

### 3. Remove from General Pool

- Remove the 7 professional credential spreads from `src/content/index.ts` (`allQuestions`)
- Remove the 7 field entries from `src/config/fields.ts` (`FIELDS` array)
- This keeps the main quiz focused on academic/scientific domains

### 4. Bonafides Gallery Component

Create `src/components/bonafides/BonafideGallery.tsx` -- a card-based selector showing each credential with its emoji, description, and topic count. Users pick a credential, then enter a quiz scoped to that credential's topics. Pattern follows ThinkerGallery.

### 5. Bonafides Quiz Hook

Create `src/hooks/useBonafideQuiz.ts` -- a thin wrapper over the quiz domain engine (like `useThinkerQuiz`) that fetches questions only from the bonafides pool instead of `allQuestions`.

### 6. Bonafides Page

Create `src/pages/Bonafides.tsx` with the gallery -> quiz -> results flow, following the exact same screen-state pattern as `src/pages/Thinkers.tsx` and `src/pages/Vault.tsx`.

### 7. Routing and Navigation

- Add `/bonafides` route in `App.tsx`
- Add navigation link in `HomeScreen.tsx` alongside existing Thinkers, Vault, Formulas, Glossary links
- Add lazy import for the new page

## File Changes Summary


| Action | File                                                          |
| ------ | ------------------------------------------------------------- |
| Create | `src/content/bonafides/index.ts`                              |
| Create | `src/config/bonafides.ts`                                     |
| Create | `src/components/bonafides/BonafideGallery.tsx`                |
| Create | `src/hooks/useBonafideQuiz.ts`                                |
| Create | `src/pages/Bonafides.tsx`                                     |
| Edit   | `src/content/index.ts` -- remove 7 credential imports/spreads |
| Edit   | `src/config/fields.ts` -- remove 7 credential field entries   |
| Edit   | `src/App.tsx` -- add /bonafides route                         |
| Edit   | `src/components/HomeScreen.tsx` -- add Bonafides nav card     |


## Scalability

Adding a new credential (e.g., FRM, Series 7, PE Exam) requires only:

1. Create `src/content/<slug>/questions.ts` + `index.ts`
2. Add entry to `src/config/bonafides.ts`
3. Import and spread in `src/content/bonafides/index.ts`

No changes needed to pages, hooks, or routing -- it auto-discovers from the registry.  
  
  
**Core Changes**

- **Aggregate Content**: Create `src/content/bonafides/index.ts` re-exporting credential-specific questions:
  ```
  text
  ```
  `export { default as questions } from './actuarial';`  
  `export { default as questions } from './cfa';`  
  `// ... cpa, series7, etc. (lazy-load for perf)`  

  No file moves—pure aggregation.​
- **Config Registry**: `src/config/bonafides.ts`:
  ```
  text
  ```
  `export interface BonafideMeta {`  
    `slug: string;`  
    `label: string;`  
    `emoji: string;`  
    `description: string;`  
    `topics: string[];`  
    `color: string;`  
    `sections?: string[]; // e.g., ['prelim', 'advanced']`  
  `}`  
    
  `export const BONAFIDES: BonafideMeta[] = [`  
    `{`  
      `slug: 'actuarial',`  
      `label: 'Actuarial Exams',`  
      `emoji: '📈',`  
      `description: 'SOA/CAS prelims to ACAS/ASA: P, FM, MAS-I/II, FAM/SRM.',`  
      `topics: ['actuarial-probability', 'actuarial-finmath', 'actuarial-loss', 'actuarial-stats-risk', 'actuarial-long-short-term'],`  
      `color: '#4A90E2',`  
      `sections: ['Prelim Exams', 'Advanced Modeling']`  
    `},`  
    `// CFA: ['cfa-ethics', 'cfa-equity', 'cfa-portfolio']`  
    `// Series7: ['series7-general-securities']`  
    `// ... auto-discover others from existing slugs`  
  `];`  

  Actuarial slugs map directly to exams: `actuarial-probability` (Exam P/1), `actuarial-finmath` (FM/2), `actuarial-loss` (loss models/credibility).

## **Purge from General Pool**


| **File**               | **Change**                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `src/content/index.ts` | Remove spreads for `cfa`, `actuarial`, `cpa`, `series7`, `series63`, `sie`, `series65` (7 total). Keep `allQuestions` academic-only. |
| `src/config/fields.ts` | Delete those 7 entries from `FIELDS` array.                                                                                          |


## **New Components & Hooks**

- **Gallery**: `src/components/bonafides/BonafideGallery.tsx` – Grid of cards from `BONAFIDES`. Click → `useRouter('/bonafides/[slug]')`. Matches `ThinkerGallery` pattern (emoji + topic count badges).
- **Quiz Hook**: `src/hooks/useBonafideQuiz.ts`:
  ```
  text
  ```
  `import { useQuiz } from '@/domain/quiz/useQuiz';`  
  `import { BONAFIDES } from '@/config/bonafides';`  
    
  `export const useBonafideQuiz = (slug: string) => {`  
    `const meta = BONAFIDES.find(b => b.slug === slug);`  
    `return useQuiz({`  
      `questions: import@/content/bonafides/${slug}), // dynamic import`  
      `filterTopics: meta?.topics,`  
      `mode: 'bonafide' // for localStorage key`  
    `});`  
  `};`  

  Reuses your universal quiz engine—no duplication.​
- **Page**: `src/pages/Bonafides.tsx` – State machine: gallery → quiz → results (exact `<ScreenState>` pattern from Thinkers.tsx).

## **Routing & Nav**


| **File**                        | **Edit**                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                   | `routes: { '/bonafides': lazy(() => import('@/pages/Bonafides')) }`                               |
| `src/components/HomeScreen.tsx` | Add nav card: `{ emoji: '🏆', label: 'Bonafides', path: '/bonafides' }` alongside Thinkers/Vault. |


## **Scalability Boost**

- New credential? Add `src/content/<slug>/questions.ts` (e.g., 20–50 Qs per topic), entry in `BONAFIDES`, dynamic import handles rest.
- Actuarial expansion: Add sub-slugs like `actuarial-mas-i` (prob models, stats) for MAS-I/II depth. Exams current as of 2026: SOA (P, FM, FAM, SRM, ALTAM, ASTAM, PA); CAS (MAS-I/II 4x/year, Exams 5–9 2x/year).