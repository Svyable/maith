import { allGlossaryTerms, type GlossaryTerm } from '../content/glossary';
import { APP_PATHS, buildGlossaryTermPath } from './site-navigation';
import { compactTitle, trimMeta, type ReferenceSeo } from './reference-utils';

export const MIN_INDEXABLE_GLOSSARY_DEFINITION = 60;
export const MIN_INDEXABLE_GLOSSARY_CONTENT = 120;

export interface GlossaryReferencePage {
  kind: 'glossary';
  path: string;
  term: GlossaryTerm;
  seo: ReferenceSeo;
}

function glossarySeo(term: GlossaryTerm): ReferenceSeo {
  const supportingText = [
    term.definition,
    term.example ?? '',
    term.formula ?? '',
    term.latex ?? '',
    term.code ?? '',
  ].join(' ');
  const indexable =
    term.definition.length >= MIN_INDEXABLE_GLOSSARY_DEFINITION
    && supportingText.length >= MIN_INDEXABLE_GLOSSARY_CONTENT;

  return {
    title: compactTitle(
      term.term,
      ': Definition & Example | mAIth',
      term.term + ' Definition | mAIth',
    ),
    description: trimMeta(
      'Learn the meaning of ' + term.term + '. ' + term.definition
        + (term.example ? ' Example: ' + term.example : ''),
    ),
    indexable,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'Glossary', path: APP_PATHS.glossary },
      { name: term.term, path: buildGlossaryTermPath(term.id) },
    ],
  };
}

export const GLOSSARY_REFERENCE_PAGES: GlossaryReferencePage[] = allGlossaryTerms.map((term) => ({
  kind: 'glossary' as const,
  path: buildGlossaryTermPath(term.id),
  term,
  seo: glossarySeo(term),
}));

export const GLOSSARY_REFERENCE_PAGE_MAP: Record<string, GlossaryReferencePage> = Object.fromEntries(
  GLOSSARY_REFERENCE_PAGES.map((page) => [page.term.id, page]),
);

export function getGlossaryReferencePage(termId: string): GlossaryReferencePage | undefined {
  return GLOSSARY_REFERENCE_PAGE_MAP[termId];
}
