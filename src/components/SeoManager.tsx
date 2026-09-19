import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext } from '@/contexts/LocaleContext';
import { OG_LOCALES, ROUTE_SEO, SITE_URL, SOCIAL_IMAGE, type RouteSeo } from '@/config/seo';

function canonicalUrl(pathname: string) {
  return pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname.replace(/\/+$/, '')}`;
}

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

function upsertRouteSchema(seo: RouteSeo, pathname: string, locale: string) {
  const existing = document.getElementById('route-seo-schema');

  if (!seo.indexable) {
    existing?.remove();
    return;
  }

  const canonical = canonicalUrl(pathname);
  const graph: Record<string, unknown>[] = [
    {
      '@type': seo.schemaType ?? 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: seo.title,
      description: seo.description,
      inLanguage: locale,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];

  if (pathname !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'mAIth',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seo.title.replace(/ \| mAIth$/, ''),
          item: canonical,
        },
      ],
    });
  }

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

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
    const seo = ROUTE_SEO[location.pathname] ?? {
      title: 'Page Not Found | mAIth',
      description: 'The requested mAIth page could not be found.',
      indexable: false,
    };
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
    upsertRouteSchema(seo, location.pathname, locale);
  }, [location.pathname, locale]);

  return null;
}
