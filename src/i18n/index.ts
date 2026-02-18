import en from './locales/en.json';

type Locale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'zh' | 'ja' | 'ko' | 'hi' | 'pt';

const locales: Record<string, Record<string, string>> = { en };

// Lazy-load non-English locales
const loaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('./locales/es.json'),
  fr: () => import('./locales/fr.json'),
  de: () => import('./locales/de.json'),
  it: () => import('./locales/it.json'),
  zh: () => import('./locales/zh.json'),
  ja: () => import('./locales/ja.json'),
  ko: () => import('./locales/ko.json'),
  hi: () => import('./locales/hi.json'),
  pt: () => import('./locales/pt.json'),
};

let currentLocale: Locale = 'en';
let loadingPromise: Promise<void> | null = null;

export async function setLocale(locale: Locale): Promise<void> {
  currentLocale = locale;
  if (locale !== 'en' && !locales[locale] && loaders[locale]) {
    loadingPromise = loaders[locale]().then(mod => {
      locales[locale] = mod.default;
      loadingPromise = null;
    });
    await loadingPromise;
  }
}

export function getLocale(): Locale {
  return currentLocale;
}

export const SUPPORTED_LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

/**
 * Translate a key. Falls back to English, then to the key itself.
 * Supports simple {{var}} interpolation.
 */
export function t(key: string, vars?: Record<string, string | number>): string {
  const dict = locales[currentLocale] || locales.en;
  let text = dict[key] ?? locales.en[key] ?? key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), String(v));
    });
  }
  return text;
}
