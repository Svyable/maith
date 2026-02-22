
# Thinker Domain + Field Tags Alignment

## Overview
Keep the existing human-readable `domain` string on every thinker (it's great for display), but add a new `fields: string[]` property that maps each thinker to one or more field slugs from `FIELDS`. This enables structured filtering by field while preserving the descriptive domain label.

## Phase 1: Schema + Tag All 60 Thinkers

### 1.1 Update `ThinkerMeta` interface
Add `fields: string[]` to the interface in `src/config/thinkers.ts`. Each entry uses slugs from the field registry (`math`, `physics`, `cs`, `quant`, `engineering`, `economics`, `chemistry`, `biology`, `earth-space`, `data-science`, `law`, `medical`, `cfa`, `cpa`, `actuarial`, `mba`).

### 1.2 Tag every thinker with field slugs

| Thinker | domain (kept) | fields (new) |
|---------|--------------|-------------|
| Pythagoras | Geometry & Number Theory | `['math']` |
| Euclid | Geometry & Logic | `['math']` |
| Archimedes | Calculus & Mechanics | `['math', 'physics', 'engineering']` |
| Al-Khwarizmi | Algebra & Algorithms | `['math', 'cs']` |
| Newton | Calculus & Mechanics | `['math', 'physics']` |
| Leibniz | Calculus & Logic | `['math', 'cs']` |
| Euler | Analysis & Graph Theory | `['math']` |
| Gauss | Number Theory & Statistics | `['math']` |
| Lovelace | Computing & Algorithms | `['cs']` |
| Riemann | Differential Geometry | `['math']` |
| Poincare | Topology & Chaos | `['math', 'physics']` |
| Curie | Radioactivity & Nuclear Physics | `['physics', 'chemistry']` |
| Ramanujan | Pure Mathematics | `['math']` |
| Fermat | Number Theory & Probability | `['math']` |
| Noether | Abstract Algebra & Physics | `['math', 'physics']` |
| Hilbert | Foundations & Geometry | `['math']` |
| Kovalevskaya | Analysis & Mechanics | `['math', 'physics']` |
| Einstein | Relativity & Quantum Theory | `['physics']` |
| Godel | Mathematical Logic | `['math', 'cs']` |
| Dirac | Quantum Mechanics | `['physics']` |
| Turing | Computability | `['cs', 'math']` |
| Shannon | Information Theory | `['cs', 'math', 'engineering']` |
| Feynman | Quantum Physics & Computing | `['physics', 'cs']` |
| Kolmogorov | Probability & Complexity | `['math', 'cs']` |
| Von Neumann | Game Theory & Architecture | `['math', 'cs', 'economics']` |
| Hawking | Black Holes & Cosmology | `['physics', 'earth-space']` |
| Pearl | Causal Inference | `['cs', 'math']` |
| Simons | Quantitative Finance | `['quant', 'math']` |
| Hinton | Deep Learning | `['cs']` |
| Bengio | Representation Learning | `['cs']` |
| LeCun | Computer Vision | `['cs']` |
| Sutton | Reinforcement Learning | `['cs']` |
| Vapnik | Statistical Learning | `['cs', 'math']` |
| Erdos | Combinatorics & Number Theory | `['math']` |
| Raman | Optics & Molecular Physics | `['physics', 'chemistry']` |
| Chern | Differential Geometry & Topology | `['math']` |
| Grothendieck | Algebraic Geometry & Category Theory | `['math']` |
| Kashiwara | Algebraic Analysis & Representation Theory | `['math']` |
| Schmidhuber | Recurrent Networks & Creativity | `['cs']` |
| Linnainmaa | Automatic Differentiation | `['cs', 'math']` |
| Goodfellow | Generative AI | `['cs']` |
| Hassabis | AGI & Protein Folding | `['cs', 'biology']` |
| Vaswani | Sequence Modeling | `['cs']` |
| Karpathy | Neural Networks & Autonomy | `['cs', 'engineering']` |
| Altman | AGI Strategy & Scaling | `['cs']` |
| Amodei | AI Safety & Alignment | `['cs']` |
| Ng | ML Education & Data-Centric AI | `['cs', 'data-science']` |
| Fei-Fei Li | Computer Vision & Spatial AI | `['cs']` |
| Ilya | Deep Learning & Superintelligence | `['cs']` |
| Tao | Harmonic Analysis & Number Theory | `['math']` |
| Mirzakhani | Geometry & Dynamics | `['math']` |
| Zhang | Analytic Number Theory | `['math']` |
| Goldwasser | Cryptography & Complexity | `['cs', 'math']` |
| Birkar | Birational Geometry | `['math']` |
| Jeff Dean | Distributed Systems & ML Infra | `['cs', 'engineering']` |
| Kai-Fu Lee | Speech Recognition & AI Strategy | `['cs']` |
| Kozyrkov | Decision Intelligence & Applied ML | `['cs', 'data-science']` |
| Suleyman | AI Safety & Containment | `['cs']` |
| Gebru | AI Ethics & Fairness | `['cs', 'law']` |
| Hilbert | Foundations & Geometry | `['math']` |
| Pascal | Probability & Mechanics | `['math', 'physics']` |
| Galois | Abstract Algebra | `['math']` |
| Hamilton | Algebra & Mechanics | `['math', 'physics']` |
| Abel | Algebra & Analysis | `['math']` |
| Scholze | Arithmetic Geometry | `['math']` |
| Venkatesh | Number Theory & Dynamics | `['math']` |
| Shakuntala Devi | Mental Arithmetic & Number Theory | `['math']` |
| Demaine | Computational Geometry & Origami | `['cs', 'math']` |

## Phase 2: Update Filters UI

### 2.1 `ThinkerFilters.tsx`
- Keep era filter at top (unchanged)
- Replace the domain filter with a **field filter** using `FIELDS` registry
- Filter chips show field emoji + label (e.g., "📐 Mathematics", "⚛️ Physics")
- A thinker matches if any of its `fields` includes the selected field slug
- Keep "All Fields" as default

### 2.2 `ThinkerGallery.tsx`
- Move field filter **below** the thinker cards (per user's previous request)
- Update filter predicate: `thinker.fields.includes(selectedField)`
- Derive available fields dynamically from filtered thinkers (only show fields that have matching thinkers)
- Show thinker count per field on chips

### 2.3 `ThinkerCard.tsx`
- Keep `domain` as the primary descriptive text (human-readable)
- Add small field badges below the domain text using field emojis from `FIELDS`

## Phase 3: Files Modified

```text
src/config/thinkers.ts
  - Add `fields: string[]` to ThinkerMeta
  - Add fields array to all 60 thinkers
  - Update exported filter helpers

src/components/thinkers/ThinkerFilters.tsx
  - Import FIELDS from config
  - Replace domain-based filter with field-based filter
  - Use field emoji + label for chips

src/components/thinkers/ThinkerGallery.tsx
  - Move field filter below thinker cards
  - Update filter logic for fields array matching
  - Pass field-based props instead of domain strings

src/components/ThinkerCard.tsx
  - Import FIELD_MAP
  - Render field emoji badges from thinker.fields
```

## Key Design Decisions
- **Keep `domain` as-is**: The free-text domain stays for rich display ("Geometry & Number Theory" reads better than "Mathematics")
- **Add `fields` alongside**: Structured array enables filtering, stats, and future cross-linking with the topic/field system
- **No breaking changes**: Everything is additive; existing code that reads `domain` still works
- **Scalable**: Adding a new thinker just requires picking field slugs from the existing registry
