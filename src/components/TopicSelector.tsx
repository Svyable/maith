import { motion } from 'framer-motion';
import { useTopics, type TopicRecord } from '@/hooks/useTopics';
import { TopicCard } from './TopicCard';
import { type Difficulty } from '@/config/constants';
import { t } from '@/i18n';

interface TopicSelectorProps {
  selected: string[];
  onToggle: (topic: string) => void;
  /** If provided, only show topics whose slugs are in this list */
  fieldFilter?: string[];
  /** Free-text search filter */
  searchFilter?: string;
  selectedDifficulties: Difficulty[];
  onUseAll: () => void;
}

export function TopicSelector({ selected, onToggle, fieldFilter, searchFilter, selectedDifficulties, onUseAll }: TopicSelectorProps) {
  const { topics: allTopics, loading } = useTopics();

  let topics = fieldFilter
    ? allTopics.filter((tp) => fieldFilter.includes(tp.slug))
    : allTopics;

  if (searchFilter?.trim()) {
    const q = searchFilter.toLowerCase();
    topics = topics.filter(
      (tp) =>
        tp.label.toLowerCase().includes(q) ||
        tp.slug.toLowerCase().includes(q) ||
        tp.description.toLowerCase().includes(q)
    );
  }

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
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-muted-foreground">{t('home.selectTopics')}</h3>
        {allSelected ? (
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
            {t('home.allTopics')}
          </span>
        ) : (
          <button
            onClick={onUseAll}
            className="text-xs font-semibold text-primary hover:underline"
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
              isExplicitSelection={selected.includes(topic.slug)}
              onToggle={() => onToggle(topic.slug)}
              selectedDifficulties={selectedDifficulties}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
