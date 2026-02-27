import { useLocale } from '@/hooks/useLocale';

export function LanguageFlags() {
  const { locale, changeLocale, SUPPORTED_LOCALES } = useLocale();

  return (
    <div className="flex items-center gap-1">
      {SUPPORTED_LOCALES.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            onClick={() => changeLocale(l.code)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all ${
              active
                ? 'bg-primary/15 ring-1 ring-primary/40 scale-110'
                : 'bg-secondary hover:bg-secondary/80'
            }`}
            title={l.label}
            aria-label={l.label}
          >
            {l.flag}
          </button>
        );
      })}
    </div>
  );
}