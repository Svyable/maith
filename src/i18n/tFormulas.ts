import { getLocale } from '@/i18n';

const formulaLocales: Record<string, Record<string, string>> = {};

const formulaLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/formulas/es.json'),
  fr: () => import('@/i18n/locales/formulas/fr.json'),
  de: () => import('@/i18n/locales/formulas/de.json'),
  it: () => import('@/i18n/locales/formulas/it.json'),
  zh: () => import('@/i18n/locales/formulas/zh.json'),
  ja: () => import('@/i18n/locales/formulas/ja.json'),
  ko: () => import('@/i18n/locales/formulas/ko.json'),
  hi: () => import('@/i18n/locales/formulas/hi.json'),
  pt: () => import('@/i18n/locales/formulas/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || formulaLocales[locale]) return;
  if (!formulaLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = formulaLoaders[locale]().then(mod => {
      formulaLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a formula field. Falls back to English default. */
export function tFormula(formulaId: string, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = formulaLocales[locale];
  if (!dict) return fallback;
  const key = `formula.${formulaId}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload formula translations for the current locale. */
export async function preloadFormulaTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
