import type { GlossaryTerm } from './types';
import { mathTerms } from './math';
import { physicsTerms } from './physics';
import { csTerms } from './cs';
import { economicsTerms } from './economics';
import { engineeringTerms } from './engineering';
import { biologyTerms } from './biology';
import { chemistryTerms } from './chemistry';
import { earthSpaceTerms } from './earth-space';
import { quantTerms } from './quant';

export type { GlossaryTerm };

/** All glossary terms across every field */
export const allGlossaryTerms: GlossaryTerm[] = [
  ...mathTerms,
  ...physicsTerms,
  ...csTerms,
  ...economicsTerms,
  ...engineeringTerms,
  ...biologyTerms,
  ...chemistryTerms,
  ...earthSpaceTerms,
  ...quantTerms,
];

/** Terms filtered by field slug */
export function getGlossaryByField(field: string): GlossaryTerm[] {
  if (field === 'all') return allGlossaryTerms;
  return allGlossaryTerms.filter((t) => t.field === field);
}

/** Unique field slugs that have glossary terms */
export function getGlossaryFields(): string[] {
  return [...new Set(allGlossaryTerms.map((t) => t.field))];
}
