import { getLocale } from '@/i18n';

const bonafidesLocales: Record<string, Record<string, string>> = {};

const bonafidesLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/bonafides/es.json'),
  fr: () => import('@/i18n/locales/bonafides/fr.json'),
  de: () => import('@/i18n/locales/bonafides/de.json'),
  it: () => import('@/i18n/locales/bonafides/it.json'),
  zh: () => import('@/i18n/locales/bonafides/zh.json'),
  ja: () => import('@/i18n/locales/bonafides/ja.json'),
  ko: () => import('@/i18n/locales/bonafides/ko.json'),
  hi: () => import('@/i18n/locales/bonafides/hi.json'),
  pt: () => import('@/i18n/locales/bonafides/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || bonafidesLocales[locale]) return;
  if (!bonafidesLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = bonafidesLoaders[locale]().then(mod => {
      bonafidesLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a bonafide field. Falls back to English default. */
export function tBonafide(entryId: string, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = bonafidesLocales[locale];
  if (!dict) return fallback;
  const key = `bonafide.${entryId}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload bonafides translations for the current locale. */
export async function preloadBonafidesTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
