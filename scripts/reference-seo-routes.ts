import { FORMULA_REFERENCE_PAGES } from '../src/config/formula-pages';
import { GLOSSARY_REFERENCE_PAGES } from '../src/config/glossary-pages';
import { THINKER_REFERENCE_PAGES } from '../src/config/thinker-pages';

export const REFERENCE_SEO_ROUTES = [
  ...FORMULA_REFERENCE_PAGES,
  ...GLOSSARY_REFERENCE_PAGES,
  ...THINKER_REFERENCE_PAGES,
].map((page) => ({
  path: page.path,
  seo: page.seo,
  breadcrumbs: page.seo.breadcrumbs,
  kind: page.kind,
}));

export const INDEXABLE_REFERENCE_SEO_ROUTES = REFERENCE_SEO_ROUTES.filter(
  (entry) => entry.seo.indexable,
);
