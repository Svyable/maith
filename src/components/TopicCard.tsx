import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { TopicRecord } from '@/hooks/useTopics';
import { allQuestions } from '@/content';
import { tTopic } from '@/i18n/tTopics';

interface TopicCardProps {
  topic: TopicRecord;
  isSelected: boolean;
  onToggle: () => void;
}

export function TopicCard({ topic, isSelected, onToggle }: TopicCardProps) {
  const counts = useMemo(() => {
    const topicQs = allQuestions.filter((q) => q.topic === topic.slug);
    return {
      easy: topicQs.filter((q) => q.difficulty === 'easy').length,
      hard: topicQs.filter((q) => q.difficulty === 'hard').length,
      sota: topicQs.filter((q) => q.difficulty === 'sota').length,
    };
  }, [topic.slug]);

  const total = counts.easy + counts.hard + counts.sota;

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
          <div className="font-display font-semibold text-foreground text-sm">{tTopic(topic.slug, 'label', topic.label)}</div>
          {topic.description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tTopic(topic.slug, 'desc', topic.description)}</p>
          )}
          <div className="flex items-center gap-2 mt-1.5">
            {counts.easy > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500">
                E:{counts.easy}
              </span>
            )}
            {counts.hard > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-500">
                H:{counts.hard}
              </span>
            )}
            {counts.sota > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-500">
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
