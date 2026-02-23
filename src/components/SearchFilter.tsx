import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchFilterProps {
  /** Current search value */
  value: string;
  /** Called when the search value changes */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Result count to display */
  resultCount?: number;
  /** Label for what is being counted (e.g. "topics", "thinkers") */
  resultLabel?: string;
  /** Auto-focus on mount */
  autoFocus?: boolean;
}

export function SearchFilter({
  value,
  onChange,
  placeholder = 'Search…',
  resultCount,
  resultLabel = 'results',
  autoFocus = false,
}: SearchFilterProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = useCallback(() => {
    onChange('');
    inputRef.current?.focus();
  }, [onChange]);

  return (
    <div className="relative w-full">
      {/* Search icon */}
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full pl-9 pr-16 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      />

      {/* Right side: clear button + result count */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="p-0.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="h-3.5 w-3.5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
        {resultCount !== undefined && value.trim() && (
          <span className="text-[10px] font-medium text-muted-foreground tabular-nums whitespace-nowrap">
            {resultCount} {resultLabel}
          </span>
        )}
      </div>
    </div>
  );
}
