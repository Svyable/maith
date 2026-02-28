import { getLocale } from '@/i18n';

const glossaryLocales: Record<string, Record<string, string>> = {};

const glossaryLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/glossary/es.json'),
  fr: () => import('@/i18n/locales/glossary/fr.json'),
  de: () => import('@/i18n/locales/glossary/de.json'),
  it: () => import('@/i18n/locales/glossary/it.json'),
  zh: () => import('@/i18n/locales/glossary/zh.json'),
  ja: () => import('@/i18n/locales/glossary/ja.json'),
  ko: () => import('@/i18n/locales/glossary/ko.json'),
  hi: () => import('@/i18n/locales/glossary/hi.json'),
  pt: () => import('@/i18n/locales/glossary/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || glossaryLocales[locale]) return;
  if (!glossaryLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = glossaryLoaders[locale]().then(mod => {
      glossaryLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a glossary term field. Falls back to English default. */
export function tGlossary(termId: string, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = glossaryLocales[locale];
  if (!dict) return fallback;
  const key = `glossary.${termId}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload glossary translations for the current locale. */
export async function preloadGlossaryTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
