import { motion } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';
import { t } from '@/i18n';

interface ExplanationPopupProps {
  isCorrect: boolean;
  explanation: string;
  realWorld: string;
  hint?: string; // Show missed hint if user didn't use it
  onNext: () => void;
}

export function ExplanationPopup({ isCorrect, explanation, realWorld, hint, onNext }: ExplanationPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-4"
    >
      <div className={`rounded-xl border-2 p-4 max-h-[55vh] overflow-y-auto ${isCorrect ? 'bg-success/10 border-success/30' : 'bg-destructive/10 border-destructive/30'}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
          <h3 className={`font-bold text-lg ${isCorrect ? 'text-success' : 'text-destructive'}`}>
            {isCorrect ? t('quiz.correct') : t('quiz.wrong')}
          </h3>
        </div>
        <LatexRenderer text={explanation} className="text-card-foreground mb-3 leading-relaxed" />
        <div className="flex items-start gap-2 pt-2 border-t border-border/50">
          <span className="text-base">🌍</span>
          <p className="text-sm text-muted-foreground italic">{realWorld}</p>
        </div>
        {hint && (
          <div className="flex items-start gap-2 pt-2 mt-2 border-t border-border/50">
            <span className="text-base">💡</span>
            <p className="text-sm text-muted-foreground italic">
              <span className="font-medium not-italic">{t('quiz.hintMissed')}</span> {hint}
            </p>
          </div>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="w-full mt-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
      >
        {t('quiz.next')}
      </motion.button>
    </motion.div>
  );
}
