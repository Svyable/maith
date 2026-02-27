import type { GlossaryTerm } from './types';
import { getLocale } from '@/i18n';

// Non-localized field imports (legacy – will be migrated per-field over time)
import { mathTerms } from './math';
import { physicsTerms } from './physics';
import { csTerms } from './cs';
import { economicsTerms } from './economics';
import { engineeringTerms } from './engineering';
import { biologyTerms } from './biology';
import { chemistryTerms } from './chemistry';
import { quantTerms } from './quant';
import { opticsTerms, commsTerms, semiconductorTerms, materialsTerms } from './applied-sciences';

// Locale-aware field imports
import { earthSpaceTerms_en } from './earth-space/en';
import { earthSpaceTerms_es } from './earth-space/es';

export type { GlossaryTerm };

// Registry of locale-aware fields
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

// Legacy (non-localized) terms
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
];

/** All glossary terms across every field (locale-aware for migrated fields) */
export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [
    ...STATIC_TERMS,
    ...Object.keys(LOCALIZED_FIELDS).flatMap(getLocalizedFieldTerms),
  ];
}

/** For backward compat */
export const allGlossaryTerms = getAllGlossaryTerms();

/** Terms filtered by field slug */
export function getGlossaryByField(field: string): GlossaryTerm[] {
  if (field === 'all') return getAllGlossaryTerms();

  // Check localized first
  if (LOCALIZED_FIELDS[field]) return getLocalizedFieldTerms(field);

  // Fallback to static
  return STATIC_TERMS.filter((t) => t.field === field);
}

/** Unique field slugs that have glossary terms */
export function getGlossaryFields(): string[] {
  const staticFields = [...new Set(STATIC_TERMS.map((t) => t.field))];
  const localizedFields = Object.keys(LOCALIZED_FIELDS);
  return [...new Set([...staticFields, ...localizedFields])];
}
