import { getLocale } from '@/i18n';

// Lazy-loaded question translations per locale
const questionLocales: Record<string, Record<string, string>> = {};

const questionLoaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  es: () => import('@/i18n/locales/questions/es.json'),
  fr: () => import('@/i18n/locales/questions/fr.json'),
  de: () => import('@/i18n/locales/questions/de.json'),
  it: () => import('@/i18n/locales/questions/it.json'),
};

let loadPromise: Promise<void> | null = null;

async function ensureLoaded(locale: string): Promise<void> {
  if (locale === 'en' || questionLocales[locale]) return;
  if (!questionLoaders[locale]) return;
  if (!loadPromise) {
    loadPromise = questionLoaders[locale]().then(mod => {
      questionLocales[locale] = mod.default;
      loadPromise = null;
    }).catch(() => { loadPromise = null; });
  }
  await loadPromise;
}

/**
 * Translate a question field using i18n overrides.
 * Falls back to the English default embedded in the Question object.
 */
export function tQuestion(questionId: number, field: string, fallback: string): string {
  const locale = getLocale();
  if (locale === 'en') return fallback;

  // Try to load if not loaded yet (async, but return fallback if not ready)
  ensureLoaded(locale);

  const dict = questionLocales[locale];
  if (!dict) return fallback;

  const key = `q.${questionId}.${field}`;
  return dict[key] ?? fallback;
}

/**
 * Translate question options array.
 */
export function tQuestionOptions(questionId: number, options: string[]): string[] {
  const locale = getLocale();
  if (locale === 'en') return options;

  const dict = questionLocales[locale];
  if (!dict) return options;

  return options.map((opt, i) => {
    const key = `q.${questionId}.options.${i}`;
    return dict[key] ?? opt;
  });
}
