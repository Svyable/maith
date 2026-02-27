import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LatexRenderer } from "@/components/LatexRenderer";
import { t } from "@/i18n";
import type { GlossaryTerm } from "@/content/glossary/types";
import type { MouseEvent } from "react";

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

export function FlashCard({ term, index }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("definition");

  const availableTabs: TabKey[] = [
    "definition",
    ...(term.latex ? (["latex"] as const) : []),
    ...(term.code ? (["code"] as const) : []),
  ];

  // Front card "hero math": prefer formula (already $...$), else render latex (wrap in $...$)
  const frontMath = term.formula ?? (term.latex ? `$${term.latex}$` : undefined);

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>, tab: TabKey) => {
    e.stopPropagation();
    setActiveTab(tab);
  };

  const handleFlip = () => {
    setFlipped((f) => {
      const next = !f;
      if (next) setActiveTab("definition"); // reset when opening
      return next;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="cursor-pointer perspective-1000"
    >
      <div
        className={`relative w-full min-h-[180px] transition-transform duration-500 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ── Front ── click flips */}
        <div
          onClick={handleFlip}
          className="absolute inset-0 backface-hidden rounded-xl border border-border bg-card p-5 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-3 relative z-10">
            <p className="text-lg font-bold text-foreground leading-tight">
              <LatexRenderer text={term.term} />
            </p>

            {frontMath && (
              <div className="py-3 px-4 rounded-lg bg-muted/50 border border-border/50 text-center">
                <div className="text-base md:text-lg text-foreground">
                  <LatexRenderer text={frontMath} />
                </div>
              </div>
            )}
          </div>

          <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-widest relative z-10">
            {t("glossary.tapToReveal")}
          </p>
        </div>

        {/* ── Back ── does NOT flip on click; has explicit close button */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-primary/30 bg-card p-4 flex flex-col overflow-hidden">
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

          {/* Top bar: tabs + close button */}
          <div className="flex items-center justify-between mb-3 relative z-10">
            {/* Tabs (only if multiple) */}
            {availableTabs.length > 1 ? (
              <div className="flex gap-1">
                {availableTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={(e) => handleTabClick(e, tab)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                      activeTab === tab
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground border border-transparent"
                    }`}
                  >
                    {t(TAB_KEYS[tab])}
                  </button>
                ))}
              </div>
            ) : (
              <div />
            )}

            {/* Flip-back button */}
            <button
              onClick={handleFlip}
              className="px-2 py-1 rounded-md text-[10px] font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 transition-all"
              title={t("glossary.tapToClose")}
            >
              ✕
            </button>
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-auto relative z-10">
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
                  <p className="text-sm text-foreground leading-relaxed">
                    <LatexRenderer text={term.definition} />
                  </p>
                  {term.example && <p className="text-xs text-muted-foreground italic mt-1">💡 {term.example}</p>}
                </motion.div>
              )}

              {activeTab === "latex" && term.latex && (
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

              {activeTab === "code" && term.code && (
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
      </div>
    </motion.div>
  );
}
