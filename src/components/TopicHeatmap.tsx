import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TOPICS } from '@/config/constants';
import { FIELDS } from '@/config/fields';
import { allQuestions } from '@/content';
import { t } from '@/i18n';

interface TopicStat {
  topic: string;
  total_answered: number;
  correct_answered: number;
}

interface TopicHeatmapProps {
  topicStats: TopicStat[];
}

/** Count total available questions per topic from the local bundle */
function useTopicQuestionCounts() {
  return useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of allQuestions) {
      counts[q.topic] = (counts[q.topic] ?? 0) + 1;
    }
    return counts;
  }, []);
}

function getStatusLabel(correctPct: number, wrongPct: number, totalAvailable: number, totalAnswered: number): string {
  if (totalAnswered === 0) return t('heatmap.notStarted');
  const seenPct = Math.round(((totalAnswered) / totalAvailable) * 100);
  if (correctPct >= 90 && seenPct >= 80) return t('heatmap.mastered');
  if (correctPct >= 75) return t('heatmap.strong');
  if (correctPct >= 60) return t('heatmap.good');
  if (correctPct >= 40) return t('heatmap.needsWork');
  return t('heatmap.weak');
}

function getAccuracyColor(pct: number, answered: number): string {
  if (answered === 0) return 'text-muted-foreground';
  if (pct >= 90) return 'text-success';
  if (pct >= 75) return 'text-success/80';
  if (pct >= 60) return 'text-accent';
  if (pct >= 40) return 'text-accent/70';
  return 'text-destructive';
}

function getAccuracyBg(pct: number, answered: number): string {
  if (answered === 0) return 'bg-secondary text-muted-foreground';
  if (pct >= 75) return 'bg-success/20 text-success';
  if (pct >= 50) return 'bg-accent/20 text-accent';
  return 'bg-destructive/20 text-destructive';
}

// Build a grouped structure: field → topics
const availableFields = FIELDS.filter((f) => f.slug !== 'all' && f.available);

export function TopicHeatmap({ topicStats }: TopicHeatmapProps) {
  const statsMap = Object.fromEntries(topicStats.map((s) => [s.topic, s]));
  const topicMap = Object.fromEntries(TOPICS.map((t) => [t.slug, t]));
  const questionCounts = useTopicQuestionCounts();

  let animIndex = 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-muted-foreground">{t('profile.heatmap')}</h3>
        {/* Legend */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-success" />
            <span className="text-[9px] text-muted-foreground">✓</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-destructive" />
            <span className="text-[9px] text-muted-foreground">✗</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-muted" />
            <span className="text-[9px] text-muted-foreground">unseen</span>
          </div>
        </div>
      </div>

      {availableFields.map((field) => {
        const fieldTopics = field.topics
          .map((slug) => topicMap[slug])
          .filter(Boolean);

        if (fieldTopics.length === 0) return null;

        return (
          <div key={field.slug} className="space-y-2">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest px-1">
              {field.emoji} {field.label}
            </p>
            <div className="grid grid-cols-1 gap-2">
              {fieldTopics.map((topic) => {
                const stat = statsMap[topic.slug];
                const totalAvailable = questionCounts[topic.slug] ?? 0;
                const totalAnswered = stat?.total_answered ?? 0;
                const correct = stat?.correct_answered ?? 0;
                const wrong = totalAnswered - correct;
                const unseen = Math.max(0, totalAvailable - totalAnswered);

                // Percentages relative to total available questions
                const correctPct = totalAvailable > 0 ? (correct / totalAvailable) * 100 : 0;
                const wrongPct = totalAvailable > 0 ? (wrong / totalAvailable) * 100 : 0;
                // Accuracy among answered
                const accuracyPct = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;

                const label = getStatusLabel(accuracyPct, wrongPct, totalAvailable, totalAnswered);
                const accentColor = getAccuracyColor(accuracyPct, totalAnswered);
                const badgeBg = getAccuracyBg(accuracyPct, totalAnswered);
                const idx = animIndex++;

                return (
                  <motion.div
                    key={topic.slug}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="bg-card rounded-xl border border-border p-3 space-y-2"
                  >
                    {/* Top row: emoji, name, accuracy badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-base">{topic.emoji}</span>
                      <span className="text-sm font-medium text-foreground truncate flex-1">{topic.label}</span>
                      <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${badgeBg}`}>
                        {totalAnswered > 0 ? `${accuracyPct}%` : '—'}
                      </div>
                    </div>

                    {/* Tri-color progress bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                      {correctPct > 0 && (
                        <motion.div
                          className="h-full bg-success"
                          initial={{ width: 0 }}
                          animate={{ width: `${correctPct}%` }}
                          transition={{ delay: idx * 0.04 + 0.2, duration: 0.5 }}
                        />
                      )}
                      {wrongPct > 0 && (
                        <motion.div
                          className="h-full bg-destructive"
                          initial={{ width: 0 }}
                          animate={{ width: `${wrongPct}%` }}
                          transition={{ delay: idx * 0.04 + 0.3, duration: 0.4 }}
                        />
                      )}
                      {/* Grey (unseen) is the remaining background */}
                    </div>

                    {/* Stats line */}
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>
                        <span className="text-success font-medium">{correct}✓</span>
                        {wrong > 0 && <span className="text-destructive font-medium ml-1.5">{wrong}✗</span>}
                        <span className="ml-1.5">{unseen} unseen</span>
                      </span>
                      <span className="font-mono">
                        {totalAnswered}/{totalAvailable} · {label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
