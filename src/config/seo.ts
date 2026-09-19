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

export const DEFAULT_SEO: RouteSeo = {
  title: 'mAIth — Interactive Math, Physics & AI Quizzes',
  description:
    'Learn math, physics, computer science, and AI with gamified quizzes, formulas, glossary flash cards, and knowledge challenges.',
  indexable: true,
  schemaType: 'WebPage',
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
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
