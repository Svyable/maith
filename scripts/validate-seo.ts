import { readFileSync } from 'node:fs';
import { APP_PATHS } from '../src/config/site-navigation';
import {
  LEARNING_FIELD_PAGES,
  LEARNING_PAGES,
  LEARNING_TOPIC_PAGES,
  MIN_INDEXABLE_TOPIC_QUESTIONS,
} from '../src/config/learning-pages';
import {
  FORMULA_REFERENCE_BY_RANK,
  FORMULA_REFERENCE_PAGE_MAP,
  FORMULA_REFERENCE_PAGES,
  MIN_INDEXABLE_FORMULA_TEXT,
} from '../src/config/formula-pages';
import {
  GLOSSARY_REFERENCE_PAGES,
  MIN_INDEXABLE_GLOSSARY_CONTENT,
  MIN_INDEXABLE_GLOSSARY_DEFINITION,
  resolveGlossaryReference,
} from '../src/config/glossary-pages';
import {
  MIN_INDEXABLE_THINKER_CONTENT,
  THINKER_REFERENCE_PAGE_MAP,
  THINKER_REFERENCE_PAGES,
} from '../src/config/thinker-pages';
import { toSeoSlug } from '../src/config/reference-utils';
import {
  FORMULA_REFERENCE_ALIASES,
  THINKER_REFERENCE_ALIASES,
  resolveFormulaRouteSlug,
  resolveThinkerRouteSlug,
  shouldLinkGlossaryRelatedId,
} from '../src/config/reference-aliases';
import {
  INDEXABLE_SEO_ROUTES,
  ROUTE_SEO,
  SITE_URL,
  canonicalUrl,
} from '../src/config/seo';
import {
  INDEXABLE_REFERENCE_SEO_ROUTES,
  REFERENCE_SEO_ROUTES,
} from './reference-seo-routes';
import {
  MAX_TOPIC_FORMULA_LINKS,
  MAX_TOPIC_GLOSSARY_LINKS,
  MAX_TOPIC_THINKER_LINKS,
  MIN_FORMULA_CLUSTER_SCORE,
  MIN_GLOSSARY_CLUSTER_SCORE,
  MIN_THINKER_CLUSTER_SCORE,
  MAX_REFERENCE_TOPIC_LINKS,
  MAX_FIELD_FORMULA_LINKS,
  MAX_FIELD_GLOSSARY_LINKS,
  MAX_FIELD_THINKER_LINKS,
  buildAllFieldReferenceClusters,
  buildAllReferenceTopicBacklinks,
  buildAllTopicReferenceClusters,
  getReferenceTopicBacklinks,
  getTopicReferenceCluster,
} from '../src/config/topic-reference-clusters';

const errors: string[] = [];

function read(path: string) {
  return readFileSync(path, 'utf8');
}

function fail(message: string) {
  errors.push(message);
}

