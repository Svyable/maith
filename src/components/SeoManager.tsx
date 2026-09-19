import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext } from '@/contexts/LocaleContext';
import {
  OG_LOCALES,
  SOCIAL_IMAGE,
  buildRouteSchemaData,
  canonicalUrl,
  getSeoForPath,
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

function upsertRouteSchema(pathname: string, locale: string) {
  const existing = document.getElementById('route-seo-schema');
  const payload = buildRouteSchemaData(pathname, locale);

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

export function SeoManager() {
  const location = useLocation();
  const localeContext = useContext(LocaleContext);
  const locale = localeContext?.locale ?? 'en';

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    const canonical = canonicalUrl(location.pathname);
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
    upsertRouteSchema(location.pathname, locale);
  }, [location.pathname, locale]);

  return null;
}
