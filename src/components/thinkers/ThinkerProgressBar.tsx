// ── ThinkerProgressBar — user mastery stats for the gallery page ──
// ∅ → ∀ mastery scale with nerdy labels

import { motion } from 'framer-motion';
import { THINKERS } from '@/config/thinkers';
import { t } from '@/i18n';

interface ThinkerProgressBarProps {
  achievedSlugs: Set<string>;
}

function getMasteryLabel(pct: number): { emoji: string; label: string; greek: string } {
  if (pct === 0) return { emoji: '∅', label: 'Tabula Rasa', greek: 'ε → 0' };
  if (pct < 10) return { emoji: '𝛼', label: 'Neophyte', greek: 'lim n→∞' };
  if (pct < 25) return { emoji: '𝛽', label: 'Apprentice', greek: '∂/∂x' };
  if (pct < 50) return { emoji: '𝛾', label: 'Scholar', greek: '∫dx' };
  if (pct < 75) return { emoji: '𝛿', label: 'Polymath', greek: '∇·F' };
  if (pct < 100) return { emoji: 'Σ', label: 'Grandmaster', greek: '∀x∃y' };
  return { emoji: '∀', label: 'Omniscient', greek: 'Q.E.D.' };
}

export function ThinkerProgressBar({ achievedSlugs }: ThinkerProgressBarProps) {
  const total = THINKERS.length;
  const achieved = achievedSlugs.size;
  const pct = total > 0 ? Math.round((achieved / total) * 100) : 0;
  const mastery = getMasteryLabel(pct);

  if (achieved === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-amber-400/20 p-4 space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{mastery.emoji}</span>
          <div>
            <span className="text-sm font-bold text-foreground">{mastery.label}</span>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">{mastery.greek}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-mono font-bold text-amber-400">{achieved}</span>
          <span className="text-xs text-muted-foreground">/{total}</span>
          <span className="text-[10px] text-muted-foreground ml-1">Q.E.D.</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
          style={{ boxShadow: '0 0 8px hsl(45, 90%, 55%, 0.5)' }}
        />
      </div>

      <div className="flex items-center justify-between text-[10px] text-muted-foreground/60 font-mono">
        <span>∅ empty set</span>
        <span>{pct}% proven</span>
        <span>∀ universal</span>
      </div>
    </motion.div>
  );
}
