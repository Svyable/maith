import { motion } from 'framer-motion';
import { type ThinkerMeta } from '@/config/thinkers';
import { FIELD_MAP } from '@/config/fields';

interface ThinkerCardProps {
  thinker: ThinkerMeta;
  questionCount: number;
  onSelect: (slug: string) => void;
  index: number;
}

const COLOR_CLASSES: Record<string, string> = {
  primary: 'border-primary/40 hover:border-primary bg-primary/5 hover:bg-primary/10',
  accent: 'border-accent/40 hover:border-accent bg-accent/5 hover:bg-accent/10',
  success: 'border-success/40 hover:border-success bg-success/5 hover:bg-success/10',
  destructive: 'border-destructive/40 hover:border-destructive bg-destructive/5 hover:bg-destructive/10',
};

const BADGE_CLASSES: Record<string, string> = {
  primary: 'bg-primary/15 text-primary',
  accent: 'bg-accent/15 text-accent',
  success: 'bg-success/15 text-success',
  destructive: 'bg-destructive/15 text-destructive',
};

export function ThinkerCard({ thinker, questionCount, onSelect, index }: ThinkerCardProps) {
  const borderClass = COLOR_CLASSES[thinker.color] ?? COLOR_CLASSES.primary;
  const badgeClass = BADGE_CLASSES[thinker.color] ?? BADGE_CLASSES.primary;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(thinker.slug)}
      className={`w-full text-left p-4 rounded-xl border transition-all ${borderClass}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl mt-0.5 select-none">{thinker.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-foreground text-sm">{thinker.name}</h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeClass}`}>
              {thinker.archetype}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{thinker.tagline}</p>
          {thinker.funFact && (
            <p className="text-[10px] text-muted-foreground/70 mt-1 italic leading-relaxed">💡 {thinker.funFact}</p>
          )}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="text-[10px] text-muted-foreground">{thinker.domain}</span>
            <span className="text-[10px] text-muted-foreground">·</span>
            <span className="text-[10px] font-medium text-muted-foreground">{questionCount} questions</span>
            <span className="text-[10px] text-muted-foreground">·</span>
            <span className="text-[10px] text-muted-foreground">{thinker.era}</span>
          </div>
          {/* Field badges */}
          {thinker.fields.length > 0 && (
            <div className="flex items-center gap-1 mt-1.5 flex-wrap">
              {thinker.fields.map((slug) => {
                const field = FIELD_MAP[slug];
                if (!field) return null;
                return (
                  <span
                    key={slug}
                    className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {field.emoji} {field.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.button>
  );
}
