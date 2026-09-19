import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/i18n';

export function LanguageFlags() {
  const { locale, changeLocale, SUPPORTED_LOCALES } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLocale = SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0];

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const clickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', clickHandler);
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('mousedown', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center text-base hover:bg-secondary/80 transition-colors"
        title={t('nav.changeLanguage')}
        aria-label={t('nav.changeLanguage')}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {activeLocale.flag}
      </button>

      {open && (
        <div role="menu" className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg shadow-lg p-2 grid grid-cols-5 gap-1 z-50 min-w-[236px]">
          {SUPPORTED_LOCALES.map((l) => {
            const active = locale === l.code;
            return (
              <button
                key={l.code}
                onClick={() => {
                  changeLocale(l.code);
                  setOpen(false);
                }}
                role="menuitemradio"
                aria-checked={active}
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-base transition-all ${
                  active
                    ? 'bg-primary/15 ring-1 ring-primary/40 scale-110'
                    : 'hover:bg-secondary/80'
                }`}
                title={l.label}
                aria-label={l.label}
              >
                {l.flag}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
