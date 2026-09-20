import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  INDEXABLE_SEO_ROUTES,
  PRERENDER_SEO_ROUTES,
  canonicalUrl,
} from '../src/config/seo';
import {
  INDEXABLE_REFERENCE_SEO_ROUTES,
  REFERENCE_SEO_ROUTES,
} from './reference-seo-routes';
import { getFieldReferenceCluster, getReferenceTopicBacklinks, getTopicReferenceCluster } from '../src/config/topic-reference-clusters';

const errors: string[] = [];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function outputPath(pathname: string): string {
  if (pathname === '/') return 'dist/index.html';
  return join('dist', ...pathname.split('/').filter(Boolean), 'index.html');
}

const allKnownRoutes = [
  ...PRERENDER_SEO_ROUTES,
  ...REFERENCE_SEO_ROUTES,
];

const allIndexableRoutes = [
  ...INDEXABLE_SEO_ROUTES,
  ...INDEXABLE_REFERENCE_SEO_ROUTES,
];

const uniqueRoutes = Array.from(
  new Map(allKnownRoutes.map((entry) => [entry.path, entry])).values(),
);

for (const { path, seo } of uniqueRoutes) {
  const file = outputPath(path);
  if (!existsSync(file)) {
    errors.push(path + ': missing prerendered file ' + file);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const expectedTitle = '<title>' + escapeHtml(seo.title) + '</title>';
  const expectedCanonical = 'href="' + escapeHtml(canonicalUrl(path)) + '"';

  if (!html.includes(expectedTitle)) errors.push(path + ': prerendered title mismatch');
  if (!html.includes(expectedCanonical)) errors.push(path + ': prerendered canonical mismatch');

  const expectedRobots = seo.indexable ? 'index, follow' : 'noindex, nofollow';
  if (!html.includes('name="robots" content="' + expectedRobots)) {
    errors.push(path + ': prerendered robots metadata mismatch');
  }

  if (seo.indexable && !html.includes('id="route-seo-schema"')) {
    errors.push(path + ': missing prerendered route schema');
  }
  if (!seo.indexable && html.includes('id="route-seo-schema"')) {
    errors.push(path + ': noindex route should not expose indexable route schema');
  }
  if (!html.includes('<!-- seo-prerender:' + escapeHtml(path) + ' -->')) {
    errors.push(path + ': missing prerender marker');
  }

  if (seo.indexable) {
    const topicCluster = getTopicReferenceCluster(path);
    const fieldCluster = getFieldReferenceCluster(path);
    const relatedLinks = topicCluster
      ? [...topicCluster.formulas, ...topicCluster.glossary, ...topicCluster.thinkers]
      : fieldCluster
        ? [...fieldCluster.formulas, ...fieldCluster.glossary, ...fieldCluster.thinkers]
        : getReferenceTopicBacklinks(path);

    for (const link of relatedLinks) {
      if (!html.includes(canonicalUrl(link.path))) {
        errors.push(path + ': prerendered schema missing related link ' + link.path);
      }
    }
  }
}

const sitemapPath = 'dist/sitemap.xml';
if (!existsSync(sitemapPath)) {
  errors.push('dist/sitemap.xml is missing');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');

  for (const { path } of allIndexableRoutes) {
    if (!sitemap.includes('<loc>' + canonicalUrl(path) + '</loc>')) {
      errors.push(path + ': missing from built sitemap');
    }
  }

  for (const { path, seo } of uniqueRoutes) {
    if (!seo.indexable && sitemap.includes('<loc>' + canonicalUrl(path) + '</loc>')) {
      errors.push(path + ': noindex route leaked into built sitemap');
    }
  }
}

if (errors.length > 0) {
  console.error('Prerender SEO validation failed:');
  for (const error of errors) console.error('  - ' + error);
  process.exit(1);
}

console.log(
  'Prerender SEO validation passed for '
    + uniqueRoutes.length
    + ' known routes ('
    + REFERENCE_SEO_ROUTES.length
    + ' reference details).',
);
