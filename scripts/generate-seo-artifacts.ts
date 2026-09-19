import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { APP_PATHS } from '../src/config/site-navigation';
import { INDEXABLE_SEO_ROUTES, canonicalUrl } from '../src/config/seo';

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function routePolicy(path: string): { changefreq: string; priority: string } {
  if (path === APP_PATHS.home) return { changefreq: 'weekly', priority: '1.0' };
  if (path === APP_PATHS.glossary || path === APP_PATHS.learn) {
    return { changefreq: 'weekly', priority: '0.9' };
  }
  if (path.startsWith(APP_PATHS.learn + '/')) {
    const depth = path.split('/').filter(Boolean).length;
    return depth === 2
      ? { changefreq: 'weekly', priority: '0.8' }
      : { changefreq: 'weekly', priority: '0.7' };
  }
  if (path === APP_PATHS.formulas || path === APP_PATHS.thinkers) {
    return { changefreq: 'monthly', priority: '0.8' };
  }
  if (path === APP_PATHS.vault || path === APP_PATHS.bonafides) {
    return { changefreq: 'monthly', priority: '0.7' };
  }
  if (path === APP_PATHS.leaderboard) return { changefreq: 'daily', priority: '0.6' };
  return { changefreq: 'monthly', priority: '0.6' };
}

const uniqueRoutes = Array.from(
  new Map(INDEXABLE_SEO_ROUTES.map((entry) => [entry.path, entry])).values(),
).sort((a, b) => {
  if (a.path === '/') return -1;
  if (b.path === '/') return 1;
  return a.path.localeCompare(b.path);
});

const lastmod = new Date().toISOString().slice(0, 10);
const urls = uniqueRoutes.map(({ path }) => {
  const policy = routePolicy(path);
  return [
    '  <url>',
    '    <loc>' + xmlEscape(canonicalUrl(path)) + '</loc>',
    '    <lastmod>' + lastmod + '</lastmod>',
    '    <changefreq>' + policy.changefreq + '</changefreq>',
    '    <priority>' + policy.priority + '</priority>',
    '  </url>',
  ].join('\n');
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n');

const output = 'public/sitemap.xml';
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, sitemap);

console.log('Generated sitemap with ' + uniqueRoutes.length + ' indexable routes.');
