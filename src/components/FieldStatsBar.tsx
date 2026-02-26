import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FIELDS, getFieldForTopic } from '@/config/fields';
import { allQuestions } from '@/content';

interface TopicBreakdown {
  [topic: string]: { correct: number; total: number };
}

interface FieldStatsBarProps {
  topicBreakdown: TopicBreakdown;
}

/** Count total available questions per field from local bundle */
function useFieldQuestionCounts() {
  return useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of allQuestions) {
      const field = getFieldForTopic(q.topic);
      const key = field?.slug ?? 'other';
      counts[key] = (counts[key] ?? 0) + 1;
    }
    return counts;
  }, []);
}

export function FieldStatsBar({ topicBreakdown }: FieldStatsBarProps) {
  const fieldCounts = useFieldQuestionCounts();

  // Aggregate topics into fields
  const fieldAgg: Record<string, { correct: number; answered: number }> = {};

  for (const [topic, stats] of Object.entries(topicBreakdown)) {
    const field = getFieldForTopic(topic);
    const key = field?.slug ?? 'other';
    if (!fieldAgg[key]) fieldAgg[key] = { correct: 0, answered: 0 };
    fieldAgg[key].correct += stats.correct;
    fieldAgg[key].answered += stats.total;
  }

  const entries = FIELDS
    .filter((f) => f.slug !== 'all' && (fieldAgg[f.slug] || fieldCounts[f.slug]))
    .map((f) => {
      const agg = fieldAgg[f.slug] ?? { correct: 0, answered: 0 };
      const totalAvailable = fieldCounts[f.slug] ?? 0;
      const wrong = agg.answered - agg.correct;
      const unseen = Math.max(0, totalAvailable - agg.answered);
      const correctPct = totalAvailable > 0 ? (agg.correct / totalAvailable) * 100 : 0;
      const wrongPct = totalAvailable > 0 ? (wrong / totalAvailable) * 100 : 0;
      const accuracyPct = agg.answered > 0 ? Math.round((agg.correct / agg.answered) * 100) : 0;
      return { ...f, correctPct, wrongPct, accuracyPct, correct: agg.correct, wrong, unseen, answered: agg.answered, totalAvailable };
    });

  if (entries.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {entries.map((f, idx) => (
        <motion.div
          key={f.slug}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.08 }}
          className="bg-card rounded-xl border border-border p-3 space-y-2"
        >
          <div className="text-lg text-center">{f.emoji}</div>

          {/* Accuracy badge */}
          <div className="text-center">
            <span className={`text-lg font-bold font-mono ${
              f.answered === 0 ? 'text-muted-foreground' :
              f.accuracyPct >= 75 ? 'text-success' :
              f.accuracyPct >= 50 ? 'text-accent' : 'text-destructive'
            }`}>
              {f.answered > 0 ? `${f.accuracyPct}%` : '—'}
            </span>
          </div>

          <div className="text-[10px] text-muted-foreground text-center">{f.label}</div>

          {/* Tri-color bar */}
          <div className="h-1.5 bg-muted rounded-full overflow-hidden flex">
            {f.correctPct > 0 && (
              <motion.div
                className="h-full bg-success"
                initial={{ width: 0 }}
                animate={{ width: `${f.correctPct}%` }}
                transition={{ delay: idx * 0.08 + 0.2, duration: 0.5 }}
              />
            )}
            {f.wrongPct > 0 && (
              <motion.div
                className="h-full bg-destructive"
                initial={{ width: 0 }}
                animate={{ width: `${f.wrongPct}%` }}
                transition={{ delay: idx * 0.08 + 0.3, duration: 0.4 }}
              />
            )}
          </div>

          {/* Counts */}
          <div className="text-[9px] text-muted-foreground/60 text-center">
            <span className="text-success">{f.correct}✓</span>
            {f.wrong > 0 && <span className="text-destructive ml-1">{f.wrong}✗</span>}
            <span className="ml-1">{f.unseen}?</span>
            <span className="ml-1">/ {f.totalAvailable}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
