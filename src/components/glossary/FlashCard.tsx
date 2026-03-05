import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LatexRenderer } from "@/components/LatexRenderer";
import { t } from "@/i18n";
import { tGlossary } from "@/i18n/tGlossary";
import type { GlossaryTerm } from "@/content/glossary/types";
import { TermMeta } from "@/components/glossary/TermMeta";

interface FlashCardProps {
  term: GlossaryTerm;
  index: number;
}

type TabKey = "definition" | "latex" | "code";

const TAB_KEYS: Record<TabKey, string> = {
  definition: "glossary.tabDefinition",
  latex: "glossary.tabLatex",
  code: "glossary.tabCode",
};

// Nice default so cards are visible before first measure
const FALLBACK_MIN_HEIGHT = 220;

export function FlashCard({ term, index }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("definition");
  const [containerH, setContainerH] = useState<number>(FALLBACK_MIN_HEIGHT);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const availableTabs: TabKey[] = useMemo(
    () => ["definition", ...(term.latex ? (["latex"] as const) : []), ...(term.code ? (["code"] as const) : [])],
    [term.latex, term.code],
  );

  const frontMath = term.formula ?? (term.latex ? `$${term.latex}$` : undefined);

  const topic =
    (term.topic as string | undefined) ??
    // @ts-expect-error
    (Array.isArray(term.topics) ? (term.topics[0] as string | undefined) : undefined);

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>, tab: TabKey) => {
    e.stopPropagation();
    setActiveTab(tab);
  };

  const handleFlip = () => {
    setFlipped((f) => {
      const next = !f;
      if (next) setActiveTab("definition");
      return next;
    });
  };

  const measure = () => {
    const fh = frontRef.current?.getBoundingClientRect().height ?? 0;
    const bh = backRef.current?.getBoundingClientRect().height ?? 0;
    const next = Math.max(fh, bh, FALLBACK_MIN_HEIGHT);
    if (Number.isFinite(next) && next > 0) setContainerH(next);
  };

  // Measure right after mount + whenever key state changes
  useLayoutEffect(() => {
    // Let the browser lay out first (important after tab changes)
    requestAnimationFrame(() => measure());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term.id, flipped, activeTab]);

  // ResizeObserver for true dynamic sizing (fonts, wrapping, content changes)
  useEffect(() => {
    if (!frontRef.current || !backRef.current) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(frontRef.current);
    ro.observe(backRef.current);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Face = ({
    side,
    faceRef,
    onClick,
    className = "",
    children,
  }: {
    side: "front" | "back";
    faceRef: React.RefObject<HTMLDivElement>;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    children: React.ReactNode;
  }) => {
    const isFront = side === "front";

    return (
      <div
        ref={faceRef}
        onClick={onClick}
        className={[
          // KEY CHANGE: NOT inset-0. Let height be auto.
          "absolute left-0 top-0 w-full",
          "rounded-2xl border bg-card overflow-hidden",
          "p-6 md:p-7",
          "backface-hidden",
          isFront ? "border-border" : "border-primary/30 rotate-y-180",
          className,
        ].join(" ")}
      >
        <div
          className={[
            "absolute w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none",
            isFront ? "-top-10 -right-10" : "-bottom-10 -left-10",
          ].join(" ")}
        />

        <div className="relative z-10 flex flex-col">{children}</div>
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
      {/* Wrapper MUST have height because children are absolute */}
      <div
        className={`relative w-full transition-transform duration-500 preserve-3d ${flipped ? "rotate-y-180" : ""}`}
        style={{ height: containerH }}
      >
        {/* FRONT */}
        <Face
          side="front"
          faceRef={frontRef}
          onClick={handleFlip}
          className={flipped ? "pointer-events-none" : "pointer-events-auto cursor-pointer"}
        >
          {/* Header */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
            <LatexRenderer text={tGlossary(term.id, "term", term.term)} />
          </h3>

          {/* Body */}
          <div className="mt-4 flex flex-col gap-4">
            {frontMath ? (
              <div className="py-4 px-5 rounded-xl bg-muted/50 border border-border/50 text-center">
                <div className="text-lg md:text-xl text-foreground">
                  <LatexRenderer text={frontMath} />
                </div>
              </div>
            ) : null}

            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed line-clamp-3">
              <LatexRenderer text={tGlossary(term.id, "definition", term.definition)} />
            </p>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <TermMeta field={term.field as any} topic={topic ?? null} />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="text-[12px]">👆</span>
              <span className="hidden sm:inline">{t("glossary.tapToReveal")}</span>
            </span>
          </div>
        </Face>

        {/* BACK */}
        <Face
          side="back"
          faceRef={backRef}
          onClick={(e) => e.stopPropagation()}
          className={flipped ? "pointer-events-auto" : "pointer-events-none"}
        >
          {/* Header */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
            <LatexRenderer text={tGlossary(term.id, "term", term.term)} />
          </h3>

          {/* Tabs + close */}
          <div className="mt-3 flex items-center justify-between gap-3">
            {availableTabs.length > 1 ? (
              <div className="flex gap-1.5">
                {availableTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={(e) => handleTabClick(e, tab)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all border ${
                      activeTab === tab
                        ? "bg-primary/15 text-primary border-primary/30"
                        : "text-muted-foreground hover:text-foreground border-transparent"
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
              className="px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 transition-all"
              title={t("glossary.tapToClose")}
              aria-label={t("glossary.tapToClose")}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              {activeTab === "definition" && (
                <motion.div
                  key="def"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-2"
                >
                  <p className="text-sm md:text-[15px] text-foreground leading-relaxed">
                    <LatexRenderer text={tGlossary(term.id, "definition", term.definition)} />
                  </p>
                  {term.example ? (
                    <p className="text-xs md:text-[13px] text-muted-foreground italic mt-1">
                      💡 {tGlossary(term.id, "example", term.example)}
                    </p>
                  ) : null}
                </motion.div>
              )}

              {activeTab === "latex" && term.latex && (
                <motion.div
                  key="latex"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-3"
                >
                  <pre className="text-xs md:text-[13px] font-mono text-foreground bg-muted/50 rounded-xl p-4 overflow-auto whitespace-pre-wrap border border-border/50 max-h-[240px]">
                    {term.latex}
                  </pre>
                  <div className="text-center py-3 px-4 rounded-xl bg-background/50 border border-border/30">
                    <LatexRenderer text={`$${term.latex}$`} />
                  </div>
                </motion.div>
              )}

              {activeTab === "code" && term.code && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                >
                  <pre className="text-xs md:text-[13px] font-mono text-foreground bg-muted/50 rounded-xl p-4 overflow-auto whitespace-pre-wrap border border-border/50 leading-relaxed max-h-[240px]">
                    {term.code}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <TermMeta field={term.field as any} topic={topic ?? null} />
            <span className="text-[11px] text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="text-[12px]">👇</span>
              <span className="hidden sm:inline">{t("glossary.tapToClose")}</span>
            </span>
          </div>
        </Face>
      </div>
    </motion.div>
  );
}
