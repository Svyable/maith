import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext } from '@/contexts/LocaleContext';

const SITE_URL = 'https://maith.lovable.app';
const SOCIAL_IMAGE =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/RN78vpXkfGX9PxLUmDbYRwRhiFc2/social-images/social-1772120459577-3e13c96c-ad39-4510-bda6-3b12187983be.webp';

type SchemaType = 'WebPage' | 'CollectionPage';

interface RouteSeo {
  title: string;
  description: string;
  indexable: boolean;
  schemaType?: SchemaType;
}

const DEFAULT_SEO: RouteSeo = {
  title: 'mAIth — Interactive Math, Physics & AI Quizzes',
  description:
    'Learn math, physics, computer science, and AI with gamified quizzes, formulas, glossary flash cards, and knowledge challenges.',
  indexable: true,
  schemaType: 'WebPage',
};

const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': DEFAULT_SEO,
  '/glossary': {
    title: 'Math, Physics & AI Glossary | mAIth',
    description:
      'Explore a searchable STEM glossary with concise definitions, LaTeX, code, and flash-card learning across math, physics, computer science, and AI.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  '/formulas': {
    title: 'Famous Math & Physics Formulas Library | mAIth',
    description:
      'Explore important equations from mathematics, physics, statistics, computing, and AI with discoverers, history, applications, and explanations.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  '/thinkers': {
    title: 'Great Mathematicians, Scientists & AI Thinkers | mAIth',
    description:
      'Explore influential mathematicians, scientists, economists, computer scientists, and AI pioneers through profiles and focused challenge quizzes.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  '/vault': {
    title: 'STEM Knowledge Vault & Challenge Questions | mAIth',
    description:
      'Explore mAIth’s knowledge vault: technical concepts, scientific ideas, and progressively unlocked challenge material across STEM and AI.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  '/bonafides': {
    title: 'Professional Certification Practice Quizzes | mAIth',
    description:
      'Practice professional credential topics with focused quizzes spanning finance, accounting, risk, analytics, and other quantitative certification domains.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  '/leaderboard': {
    title: 'Math Quiz Leaderboard | mAIth',
    description:
      'See mAIth quiz rankings, streaks, and top scores across the learning community and compare performance across technical topics.',
    indexable: true,
    schemaType: 'WebPage',
  },
  '/auth': {
    title: 'Sign In | mAIth',
    description: 'Sign in to mAIth.',
    indexable: false,
  },
  '/onboarding': {
    title: 'Set Up Your mAIth Profile',
    description: 'Set up your mAIth learning profile.',
    indexable: false,
  },
  '/profile': {
    title: 'Your Learning Profile | mAIth',
    description: 'View your personal mAIth learning statistics and progress.',
    indexable: false,
  },
};

const OG_LOCALES: Record<string, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  zh: 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
  hi: 'hi_IN',
  pt: 'pt_BR',
};

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
