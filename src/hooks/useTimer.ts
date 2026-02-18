import { useState, useEffect, useCallback } from 'react';

export function useTimer(duration: number, onTimeout: () => void, isActive: boolean) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeout]);

  const reset = useCallback(() => {
    setTimeLeft(duration);
  }, [duration]);

  return { timeLeft, reset, fraction: timeLeft / duration };
}
