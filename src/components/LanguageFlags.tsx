import { useEffect, useState } from 'react';
import { getLocale, setLocale } from '@/i18n';

const LOCALES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export function LanguageFlags() {
  const [locale, setLocal] = useState(getLocale());

  useEffect(() => {
    const id = setInterval(() => setLocal(getLocale()), 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2">
      {LOCALES.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            onClick={() => {
              setLocale(l.code);
              setLocal(l.code);
            }}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
              active
                ? 'bg-primary/15 border-primary text-primary'
                : 'bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
            }`}
            title={l.label}
            aria-label={l.label}
          >
            <span className="text-base">{l.flag}</span>
          </button>
        );
      })}
    </div>
  );
}