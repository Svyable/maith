// ── AchievementFilter — filter thinkers by mastery status ──
import { motion } from 'framer-motion';

export type AchievementFilterValue = 'all' | 'achieved' | 'unachieved';

interface AchievementFilterProps {
  value: AchievementFilterValue;
  onChange: (v: AchievementFilterValue) => void;
  achievedCount: number;
  totalCount: number;
}

const FILTERS: { key: AchievementFilterValue; emoji: string; label: string }[] = [
  { key: 'all', emoji: '📚', label: 'All' },
  { key: 'achieved', emoji: '🏆', label: 'Q.E.D.' },
  { key: 'unachieved', emoji: '🎯', label: 'Unproven' },
];

export function AchievementFilter({ value, onChange, achievedCount, totalCount }: AchievementFilterProps) {
  if (achievedCount === 0) return null;

  const counts: Record<AchievementFilterValue, number> = {
    all: totalCount,
    achieved: achievedCount,
    unachieved: totalCount - achievedCount,
  };

  return (
    <div className="flex items-center gap-1.5 justify-center flex-wrap">
      {FILTERS.map((f) => {
        const isActive = value === f.key;
        return (
          <motion.button
            key={f.key}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(f.key)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
              isActive
                ? f.key === 'achieved'
                  ? 'bg-amber-500/15 border-amber-400/40 text-amber-400 shadow-[0_0_10px_-3px_hsl(45,90%,55%,0.3)]'
                  : 'bg-primary/10 border-primary/30 text-primary'
                : 'bg-card/60 border-border/50 text-muted-foreground hover:border-primary/30'
            }`}
          >
            {f.emoji} {f.label}
            <span className="text-[10px] font-mono opacity-70">({counts[f.key]})</span>
          </motion.button>
        );
      })}
    </div>
  );
}
