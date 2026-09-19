import { readFileSync } from 'node:fs';
import { APP_PATHS } from '../src/config/site-navigation';
import {
  LEARNING_FIELD_PAGES,
  LEARNING_PAGES,
  LEARNING_TOPIC_PAGES,
  MIN_INDEXABLE_TOPIC_QUESTIONS,
} from '../src/config/learning-pages';
import {
  INDEXABLE_SEO_ROUTES,
  ROUTE_SEO,
  SITE_URL,
  canonicalUrl,
  getSeoForPath,
} from '../src/config/seo';

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
if (new Set(learningPaths).size !== learningPaths.length) {
  fail('Learning landing paths must be unique');
}

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

const uniqueIndexableRoutes = Array.from(
  new Map(INDEXABLE_SEO_ROUTES.map((entry) => [normalizePath(entry.path), entry])).values(),
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

for (const { path } of uniqueIndexableRoutes) {
  const seo = getSeoForPath(path);

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
    + ' static routes configured, '
    + LEARNING_FIELD_PAGES.length
    + ' learning fields, '
    + LEARNING_TOPIC_PAGES.length
    + ' topic landings, '
    + indexableRoutes.length
    + ' total indexable routes.',
);
