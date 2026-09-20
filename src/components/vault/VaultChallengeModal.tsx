import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Lock, X } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import type { VaultEntry } from '@/config/vault';
import type { Question } from '@/content/types';
import { t } from '@/i18n';

interface VaultChallengeModalProps {
  entryIndex: number;
  entry: VaultEntry;
  question: Question;
  onSuccess: () => void;
  onClose: () => void;
}

export function VaultChallengeModal({
  entryIndex,
  entry,
  question,
  onSuccess,
  onClose,
}: VaultChallengeModalProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] =
    useState<'pending' | 'correct' | 'wrong'>('pending');
  const successTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    },
    [],
  );

  const handleAnswer = (index: number) => {
    if (result !== 'pending') return;

    setSelected(index);

    if (index === question.correctIndex) {
      setResult('correct');
      successTimerRef.current = setTimeout(onSuccess, 1200);
      return;
    }

    setResult('wrong');
  };

  const retry = () => {
    setSelected(null);
    setResult('pending');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-card border border-destructive/30 rounded-2xl p-5 sm:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-4 h-4 text-destructive" />
          <span className="text-xs font-bold text-destructive uppercase tracking-wider">
            {t('vault.challengeHeader', { level: entryIndex + 1 })}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-foreground mb-1">
          {t('vault.challengeUnlock', { name: entry.name })}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          {t('vault.challengePrompt')}
        </p>

        <div className="bg-background/60 rounded-xl border border-border/40 p-4 mb-4">
          <LatexRenderer
            text={question.question}
            className="text-sm font-medium text-foreground leading-relaxed"
          />
        </div>

        <div className="space-y-2 mb-4">
          {question.options.map((option, index) => {
            let stateClass =
              'bg-secondary/50 hover:bg-secondary border-border/40 text-foreground';

            if (selected !== null) {
              if (index === question.correctIndex) {
                stateClass =
                  'bg-success/15 border-success/50 text-success';
              } else if (index === selected && result === 'wrong') {
                stateClass =
                  'bg-destructive/15 border-destructive/50 text-destructive';
              } else {
                stateClass =
                  'bg-secondary/30 border-border/20 text-muted-foreground';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={result !== 'pending'}
                className={
                  `w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${stateClass} ${
                    result === 'pending'
                      ? 'cursor-pointer'
                      : 'cursor-default'
                  }`
                }
              >
                <span className="font-bold mr-2 text-muted-foreground">
                  {String.fromCharCode(65 + index)}.
                </span>
                <LatexRenderer
                  text={option}
                  className="inline text-sm"
                />
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {result === 'correct' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 rounded-xl bg-success/15 border border-success/30 text-success text-sm font-semibold"
            >
              <Check className="w-4 h-4" />
              <span>{t('vault.challengeSuccess')}</span>
            </motion.div>
          )}
          {result === 'wrong' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/15 border border-destructive/30 text-destructive text-sm font-semibold">
                <X className="w-4 h-4" />
                <span>{t('vault.challengeFail')}</span>
              </div>
              <button
                onClick={retry}
                className="w-full py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('vault.tryAgain')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
