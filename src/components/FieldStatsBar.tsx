import { motion } from 'framer-motion';
import { FIELDS, getFieldForTopic } from '@/config/fields';

interface TopicBreakdown {
  [topic: string]: { correct: number; total: number };
}

interface FieldStatsBarProps {
  topicBreakdown: TopicBreakdown;
}

export function FieldStatsBar({ topicBreakdown }: FieldStatsBarProps) {
  // Aggregate topics into fields
  const fieldAgg: Record<string, { correct: number; total: number }> = {};

  for (const [topic, stats] of Object.entries(topicBreakdown)) {
    if (stats.total === 0) continue;
    const field = getFieldForTopic(topic);
    const key = field?.slug ?? 'other';
    if (!fieldAgg[key]) fieldAgg[key] = { correct: 0, total: 0 };
    fieldAgg[key].correct += stats.correct;
    fieldAgg[key].total += stats.total;
  }

  const entries = FIELDS
    .filter((f) => f.slug !== 'all' && fieldAgg[f.slug])
    .map((f) => ({
      ...f,
      pct: Math.round((fieldAgg[f.slug].correct / fieldAgg[f.slug].total) * 100),
      correct: fieldAgg[f.slug].correct,
      total: fieldAgg[f.slug].total,
    }));

  if (entries.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {entries.map((f, idx) => (
        <motion.div
          key={f.slug}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.08 }}
          className="bg-card rounded-xl border border-border p-3 text-center"
        >
          <div className="text-lg">{f.emoji}</div>
          <div className="text-lg font-bold text-foreground font-mono">{f.pct}%</div>
          <div className="text-[10px] text-muted-foreground">{f.label}</div>
          <div className="text-[9px] text-muted-foreground/60">{f.correct}/{f.total}</div>
        </motion.div>
      ))}
    </div>
  );
}
