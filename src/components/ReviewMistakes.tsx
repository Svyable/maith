import { motion, AnimatePresence } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';
import { TOPIC_MAP } from '@/config/constants';
import type { MissedQuestion } from '@/domain/quiz';
import { t } from '@/i18n';

interface ReviewMistakesProps {
  missedQuestions: MissedQuestion[];
}

export function ReviewMistakes({ missedQuestions }: ReviewMistakesProps) {
  if (missedQuestions.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
        {t('results.reviewTitle')} ({missedQuestions.length})
      </h3>

      <div className="space-y-3">
        <AnimatePresence>
          {missedQuestions.map((missed, idx) => {
            const { question, selectedIndex, checkResult } = missed;
            const topicMeta = TOPIC_MAP[question.topic];

            return (
              <motion.div
                key={`${question.id}-${idx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-card rounded-xl border border-border p-4 space-y-3"
              >
                {/* Topic + question */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{topicMeta?.emoji ?? '📐'}</span>
                  <span>{topicMeta?.label ?? question.topic}</span>
                </div>

                <LatexRenderer
                  text={question.question}
                  className="text-sm font-medium text-card-foreground leading-relaxed"
                />

                {/* Options with correct/wrong highlighting */}
                <div className="space-y-1.5">
                  {question.options.map((opt, i) => {
                    const isCorrect = i === checkResult.correctIndex;
                    const isSelected = i === selectedIndex;

                    let bgClass = 'bg-secondary/50 text-muted-foreground';
                    if (isCorrect) bgClass = 'bg-success/15 border-success/40 text-success font-semibold';
                    else if (isSelected) bgClass = 'bg-destructive/15 border-destructive/40 text-destructive line-through';

                    return (
                      <div
                        key={i}
                        className={`px-3 py-2 rounded-lg text-xs border border-transparent ${bgClass}`}
                      >
                        <LatexRenderer text={opt} className="inline" />
                        {isCorrect && <span className="ml-2">✓</span>}
                        {isSelected && !isCorrect && <span className="ml-2">✗</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-secondary/30 rounded-lg p-3 space-y-1">
                  <p className="text-xs font-semibold text-foreground">💡 {t('results.explanation')}</p>
                  <LatexRenderer
                    text={checkResult.explanation}
                    className="text-xs text-muted-foreground leading-relaxed"
                  />
                  {checkResult.realWorld && (
                    <p className="text-xs text-muted-foreground/70 italic mt-1">
                      🌍 {checkResult.realWorld}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
