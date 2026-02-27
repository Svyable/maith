import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { useIsMobile } from '@/hooks/use-mobile';

export function LanguageFlags() {
  const { locale, changeLocale, SUPPORTED_LOCALES } = useLocale();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLocale = SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0];

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!isMobile) {
    // Desktop: inline flags
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

  // Mobile: single flag button + dropdown
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-sm hover:bg-secondary/80 transition-colors"
        title="Change language"
        aria-label="Change language"
      >
        {activeLocale.flag}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-xl shadow-lg p-2 grid grid-cols-5 gap-1 z-50 min-w-[200px]">
          {SUPPORTED_LOCALES.map((l) => {
            const active = locale === l.code;
            return (
              <button
                key={l.code}
                onClick={() => {
                  changeLocale(l.code);
                  setOpen(false);
                }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all ${
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
