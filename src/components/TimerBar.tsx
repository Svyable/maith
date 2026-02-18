import { motion } from 'framer-motion';

interface TimerBarProps {
  fraction: number;
  timeLeft: number;
}

export function TimerBar({ fraction, timeLeft }: TimerBarProps) {
  const isUrgent = timeLeft <= 5;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-muted-foreground font-mono">TIME</span>
        <span className={`text-sm font-mono font-bold ${isUrgent ? 'text-destructive animate-timer-pulse' : 'text-foreground'}`}>
          {timeLeft}s
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${isUrgent ? 'bg-destructive' : 'bg-primary'}`}
          initial={{ width: '100%' }}
          animate={{ width: `${fraction * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
