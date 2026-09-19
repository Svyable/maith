import { EQUATIONS, type Equation } from './equations';
import { APP_PATHS, buildFormulaPath } from './site-navigation';
import { compactTitle, trimMeta, toSeoSlug, type ReferenceSeo } from './reference-utils';

export const MIN_INDEXABLE_FORMULA_TEXT = 180;

export interface FormulaReferencePage {
  kind: 'formula';
  slug: string;
  path: string;
  equation: Equation;
  seo: ReferenceSeo;
}

function formulaSeo(eq: Equation, slug: string): ReferenceSeo {
  const contentLength = eq.significance.length + eq.constants.length + eq.applications.length;
  const indexable = contentLength >= MIN_INDEXABLE_FORMULA_TEXT;

  return {
    title: compactTitle(
      eq.name,
      ': Formula, Meaning & Applications | mAIth',
      eq.name + ' Formula | mAIth',
    ),
    description: trimMeta(
      'Learn ' + eq.name + ', associated with ' + eq.discoverer + ' (' + eq.year
        + '). Explore why it matters, key variables, and applications including ' + eq.applications + '.',
    ),
    indexable,
    schemaType: 'WebPage',
    breadcrumbs: [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'Formulas', path: APP_PATHS.formulas },
      { name: eq.name, path: buildFormulaPath(slug) },
    ],
  };
}

export const FORMULA_REFERENCE_PAGES: FormulaReferencePage[] = EQUATIONS.map((equation) => {
  const slug = toSeoSlug(equation.name);
  return {
    kind: 'formula' as const,
    slug,
    path: buildFormulaPath(slug),
    equation,
    seo: formulaSeo(equation, slug),
  };
});

export const FORMULA_REFERENCE_PAGE_MAP: Record<string, FormulaReferencePage> = Object.fromEntries(
  FORMULA_REFERENCE_PAGES.map((page) => [page.slug, page]),
);

export const FORMULA_REFERENCE_BY_NAME: Record<string, FormulaReferencePage> = Object.fromEntries(
  FORMULA_REFERENCE_PAGES.map((page) => [page.equation.name.toLowerCase(), page]),
);

export function getFormulaReferencePage(slug: string): FormulaReferencePage | undefined {
  return FORMULA_REFERENCE_PAGE_MAP[slug];
}

export function resolveFormulaReference(reference: string): FormulaReferencePage | undefined {
  return FORMULA_REFERENCE_BY_NAME[reference.toLowerCase()] ?? FORMULA_REFERENCE_PAGE_MAP[toSeoSlug(reference)];
}
