import { allGlossaryTerms, type GlossaryTerm } from '../content/glossary';
import { shouldLinkGlossaryRelatedId } from './reference-aliases';
import { APP_PATHS, buildGlossaryTermPath } from './site-navigation';
import { compactTitle, trimMeta, toSeoSlug, type ReferenceSeo } from './reference-utils';

export const MIN_INDEXABLE_GLOSSARY_DEFINITION = 60;
export const MIN_INDEXABLE_GLOSSARY_CONTENT = 120;

export interface GlossaryReferencePage {
  kind: 'glossary';
  slug: string;
  path: string;
  term: GlossaryTerm;
  seo: ReferenceSeo;
}

function humanize(value: string): string {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

const TERM_LABEL_COUNTS = new Map<string, number>();
for (const term of allGlossaryTerms) {
  const key = term.term.toLowerCase();
  TERM_LABEL_COUNTS.set(key, (TERM_LABEL_COUNTS.get(key) ?? 0) + 1);
}

function glossarySeo(
  term: GlossaryTerm,
  slug: string,
  duplicateLabel: boolean,
  labelOccurrence: number,
  secondaryDuplicateId: boolean,
): ReferenceSeo {
  const supportingText = [
    term.definition,
    term.example ?? '',
    term.formula ?? '',
    term.latex ?? '',
    term.code ?? '',
  ].join(' ');
  const indexable =
    term.definition.length >= MIN_INDEXABLE_GLOSSARY_DEFINITION
    && supportingText.length >= MIN_INDEXABLE_GLOSSARY_CONTENT
    && !secondaryDuplicateId;

  const context = humanize(term.topic ?? term.field);
  const title = duplicateLabel
    ? compactTitle(
        term.term,
        ': ' + context + ' #' + labelOccurrence + ' | mAIth',
        term.term + ' Definition #' + labelOccurrence + ' | mAIth',
      )
    : compactTitle(
        term.term,
        ': Definition & Example | mAIth',
        term.term + ' Definition | mAIth',
      );

  return {
    title,
    description: trimMeta(
      'Learn the meaning of ' + term.term + '. ' + term.definition
        + (term.example ? ' Example: ' + term.example : ''),
    ),
    indexable,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'Glossary', path: APP_PATHS.glossary },
      { name: term.term, path: buildGlossaryTermPath(slug) },
    ],
  };
}

const usedSlugs = new Set<string>();
const idOccurrences = new Map<string, number>();
const labelOccurrences = new Map<string, number>();

function uniqueGlossarySlug(term: GlossaryTerm): string {
  const base = term.id;
  const occurrence = (idOccurrences.get(base) ?? 0) + 1;
  idOccurrences.set(base, occurrence);

  if (!usedSlugs.has(base)) {
    usedSlugs.add(base);
    return base;
  }

  const fieldSuffix = toSeoSlug(term.field);
  const topicSuffix = term.topic ? '-' + toSeoSlug(term.topic) : '';
  let candidate = base + '-' + fieldSuffix + topicSuffix;
  let suffix = occurrence;

  while (usedSlugs.has(candidate)) {
    candidate = base + '-' + fieldSuffix + topicSuffix + '-' + suffix;
    suffix += 1;
  }

  usedSlugs.add(candidate);
  return candidate;
}

export const GLOSSARY_REFERENCE_PAGES: GlossaryReferencePage[] = allGlossaryTerms.map((term) => {
  const slug = uniqueGlossarySlug(term);
  const labelKey = term.term.toLowerCase();
  const labelOccurrence = (labelOccurrences.get(labelKey) ?? 0) + 1;
  labelOccurrences.set(labelKey, labelOccurrence);

  return {
    kind: 'glossary' as const,
    slug,
    path: buildGlossaryTermPath(slug),
    term,
    seo: glossarySeo(
      term,
      slug,
      (TERM_LABEL_COUNTS.get(labelKey) ?? 0) > 1,
      labelOccurrence,
      slug !== term.id,
    ),
  };
});

export const GLOSSARY_REFERENCE_PAGE_MAP: Record<string, GlossaryReferencePage> = Object.fromEntries(
  GLOSSARY_REFERENCE_PAGES.map((page) => [page.slug, page]),
);

export const GLOSSARY_REFERENCE_BY_ID: Record<string, GlossaryReferencePage> = {};
const GLOSSARY_REFERENCE_BY_TERM = new Map<GlossaryTerm, GlossaryReferencePage>();

for (const page of GLOSSARY_REFERENCE_PAGES) {
  if (!GLOSSARY_REFERENCE_BY_ID[page.term.id]) {
    GLOSSARY_REFERENCE_BY_ID[page.term.id] = page;
  }
  GLOSSARY_REFERENCE_BY_TERM.set(page.term, page);
}

export function getGlossaryReferencePage(slug: string): GlossaryReferencePage | undefined {
  return GLOSSARY_REFERENCE_PAGE_MAP[slug];
}

export function getGlossaryReferencePageForTerm(term: GlossaryTerm): GlossaryReferencePage | undefined {
  return GLOSSARY_REFERENCE_BY_TERM.get(term);
}

export function resolveGlossaryReference(id: string): GlossaryReferencePage | undefined {
  return shouldLinkGlossaryRelatedId(id) ? GLOSSARY_REFERENCE_BY_ID[id] : undefined;
}
