import { useEffect, useCallback } from 'react';

interface UseKeyboardOptions {
  onOption?: (index: number) => void;
  onHint?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  enabled?: boolean;
}

export function useKeyboard({ onOption, onHint, onNext, onSkip, enabled = true }: UseKeyboardOptions) {
  const handler = useCallback((e: KeyboardEvent) => {
    if (!enabled) return;
    // Ignore if typing in input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    const key = e.key.toLowerCase();

    // 1-4 or a-d for options
    if (onOption) {
      if (key >= '1' && key <= '4') { e.preventDefault(); onOption(parseInt(key) - 1); return; }
      const letterMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };
      if (key in letterMap) { e.preventDefault(); onOption(letterMap[key]); return; }
    }

    if (key === 'h' && onHint) { e.preventDefault(); onHint(); return; }
    if ((key === 'enter' || key === ' ') && onNext) { e.preventDefault(); onNext(); return; }
    if (key === 's' && onSkip) { e.preventDefault(); onSkip(); return; }
  }, [onOption, onHint, onNext, onSkip, enabled]);

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handler]);
}
