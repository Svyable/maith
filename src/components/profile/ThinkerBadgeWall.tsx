// ── ThinkerBadgeWall — "Theorem Collection" on the Profile page ──────
// Each conquered thinker becomes a golden proof token. Q.E.D. ∎

import { motion } from 'framer-motion';
import { THINKERS } from '@/config/thinkers';
import type { ThinkerAchievement } from '@/hooks/useThinkerAchievements';

interface ThinkerBadgeWallProps {
  achievements: ThinkerAchievement[];
}

export function ThinkerBadgeWall({ achievements }: ThinkerBadgeWallProps) {
  if (achievements.length === 0) return null;

  const totalThinkers = THINKERS.length;
  const ratio = `${achievements.length}/${totalThinkers}`;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
          <span>∎</span> Theorem Collection
        </h3>
        <span className="text-[10px] font-mono text-muted-foreground/70">
          {ratio} proven
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {achievements.map((a, i) => {
          const meta = THINKERS.find((t) => t.slug === a.thinker_slug);
          if (!meta) return null;

          return (
            <motion.div
              key={a.thinker_slug}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 300 }}
              className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full
                         bg-gradient-to-r from-amber-500/20 to-yellow-500/10
                         border border-amber-400/40
                         shadow-[0_0_12px_-2px_hsl(45,90%,55%,0.3)]
                         hover:shadow-[0_0_20px_-2px_hsl(45,90%,55%,0.5)]
                         transition-shadow cursor-default"
              title={`${meta.name} — ${meta.archetype}\nScore: ${a.score} · ${a.total_questions}Q · ${new Date(a.achieved_at).toLocaleDateString()}`}
            >
              <span className="text-base select-none">{meta.emoji}</span>
              <span className="text-[10px] font-bold text-amber-300/90 group-hover:text-amber-200 transition-colors">
                {meta.name.split(' ').pop()}
              </span>
              <span className="text-[8px] text-amber-400/60 font-mono">∎</span>
            </motion.div>
          );
        })}
      </div>

      {/* Nerdy completion meter */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-muted-foreground/70">
          <span>∅ → ∀ mastery</span>
          <span>{Math.round((achievements.length / totalThinkers) * 100)}% ∎</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
            initial={{ width: 0 }}
            animate={{ width: `${(achievements.length / totalThinkers) * 100}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
}
