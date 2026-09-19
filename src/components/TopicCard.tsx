import { motion } from 'framer-motion';
import type { TopicRecord } from '@/hooks/useTopics';
import { QUESTION_COUNTS } from '@/config/content-stats';
import { tTopic } from '@/i18n/tTopics';

interface TopicCardProps {
  topic: TopicRecord;
  isSelected: boolean;
  onToggle: () => void;
}

export function TopicCard({ topic, isSelected, onToggle }: TopicCardProps) {
  const counts = QUESTION_COUNTS[topic.slug as keyof typeof QUESTION_COUNTS] ?? { easy: 0, hard: 0, sota: 0, total: 0 };

  const total = counts.easy + counts.hard + counts.sota;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      aria-pressed={isSelected}
      className={`relative w-full min-h-20 p-4 rounded-lg border text-left transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isSelected
          ? 'bg-primary/10 border-primary shadow-sm glow-primary'
          : 'bg-card border-border hover:border-muted-foreground/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{topic.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-foreground text-sm">{tTopic(topic.slug, 'label', topic.label)}</div>
          {topic.description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tTopic(topic.slug, 'desc', topic.description)}</p>
          )}
          <div className="flex items-center gap-2 mt-1.5">
            {counts.easy > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-success/15 text-success">
                E:{counts.easy}
              </span>
            )}
            {counts.hard > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                H:{counts.hard}
              </span>
            )}
            {counts.sota > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-destructive/15 text-destructive">
                S:{counts.sota}
              </span>
            )}
            <span className="text-[10px] text-muted-foreground ml-auto">{total}q</span>
          </div>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
          isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'
        }`}>
          {isSelected && <span className="text-primary-foreground text-xs">✓</span>}
        </div>
      </div>
    </motion.button>
  );
}
