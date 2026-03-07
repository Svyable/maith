import type { GlossaryTerm } from './types';
import { getLocale } from '@/i18n';

// ── Field term imports ──────────────────────────────────────
// Flat-file fields (single-locale, English-only for now).
// When a field gets translated, move it to a folder with en.ts / es.ts etc.
// Both patterns are valid and coexist cleanly.
import { mathTerms } from './math';
import { physicsTerms } from './physics';
import { csTerms } from './cs';
import { economicsTerms } from './economics';
import { engineeringTerms } from './engineering';
import { biologyTerms } from './biology';
import { chemistryTerms } from './chemistry';
import { quantTerms } from './quant';
import { opticsTerms, commsTerms, semiconductorTerms, materialsTerms } from './applied-sciences';

// ── New physics topic imports ───────────────────────────────
import { statisticalPhysicsTerms } from './statistical-physics';
import { qftTerms } from './quantum-field-theory';
import { condensedMatterTerms } from './condensed-matter';
import { plasmaPhysicsTerms } from './plasma-physics';
import { nonlinearDynamicsTerms } from './nonlinear-dynamics';
import { manyBodyTerms } from './many-body-physics';
import { quantumGravityTerms } from './quantum-gravity';

// ── New math topic imports ──────────────────────────────────
import { complexAnalysisTerms } from './complex-analysis';
import { graphTheoryTerms } from './graph-theory';
import { functionalAnalysisTerms } from './functional-analysis';
import { diffGeometryTerms } from './differential-geometry';
import { numericalMethodsTerms } from './numerical-methods';

// ── Locale-aware field imports (folder pattern) ─────────────
import { earthSpaceTerms_en } from './earth-space/en';
import { earthSpaceTerms_es } from './earth-space/es';

export type { GlossaryTerm };

// ── Locale registry ─────────────────────────────────────────
const LOCALIZED_FIELDS: Record<string, Record<string, GlossaryTerm[]>> = {
  'earth-space': {
    en: earthSpaceTerms_en,
    es: earthSpaceTerms_es,
  },
};

function getLocalizedFieldTerms(field: string): GlossaryTerm[] {
  const byLocale = LOCALIZED_FIELDS[field];
  if (!byLocale) return [];
  const locale = getLocale();
  return byLocale[locale] ?? byLocale.en ?? [];
}

// ── Static (single-locale) terms ────────────────────────────
const STATIC_TERMS: GlossaryTerm[] = [
  ...mathTerms,
  ...physicsTerms,
  ...csTerms,
  ...economicsTerms,
  ...engineeringTerms,
  ...biologyTerms,
  ...chemistryTerms,
  ...quantTerms,
  ...opticsTerms,
  ...commsTerms,
  ...semiconductorTerms,
  ...materialsTerms,
  // New physics topics
  ...statisticalPhysicsTerms,
  ...qftTerms,
  ...condensedMatterTerms,
  ...plasmaPhysicsTerms,
  ...nonlinearDynamicsTerms,
  ...manyBodyTerms,
  ...quantumGravityTerms,
  // New math topics
  ...complexAnalysisTerms,
  ...graphTheoryTerms,
  ...functionalAnalysisTerms,
  ...diffGeometryTerms,
  ...numericalMethodsTerms,
];

// ── Public API ──────────────────────────────────────────────

/** All glossary terms across every field (locale-aware where available) */
export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [
    ...STATIC_TERMS,
    ...Object.keys(LOCALIZED_FIELDS).flatMap(getLocalizedFieldTerms),
  ];
}

/** For backward compat — prefer getAllGlossaryTerms() for locale reactivity */
export const allGlossaryTerms = getAllGlossaryTerms();

/** Terms filtered by field slug */
export function getGlossaryByField(field: string): GlossaryTerm[] {
  if (field === 'all') return getAllGlossaryTerms();
  if (LOCALIZED_FIELDS[field]) return getLocalizedFieldTerms(field);
  return STATIC_TERMS.filter((t) => t.field === field);
}

/** Unique field slugs that have glossary terms */
export function getGlossaryFields(): string[] {
  const staticFields = [...new Set(STATIC_TERMS.map((t) => t.field))];
  const localizedFields = Object.keys(LOCALIZED_FIELDS);
  return [...new Set([...staticFields, ...localizedFields])];
}

/** Look up a single term by ID (useful for cross-linking from questions/formulas) */
export function getGlossaryTermById(id: string): GlossaryTerm | undefined {
  return getAllGlossaryTerms().find((t) => t.id === id);
}

/** Get all terms that link to a given thinker slug */
export function getGlossaryTermsByThinker(thinkerSlug: string): GlossaryTerm[] {
  return getAllGlossaryTerms().filter((t) => t.thinkerLinks?.includes(thinkerSlug));
}

/** Get all terms that reference a given formula slug */
export function getGlossaryTermsByFormula(formulaSlug: string): GlossaryTerm[] {
  return getAllGlossaryTerms().filter((t) => t.formulaLinks?.includes(formulaSlug));
}
