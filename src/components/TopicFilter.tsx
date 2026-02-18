import { motion } from 'framer-motion';
import { TOPICS } from '@/config/constants';

interface TopicFilterProps {
  selected: string[];
  onToggle: (topic: string) => void;
}

export function TopicFilter({ selected, onToggle }: TopicFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {TOPICS.map((topic) => {
        const isActive = selected.length === 0 || selected.includes(topic.slug);
        return (
          <motion.button
            key={topic.slug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggle(topic.slug)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
              isActive
                ? 'bg-primary/15 border-primary text-primary'
                : 'bg-secondary border-border text-muted-foreground'
            }`}
          >
            {topic.emoji} {topic.label}
          </motion.button>
        );
      })}
    </div>
  );
}
