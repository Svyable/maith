import { useState } from 'react';
import { motion } from 'framer-motion';
import { LatexRenderer } from '@/components/LatexRenderer';
import type { GlossaryTerm } from '@/content/glossary/types';

interface FlashCardProps {
  term: GlossaryTerm;
  index: number;
}

export function FlashCard({ term, index }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      onClick={() => setFlipped((f) => !f)}
      className="cursor-pointer perspective-1000"
    >
      <div
        className={`relative w-full min-h-[140px] transition-transform duration-500 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-border bg-card p-5 flex flex-col justify-center">
          <p className="text-lg font-bold text-foreground leading-tight">
            <LatexRenderer text={term.term} />
          </p>
          <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">
            Tap to reveal
          </p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-primary/30 bg-primary/5 p-5 flex flex-col justify-center gap-2 overflow-auto">
          <p className="text-sm text-foreground leading-relaxed">
            <LatexRenderer text={term.definition} />
          </p>
          {term.example && (
            <p className="text-xs text-muted-foreground italic mt-1">
              💡 {term.example}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
