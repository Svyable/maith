import { getLocale } from '@/i18n';

const topicLocales: Record<string, Record<string, string>> = {};

const topicLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/topics/es.json'),
  fr: () => import('@/i18n/locales/topics/fr.json'),
  de: () => import('@/i18n/locales/topics/de.json'),
  it: () => import('@/i18n/locales/topics/it.json'),
  zh: () => import('@/i18n/locales/topics/zh.json'),
  ja: () => import('@/i18n/locales/topics/ja.json'),
  ko: () => import('@/i18n/locales/topics/ko.json'),
  hi: () => import('@/i18n/locales/topics/hi.json'),
  pt: () => import('@/i18n/locales/topics/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || topicLocales[locale]) return;
  if (!topicLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = topicLoaders[locale]().then(mod => {
      topicLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a topic field (label or desc). Falls back to English default from TopicMeta. */
export function tTopic(topicSlug: string, field: 'label' | 'desc', fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = topicLocales[locale];
  if (!dict) return fallback;
  const key = `topic.${topicSlug}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload topic translations for the current locale. */
export async function preloadTopicTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
