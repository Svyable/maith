import { createContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { setLocale as setI18nLocale, getLocale, SUPPORTED_LOCALES } from '@/i18n';
import { preloadQuestionTranslations } from '@/i18n/tQuestion';

type Locale = typeof SUPPORTED_LOCALES[number]['code'];

const STORAGE_KEY = 'math-mastery-locale';

interface LocaleContextValue {
  locale: Locale;
  changeLocale: (newLocale: Locale) => Promise<void>;
  SUPPORTED_LOCALES: typeof SUPPORTED_LOCALES;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Locale) || getLocale();
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored !== 'en') {
      setI18nLocale(stored).then(() => {
        preloadQuestionTranslations(stored);
        setLocaleState(stored);
      });
    }
  }, []);

  const changeLocale = useCallback(async (newLocale: Locale) => {
    await setI18nLocale(newLocale);
    preloadQuestionTranslations(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, SUPPORTED_LOCALES }}>
      {children}
    </LocaleContext.Provider>
  );
}
