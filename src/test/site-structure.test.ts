import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FIELD_MAP, FIELDS } from '@/config/fields';
import { CONTENT_COLLECTIONS, STANDARD_TOPICS } from '@/config/content-registry';
import {
  APP_PATHS,
  DISCOVERY_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  LEARN_ROUTE_PATTERNS,
  PRIMARY_NAV_ITEMS,
  REFERENCE_ROUTE_PATTERNS,
  SITE_DESTINATIONS,
} from '@/config/site-navigation';

const APP_SOURCE = readFileSync(resolve(process.cwd(), 'src/App.tsx'), 'utf8');
const PAGES_DIR = resolve(process.cwd(), 'src/pages');
const PAGE_SOURCES = Object.fromEntries(
  readdirSync(PAGES_DIR)
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => [file, readFileSync(resolve(PAGES_DIR, file), 'utf8')]),
);

const SITE_SHELL_EXEMPT_PAGES = new Set([
  'NotFound.tsx',
  'Onboarding.tsx',
]);

const HARDCODED_ROUTE_PATTERNS = [
  /\bnavigate\s*\(\s*['"`]\/(?!\/)/,
  /\bto\s*=\s*['"`]\/(?!\/)/,
  /\bhref\s*=\s*['"`]\/(?!\/)/,
  /<Navigate\b[^>]*\bto\s*=\s*['"`]\/(?!\/)/,
];

describe('site structure', () => {
  const registeredPaths = new Set(Object.values(APP_PATHS));

  it('keeps every navigation surface on a registered application path', () => {
    for (const item of [...PRIMARY_NAV_ITEMS, ...FOOTER_NAV_ITEMS, ...DISCOVERY_NAV_ITEMS]) {
      expect(registeredPaths.has(item.path)).toBe(true);
    }
  });

  it('keeps canonical destination paths unique', () => {
    const paths = Object.values(SITE_DESTINATIONS).map((destination) => destination.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('keeps routed content collections on canonical application paths', () => {
    for (const collection of CONTENT_COLLECTIONS) {
      if (collection.route === null) continue;
      expect(
        registeredPaths.has(collection.route),
        `Content collection ${collection.kind} uses an unknown route ${collection.route}`,
      ).toBe(true);
    }
  });

  it('keeps dynamic route patterns unique and rooted under canonical app paths', () => {
    const patterns = [
      ...Object.values(LEARN_ROUTE_PATTERNS),
      ...Object.values(REFERENCE_ROUTE_PATTERNS),
    ];

    expect(new Set(patterns).size).toBe(patterns.length);

    for (const pattern of patterns) {
      const canonicalRoot = pattern.split('/:')[0];
      expect(
        registeredPaths.has(canonicalRoot as (typeof APP_PATHS)[keyof typeof APP_PATHS]),
        `Dynamic route ${pattern} is not rooted under a canonical APP_PATHS entry`,
      ).toBe(true);
    }
  });

  it('binds every canonical route registry entry in App.tsx', () => {
    for (const key of Object.keys(APP_PATHS)) {
      expect(
        APP_SOURCE.includes(`path={APP_PATHS.${key}}`),
        `APP_PATHS.${key} is registered but not mounted in App.tsx`,
      ).toBe(true);
    }

    for (const key of Object.keys(LEARN_ROUTE_PATTERNS)) {
      expect(
        APP_SOURCE.includes(`path={LEARN_ROUTE_PATTERNS.${key}}`),
        `LEARN_ROUTE_PATTERNS.${key} is registered but not mounted in App.tsx`,
      ).toBe(true);
    }

    for (const key of Object.keys(REFERENCE_ROUTE_PATTERNS)) {
      expect(
        APP_SOURCE.includes(`path={REFERENCE_ROUTE_PATTERNS.${key}}`),
        `REFERENCE_ROUTE_PATTERNS.${key} is registered but not mounted in App.tsx`,
      ).toBe(true);
    }

    expect(APP_SOURCE.includes('<Route path="*"'), 'App.tsx is missing its wildcard NotFound route').toBe(true);
  });

  it('does not mount non-wildcard route string literals in App.tsx', () => {
    const literalRoutes = [...APP_SOURCE.matchAll(/<Route\s+path=["']([^"']+)["']/g)]
      .map((match) => match[1])
      .filter((path) => path !== '*');

    expect(literalRoutes).toEqual([]);
  });

  it('keeps top-level page navigation on APP_PATHS instead of route literals', () => {
    const offenders = Object.entries(PAGE_SOURCES)
      .filter(([, source]) => HARDCODED_ROUTE_PATTERNS.some((pattern) => pattern.test(source)))
      .map(([file]) => file);

    expect(offenders).toEqual([]);
  });

  it('keeps every standard page behind SiteShell unless explicitly exempt', () => {
    const offenders = Object.entries(PAGE_SOURCES)
      .filter(([file]) => !SITE_SHELL_EXEMPT_PAGES.has(file))
      .filter(([, source]) => !source.includes("@/components/layout/SiteShell"))
      .map(([file]) => file);

    expect(offenders).toEqual([]);
  });

  it('keeps SiteShell exemptions explicit and shell-free', () => {
    for (const file of SITE_SHELL_EXEMPT_PAGES) {
      expect(PAGE_SOURCES[file], `Unknown SiteShell exemption: ${file}`).toBeDefined();
      expect(
        PAGE_SOURCES[file].includes("@/components/layout/SiteShell"),
        `${file} now uses SiteShell and should be removed from the exemption list`,
      ).toBe(false);
    }
  });

  it('keeps field slugs unique', () => {
    const slugs = FIELDS.map((field) => field.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('derives every selectable standard topic into exactly one declared field', () => {
    const topicMembership = new Map<string, string[]>();

    for (const field of FIELDS) {
      if (field.slug === 'all') continue;
      for (const topic of field.topics) {
        const owners = topicMembership.get(topic) ?? [];
        owners.push(field.slug);
        topicMembership.set(topic, owners);
      }
    }

    for (const topic of STANDARD_TOPICS.filter((entry) => entry.available)) {
      expect(FIELD_MAP[topic.field], `Missing field definition for ${topic.field}`).toBeDefined();
      expect(topicMembership.get(topic.slug), `Bad field ownership for ${topic.slug}`).toEqual([topic.field]);
    }

    for (const topic of STANDARD_TOPICS.filter((entry) => !entry.available)) {
      expect(
        topicMembership.get(topic.slug),
        `Unavailable compatibility topic ${topic.slug} leaked into field selection`,
      ).toBeUndefined();
    }
  });

  it('never exposes an available empty standard field', () => {
    for (const field of FIELDS.filter((entry) => entry.slug !== 'all' && entry.available)) {
      expect(field.topics.length, `Available field ${field.slug} has no selectable topics`).toBeGreaterThan(0);
    }
  });
});
