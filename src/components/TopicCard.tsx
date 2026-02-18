import { motion } from 'framer-motion';
import type { TopicRecord } from '@/hooks/useTopics';

interface TopicCardProps {
  topic: TopicRecord;
  isSelected: boolean;
  onToggle: () => void;
}

export function TopicCard({ topic, isSelected, onToggle }: TopicCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      className={`relative w-full p-4 rounded-xl border text-left transition-all ${
        isSelected
          ? 'bg-primary/10 border-primary shadow-sm glow-primary'
          : 'bg-card border-border hover:border-muted-foreground/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{topic.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-foreground text-sm">{topic.label}</div>
          {topic.description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{topic.description}</p>
          )}
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'
        }`}>
          {isSelected && <span className="text-primary-foreground text-xs">✓</span>}
        </div>
      </div>
    </motion.button>
  );
}
