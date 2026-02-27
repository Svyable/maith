import { useContext } from 'react';
import { LocaleContext } from '@/contexts/LocaleContext';
import { SUPPORTED_LOCALES } from '@/i18n';

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return ctx;
}
