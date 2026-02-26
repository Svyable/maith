import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { allQuestions } from '@/content';
import { FIELDS, getFieldForTopic } from '@/config/fields';
import { TOPICS, DIFFICULTIES } from '@/config/constants';
import { t } from '@/i18n';

interface TopicStat {
  topic: string;
  total_answered: number;
  correct_answered: number;
}

interface DifficultyStat {
  difficulty: string;
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
}

interface UserStats {
  score_total: number;
  total_answered: number;
  correct_answered: number;
  best_streak: number;
}

interface ProfileGamescapeStatsProps {
  stats: UserStats | null;
  topicStats: TopicStat[];
  difficultyStats: DifficultyStat[];
}

/** Aggregate question pool metrics from local content bundle */
function useGamescapeMetrics(topicStats: TopicStat[]) {
  return useMemo(() => {
    const totalPool = allQuestions.length;
    const topicStatsMap = Object.fromEntries(topicStats.map((s) => [s.topic, s]));

    // Per-difficulty counts from pool
    const poolByDifficulty: Record<string, number> = {};
    const poolByField: Record<string, number> = {};
    const poolByTopic: Record<string, number> = {};

    for (const q of allQuestions) {
      poolByDifficulty[q.difficulty] = (poolByDifficulty[q.difficulty] ?? 0) + 1;
      poolByTopic[q.topic] = (poolByTopic[q.topic] ?? 0) + 1;
      const field = getFieldForTopic(q.topic);
      if (field) {
        poolByField[field.slug] = (poolByField[field.slug] ?? 0) + 1;
      }
    }

    // Total answered & correct across all topics
    let totalAnswered = 0;
    let totalCorrect = 0;
    for (const s of topicStats) {
      totalAnswered += s.total_answered;
      totalCorrect += s.correct_answered;
    }

    // Topics touched vs total topics with content
    const topicsWithContent = new Set(allQuestions.map((q) => q.topic));
    const topicsTouched = new Set(topicStats.filter((s) => s.total_answered > 0).map((s) => s.topic));

    // Fields touched
    const fieldsTouched = new Set<string>();
    for (const topic of topicsTouched) {
      const field = getFieldForTopic(topic);
      if (field) fieldsTouched.add(field.slug);
    }
    const fieldsWithContent = new Set<string>();
    for (const topic of topicsWithContent) {
      const field = getFieldForTopic(topic);
      if (field && field.slug !== 'all') fieldsWithContent.add(field.slug);
    }

    return {
      totalPool,
      totalAnswered,
      totalCorrect,
      totalWrong: totalAnswered - totalCorrect,
      coveragePct: totalPool > 0 ? Math.round((totalAnswered / totalPool) * 100) : 0,
      topicsWithContent: topicsWithContent.size,
      topicsTouched: topicsTouched.size,
      fieldsWithContent: fieldsWithContent.size,
      fieldsTouched: fieldsTouched.size,
      poolByDifficulty,
      poolByField,
      poolByTopic,
      topicStatsMap,
    };
  }, [topicStats]);
}

export function ProfileGamescapeStats({ stats, topicStats, difficultyStats }: ProfileGamescapeStatsProps) {
  const metrics = useGamescapeMetrics(topicStats);
  const accuracy = stats && stats.total_answered > 0
    ? Math.round((stats.correct_answered / stats.total_answered) * 100)
    : 0;

  return (
    <div className="space-y-4">
      {/* Global coverage header */}
      <div className="bg-card rounded-xl border border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-muted-foreground">🌐 GAMESCAPE COVERAGE</h3>
          <span className="text-xs font-mono text-primary font-bold">{metrics.coveragePct}%</span>
        </div>

        {/* Master progress bar */}
        <div className="h-3 bg-muted rounded-full overflow-hidden flex">
          {metrics.totalCorrect > 0 && (
            <motion.div
              className="h-full bg-success"
              initial={{ width: 0 }}
              animate={{ width: `${(metrics.totalCorrect / metrics.totalPool) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
          {metrics.totalWrong > 0 && (
            <motion.div
              className="h-full bg-destructive"
              initial={{ width: 0 }}
              animate={{ width: `${(metrics.totalWrong / metrics.totalPool) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            />
          )}
        </div>

        {/* Coverage stats row */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-lg font-bold font-mono text-foreground">{metrics.totalPool}</div>
            <div className="text-[9px] text-muted-foreground">Total Questions</div>
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-foreground">
              {metrics.fieldsTouched}/{metrics.fieldsWithContent}
            </div>
            <div className="text-[9px] text-muted-foreground">Fields Explored</div>
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-foreground">
              {metrics.topicsTouched}/{metrics.topicsWithContent}
            </div>
            <div className="text-[9px] text-muted-foreground">Topics Touched</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-3 text-[9px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-success inline-block" /> {metrics.totalCorrect} correct</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-destructive inline-block" /> {metrics.totalWrong} wrong</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-muted border border-border inline-block" /> {metrics.totalPool - metrics.totalAnswered} unseen</span>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: t('profile.score'), value: stats?.score_total ?? 0, emoji: '⭐' },
          { label: t('profile.answered'), value: `${stats?.total_answered ?? 0}/${metrics.totalPool}`, emoji: '📝' },
          { label: t('profile.accuracy'), value: `${accuracy}%`, emoji: '🎯' },
          { label: t('profile.streak'), value: stats?.best_streak ?? 0, emoji: '🔥' },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-3 border border-border text-center">
            <div className="text-lg">{s.emoji}</div>
            <div className="text-lg font-bold text-foreground font-mono">{s.value}</div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Difficulty breakdown with pool context */}
      {difficultyStats.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-muted-foreground">{t('profile.difficultyStats')}</h3>
          <div className="grid grid-cols-3 gap-2">
            {DIFFICULTIES.map((d) => {
              const stat = difficultyStats.find((s) => s.difficulty === d.slug);
              const poolCount = metrics.poolByDifficulty[d.slug.toLowerCase()] ?? 0;
              const answered = stat?.total_answered ?? 0;
              const correct = stat?.correct_answered ?? 0;
              const wrong = answered - correct;
              const accuracyPct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
              const correctPct = poolCount > 0 ? (correct / poolCount) * 100 : 0;
              const wrongPct = poolCount > 0 ? (wrong / poolCount) * 100 : 0;
              const colorClass = d.color === 'success' ? 'text-success' : d.color === 'accent' ? 'text-accent' : 'text-destructive';

              return (
                <div key={d.slug} className="bg-card rounded-xl p-3 border border-border text-center space-y-1.5">
                  <div className="text-lg">{d.emoji}</div>
                  <div className="text-xs font-bold text-muted-foreground">{d.tag}</div>
                  {stat ? (
                    <>
                      <div className={`text-xl font-bold font-mono ${colorClass}`}>{accuracyPct}%</div>
                      {/* Tri-color bar against total pool */}
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden flex">
                        {correctPct > 0 && (
                          <div className="h-full bg-success" style={{ width: `${correctPct}%` }} />
                        )}
                        {wrongPct > 0 && (
                          <div className="h-full bg-destructive" style={{ width: `${wrongPct}%` }} />
                        )}
                      </div>
                      <div className="text-[9px] text-muted-foreground">
                        <span className="text-success">{correct}✓</span>
                        {wrong > 0 && <span className="text-destructive ml-0.5">{wrong}✗</span>}
                        <span className="ml-0.5">/ {poolCount}</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground">⭐{stat.score_total} · 🔥{stat.best_streak}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs text-muted-foreground/50 italic">{t('profile.noData')}</div>
                      <div className="text-[9px] text-muted-foreground">{poolCount} available</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}