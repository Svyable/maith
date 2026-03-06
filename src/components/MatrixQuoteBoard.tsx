import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { getRandomQuote, type Quote, QUOTES } from '@/content/quotes';
import { useLocale } from '@/hooks/useLocale';

const MATH_CHARS = 'αβγδεζηθλμπσφψω∑∫∇∂∞∈ℝℂ±√×÷01';
const CYCLE_INTERVAL = 8000; // ms between quotes
const SCRAMBLE_DURATION = 1200; // ms for the full reveal
const TICK_RATE = 40; // ms per animation frame

interface CharState {
  target: string;
  current: string;
  revealed: boolean;
}

export const MatrixQuoteBoard = memo(function MatrixQuoteBoard() {
  const { locale } = useLocale();
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote(locale));
  const [displayChars, setDisplayChars] = useState<CharState[]>([]);
  const [authorRevealed, setAuthorRevealed] = useState(false);
  const tickRef = useRef<ReturnType<typeof setInterval>>();
  const cycleRef = useRef<ReturnType<typeof setInterval>>();
  const quoteIndexRef = useRef(0);

  const scrambleTo = useCallback((newQuote: Quote) => {
    setAuthorRevealed(false);
    const target = newQuote.text;
    const chars: CharState[] = Array.from(target).map((ch) => ({
      target: ch,
      current: ch === ' ' ? ' ' : MATH_CHARS[Math.floor(Math.random() * MATH_CHARS.length)],
      revealed: ch === ' ',
    }));
    setDisplayChars(chars);

    let elapsed = 0;
    if (tickRef.current) clearInterval(tickRef.current);

    tickRef.current = setInterval(() => {
      elapsed += TICK_RATE;
      const progress = Math.min(elapsed / SCRAMBLE_DURATION, 1);
      // Ease-out cubic for smooth reveal
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const revealUpTo = Math.floor(easedProgress * target.length);

      setDisplayChars((prev) =>
        prev.map((ch, i) => {
          if (ch.revealed) return ch;
          if (i < revealUpTo) {
            return { ...ch, current: ch.target, revealed: true };
          }
          // Still scrambling — cycle random math chars
          return {
            ...ch,
            current: MATH_CHARS[Math.floor(Math.random() * MATH_CHARS.length)],
            revealed: false,
          };
        })
      );

      if (progress >= 1) {
        clearInterval(tickRef.current);
        setAuthorRevealed(true);
      }
    }, TICK_RATE);
  }, []);

  // Initial scramble + locale change
  useEffect(() => {
    const q = getRandomQuote(locale);
    setQuote(q);
    quoteIndexRef.current = 0;
    scrambleTo(q);
  }, [locale, scrambleTo]);

  // Auto-cycle quotes
  useEffect(() => {
    cycleRef.current = setInterval(() => {
      const pool = QUOTES[locale] ?? QUOTES.en;
      quoteIndexRef.current = (quoteIndexRef.current + 1) % pool.length;
      const next = pool[quoteIndexRef.current];
      setQuote(next);
      scrambleTo(next);
    }, CYCLE_INTERVAL);

    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [locale, scrambleTo]);

  return (
    <div className="w-full max-w-xl rounded-xl border border-border/60 bg-card/50 p-5 text-center overflow-hidden">
      {/* Quote text with matrix effect */}
      <p className="text-sm italic text-muted-foreground leading-relaxed min-h-[3rem] font-mono">
        <span className="text-muted-foreground/40">&ldquo;</span>
        {displayChars.map((ch, i) => (
          <span
            key={i}
            className={
              ch.revealed
                ? 'text-foreground/90 transition-colors duration-200'
                : 'text-primary/70'
            }
            style={{
              display: 'inline',
              fontFamily: ch.revealed ? 'inherit' : 'monospace',
            }}
          >
            {ch.current}
          </span>
        ))}
        <span className="text-muted-foreground/40">&rdquo;</span>
      </p>

      {/* Author with fade-in */}
      <p
        className="text-xs font-semibold text-accent mt-3 transition-all duration-500"
        style={{
          opacity: authorRevealed ? 1 : 0,
          transform: authorRevealed ? 'translateY(0)' : 'translateY(4px)',
        }}
      >
        — {quote.author}
      </p>
    </div>
  );
});
