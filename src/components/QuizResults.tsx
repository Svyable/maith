import { useState } from 'react';
import { motion } from 'framer-motion';
import { getDifficultyMeta, type Difficulty, TOPIC_MAP } from '@/config/constants';
import { THINKER_MAP } from '@/config/thinkers';
import { t } from '@/i18n';
import { ReviewMistakes } from './ReviewMistakes';
import { FieldStatsBar } from './FieldStatsBar';
import { getRandomQuote } from '@/data/quotes';
import { useLocale } from '@/hooks/useLocale';
import type { MissedQuestion } from '@/domain/quiz';

interface QuizResultsProps {
  score: number;
  totalAnswered: number;
  correctAnswered: number;
  bestStreak: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  difficulty: Difficulty;
  onRestart: () => void;
  onNewTopics?: () => void;
  sessionCorrect: number;
  sessionTotal: number;
  missedQuestions: MissedQuestion[];
}

export function QuizResults({ score, correctAnswered, totalAnswered, bestStreak, topicBreakdown, difficulty, onRestart, onNewTopics, missedQuestions }: QuizResultsProps) {
  const pct = totalAnswered > 0 ? Math.round((correctAnswered / totalAnswered) * 100) : 0;
  const diffMeta = getDifficultyMeta(difficulty);
  const { locale } = useLocale();
  const [quote] = useState(() => getRandomQuote(locale));
  const [showReview, setShowReview] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center space-y-6">
      <div className="text-6xl mb-2">{pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '👍' : '💪'}</div>
      <h2 className="text-3xl font-bold font-display text-foreground">{t('results.title')}</h2>

      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
        diffMeta.color === 'success'     ? 'bg-success/10 border-success/30 text-success' :
        diffMeta.color === 'accent'      ? 'bg-accent/10 border-accent/30 text-accent' :
        diffMeta.color === 'destructive' ? 'bg-destructive/10 border-destructive/30 text-destructive' :
        'bg-primary/10 border-primary/30 text-primary'
      }`}>
        {diffMeta.emoji} {diffMeta.tag}
      </div>

      <div className="grid grid-cols-3 gap-4">
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
      </div>

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
              const thinkerMeta = !meta ? THINKER_MAP[slug] : null;
              const label = meta?.label ?? (thinkerMeta ? `${thinkerMeta.emoji} ${thinkerMeta.name}` : slug);
              const emoji = meta?.emoji ?? (thinkerMeta ? '' : '📐');
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

      {/* Inspirational quote */}
      <div className="bg-card/50 rounded-xl border border-border/50 p-4 italic">
        <p className="text-sm text-muted-foreground leading-relaxed">"{quote.text}"</p>
        <p className="text-xs text-muted-foreground/70 mt-1">— {quote.author}</p>
      </div>

      {/* Review mistakes toggle */}
      {missedQuestions.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowReview(!showReview)}
          className="w-full py-3 rounded-xl border border-destructive/30 bg-destructive/5 text-destructive font-semibold text-sm"
        >
          {showReview ? '▲ Hide Review' : t('results.reviewMistakes')} ({missedQuestions.length})
        </motion.button>
      )}

      {showReview && <ReviewMistakes missedQuestions={missedQuestions} />}

      {/* Action buttons */}
      <div className="space-y-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg"
        >
          {t('results.playAgain')}
        </motion.button>

        {onNewTopics && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNewTopics}
            className="w-full py-3 rounded-xl border border-border text-muted-foreground font-semibold text-sm hover:text-foreground hover:border-foreground/20 transition-all"
          >
            {t('results.newTopics')}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
