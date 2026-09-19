import { motion, AnimatePresence } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';
import { t } from '@/i18n';

interface HintPanelProps {
  hint: string;
  onEliminate: () => void;
  hintShown: boolean;
  onShowHint: () => void;
  eliminateUsed: boolean;
  disabled: boolean;
}

export function HintPanel({ hint, onEliminate, hintShown, onShowHint, eliminateUsed, disabled }: HintPanelProps) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <motion.button
          whileHover={!hintShown && !disabled ? { scale: 1.05 } : undefined}
          whileTap={!hintShown && !disabled ? { scale: 0.95 } : undefined}
          onClick={onShowHint}
          disabled={hintShown || disabled}
          className={`min-h-[44px] px-3 py-2 rounded-lg text-sm font-medium border transition-all flex items-center justify-center gap-1.5 ${
            hintShown || disabled
              ? 'bg-secondary/50 border-border text-muted-foreground cursor-not-allowed opacity-50'
              : 'bg-accent/10 border-accent/30 text-accent hover:bg-accent/20'
          }`}
        >
          💡 <span className="truncate">{hintShown ? t('quiz.hintUsed') : t('quiz.showHint')}</span>
        </motion.button>

        <motion.button
          whileHover={!eliminateUsed && !disabled ? { scale: 1.05 } : undefined}
          whileTap={!eliminateUsed && !disabled ? { scale: 0.95 } : undefined}
          onClick={onEliminate}
          disabled={eliminateUsed || disabled}
          className={`min-h-[44px] px-3 py-2 rounded-lg text-sm font-medium border transition-all flex items-center justify-center gap-1.5 ${
            eliminateUsed || disabled
              ? 'bg-secondary/50 border-border text-muted-foreground cursor-not-allowed opacity-50'
              : 'bg-destructive/10 border-destructive/30 text-destructive hover:bg-destructive/20'
          }`}
        >
          ✂️ <span className="truncate">{eliminateUsed ? t('quiz.eliminateUsed') : t('quiz.eliminate')}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {hintShown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-3 flex items-start gap-2">
              <span className="text-base mt-0.5">💡</span>
              <LatexRenderer text={hint} className="text-sm text-accent-foreground/80 leading-relaxed" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
