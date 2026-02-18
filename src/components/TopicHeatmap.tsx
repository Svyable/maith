import { motion } from 'framer-motion';
import { TOPICS, TOPIC_MAP } from '@/config/constants';
import { t } from '@/i18n';

interface TopicStat {
  topic: string;
  total_answered: number;
  correct_answered: number;
}

interface TopicHeatmapProps {
  topicStats: TopicStat[];
}

function getHeatColor(pct: number): string {
  if (pct >= 90) return 'bg-success text-success-foreground';
  if (pct >= 75) return 'bg-success/70 text-success-foreground';
  if (pct >= 60) return 'bg-accent/80 text-accent-foreground';
  if (pct >= 40) return 'bg-accent/50 text-accent-foreground';
  if (pct > 0) return 'bg-destructive/50 text-destructive-foreground';
  return 'bg-secondary text-muted-foreground';
}

function getHeatLabel(pct: number): string {
  if (pct >= 90) return t('heatmap.mastered');
  if (pct >= 75) return t('heatmap.strong');
  if (pct >= 60) return t('heatmap.good');
  if (pct >= 40) return t('heatmap.needsWork');
  if (pct > 0) return t('heatmap.weak');
  return t('heatmap.notStarted');
}

export function TopicHeatmap({ topicStats }: TopicHeatmapProps) {
  const statsMap = Object.fromEntries(topicStats.map((s) => [s.topic, s]));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-muted-foreground">{t('profile.heatmap')}</h3>
        <div className="flex items-center gap-1">
          {[0, 30, 55, 70, 85, 95].map((pct, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${getHeatColor(pct)}`}
              title={`${pct}%`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">{t('heatmap.legend')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {TOPICS.map((topic, i) => {
          const stat = statsMap[topic.slug];
          const total = stat?.total_answered ?? 0;
          const correct = stat?.correct_answered ?? 0;
          const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
          const heatClass = getHeatColor(pct);
          const label = getHeatLabel(pct);

          return (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-3 flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono ${heatClass}`}>
                {total > 0 ? `${pct}%` : '—'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base">{topic.emoji}</span>
                  <span className="text-sm font-medium text-foreground truncate">{topic.label}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${pct >= 60 ? 'bg-success' : pct >= 40 ? 'bg-accent' : pct > 0 ? 'bg-destructive' : 'bg-secondary'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                    {total > 0 ? `${correct}/${total} · ${label}` : label}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
