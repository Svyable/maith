import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { INDEXABLE_SEO_ROUTES, canonicalUrl } from '../src/config/seo';

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

const uniqueRoutes = Array.from(
  new Map(INDEXABLE_SEO_ROUTES.map((entry) => [entry.path, entry])).values(),
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
  if (!html.includes('name="robots" content="index, follow')) {
    errors.push(path + ': missing indexable robots metadata');
  }
  if (!html.includes('id="route-seo-schema"')) {
    errors.push(path + ': missing prerendered route schema');
  }
  if (!html.includes('<!-- seo-prerender:' + escapeHtml(path) + ' -->')) {
    errors.push(path + ': missing prerender marker');
  }
}

const sitemapPath = 'dist/sitemap.xml';
if (!existsSync(sitemapPath)) {
  errors.push('dist/sitemap.xml is missing');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const { path } of uniqueRoutes) {
    if (!sitemap.includes('<loc>' + canonicalUrl(path) + '</loc>')) {
      errors.push(path + ': missing from built sitemap');
    }
  }
}

if (errors.length > 0) {
  console.error('Prerender SEO validation failed:');
  for (const error of errors) console.error('  - ' + error);
  process.exit(1);
}

console.log('Prerender SEO validation passed for ' + uniqueRoutes.length + ' routes.');
