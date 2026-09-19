import { EQUATIONS, type Equation } from './equations';
import { resolveFormulaRouteSlug } from './reference-aliases';
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

const FORMULA_BASE_SLUG_COUNTS = new Map<string, number>();
for (const equation of EQUATIONS) {
  const base = toSeoSlug(equation.name);
  FORMULA_BASE_SLUG_COUNTS.set(base, (FORMULA_BASE_SLUG_COUNTS.get(base) ?? 0) + 1);
}

function formulaSeo(
  eq: Equation,
  slug: string,
  duplicateName: boolean,
  secondaryDuplicate: boolean,
): ReferenceSeo {
  const contentLength = eq.significance.length + eq.constants.length + eq.applications.length;
  const indexable = contentLength >= MIN_INDEXABLE_FORMULA_TEXT && !secondaryDuplicate;

  const title = duplicateName
    ? compactTitle(
        eq.name,
        ' #' + eq.rank + ' Formula | mAIth',
        eq.name + ' #' + eq.rank + ' | mAIth',
      )
    : compactTitle(
        eq.name,
        ': Formula, Meaning & Applications | mAIth',
        eq.name + ' Formula | mAIth',
      );

  return {
    title,
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

const usedFormulaSlugs = new Set<string>();

export const FORMULA_REFERENCE_PAGES: FormulaReferencePage[] = EQUATIONS.map((equation) => {
  const baseSlug = toSeoSlug(equation.name);
  let slug = baseSlug;

  if (usedFormulaSlugs.has(slug)) {
    slug = baseSlug + '-' + equation.rank;
  }

  let suffix = 2;
  while (usedFormulaSlugs.has(slug)) {
    slug = baseSlug + '-' + equation.rank + '-' + suffix;
    suffix += 1;
  }
  usedFormulaSlugs.add(slug);

  return {
    kind: 'formula' as const,
    slug,
    path: buildFormulaPath(slug),
    equation,
    seo: formulaSeo(
      equation,
      slug,
      (FORMULA_BASE_SLUG_COUNTS.get(baseSlug) ?? 0) > 1,
      slug !== baseSlug,
    ),
  };
});

export const FORMULA_REFERENCE_PAGE_MAP: Record<string, FormulaReferencePage> = Object.fromEntries(
  FORMULA_REFERENCE_PAGES.map((page) => [page.slug, page]),
);

export const FORMULA_REFERENCE_BY_NAME: Record<string, FormulaReferencePage> = {};
export const FORMULA_REFERENCE_BY_RANK: Record<number, FormulaReferencePage> = {};

for (const page of FORMULA_REFERENCE_PAGES) {
  const nameKey = page.equation.name.toLowerCase();
  if (!FORMULA_REFERENCE_BY_NAME[nameKey]) {
    FORMULA_REFERENCE_BY_NAME[nameKey] = page;
  }
  FORMULA_REFERENCE_BY_RANK[page.equation.rank] = page;
}

export function getFormulaReferencePage(slug: string): FormulaReferencePage | undefined {
  return FORMULA_REFERENCE_PAGE_MAP[slug];
}

export function getFormulaReferencePageForEquation(equation: Equation): FormulaReferencePage | undefined {
  return FORMULA_REFERENCE_BY_RANK[equation.rank];
}

export function resolveFormulaReference(reference: string): FormulaReferencePage | undefined {
  const exact = FORMULA_REFERENCE_BY_NAME[reference.toLowerCase()];
  if (exact) return exact;

  const slug = resolveFormulaRouteSlug(reference);
  return slug ? FORMULA_REFERENCE_PAGE_MAP[slug] : undefined;
}
