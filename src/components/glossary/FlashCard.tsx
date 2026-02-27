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

export function FlashCard({ term, index }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('definition');

  const availableTabs: TabKey[] = [
    'definition',
    ...(term.latex ? (['latex'] as const) : []),
    ...(term.code ? (['code'] as const) : []),
  ];

  // Front hero math: prefer formula ($...$), else wrap latex as $...$
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

  // Optional topic support (works if you add it later)
  const topic =
    (term.topic as string | undefined) ??
    // @ts-expect-error
    (Array.isArray(term.topics) ? (term.topics[0] as string | undefined) : undefined);

  /**
   * Shared face shell: header/body/footer aligned on both sides
   * - header: term
   * - body: formula/definition
   * - footer: meta + hint or tabs + close
   */
  const FaceShell = ({
    side,
    childrenHeader,
    childrenBody,
    childrenFooter,
    onClick,
    className,
  }: {
    side: 'front' | 'back';
    childrenHeader: React.ReactNode;
    childrenBody: React.ReactNode;
    childrenFooter: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
  }) => {
    const isFront = side === 'front';
    return (
      <div
        onClick={onClick}
        className={[
          'absolute inset-0 rounded-xl p-5 overflow-hidden',
          'border bg-card',
          'flex flex-col',
          'backface-hidden',
          isFront ? 'border-border' : 'border-primary/30 rotate-y-180',
          className ?? '',
        ].join(' ')}
      >
        {/* glow */}
        <div
          className={[
            'absolute w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none',
            isFront ? '-top-8 -right-8' : '-bottom-8 -left-8',
          ].join(' ')}
        />

        {/* Layout: header / body / footer */}
        <div className="relative z-10 flex flex-col flex-1">
          <div className="shrink-0">{childrenHeader}</div>
          <div className="flex-1 mt-3">{childrenBody}</div>
          <div className="shrink-0 mt-3">{childrenFooter}</div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="perspective-1000"
    >
      <div
        className={`relative w-full min-h-[190px] transition-transform duration-500 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ── Front ── */}
        <FaceShell
          side="front"
          onClick={handleFlip}
          className={flipped ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'}
          childrenHeader={
            <p className="text-lg font-bold text-foreground leading-tight">
              <LatexRenderer text={term.term} />
            </p>
          }
          childrenBody={
            <div className="flex flex-col gap-3">
              {/* Hero formula (kept in the same body area as definition on back) */}
              {frontMath ? (
                <div className="py-3 px-4 rounded-lg bg-muted/50 border border-border/50 text-center">
                  <div className="text-base md:text-lg text-foreground">
                    <LatexRenderer text={frontMath} />
                  </div>
                </div>
              ) : null}

              {/* Definition preview in a consistent slot */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                <LatexRenderer text={term.definition} />
              </p>
            </div>
          }
          childrenFooter={
            <div className="flex items-center justify-between gap-2">
              <TermMeta field={term.field as any} topic={topic ?? null} />
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                👆 {t('glossary.tapToReveal')}
              </span>
            </div>
          }
        />

        {/* ── Back ── */}
        <FaceShell
          side="back"
          onClick={(e) => e.stopPropagation()}
          className={flipped ? 'pointer-events-auto' : 'pointer-events-none'}
          childrenHeader={
            <p className="text-lg font-bold text-foreground leading-tight">
              <LatexRenderer text={term.term} />
            </p>
          }
          childrenBody={
            <div className="h-full flex flex-col">
              {/* Top bar: tabs + close (kept inside body so header stays aligned with front) */}
              <div className="flex items-center justify-between mb-3">
                {availableTabs.length > 1 ? (
                  <div className="flex gap-1">
                    {availableTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={(e) => handleTabClick(e, tab)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                          activeTab === tab
                            ? 'bg-primary/15 text-primary border border-primary/30'
                            : 'text-muted-foreground hover:text-foreground border border-transparent'
                        }`}
                      >
                        {t(TAB_KEYS[tab])}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div />
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip();
                  }}
                  className="px-2 py-1 rounded-md text-[10px] font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 transition-all"
                  title={t('glossary.tapToClose')}
                >
                  ✕
                </button>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'definition' && (
                    <motion.div
                      key="def"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col gap-2"
                    >
                      {/* Keep definition in same “slot” as on front, but full (no clamp) */}
                      <p className="text-sm text-foreground leading-relaxed">
                        <LatexRenderer text={term.definition} />
                      </p>
                      {term.example ? (
                        <p className="text-xs text-muted-foreground italic mt-1">
                          💡 {term.example}
                        </p>
                      ) : null}
                    </motion.div>
                  )}

                  {activeTab === 'latex' && term.latex && (
                    <motion.div
                      key="latex"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col gap-2"
                    >
                      <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap border border-border/50">
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
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                    >
                      <pre className="text-xs font-mono text-foreground bg-muted/50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap border border-border/50 leading-relaxed">
                        {term.code}
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          }
          childrenFooter={
            <div className="flex items-center justify-between gap-2">
              <TermMeta field={term.field as any} topic={topic ?? null} />
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                👇 {t('glossary.tapToClose')}
              </span>
            </div>
          }
        />
      </div>
    </motion.div>
  );
}