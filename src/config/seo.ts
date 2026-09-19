import { APP_PATHS } from './site-navigation';
import {
  LEARNING_INDEXABLE_PAGES,
  getLearningPage,
} from './learning-pages';

export const SITE_URL = 'https://maith.lovable.app';

export const SOCIAL_IMAGE =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/RN78vpXkfGX9PxLUmDbYRwRhiFc2/social-images/social-1772120459577-3e13c96c-ad39-4510-bda6-3b12187983be.webp';

export type SeoSchemaType = 'WebPage' | 'CollectionPage';

export interface RouteSeo {
  title: string;
  description: string;
  indexable: boolean;
  schemaType?: SeoSchemaType;
}

export interface SeoRouteEntry {
  path: string;
  seo: RouteSeo;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const DEFAULT_SEO: RouteSeo = {
  title: 'mAIth — Interactive Math, Physics & AI Quizzes',
  description:
    'Learn math, physics, computer science, and AI with gamified quizzes, formulas, glossary flash cards, and knowledge challenges.',
  indexable: true,
  schemaType: 'WebPage',
};

export const NOT_FOUND_SEO: RouteSeo = {
  title: 'Page Not Found | mAIth',
  description: 'The requested mAIth page could not be found.',
  indexable: false,
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
  [APP_PATHS.home]: DEFAULT_SEO,
  [APP_PATHS.glossary]: {
    title: 'Math, Physics & AI Glossary | mAIth',
    description:
      'Explore a searchable STEM glossary with concise definitions, LaTeX, code, and flash-card learning across math, physics, computer science, and AI.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.formulas]: {
    title: 'Famous Math & Physics Formulas Library | mAIth',
    description:
      'Explore important equations from mathematics, physics, statistics, computing, and AI with discoverers, history, applications, and explanations.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.thinkers]: {
    title: 'Great Mathematicians, Scientists & AI Thinkers | mAIth',
    description:
      'Explore influential mathematicians, scientists, economists, computer scientists, and AI pioneers through profiles and focused challenge quizzes.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.vault]: {
    title: 'STEM Knowledge Vault & Challenge Questions | mAIth',
    description:
      'Explore mAIth’s knowledge vault: technical concepts, scientific ideas, and progressively unlocked challenge material across STEM and AI.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.bonafides]: {
    title: 'Professional Certification Practice Quizzes | mAIth',
    description:
      'Practice professional credential topics with focused quizzes spanning finance, accounting, risk, analytics, and other quantitative certification domains.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.leaderboard]: {
    title: 'Math Quiz Leaderboard | mAIth',
    description:
      'See mAIth quiz rankings, streaks, and top scores across the learning community and compare performance across technical topics.',
    indexable: true,
    schemaType: 'WebPage',
  },
  [APP_PATHS.learn]: {
    title: 'Math, Science & AI Practice Topics | mAIth',
    description:
      'Browse structured practice topics across mathematics, physics, computer science, engineering, finance, and AI with interactive questions by difficulty.',
    indexable: true,
    schemaType: 'CollectionPage',
  },
  [APP_PATHS.auth]: {
    title: 'Sign In | mAIth',
    description: 'Sign in to mAIth.',
    indexable: false,
  },
  [APP_PATHS.onboarding]: {
    title: 'Set Up Your mAIth Profile',
    description: 'Set up your mAIth learning profile.',
    indexable: false,
  },
  [APP_PATHS.profile]: {
    title: 'Your Learning Profile | mAIth',
    description: 'View your personal mAIth learning statistics and progress.',
    indexable: false,
  },
};

export const OG_LOCALES: Record<string, string> = {
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

export function normalizeSeoPath(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function canonicalUrl(pathname: string): string {
  const normalized = normalizeSeoPath(pathname);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function getSeoForPath(pathname: string): RouteSeo {
  const normalized = normalizeSeoPath(pathname);
  const staticSeo = ROUTE_SEO[normalized];
  if (staticSeo) return staticSeo;

  const learningPage = getLearningPage(normalized);
  if (learningPage) {
    return {
      title: learningPage.seoTitle,
      description: learningPage.seoDescription,
      indexable: learningPage.indexable,
      schemaType: learningPage.kind === 'field' ? 'CollectionPage' : 'WebPage',
    };
  }

  return NOT_FOUND_SEO;
}

export const INDEXABLE_SEO_ROUTES: SeoRouteEntry[] = [
  ...Object.entries(ROUTE_SEO)
    .filter(([, seo]) => seo.indexable)
    .map(([path, seo]) => ({ path, seo })),
  ...LEARNING_INDEXABLE_PAGES.map((page) => ({
    path: page.path,
    seo: getSeoForPath(page.path),
  })),
];

export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = normalizeSeoPath(pathname);
  if (normalized === APP_PATHS.home) return [{ name: 'mAIth', path: APP_PATHS.home }];

  const learningPage = getLearningPage(normalized);
  if (learningPage?.kind === 'field') {
    return [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'Practice Library', path: APP_PATHS.learn },
      { name: learningPage.field.label, path: learningPage.path },
    ];
  }

  if (learningPage?.kind === 'topic') {
    return [
      { name: 'mAIth', path: APP_PATHS.home },
      { name: 'Practice Library', path: APP_PATHS.learn },
      { name: learningPage.field.label, path: `${APP_PATHS.learn}/${learningPage.field.slug}` },
      { name: learningPage.topic.label, path: learningPage.path },
    ];
  }

  const seo = getSeoForPath(normalized);
  return [
    { name: 'mAIth', path: APP_PATHS.home },
    {
      name: normalized === APP_PATHS.learn
        ? 'Practice Library'
        : seo.title.replace(/ \| mAIth$/, ''),
      path: normalized,
    },
  ];
}

export function buildRouteSchemaData(pathname: string, locale = 'en') {
  const normalized = normalizeSeoPath(pathname);
  const seo = getSeoForPath(normalized);
  if (!seo.indexable) return null;

  const canonical = canonicalUrl(normalized);
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

  const breadcrumbs = getBreadcrumbsForPath(normalized);
  if (breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: canonicalUrl(item.path),
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
