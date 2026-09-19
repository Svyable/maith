import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {
  INDEXABLE_SEO_ROUTES,
  OG_LOCALES,
  SOCIAL_IMAGE,
  buildRouteSchemaData,
  canonicalUrl,
} from '../src/config/seo';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegex(value: string): string {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + escapeHtml(title) + '</title>');
}

function replaceMeta(
  html: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
): string {
  const pattern = new RegExp(
    '<meta\\s+[^>]*' + attribute + '=["\\\']' + escapeRegex(key) + '["\\\'][^>]*>',
    'i',
  );
  const tag = '<meta ' + attribute + '="' + key + '" content="' + escapeHtml(content) + '" />';
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', '  ' + tag + '\n</head>');
}

function replaceCanonical(html: string, href: string): string {
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const tag = '<link rel="canonical" href="' + escapeHtml(href) + '" />';
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', '  ' + tag + '\n</head>');
}

function replaceRouteSchema(html: string, pathname: string): string {
  const schema = buildRouteSchemaData(pathname, 'en');
  const existing = /\s*<script[^>]*id=["']route-seo-schema["'][^>]*>[\s\S]*?<\/script>/i;
  if (!schema) return html.replace(existing, '');

  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  const script = '  <script id="route-seo-schema" type="application/ld+json">' + json + '</script>';
  return existing.test(html)
    ? html.replace(existing, '\n' + script)
    : html.replace('</head>', script + '\n</head>');
}

function outputPath(pathname: string): string {
  if (pathname === '/') return 'dist/index.html';
  const segments = pathname.split('/').filter(Boolean);
  return join('dist', ...segments, 'index.html');
}

const sourcePath = 'dist/index.html';
if (!existsSync(sourcePath)) {
  throw new Error('dist/index.html does not exist. Run vite build before prerendering SEO routes.');
}

const baseHtml = readFileSync(sourcePath, 'utf8');
const uniqueRoutes = Array.from(
  new Map(INDEXABLE_SEO_ROUTES.map((entry) => [entry.path, entry])).values(),
);

for (const { path, seo } of uniqueRoutes) {
  const canonical = canonicalUrl(path);
  const robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  let html = baseHtml;
  html = html.replace(/<html\s+lang=["'][^"']+["']/i, '<html lang="en"');
  html = replaceTitle(html, seo.title);
  html = replaceMeta(html, 'name', 'description', seo.description);
  html = replaceMeta(html, 'name', 'robots', robots);
  html = replaceMeta(html, 'name', 'googlebot', robots);
  html = replaceMeta(html, 'property', 'og:type', 'website');
  html = replaceMeta(html, 'property', 'og:site_name', 'mAIth');
  html = replaceMeta(html, 'property', 'og:title', seo.title);
  html = replaceMeta(html, 'property', 'og:description', seo.description);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'property', 'og:image', SOCIAL_IMAGE);
  html = replaceMeta(html, 'property', 'og:image:alt', 'mAIth interactive STEM learning platform');
  html = replaceMeta(html, 'property', 'og:locale', OG_LOCALES.en);
  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title', seo.title);
  html = replaceMeta(html, 'name', 'twitter:description', seo.description);
  html = replaceMeta(html, 'name', 'twitter:image', SOCIAL_IMAGE);
  html = replaceMeta(html, 'name', 'twitter:image:alt', 'mAIth interactive STEM learning platform');
  html = replaceCanonical(html, canonical);
  html = replaceRouteSchema(html, path);
  html = html.replace('</head>', '  <!-- seo-prerender:' + escapeHtml(path) + ' -->\n</head>');

  const destination = outputPath(path);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html);
}

console.log('Prerendered route-specific HTML heads for ' + uniqueRoutes.length + ' indexable routes.');
