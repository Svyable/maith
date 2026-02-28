import { createContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { setLocale as setI18nLocale, getLocale, SUPPORTED_LOCALES } from '@/i18n';
import { preloadQuestionTranslations } from '@/i18n/tQuestion';

type Locale = typeof SUPPORTED_LOCALES[number]['code'];

const STORAGE_KEY = 'math-mastery-locale';
const SUPPORTED_CODES = SUPPORTED_LOCALES.map(l => l.code);

/** Detect browser language and map to a supported locale code */
function detectBrowserLocale(): Locale {
  const langs = navigator.languages ?? [navigator.language];
  for (const lang of langs) {
    const code = lang.split('-')[0].toLowerCase();
    if (SUPPORTED_CODES.includes(code as Locale)) return code as Locale;
  }
  return 'en';
}

interface LocaleContextValue {
  locale: Locale;
  changeLocale: (newLocale: Locale) => Promise<void>;
  SUPPORTED_LOCALES: typeof SUPPORTED_LOCALES;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_CODES.includes(stored as Locale)) return stored as Locale;
    return detectBrowserLocale();
  });

  // On mount: load the detected/stored locale if non-English
  useEffect(() => {
    if (locale !== 'en') {
      setI18nLocale(locale).then(() => {
        preloadQuestionTranslations(locale);
        // Force a state "bump" so children re-render with loaded translations
        setLocaleState(locale);
      });
    }
    // persist detected locale so it sticks
    localStorage.setItem(STORAGE_KEY, locale);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const changeLocale = useCallback(async (newLocale: Locale) => {
    await setI18nLocale(newLocale);
    await preloadQuestionTranslations(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, SUPPORTED_LOCALES }}>
      {/* Key forces full re-render of tree when locale changes, ensuring t() calls pick up new strings */}
      <div key={locale}>{children}</div>
    </LocaleContext.Provider>
  );
}