function normalizePath(pathname: string) {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function assertUnique(label: string, values: string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  if (duplicates.size > 0) {
    fail(label + ' contain duplicates: ' + [...duplicates].join(', '));
  }
}

const sitemap = read('public/sitemap.xml');
const robots = read('public/robots.txt');
const index = read('index.html');
const llms = read('public/llms.txt');

const appRoutes = Object.values(APP_PATHS);
const configuredRoutes = Object.keys(ROUTE_SEO);
const missingConfig = appRoutes.filter((path) => !configuredRoutes.includes(path));
const orphanedConfig = configuredRoutes.filter(
  (path) => !appRoutes.includes(path as (typeof appRoutes)[number]),
);

if (missingConfig.length > 0) {
  fail('Routes missing SEO configuration: ' + missingConfig.join(', '));
}

if (orphanedConfig.length > 0) {
  fail('SEO configuration has no matching app route: ' + orphanedConfig.join(', '));
}

const learningPaths = LEARNING_PAGES.map((page) => page.path);
assertUnique('Learning landing paths', learningPaths);

for (const fieldPage of LEARNING_FIELD_PAGES) {
  if (fieldPage.topics.length === 0) {
    fail(fieldPage.path + ': field landing has no standard topics');
  }
  for (const topicPage of fieldPage.topics) {
    if (topicPage.field.slug !== fieldPage.field.slug) {
      fail(topicPage.path + ': topic is attached to the wrong field landing');
    }
  }
}

for (const topicPage of LEARNING_TOPIC_PAGES) {
  if (topicPage.indexable && topicPage.counts.total < MIN_INDEXABLE_TOPIC_QUESTIONS) {
    fail(topicPage.path + ': thin topic is incorrectly indexable');
  }
  if (!topicPage.seoTitle.includes(topicPage.topic.label)) {
    fail(topicPage.path + ': SEO title does not identify the topic');
  }
}

const topicReferenceClusters = buildAllTopicReferenceClusters();

if (topicReferenceClusters.length !== LEARNING_TOPIC_PAGES.length) {
  fail(
    'Topic reference cluster count '
      + topicReferenceClusters.length
      + ' must match learning topic count '
      + LEARNING_TOPIC_PAGES.length,
  );
}

const learningTopicPathSet = new Set(LEARNING_TOPIC_PAGES.map((page) => page.path));
const indexableTopicPathSet = new Set(
  LEARNING_TOPIC_PAGES.filter((page) => page.indexable).map((page) => page.path),
);
const indexableFormulaPathSet = new Set(
  FORMULA_REFERENCE_PAGES.filter((page) => page.seo.indexable).map((page) => page.path),
);
const indexableGlossaryPathSet = new Set(
  GLOSSARY_REFERENCE_PAGES.filter((page) => page.seo.indexable).map((page) => page.path),
);
const indexableThinkerPathSet = new Set(
  THINKER_REFERENCE_PAGES.filter((page) => page.seo.indexable).map((page) => page.path),
);

let indexableClustersWithAny = 0;
let indexableClustersWithFormula = 0;
let indexableClustersWithGlossary = 0;
let indexableClustersWithThinker = 0;

for (const cluster of topicReferenceClusters) {
  if (!learningTopicPathSet.has(cluster.topicPath)) {
    fail(cluster.topicPath + ': topic reference cluster has no canonical learning page');
  }

  if (cluster.formulas.length > MAX_TOPIC_FORMULA_LINKS) {
    fail(cluster.topicPath + ': formula cluster exceeds configured cap');
  }
  if (cluster.glossary.length > MAX_TOPIC_GLOSSARY_LINKS) {
    fail(cluster.topicPath + ': glossary cluster exceeds configured cap');
  }
  if (cluster.thinkers.length > MAX_TOPIC_THINKER_LINKS) {
    fail(cluster.topicPath + ': thinker cluster exceeds configured cap');
  }

  const allClusterLinks = [
    ...cluster.formulas,
    ...cluster.glossary,
    ...cluster.thinkers,
  ];
  assertUnique(
    cluster.topicPath + ' reference paths',
    allClusterLinks.map((link) => link.path),
  );

  for (const link of cluster.formulas) {
    if (link.score < MIN_FORMULA_CLUSTER_SCORE) {
      fail(cluster.topicPath + ': formula link below score floor: ' + link.label);
    }
    if (!indexableFormulaPathSet.has(link.path)) {
      fail(cluster.topicPath + ': formula cluster targets non-indexable or missing page ' + link.path);
    }
  }

  for (const link of cluster.glossary) {
    if (link.score < MIN_GLOSSARY_CLUSTER_SCORE) {
      fail(cluster.topicPath + ': glossary link below score floor: ' + link.label);
    }
    if (!indexableGlossaryPathSet.has(link.path)) {
      fail(cluster.topicPath + ': glossary cluster targets non-indexable or missing page ' + link.path);
    }
  }

  for (const link of cluster.thinkers) {
    if (link.score < MIN_THINKER_CLUSTER_SCORE) {
      fail(cluster.topicPath + ': thinker link below score floor: ' + link.label);
    }
    if (!indexableThinkerPathSet.has(link.path)) {
      fail(cluster.topicPath + ': thinker cluster targets non-indexable or missing page ' + link.path);
    }
  }

  if (indexableTopicPathSet.has(cluster.topicPath)) {
    if (allClusterLinks.length > 0) indexableClustersWithAny += 1;
    if (cluster.formulas.length > 0) indexableClustersWithFormula += 1;
    if (cluster.glossary.length > 0) indexableClustersWithGlossary += 1;
    if (cluster.thinkers.length > 0) indexableClustersWithThinker += 1;
  }
}

const indexableTopicCount = indexableTopicPathSet.size;
const topicClusterCoverage = indexableTopicCount === 0
  ? 1
  : indexableClustersWithAny / indexableTopicCount;

if (topicClusterCoverage < 0.35) {
  fail(
    'Topic reference cluster coverage '
      + Math.round(topicClusterCoverage * 100)
      + '% is below the 35% quality floor',
  );
}

const fieldReferenceClusters = buildAllFieldReferenceClusters();
if (fieldReferenceClusters.length !== LEARNING_FIELD_PAGES.length) {
  fail(
    'Field reference cluster count '
      + fieldReferenceClusters.length
      + ' must match learning field count '
      + LEARNING_FIELD_PAGES.length,
  );
}

const learningFieldPathSet = new Set(LEARNING_FIELD_PAGES.map((page) => page.path));
let indexableFieldsWithReferences = 0;
let indexableFieldsWithFormula = 0;
let indexableFieldsWithGlossary = 0;
let indexableFieldsWithThinker = 0;

for (const fieldCluster of fieldReferenceClusters) {
  const fieldPage = LEARNING_FIELD_PAGES.find((page) => page.path === fieldCluster.fieldPath);
  if (!fieldPage || !learningFieldPathSet.has(fieldCluster.fieldPath)) {
    fail(fieldCluster.fieldPath + ': field reference cluster has no canonical learning field');
    continue;
  }

  if (fieldCluster.formulas.length > MAX_FIELD_FORMULA_LINKS) {
    fail(fieldCluster.fieldPath + ': formula field shelf exceeds configured cap');
  }
  if (fieldCluster.glossary.length > MAX_FIELD_GLOSSARY_LINKS) {
    fail(fieldCluster.fieldPath + ': glossary field shelf exceeds configured cap');
  }
  if (fieldCluster.thinkers.length > MAX_FIELD_THINKER_LINKS) {
    fail(fieldCluster.fieldPath + ': thinker field shelf exceeds configured cap');
  }

  const allFieldLinks = [
    ...fieldCluster.formulas,
    ...fieldCluster.glossary,
    ...fieldCluster.thinkers,
  ];

  assertUnique(
    fieldCluster.fieldPath + ' field reference paths',
    allFieldLinks.map((link) => link.path),
  );

  const indexableChildClusters = fieldPage.topics
    .filter((topic) => topic.indexable)
    .flatMap((topic) => {
      const cluster = getTopicReferenceCluster(topic.path);
      return cluster ? [cluster] : [];
    });

  for (const link of fieldCluster.formulas) {
    const inherited = indexableChildClusters.some((cluster) =>
      cluster.formulas.some((candidate) => candidate.path === link.path),
    );
    if (!inherited) {
      fail(fieldCluster.fieldPath + ': formula field link is not inherited from a child topic: ' + link.path);
    }
  }

  for (const link of fieldCluster.glossary) {
    const inherited = indexableChildClusters.some((cluster) =>
      cluster.glossary.some((candidate) => candidate.path === link.path),
    );
    if (!inherited) {
      fail(fieldCluster.fieldPath + ': glossary field link is not inherited from a child topic: ' + link.path);
    }
  }

  for (const link of fieldCluster.thinkers) {
    const inherited = indexableChildClusters.some((cluster) =>
      cluster.thinkers.some((candidate) => candidate.path === link.path),
    );
    if (!inherited) {
      fail(fieldCluster.fieldPath + ': thinker field link is not inherited from a child topic: ' + link.path);
    }
  }

  if (fieldPage.indexable) {
    if (allFieldLinks.length === 0) {
      fail(fieldCluster.fieldPath + ': indexable field has no knowledge-hub references');
    } else {
      indexableFieldsWithReferences += 1;
    }

    if (fieldCluster.formulas.length === 0) {
      fail(fieldCluster.fieldPath + ': indexable field must retain at least one formula reference');
    } else {
      indexableFieldsWithFormula += 1;
    }

    if (fieldCluster.glossary.length > 0) indexableFieldsWithGlossary += 1;

    if (fieldCluster.thinkers.length === 0) {
      fail(fieldCluster.fieldPath + ': indexable field must retain at least one thinker reference');
    } else {
      indexableFieldsWithThinker += 1;
    }
  }
}

const allReferenceTopicBacklinks = buildAllReferenceTopicBacklinks();
let referencesWithPracticeBacklinks = 0;
let visibleReciprocalEdges = 0;

for (const [referencePath, backlinks] of allReferenceTopicBacklinks) {
  const visibleBacklinks = getReferenceTopicBacklinks(referencePath);
  if (visibleBacklinks.length > 0) referencesWithPracticeBacklinks += 1;

  if (visibleBacklinks.length > MAX_REFERENCE_TOPIC_LINKS) {
    fail(referencePath + ': reciprocal topic links exceed configured cap');
  }

  assertUnique(
    referencePath + ' reciprocal topic paths',
    visibleBacklinks.map((link) => link.path),
  );

  for (const backlink of visibleBacklinks) {
    visibleReciprocalEdges += 1;

    if (!indexableTopicPathSet.has(backlink.path)) {
      fail(referencePath + ': reciprocal link targets non-indexable topic ' + backlink.path);
    }

    const cluster = getTopicReferenceCluster(backlink.path);
    const forwardPaths = cluster
      ? [...cluster.formulas, ...cluster.glossary, ...cluster.thinkers].map((link) => link.path)
      : [];

    if (!forwardPaths.includes(referencePath)) {
      fail(
        referencePath
          + ': reciprocal topic link '
          + backlink.path
          + ' has no matching forward cluster edge',
      );
    }
  }

  if (backlinks.length === 0) {
    fail(referencePath + ': reciprocal backlink registry contains an empty entry');
  }
}

assertUnique(
  'Formula reference slugs',
  FORMULA_REFERENCE_PAGES.map((page) => page.slug),
);
assertUnique(
  'Formula ranks',
  FORMULA_REFERENCE_PAGES.map((page) => String(page.equation.rank)),
);
assertUnique(
  'Glossary reference route slugs',
  GLOSSARY_REFERENCE_PAGES.map((page) => page.slug),
);
assertUnique(
  'Thinker reference slugs',
  THINKER_REFERENCE_PAGES.map((page) => page.thinker.slug),
);
assertUnique(
  'Reference paths',
  REFERENCE_SEO_ROUTES.map((entry) => entry.path),
);

if (Object.keys(FORMULA_REFERENCE_BY_RANK).length !== FORMULA_REFERENCE_PAGES.length) {
  fail('Formula rank lookup does not cover every formula reference page');
}

for (const [alias, target] of Object.entries(FORMULA_REFERENCE_ALIASES)) {
  if (target && !FORMULA_REFERENCE_PAGE_MAP[target]) {
    fail('Formula alias ' + alias + ' points to missing route slug ' + target);
  }
}

for (const [alias, target] of Object.entries(THINKER_REFERENCE_ALIASES)) {
  if (target && !THINKER_REFERENCE_PAGE_MAP[target]) {
    fail('Thinker alias ' + alias + ' points to missing thinker slug ' + target);
  }
}

for (const page of FORMULA_REFERENCE_PAGES) {
  const textLength =
    page.equation.significance.length
    + page.equation.constants.length
    + page.equation.applications.length;

  if (page.seo.indexable && textLength < MIN_INDEXABLE_FORMULA_TEXT) {
    fail(page.path + ': thin formula page is incorrectly indexable');
  }

  if (page.slug !== toSeoSlug(page.equation.name) && page.seo.indexable) {
    fail(page.path + ': secondary duplicate formula must remain noindex');
  }
}

for (const page of GLOSSARY_REFERENCE_PAGES) {
  const term = page.term;
  const supportingText = [
    term.definition,
    term.example ?? '',
    term.formula ?? '',
    term.latex ?? '',
    term.code ?? '',
  ].join(' ');

  if (
    page.seo.indexable
    && (
      term.definition.length < MIN_INDEXABLE_GLOSSARY_DEFINITION
      || supportingText.length < MIN_INDEXABLE_GLOSSARY_CONTENT
    )
  ) {
    fail(page.path + ': thin glossary page is incorrectly indexable');
  }

  if (page.slug !== term.id && page.seo.indexable) {
    fail(page.path + ': secondary duplicate glossary ID must remain noindex');
  }

  for (const relatedId of term.related ?? []) {
    if (!shouldLinkGlossaryRelatedId(relatedId)) continue;
    if (!resolveGlossaryReference(relatedId)) {
      fail(page.path + ': unknown related glossary ID ' + relatedId);
    }
  }

  for (const formulaReference of term.formulaLinks ?? []) {
    const targetSlug = resolveFormulaRouteSlug(formulaReference);
    if (!targetSlug) continue;
    if (!FORMULA_REFERENCE_PAGE_MAP[targetSlug]) {
      fail(page.path + ': unknown formula reference ' + formulaReference);
    }
  }

  for (const thinkerReference of term.thinkerLinks ?? []) {
    const targetSlug = resolveThinkerRouteSlug(thinkerReference);
    if (!targetSlug) continue;
    if (!THINKER_REFERENCE_PAGE_MAP[targetSlug]) {
      fail(page.path + ': unknown thinker reference ' + thinkerReference);
    }
  }
}

for (const page of THINKER_REFERENCE_PAGES) {
  const thinker = page.thinker;
  const contentLength =
    thinker.description.length
    + thinker.tagline.length
    + (thinker.funFact?.length ?? 0);

  if (page.seo.indexable && contentLength < MIN_INDEXABLE_THINKER_CONTENT) {
    fail(page.path + ': thin thinker page is incorrectly indexable');
  }
}

const allIndexableEntries = [
  ...INDEXABLE_SEO_ROUTES,
  ...INDEXABLE_REFERENCE_SEO_ROUTES,
];
const uniqueIndexableRoutes = Array.from(
  new Map(allIndexableEntries.map((entry) => [normalizePath(entry.path), entry])).values(),
);
const indexableRoutes = uniqueIndexableRoutes.map((entry) => normalizePath(entry.path)).sort();

const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapRoutes = sitemapUrls
  .map((value) => {
    try {
      const url = new URL(value);
      if (url.origin !== SITE_URL) {
        fail('Sitemap URL uses unexpected origin: ' + value);
      }
      if (url.search || url.hash) {
        fail('Sitemap URL must not contain query or hash fragments: ' + value);
      }
      return normalizePath(url.pathname);
    } catch {
      fail('Invalid sitemap URL: ' + value);
      return '';
    }
  })
  .filter(Boolean)
  .sort();

const missingFromSitemap = indexableRoutes.filter((path) => !sitemapRoutes.includes(path));
const extraInSitemap = sitemapRoutes.filter((path) => !indexableRoutes.includes(path));

if (missingFromSitemap.length > 0) {
  fail('Indexable routes missing from sitemap: ' + missingFromSitemap.join(', '));
}

if (extraInSitemap.length > 0) {
  fail('Sitemap includes non-indexable or unknown routes: ' + extraInSitemap.join(', '));
}

const seenTitles = new Map<string, string>();
const seenDescriptions = new Map<string, string>();

for (const { path, seo } of uniqueIndexableRoutes) {
  if (!seo.indexable) {
    fail(path + ': listed as indexable but resolves to noindex');
    continue;
  }

  if (seo.title.length < 20 || seo.title.length > 65) {
    fail(path + ': indexable title length ' + seo.title.length + ' should be 20-65 characters');
  }

  if (seo.description.length < 80 || seo.description.length > 165) {
    fail(path + ': indexable description length ' + seo.description.length + ' should be 80-165 characters');
  }

  const previousTitlePath = seenTitles.get(seo.title);
  if (previousTitlePath) {
    fail(path + ': duplicate indexable title also used by ' + previousTitlePath);
  } else {
    seenTitles.set(seo.title, path);
  }

  const previousDescriptionPath = seenDescriptions.get(seo.description);
  if (previousDescriptionPath) {
    fail(path + ': duplicate indexable description also used by ' + previousDescriptionPath);
  } else {
    seenDescriptions.set(seo.description, path);
  }
}

for (const [path, seo] of Object.entries(ROUTE_SEO)) {
  if (!seo.indexable) continue;
  const canonical = canonicalUrl(path);
  if (!llms.includes(canonical)) {
    fail(path + ': canonical static URL is missing from public/llms.txt');
  }
}

if (!llms.includes('https://maith.lovable.app/learn')) {
  fail('public/llms.txt must advertise the practice library');
}
if (!llms.includes('/formulas/{formula-slug}')) {
  fail('public/llms.txt must document canonical formula detail routes');
}
if (!llms.includes('/glossary/{term-id}')) {
  fail('public/llms.txt must document canonical glossary detail routes');
}
if (!llms.includes('/thinkers/{thinker-slug}')) {
  fail('public/llms.txt must document canonical thinker detail routes');
}

const requiredIndexSignals = [
  'name="description"',
  'name="robots"',
  'name="googlebot"',
  'rel="canonical"',
  'property="og:site_name"',
  'property="og:title"',
  'property="og:description"',
  'property="og:url"',
  'property="og:image"',
  'name="twitter:card"',
  'name="twitter:title"',
  'name="twitter:description"',
  'name="twitter:image"',
  '"@type": "WebSite"',
  '"@type": "WebApplication"',
];

for (const signal of requiredIndexSignals) {
  if (!index.includes(signal)) {
    fail('index.html is missing required SEO signal: ' + signal);
  }
}

if (!robots.includes('Sitemap: ' + SITE_URL + '/sitemap.xml')) {
  fail('robots.txt does not advertise the canonical sitemap URL');
}

if (!robots.includes('User-agent: *') || !robots.includes('Allow: /')) {
  fail('robots.txt must allow public crawling so route-level noindex directives can be observed');
}

if (index.includes('twitter:site') && index.includes('@Lovable')) {
  fail('index.html still exposes the Lovable Twitter account as the mAIth site identity');
}

if (errors.length > 0) {
  console.error('SEO validation failed:');
  for (const error of errors) console.error('  - ' + error);
  process.exit(1);
}

console.log(
  'SEO validation passed: '
    + appRoutes.length
    + ' static routes, '
    + LEARNING_FIELD_PAGES.length
    + ' learning fields, '
    + LEARNING_TOPIC_PAGES.length
    + ' topic landings, '
    + FORMULA_REFERENCE_PAGES.length
    + ' formula references, '
    + GLOSSARY_REFERENCE_PAGES.length
    + ' glossary references, '
    + THINKER_REFERENCE_PAGES.length
    + ' thinker references, '
    + indexableRoutes.length
    + ' total indexable routes. Topic clusters: '
    + indexableClustersWithAny
    + '/'
    + indexableTopicCount
    + ' with references ('
    + Math.round(topicClusterCoverage * 100)
    + '%), '
    + indexableClustersWithFormula
    + ' with formulas, '
    + indexableClustersWithGlossary
    + ' with glossary terms, '
    + indexableClustersWithThinker
    + ' with thinkers. Field hubs: '
    + indexableFieldsWithReferences
    + '/'
    + LEARNING_FIELD_PAGES.filter((page) => page.indexable).length
    + ' indexable fields with references, '
    + indexableFieldsWithFormula
    + ' with formulas, '
    + indexableFieldsWithGlossary
    + ' with glossary terms, '
    + indexableFieldsWithThinker
    + ' with thinkers. Reciprocal graph: '
    + referencesWithPracticeBacklinks
    + ' references with practice backlinks, '
    + visibleReciprocalEdges
    + ' visible reciprocal edges.',
);
