import { motion } from 'framer-motion';
import { DIFFICULTIES, type Difficulty, type DifficultyMeta } from '@/config/constants';
import { t } from '@/i18n';

interface DifficultyPickerProps {
  selected: Difficulty[];
  onToggle: (d: Difficulty) => void;
}

export function DifficultyPicker({ selected, onToggle }: DifficultyPickerProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-muted-foreground">{t('home.selectDifficulty')}</h3>
      <div className="grid grid-cols-3 gap-3">
        {DIFFICULTIES.map((d) => (
          <DifficultyCard
            key={d.slug}
            meta={d}
            isSelected={selected.includes(d.slug)}
            onSelect={() => onToggle(d.slug)}
          />
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground/50 text-center">
        {t('difficulty.selectHint')}
      </p>
    </div>
  );
}

function DifficultyCard({ meta, isSelected, onSelect }: { meta: DifficultyMeta; isSelected: boolean; onSelect: () => void }) {
  const colorMap = {
    success: {
      selected: 'bg-success/10 border-success glow-success',
      badge: 'text-success',
    },
    accent: {
      selected: 'bg-accent/10 border-accent glow-accent',
      badge: 'text-accent',
    },
    destructive: {
      selected: 'bg-destructive/10 border-destructive glow-destructive',
      badge: 'text-destructive',
    },
  };

  const colors = colorMap[meta.color];

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`relative min-h-24 p-3 rounded-lg border-2 text-center transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isSelected
          ? colors.selected
          : 'bg-card border-border hover:border-muted-foreground/30'
      }`}
    >
      {/* Multi-select indicator */}
      {isSelected && (
        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-current flex items-center justify-center">
          <span className="text-[9px] text-primary-foreground font-bold">✓</span>
        </div>
      )}
      <div className="text-2xl mb-1">{meta.emoji}</div>
      <div className={`text-xs font-bold font-mono ${isSelected ? colors.badge : 'text-foreground'}`}>
        {t(meta.tagKey)}
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{t('difficulty.pts', { pts: meta.pointsPerCorrect })}</div>
    </motion.button>
  );
}
