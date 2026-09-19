// ============================================================
// Site navigation & route metadata — canonical information architecture
// ============================================================
//
// Keep paths and navigation metadata here so the router, header, footer,
// home discovery surface, and SEO landing pages cannot silently drift apart.

export const APP_PATHS = {
  home: '/',
  auth: '/auth',
  onboarding: '/onboarding',
  profile: '/profile',
  leaderboard: '/leaderboard',
  thinkers: '/thinkers',
  glossary: '/glossary',
  formulas: '/formulas',
  vault: '/vault',
  bonafides: '/bonafides',
  learn: '/learn',
} as const;

export type AppRouteKey = keyof typeof APP_PATHS;
export type AppPath = (typeof APP_PATHS)[AppRouteKey];

export const QUIZ_SETUP_HASH = '#quiz-setup';

export const LEARN_ROUTE_PATTERNS = {
  field: `${APP_PATHS.learn}/:fieldSlug`,
  topic: `${APP_PATHS.learn}/:fieldSlug/:topicSlug`,
} as const;

export function buildLearnFieldPath(fieldSlug: string): string {
  return `${APP_PATHS.learn}/${encodeURIComponent(fieldSlug)}`;
}

export function buildLearnTopicPath(fieldSlug: string, topicSlug: string): string {
  return `${buildLearnFieldPath(fieldSlug)}/${encodeURIComponent(topicSlug)}`;
}

export function buildTopicQuizHref(topicSlug: string): string {
  return `${APP_PATHS.home}?topic=${encodeURIComponent(topicSlug)}${QUIZ_SETUP_HASH}`;
}

export function buildFieldQuizHref(fieldSlug: string): string {
  return `${APP_PATHS.home}?field=${encodeURIComponent(fieldSlug)}${QUIZ_SETUP_HASH}`;
}

export const SITE_DESTINATIONS = {
  quiz: {
    path: APP_PATHS.home,
    emoji: '🧠',
    primaryLabelKey: 'nav.quiz',
    footerLabelKey: 'footer.quiz',
  },
  thinkers: {
    path: APP_PATHS.thinkers,
    emoji: '🗿',
    primaryLabelKey: 'nav.masterMinds',
    footerLabelKey: 'footer.masterMinds',
    discoveryTitleKey: 'home.masterMinds',
    discoverySubtitleKey: 'home.masterMindsSub',
  },
  formulas: {
    path: APP_PATHS.formulas,
    emoji: '📜',
    primaryLabelKey: 'nav.formulas',
    footerLabelKey: 'footer.formulas',
    discoveryTitleKey: 'home.formulas',
    discoverySubtitleKey: 'home.formulasSub',
  },
  glossary: {
    path: APP_PATHS.glossary,
    emoji: '📖',
    primaryLabelKey: 'nav.glossary',
    footerLabelKey: 'footer.glossary',
    discoveryTitleKey: 'home.glossary',
    discoverySubtitleKey: 'home.glossarySub',
  },
  bonafides: {
    path: APP_PATHS.bonafides,
    emoji: '🪪',
    primaryLabelKey: 'nav.bonafides',
    footerLabelKey: 'footer.bonafides',
    discoveryTitleKey: 'home.bonafides',
    discoverySubtitleKey: 'home.bonafidesSub',
  },
  vault: {
    path: APP_PATHS.vault,
    emoji: '🔐',
    primaryLabelKey: 'nav.vault',
    footerLabelKey: 'footer.vault',
    discoveryTitleKey: 'home.vault',
    discoverySubtitleKey: 'home.vaultSub',
  },
  leaderboard: {
    path: APP_PATHS.leaderboard,
    emoji: '🏆',
    primaryLabelKey: 'nav.leaderboard',
    footerLabelKey: 'footer.leaderboard',
  },
  learn: {
    path: APP_PATHS.learn,
    emoji: '🧭',
    footerLabelKey: 'home.discover',
  },
} as const;

