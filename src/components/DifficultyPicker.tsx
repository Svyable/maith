import { motion } from 'framer-motion';
import { DIFFICULTIES, type Difficulty, type DifficultyMeta } from '@/config/constants';
import { t } from '@/i18n';

interface DifficultyPickerProps {
  selected: Difficulty;
  onSelect: (d: Difficulty) => void;
}

export function DifficultyPicker({ selected, onSelect }: DifficultyPickerProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-muted-foreground">{t('home.selectDifficulty')}</h3>
      <div className="grid grid-cols-3 gap-3">
        {DIFFICULTIES.map((d) => (
          <DifficultyCard
            key={d.slug}
            meta={d}
            isSelected={selected === d.slug}
            onSelect={() => onSelect(d.slug)}
          />
        ))}
      </div>
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
      className={`relative p-3 rounded-xl border-2 text-center transition-all ${
        isSelected
          ? colors.selected
          : 'bg-card border-border hover:border-muted-foreground/30'
      }`}
    >
      <div className="text-2xl mb-1">{meta.emoji}</div>
      <div className={`text-xs font-bold font-mono ${isSelected ? colors.badge : 'text-foreground'}`}>
        {meta.tag}
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{meta.questionsPerQuiz}Q · {meta.timePerQuestion}s</div>
    </motion.button>
  );
}
