import { SUPPORTED_LOCALES } from '@/i18n';

interface LanguageSelectorProps {
  locale: string;
  onChangeLocale: (locale: string) => void;
}

export function LanguageSelector({ locale, onChangeLocale }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {SUPPORTED_LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => onChangeLocale(l.code)}
          title={l.label}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all ${
            locale === l.code
              ? 'bg-primary/15 ring-1 ring-primary/40 scale-110'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );
}
