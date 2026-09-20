import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Badge } from '@/components/ui/badge';
import {
  FORMULA_DIFFICULTY_STYLES,
  getFormulaDifficultyLabel,
} from '@/components/formulas/formula-display';
import type { Equation } from '@/config/equations';
import { getFormulaReferencePageForEquation } from '@/config/formula-pages';
import { APP_PATHS } from '@/config/site-navigation';
import { t } from '@/i18n';

function BeautyStars({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={
            `text-xs ${
              index < score
                ? 'text-accent'
                : 'text-muted-foreground/30'
            }`
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function EquationCard({
  equation,
  index,
}: {
  equation: Equation;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded((value) => !value)}
    >
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-bold font-mono-code text-muted-foreground/60">
          #{equation.rank}
        </span>
      </div>

      <div className="absolute top-3 left-3 z-10 flex gap-1">
        {equation.millenniumProblem && (
          <span className="text-xs" title="Millennium Prize Problem">🏆</span>
        )}
        {equation.nobelPrize && (
          <span className="text-xs" title="Nobel Prize">🥇</span>
        )}
        {equation.unsolved && (
          <span className="text-xs" title="Unsolved">❓</span>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-5">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">
            {equation.domainEmoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-foreground text-base leading-tight">
              {equation.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {equation.discoverer} · {equation.year}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-background/60 border border-border/40 p-4 mb-3 flex items-center justify-center min-h-[3.5rem]">
          <LatexRenderer
            text={`$${equation.equation}$`}
            className="text-lg font-mono-code text-foreground"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0.5 border-primary/30 text-primary"
          >
            {equation.domain}
          </Badge>
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0.5 border-border"
          >
            {equation.field}
          </Badge>
          <span
            className={
              `inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
                FORMULA_DIFFICULTY_STYLES[equation.difficulty]
              }`
            }
          >
            {getFormulaDifficultyLabel(equation.difficulty)}
          </span>
        </div>

        <BeautyStars score={equation.beauty} />

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/40 space-y-3 text-sm">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    {t('formulas.significance')}
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    {equation.significance}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    {t('formulas.constants')}
                  </p>
                  <p className="text-foreground/80 font-mono-code text-xs">
                    {equation.constants}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    {t('formulas.applications')}
                  </p>
                  <p className="text-foreground/80">
                    {equation.applications}
                  </p>
                </div>
                {equation.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {equation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded
              ? t('formulas.collapse')
              : t('formulas.tapToExplore')}
          </span>
          <Link
            to={
              getFormulaReferencePageForEquation(equation)?.path
              ?? APP_PATHS.formulas
            }
            onClick={(event) => event.stopPropagation()}
            className="text-[11px] font-semibold text-primary hover:underline"
          >
            Open reference →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
