import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LatexRenderer } from './LatexRenderer';
import { PaperPill } from './PaperPill';
import { t } from '@/i18n';

interface ExplanationPopupProps {
  isCorrect: boolean;
  explanation: string;
  realWorld: string;
  hint?: string;
  symbolLinks?: Record<string, string>;
  paper?: { title: string; url: string; venue?: string; year?: number };
  glossaryLinks?: string[];
  formulaLinks?: string[];
  onNext: () => void;
}

export function ExplanationPopup({ isCorrect, explanation, realWorld, hint, symbolLinks, paper, glossaryLinks, formulaLinks, onNext }: ExplanationPopupProps) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Split explanation: first sentence is the summary, rest is detail
  const dotIdx = explanation.indexOf('. ');
  const hasSplit = dotIdx > 0 && dotIdx < explanation.length - 2;
  const summary = hasSplit ? explanation.slice(0, dotIdx + 1) : explanation;
  const detail = hasSplit ? explanation.slice(dotIdx + 2) : '';

  const hasLearnMore = (glossaryLinks && glossaryLinks.length > 0) || (formulaLinks && formulaLinks.length > 0);

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

        {/* Summary line */}
        <LatexRenderer text={summary} className="text-card-foreground leading-relaxed" symbolLinks={symbolLinks} />

        {/* Collapsible detail */}
        {detail && (
          <div className="mt-2">
            {expanded ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <LatexRenderer text={detail} className="text-card-foreground leading-relaxed" symbolLinks={symbolLinks} />
              </motion.div>
            ) : null}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mt-1 transition-colors"
            >
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {expanded ? 'Less' : 'More detail'}
            </button>
          </div>
        )}

        {/* Symbol guide hint */}
        {symbolLinks && Object.keys(symbolLinks).length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">
            <span>🔤</span>
            <span>Tap symbols to learn them on GreekToMe</span>
          </div>
        )}

        {/* Real-world pill */}
        <div className="flex items-start gap-2 pt-2 mt-2 border-t border-border/50">
          <span className="text-base">🌍</span>
          <LatexRenderer text={realWorld} className="text-sm text-muted-foreground italic" symbolLinks={symbolLinks} />
        </div>

        {/* Missed hint */}
        {hint && (
          <div className="flex items-start gap-2 pt-2 mt-2 border-t border-border/50">
            <span className="text-base">💡</span>
            <p className="text-sm text-muted-foreground italic">
              <span className="font-medium not-italic">{t('quiz.hintMissed')}</span> {hint}
            </p>
          </div>
        )}

        {/* Paper pill */}
        {paper && (
          <div className="pt-2 mt-2 border-t border-border/50">
            <PaperPill paper={paper} />
          </div>
        )}

        {/* Learn more: glossary & formula cross-links */}
        {hasLearnMore && (
          <div className="pt-2 mt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Learn more</p>
            <div className="flex flex-wrap gap-2">
              {glossaryLinks?.map((id) => (
                <button
                  key={`g-${id}`}
                  onClick={() => navigate(`/glossary?term=${id}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                >
                  <span>📖</span>
                  <span className="font-medium text-foreground">{formatTermId(id)}</span>
                </button>
              ))}
              {formulaLinks?.map((name) => (
                <button
                  key={`f-${name}`}
                  onClick={() => navigate(`/formulas?q=${encodeURIComponent(name)}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                >
                  <span className="font-mono font-bold">ƒ</span>
                  <span className="font-medium text-foreground">{name}</span>
                </button>
              ))}
            </div>
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

/** Convert a glossary term ID like 'big-o' to 'Big-O' for display */
function formatTermId(id: string): string {
  return id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
}
