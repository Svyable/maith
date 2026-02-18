import { useState, useCallback, useEffect } from 'react';
import { setLocale, getLocale, SUPPORTED_LOCALES } from '@/i18n';

type Locale = typeof SUPPORTED_LOCALES[number]['code'];

const STORAGE_KEY = 'math-mastery-locale';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Locale) || getLocale();
  });
  const [, setTick] = useState(0);

  // Load stored locale on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored !== 'en') {
      setLocale(stored).then(() => setTick(t => t + 1));
    }
  }, []);

  const changeLocale = useCallback(async (newLocale: Locale) => {
    await setLocale(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    setLocaleState(newLocale);
    setTick(t => t + 1); // force re-render
  }, []);

  return { locale, changeLocale, SUPPORTED_LOCALES };
}