export const PRIMARY_NAV_ITEMS = [
  { id: 'quiz', ...SITE_DESTINATIONS.quiz, hash: QUIZ_SETUP_HASH, labelKey: SITE_DESTINATIONS.quiz.primaryLabelKey },
  { id: 'thinkers', ...SITE_DESTINATIONS.thinkers, labelKey: SITE_DESTINATIONS.thinkers.primaryLabelKey },
  { id: 'formulas', ...SITE_DESTINATIONS.formulas, labelKey: SITE_DESTINATIONS.formulas.primaryLabelKey },
  { id: 'bonafides', ...SITE_DESTINATIONS.bonafides, labelKey: SITE_DESTINATIONS.bonafides.primaryLabelKey },
  { id: 'vault', ...SITE_DESTINATIONS.vault, labelKey: SITE_DESTINATIONS.vault.primaryLabelKey },
  { id: 'glossary', ...SITE_DESTINATIONS.glossary, labelKey: SITE_DESTINATIONS.glossary.primaryLabelKey },
  { id: 'leaderboard', ...SITE_DESTINATIONS.leaderboard, labelKey: SITE_DESTINATIONS.leaderboard.primaryLabelKey },
] as const;

export const FOOTER_NAV_ITEMS = [
  { id: 'quiz', ...SITE_DESTINATIONS.quiz, labelKey: SITE_DESTINATIONS.quiz.footerLabelKey },
  { id: 'learn', ...SITE_DESTINATIONS.learn, labelKey: SITE_DESTINATIONS.learn.footerLabelKey },
  { id: 'thinkers', ...SITE_DESTINATIONS.thinkers, labelKey: SITE_DESTINATIONS.thinkers.footerLabelKey },
  { id: 'formulas', ...SITE_DESTINATIONS.formulas, labelKey: SITE_DESTINATIONS.formulas.footerLabelKey },
  { id: 'bonafides', ...SITE_DESTINATIONS.bonafides, labelKey: SITE_DESTINATIONS.bonafides.footerLabelKey },
  { id: 'vault', ...SITE_DESTINATIONS.vault, labelKey: SITE_DESTINATIONS.vault.footerLabelKey },
  { id: 'glossary', ...SITE_DESTINATIONS.glossary, labelKey: SITE_DESTINATIONS.glossary.footerLabelKey },
  { id: 'leaderboard', ...SITE_DESTINATIONS.leaderboard, labelKey: SITE_DESTINATIONS.leaderboard.footerLabelKey },
] as const;

export const DISCOVERY_NAV_ITEMS = [
  {
    id: 'thinkers',
    ...SITE_DESTINATIONS.thinkers,
    titleKey: SITE_DESTINATIONS.thinkers.discoveryTitleKey,
    subtitleKey: SITE_DESTINATIONS.thinkers.discoverySubtitleKey,
  },
  {
    id: 'formulas',
    ...SITE_DESTINATIONS.formulas,
    titleKey: SITE_DESTINATIONS.formulas.discoveryTitleKey,
    subtitleKey: SITE_DESTINATIONS.formulas.discoverySubtitleKey,
  },
  {
    id: 'glossary',
    ...SITE_DESTINATIONS.glossary,
    titleKey: SITE_DESTINATIONS.glossary.discoveryTitleKey,
    subtitleKey: SITE_DESTINATIONS.glossary.discoverySubtitleKey,
  },
  {
    id: 'bonafides',
    ...SITE_DESTINATIONS.bonafides,
    titleKey: SITE_DESTINATIONS.bonafides.discoveryTitleKey,
    subtitleKey: SITE_DESTINATIONS.bonafides.discoverySubtitleKey,
  },
  {
    id: 'vault',
    ...SITE_DESTINATIONS.vault,
    titleKey: SITE_DESTINATIONS.vault.discoveryTitleKey,
    subtitleKey: SITE_DESTINATIONS.vault.discoverySubtitleKey,
  },
] as const;

export const EXTERNAL_LINKS = {
  alphabet: {
    id: 'alphabet',
    url: 'https://geektome.lovable.app',
    emoji: '🔤',
    navLabelKey: 'nav.alphabet',
    footerLabelKey: 'footer.alphabet',
    discoveryTitleKey: 'home.alphabet',
    discoverySubtitleKey: 'home.alphabetSub',
  },
} as const;
