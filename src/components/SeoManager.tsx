import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext } from '@/contexts/LocaleContext';
import { APP_PATHS } from '@/config/site-navigation';
import {
  OG_LOCALES,
  SOCIAL_IMAGE,
  buildRouteSchemaData,
  buildSeoSchemaData,
  canonicalUrl,
  getBreadcrumbsForPath,
  getSeoForPath,
  type RouteSeo,
} from '@/config/seo';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertRouteSchema(payload: ReturnType<typeof buildRouteSchemaData>) {
  const existing = document.getElementById('route-seo-schema');

  if (!payload) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement('script');
  script.id = 'route-seo-schema';
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(payload);

  if (!existing) document.head.appendChild(script);
}

function applySeo(
  pathname: string,
  locale: string,
  seo: RouteSeo,
  schema: ReturnType<typeof buildRouteSchemaData>,
) {
  const canonical = canonicalUrl(pathname);
  const robots = seo.indexable
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, nofollow';

  document.title = seo.title;
  document.documentElement.lang = locale;

  upsertMeta('name', 'description', seo.description);
  upsertMeta('name', 'robots', robots);
  upsertMeta('name', 'googlebot', robots);

  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', 'mAIth');
  upsertMeta('property', 'og:title', seo.title);
  upsertMeta('property', 'og:description', seo.description);
  upsertMeta('property', 'og:url', canonical);
  upsertMeta('property', 'og:image', SOCIAL_IMAGE);
  upsertMeta('property', 'og:image:alt', 'mAIth interactive STEM learning platform');
  upsertMeta('property', 'og:locale', OG_LOCALES[locale] ?? 'en_US');

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', seo.title);
  upsertMeta('name', 'twitter:description', seo.description);
  upsertMeta('name', 'twitter:image', SOCIAL_IMAGE);
  upsertMeta('name', 'twitter:image:alt', 'mAIth interactive STEM learning platform');

  upsertCanonical(canonical);
  upsertRouteSchema(schema);
}

async function resolveEnhancedSeo(pathname: string, locale: string) {
  if (pathname.startsWith(APP_PATHS.formulas + '/')) {
    const slug = pathname.slice(APP_PATHS.formulas.length + 1);
    const { getFormulaReferencePage } = await import('@/config/formula-pages');
    const page = getFormulaReferencePage(slug);
    if (page) {
      const { getReferenceTopicBacklinks } = await import('@/config/topic-reference-clusters');
      const relatedLinks = getReferenceTopicBacklinks(page.path).map((link) => link.path);
      return {
        seo: page.seo,
        schema: buildSeoSchemaData(pathname, page.seo, page.seo.breadcrumbs, locale, relatedLinks),
      };
    }
  }

  if (pathname.startsWith(APP_PATHS.glossary + '/')) {
    const termId = pathname.slice(APP_PATHS.glossary.length + 1);
    const { getGlossaryReferencePage } = await import('@/config/glossary-pages');
    const page = getGlossaryReferencePage(termId);
    if (page) {
      const { getReferenceTopicBacklinks } = await import('@/config/topic-reference-clusters');
      const relatedLinks = getReferenceTopicBacklinks(page.path).map((link) => link.path);
      return {
        seo: page.seo,
        schema: buildSeoSchemaData(pathname, page.seo, page.seo.breadcrumbs, locale, relatedLinks),
      };
    }
  }

  if (pathname.startsWith(APP_PATHS.thinkers + '/')) {
    const thinkerSlug = pathname.slice(APP_PATHS.thinkers.length + 1);
    const { getThinkerReferencePage } = await import('@/config/thinker-pages');
    const page = getThinkerReferencePage(thinkerSlug);
    if (page) {
      const { getReferenceTopicBacklinks } = await import('@/config/topic-reference-clusters');
      const relatedLinks = getReferenceTopicBacklinks(page.path).map((link) => link.path);
      return {
        seo: page.seo,
        schema: buildSeoSchemaData(pathname, page.seo, page.seo.breadcrumbs, locale, relatedLinks),
      };
    }
  }

  const learnSegments = pathname.split('/').filter(Boolean);
  if (learnSegments[0] === APP_PATHS.learn.slice(1)) {
    const {
      getFieldReferenceCluster,
      getTopicReferenceCluster,
    } = await import('@/config/topic-reference-clusters');

    const cluster =
      learnSegments.length === 2
        ? getFieldReferenceCluster(pathname)
        : learnSegments.length === 3
          ? getTopicReferenceCluster(pathname)
          : undefined;

    if (cluster) {
      const seo = getSeoForPath(pathname);
      const relatedLinks = [
        ...cluster.formulas,
        ...cluster.glossary,
        ...cluster.thinkers,
      ].map((link) => link.path);

      return {
        seo,
        schema: buildSeoSchemaData(
          pathname,
          seo,
          getBreadcrumbsForPath(pathname),
          locale,
          relatedLinks,
        ),
      };
    }
  }

  return null;
}

export function SeoManager() {
  const location = useLocation();
  const localeContext = useContext(LocaleContext);
  const locale = localeContext?.locale ?? 'en';

  useEffect(() => {
    let cancelled = false;
    const pathname = location.pathname;

    const staticSeo = getSeoForPath(pathname);
    applySeo(pathname, locale, staticSeo, buildRouteSchemaData(pathname, locale));

    void resolveEnhancedSeo(pathname, locale).then((resolved) => {
      if (cancelled || !resolved) return;
      applySeo(pathname, locale, resolved.seo, resolved.schema);
    });

    return () => {
      cancelled = true;
    };
  }, [location.pathname, locale]);

  return null;
}
