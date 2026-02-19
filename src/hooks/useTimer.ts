import { useState, useEffect, useCallback, useRef } from 'react';

export function useTimer(duration: number, onTimeout: () => void, isActive: boolean) {
  const [timeLeft, setTimeLeft] = useState(duration);
  // Keep onTimeout stable via ref so it never causes effect re-runs
  const onTimeoutRef = useRef(onTimeout);
  onTimeoutRef.current = onTimeout;

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;
    if (timeLeft <= 0) {
      onTimeoutRef.current();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isActive]); // onTimeout intentionally omitted — use ref instead

  const reset = useCallback(() => {
    setTimeLeft(duration);
  }, [duration]);

  return { timeLeft, reset, fraction: timeLeft / duration };
}
