import { getLocale } from '@/i18n';

const vaultLocales: Record<string, Record<string, string>> = {};

const vaultLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/vault/es.json'),
  fr: () => import('@/i18n/locales/vault/fr.json'),
  de: () => import('@/i18n/locales/vault/de.json'),
  it: () => import('@/i18n/locales/vault/it.json'),
  zh: () => import('@/i18n/locales/vault/zh.json'),
  ja: () => import('@/i18n/locales/vault/ja.json'),
  ko: () => import('@/i18n/locales/vault/ko.json'),
  hi: () => import('@/i18n/locales/vault/hi.json'),
  pt: () => import('@/i18n/locales/vault/pt.json'),
};

const loadPromises: Record<string, Promise<void>> = {};

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || vaultLocales[locale]) return;
  if (!vaultLoaders[locale]) return;
  if (!loadPromises[locale]) {
    loadPromises[locale] = vaultLoaders[locale]().then(mod => {
      vaultLocales[locale] = mod.default;
    }).catch(() => {
      delete loadPromises[locale];
    });
  }
  await loadPromises[locale];
}

/** Translate a vault entry field. Falls back to English default. */
export function tVault(entryId: string, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;
  ensureLoaded(locale);
  const dict = vaultLocales[locale];
  if (!dict) return fallback;
  const key = `vault.${entryId}.${field}`;
  return dict[key] ?? fallback;
}

/** Preload vault translations for the current locale. */
export async function preloadVaultTranslations(locale: string): Promise<void> {
  await ensureLoaded(locale);
}
