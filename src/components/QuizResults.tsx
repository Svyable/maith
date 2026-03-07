import { useState } from 'react';
import { LatexRenderer } from './LatexRenderer';
import { motion } from 'framer-motion';
import { getDifficultyMeta, DIFFICULTIES, type Difficulty, TOPIC_MAP, toDifficulty } from '@/config/constants';
import { THINKER_MAP, type ThinkerMeta } from '@/config/thinkers';
import { t } from '@/i18n';
import { ReviewMistakes } from './ReviewMistakes';
import { FieldStatsBar } from './FieldStatsBar';
import { MatrixQuoteBoard } from './MatrixQuoteBoard';
import { useLocale } from '@/hooks/useLocale';
import type { MissedQuestion, SkippedQuestion } from '@/domain/quiz';

interface QuizResultsProps {
  score: number;
  totalAnswered: number;
  correctAnswered: number;
  bestStreak: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  difficultyBreakdown: Record<string, { correct: number; total: number }>;
  difficulties: Difficulty[];
  onRestart: () => void;
  onNewTopics?: () => void;
  missedQuestions: MissedQuestion[];
  skippedQuestions: SkippedQuestion[];
  thinkerMeta?: ThinkerMeta;
  newlyAchieved?: boolean;
}

export function QuizResults({
  score,
  correctAnswered,
  totalAnswered,
  bestStreak,
  topicBreakdown,
  difficultyBreakdown,
  difficulties,
  onRestart,
  onNewTopics,
  missedQuestions,
  skippedQuestions,
  thinkerMeta,
  newlyAchieved,
}: QuizResultsProps) {
  const pct = totalAnswered > 0 ? Math.round((correctAnswered / totalAnswered) * 100) : 0;
  useLocale();
  const [showReview, setShowReview] = useState(false);
  const [showSkipped, setShowSkipped] = useState(false);

  const primaryCta =
    pct >= 90 ? '⚡ Run It Back' :
    pct >= 70 ? '🚀 Play Again' :
    pct >= 50 ? '🎯 Try Again' :
    '💪 One More Round';

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center space-y-6">

      {/* Hero area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <div className="text-6xl mb-2">{pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '💪'}</div>
        <h2 className="text-3xl font-bold font-display text-foreground">{t('results.title')}</h2>

        {/* Difficulty badges */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {difficulties.map((d) => {
            const dm = getDifficultyMeta(d);
            return (
              <span
                key={d}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  dm.color === 'success'     ? 'bg-success/10 border-success/30 text-success' :
                  dm.color === 'accent'      ? 'bg-accent/10 border-accent/30 text-accent' :
                  'bg-destructive/10 border-destructive/30 text-destructive'
                }`}
              >
                {dm.emoji} {dm.tag}
              </span>
            );
          })}
        </div>
      </motion.div>

      {/* Q.E.D. achievement banner */}
      {newlyAchieved && thinkerMeta && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', damping: 12 }}
          className="p-4 rounded-2xl border-2 border-amber-400/40 bg-amber-500/5 shadow-[0_0_30px_-5px_hsl(45,90%,55%,0.3)] space-y-2"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">{thinkerMeta.emoji}</span>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30">
                Q.E.D. ∎
              </span>
            </div>
          </div>
          <p className="text-sm font-bold text-foreground">{thinkerMeta.name} — Mastered!</p>
          <p className="text-[10px] font-mono text-amber-400/70">
            ∀q ∈ Q({thinkerMeta.name.split(' ').pop()}), correct(q) = true ∴ ∎
          </p>
        </motion.div>
      )}

      {/* Core stats */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-primary">{Math.round(score)}</div>
          <div className="text-xs text-muted-foreground">{t('results.score')}</div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-accent">{pct}%</div>
          <div className="text-xs text-muted-foreground">{t('results.accuracy')}</div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-foreground">🔥{bestStreak}</div>
          <div className="text-xs text-muted-foreground">{t('results.bestStreak')}</div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-muted-foreground">{skippedQuestions.length}</div>
          <div className="text-xs text-muted-foreground">{t('results.skipped')}</div>
        </div>
      </div>

      {/* Quick action row */}
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="flex-1 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm"
        >
          {primaryCta}
        </motion.button>
        {onNewTopics && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNewTopics}
            className="py-3 px-4 rounded-2xl border border-border text-muted-foreground font-semibold text-sm hover:text-foreground hover:border-foreground/20 transition-all"
          >
            {t('results.newTopics')}
          </motion.button>
        )}
      </div>

      {/* Difficulty breakdown */}
      {Object.keys(difficultyBreakdown).length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {DIFFICULTIES.map((dm) => {
            const stat = difficultyBreakdown[dm.slug.toLowerCase()];
            if (!stat || stat.total === 0) return null;
            const diffPct = Math.round((stat.correct / stat.total) * 100);
            const colorClass = dm.color === 'success' ? 'text-success' : dm.color === 'accent' ? 'text-accent' : 'text-destructive';
            return (
              <motion.div
                key={dm.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-xl border border-border p-3 text-center"
              >
                <div className="text-lg">{dm.emoji}</div>
                <div className={`text-lg font-bold font-mono ${colorClass}`}>{diffPct}%</div>
                <div className="text-[10px] text-muted-foreground font-bold">{dm.tag}</div>
                <div className="text-[9px] text-muted-foreground/60">{stat.correct}/{stat.total}</div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Field-level stats */}
      <FieldStatsBar topicBreakdown={topicBreakdown} />

      {/* Topic breakdown */}
      {Object.keys(topicBreakdown).length > 0 && (
        <div className="bg-card rounded-xl p-4 border border-border text-left">
          <h3 className="text-sm font-bold text-muted-foreground mb-3">{t('results.topicBreakdown')}</h3>
          <div className="space-y-2">
            {Object.entries(topicBreakdown).map(([slug, { correct, total }]) => {
              if (total === 0) return null;
              const topicPct = Math.round((correct / total) * 100);
              const meta = TOPIC_MAP[slug];
              const thinkerM = !meta ? THINKER_MAP[slug] : null;
              const label = meta?.label ?? (thinkerM ? `${thinkerM.emoji} ${thinkerM.name}` : slug);
              const emoji = meta?.emoji ?? (thinkerM ? '' : '📐');
              return (
                <div key={slug} className="flex items-center justify-between">
                  <span className="text-sm">{emoji} {label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${topicPct}%` }} />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground w-10 text-right">{topicPct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Matrix quote board */}
      <MatrixQuoteBoard />

      {/* Review mistakes toggle */}
      {missedQuestions.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowReview(!showReview)}
          className="w-full py-3 rounded-2xl border border-destructive/30 bg-destructive/5 text-destructive font-semibold text-sm"
        >
          {showReview ? '▲ Hide Review' : t('results.reviewMistakes')} ({missedQuestions.length})
        </motion.button>
      )}

      {showReview && <ReviewMistakes missedQuestions={missedQuestions} />}

      {/* Review skipped questions toggle */}
      {skippedQuestions.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowSkipped(!showSkipped)}
          className="w-full py-3 rounded-2xl border border-muted-foreground/30 bg-muted/5 text-muted-foreground font-semibold text-sm"
        >
          {showSkipped ? '▲ Hide Skipped' : t('results.reviewSkipped')} ({skippedQuestions.length})
        </motion.button>
      )}

      {showSkipped && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            {t('results.skippedTitle')} ({skippedQuestions.length})
          </h3>
          {skippedQuestions.map((skipped, idx) => {
            const topicMeta = TOPIC_MAP[skipped.question.topic];
            const skipThinkerMeta = !topicMeta ? THINKER_MAP[skipped.question.topic] : null;
            const label = topicMeta?.label ?? skipThinkerMeta?.name ?? skipped.question.topic;
            const emoji = topicMeta?.emoji ?? skipThinkerMeta?.emoji ?? '📐';
            return (
              <div key={`skip-${skipped.question.id}-${idx}`} className="bg-card rounded-xl border border-border p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{emoji}</span>
                  <span>{label}</span>
                  <span className="ml-auto text-muted-foreground/50 italic">Skipped</span>
                </div>
                <LatexRenderer
                  text={skipped.question.question}
                  className="text-sm font-medium text-card-foreground leading-relaxed"
                />
                <div className="space-y-1.5">
                  {skipped.question.options.map((opt, i) => (
                    <div key={i} className="px-3 py-2 rounded-lg text-xs border border-transparent bg-secondary/50 text-muted-foreground">
                      <LatexRenderer text={opt} className="inline" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Bottom action */}
      <div className="space-y-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg"
        >
          {t('results.playAgain')}
        </motion.button>
      </div>
    </motion.div>
  );
}
