import { getLocale } from '@/i18n';

const thinkersLocales: Record<string, Record<string, string>> = {};

const thinkersLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/thinkers/es.json'),
  fr: () => import('@/i18n/locales/thinkers/fr.json'),
  de: () => import('@/i18n/locales/thinkers/de.json'),
  it: () => import('@/i18n/locales/thinkers/it.json'),
  zh: () => import('@/i18n/locales/thinkers/zh.json'),
  ja: () => import('@/i18n/locales/thinkers/ja.json'),
  ko: () => import('@/i18n/locales/thinkers/ko.json'),
  hi: () => import('@/i18n/locales/thinkers/hi.json'),
  pt: () => import('@/i18n/locales/thinkers/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || thinkersLocales[locale]) return;
  if (!thinkersLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = thinkersLoaders[locale]().then(mod => {
      thinkersLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a thinker field. Falls back to English default. */
export function tThinker(thinkerId: string, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = thinkersLocales[locale];
  if (!dict) return fallback;
  const key = `thinker.${thinkerId}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload thinkers translations for the current locale. */
export async function preloadThinkersTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
