import { motion } from 'framer-motion';
import { useTopics, type TopicRecord } from '@/hooks/useTopics';
import { TopicCard } from './TopicCard';
import { t } from '@/i18n';

interface TopicSelectorProps {
  selected: string[];
  onToggle: (topic: string) => void;
  /** If provided, only show topics whose slugs are in this list */
  fieldFilter?: string[];
}

export function TopicSelector({ selected, onToggle, fieldFilter }: TopicSelectorProps) {
  const { topics: allTopics, loading } = useTopics();

  const topics = fieldFilter
    ? allTopics.filter((tp) => fieldFilter.includes(tp.slug))
    : allTopics;

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-20 rounded-xl bg-secondary animate-pulse" />
        ))}
      </div>
    );
  }

  const allSelected = selected.length === 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-muted-foreground">{t('home.selectTopics')}</h3>
        {!allSelected && (
          <button
            onClick={() => {
              selected.forEach((slug) => onToggle(slug));
            }}
            className="text-xs text-primary hover:underline"
          >
            {t('home.clearTopics')}
          </button>
        )}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {topics.map((topic) => (
          <motion.div
            key={topic.slug}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <TopicCard
              topic={topic}
              isSelected={allSelected || selected.includes(topic.slug)}
              onToggle={() => onToggle(topic.slug)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
