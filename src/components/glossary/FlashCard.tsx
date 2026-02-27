// src/components/glossary/FlashCard.tsx
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LatexRenderer } from '@/components/LatexRenderer';
import { t } from '@/i18n';
import type { GlossaryTerm } from '@/content/glossary/types';
import { TermMeta } from '@/components/glossary/TermMeta';

interface FlashCardProps {
  term: GlossaryTerm;
  index: number;
}

type TabKey = 'definition' | 'latex' | 'code';

const TAB_KEYS: Record<TabKey, string> = {
  definition: 'glossary.tabDefinition',
  latex: 'glossary.tabLatex',
  code: 'glossary.tabCode',
};

const TAB_ROW_HEIGHT = 40; // px; used to reserve space on front for perfect alignment

export function FlashCard({ term, index }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('definition');

  const availableTabs: TabKey[] = [
    'definition',
    ...(term.latex ? (['latex'] as const) : []),
    ...(term.code ? (['code'] as const) : []),
  ];

  // Prefer formula (already $...$) else wrap latex
  const frontMath = term.formula ?? (term.latex ? `$${term.latex}$` : undefined);

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>, tab: TabKey) => {
    e.stopPropagation();
    setActiveTab(tab);
  };

  const handleFlip = () => {
    setFlipped((f) => {
      const next = !f;
      if (next) setActiveTab('definition');
      return next;
    });
  };

  // Optional topic extraction (backwards-compatible)
  const topic =
    // @ts-expect-error
    (term.topic as string | undefined) ??
    // @ts-expect-error
    (Array.isArray(term.topics) ? (term.topics[0] as string | undefined) : undefined);

  /**
   * Shared face layout uses CSS grid:
   * grid-template-rows: header (auto) / tabsRow (fixed) / body (1fr) / footer (auto)
   * Tabs row is reserved on the front but rendered invisibly so the flip doesn't shift vertical rhythm.
   */
  const faceBaseClass =
    'absolute inset-0 rounded-xl border bg-card p-4 overflow-hidden backface-hidden flex flex-col';

  const header = (
    <div className="shrink-0">
      <p className="text-lg font-semibold text-foreground leading-tight">
        <LatexRenderer text={term.term} />
      </p>
    </div>
  );

  const footerFront = (
    <div className="flex items-center justify-between gap-2">
      <TermMeta field={term.field as any} topic={topic ?? null} />
      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
        👆 {t('glossary.tapToReveal')}
      </span>
    </div>
  );

  const footerBack = (
    <div className="flex items-center justify-between gap-2">
      <TermMeta field={term.field as any} topic={topic ?? null} />
      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
        👇 {t('glossary.tapToClose')}
      </span>
    </div>
  );

  // tab-row JSX for back; re-used invisible on front to reserve space
  const tabsRow = (
    <div
      style={{ height: TAB_ROW_HEIGHT }}
      className="flex items-center justify-between gap-2"
      aria-hidden
    >
      <div className="flex gap-2">
        {availableTabs.length > 1 ? (
          availableTabs.map((tab) => (
            <button
              key={tab}
              onClick={(e) => handleTabClick(e, tab)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:text-foreground border border-transparent'
              }`}
            >
              {t(TAB_KEYS[tab])}
            </button>
          ))
        ) : (
          // Keep an empty placeholder so width/layout is stable
          <div className="w-0" />
        )}
      </div>

      <div />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="perspective-1000"
    >
      <div
        className={`relative w-full min-h-[180px] transition-transform duration-500 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ── FRONT ── */}
        <div
          onClick={handleFlip}
          className={`${faceBaseClass} ${
            !flipped ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
          }`}
          style={{
            // grid: header / tabsRow / body / footer
            display: 'grid',
            gridTemplateRows: `auto ${TAB_ROW_HEIGHT}px 1fr auto`,
            gap: '0.5rem',
            borderColor: 'var(--border)', // Tailwind var usage neutral; keep consistent with border classes
          }}
        >
          {/* decorative glow (top-right) */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

          {/* header */}
          <div className="px-1">{header}</div>

          {/* invisible tabs row (keeps the layout identical to the back) */}
          <div className="px-1 opacity-0 pointer-events-none">{tabsRow}</div>

          {/* body */}
          <div className="px-1">
            <div className="flex flex-col gap-3 h-full">
              {/* hero math / formula in same body area as back's content */}
              {frontMath ? (
                <div className="py-3 px-4 rounded-lg bg-muted/50 border border-border/50 text-center">
                  <div className="text-base md:text-lg text-foreground">
                    <LatexRenderer text={frontMath} />
                  </div>
                </div>
              ) : null}

              {/* short definition preview - constrained to two lines visually */}
              <div className="text-sm text-muted-foreground leading-relaxed max-h-12 overflow-hidden">
                {/* If Tailwind line-clamp plugin not available, this uses max-height overflow approach */}
                <LatexRenderer text={term.definition} />
                {/* gradient fade at bottom for long defs */}
                <div
                  aria-hidden
                  style={{
                    height: 18,
                    marginTop: -6,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.25))',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* footer with chips */}
          <div className="px-1">{footerFront}</div>
        </div>

        {/* ── BACK ── */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${faceBaseClass} rotate-y-180 ${
            flipped ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            display: 'grid',
            gridTemplateRows: `auto ${TAB_ROW_HEIGHT}px 1fr auto`,
            gap: '0.5rem',
            // stronger border tint to visually separate back
            borderColor: 'rgba(124, 58, 237, 0.18)',
          }}
        >
          {/* decorative glow (bottom-left) */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

          {/* header */}
          <div className="px-1">{header}</div>

          {/* visible tabs row */}
          <div className="px-1">{tabsRow}</div>

          {/* body - tab content */}
          <div className="px-1">
            <div className="flex flex-col gap-3 h-full">
              <AnimatePresence mode="wait">
                {activeTab === 'definition' && (
                  <motion.div
                    key="def"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col gap-2 h-full"
                  >
                    <div className="text-sm text-foreground leading-relaxed">
                      <LatexRenderer text={term.definition} />
                    </div>
                    {term.example ? (
                      <p className="text-xs text-muted-foreground italic mt-1">💡 {term.example}</p>
                    ) : null}
                  </motion.div>
                )}

                {activeTab === 'latex' && term.latex && (
                  <motion.div
                    key="latex"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col gap-2 h-full"
                  >
                    <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap border border-border/50 flex-shrink-0">
                      {term.latex}
                    </pre>
                    <div className="text-center py-2 px-3 rounded-lg bg-background/50 border border-border/30">
                      <LatexRenderer text={`$${term.latex}$`} />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'code' && term.code && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col gap-2 h-full"
                  >
                    <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap border border-border/50 leading-relaxed">
                      {term.code}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* footer */}
          <div className="px-1">{footerBack}</div>
        </div>
      </div>
    </motion.div>
  );
}