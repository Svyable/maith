// ── Q.E.D. Celebration — confetti + badge reveal on perfect thinker score ──
// "∀q ∈ Q, correct(q) ⟹ Q.E.D. ∎"

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { ThinkerMeta } from '@/config/thinkers';

interface QEDCelebrationProps {
  thinker: ThinkerMeta | null;
  show: boolean;
  onDone: () => void;
}

const GOLD_COLORS = ['#FFD700', '#FFA500', '#FFEC8B', '#DAA520', '#F5DEB3'];
const MATH_SYMBOLS = ['∫', '∑', 'π', '∞', '√', 'Δ', '∇', 'λ', 'Ω', '∂'];

function fireConfetti() {
  const defaults = { startVelocity: 30, spread: 360, ticks: 80, zIndex: 9999 };

  // Gold burst from center
  confetti({ ...defaults, particleCount: 80, origin: { x: 0.5, y: 0.4 }, colors: GOLD_COLORS });

  // Side cannons
  setTimeout(() => {
    confetti({ ...defaults, particleCount: 40, origin: { x: 0.2, y: 0.6 }, colors: GOLD_COLORS, angle: 60 });
    confetti({ ...defaults, particleCount: 40, origin: { x: 0.8, y: 0.6 }, colors: GOLD_COLORS, angle: 120 });
  }, 200);

  // Final shower
  setTimeout(() => {
    confetti({ ...defaults, particleCount: 60, origin: { x: 0.5, y: 0.2 }, colors: GOLD_COLORS, gravity: 0.8 });
  }, 500);
}

export function QEDCelebration({ thinker, show, onDone }: QEDCelebrationProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (show && !firedRef.current) {
      firedRef.current = true;
      fireConfetti();
      const timer = setTimeout(onDone, 4500);
      return () => clearTimeout(timer);
    }
    if (!show) firedRef.current = false;
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {show && thinker && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={onDone}
        >
          {/* Floating math symbols */}
          {MATH_SYMBOLS.map((sym, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, x: (i - 5) * 40 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [50, -100],
                x: (i - 5) * 40 + Math.sin(i) * 20,
              }}
              transition={{ duration: 2.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              className="absolute text-2xl text-amber-400/40 font-mono select-none pointer-events-none"
              style={{ top: '60%', left: '50%' }}
            >
              {sym}
            </motion.span>
          ))}

          {/* Main badge */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
            className="flex flex-col items-center gap-4 p-8 max-w-sm"
          >
            {/* Glowing emoji */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-7xl drop-shadow-[0_0_24px_rgba(255,215,0,0.6)]"
            >
              {thinker.emoji}
            </motion.div>

            {/* Q.E.D. badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-5 py-2 rounded-full bg-amber-500/20 border-2 border-amber-400/50 shadow-[0_0_30px_-5px_hsl(45,90%,55%,0.5)]"
            >
              <span className="text-lg font-mono font-bold text-amber-300 tracking-wider">
                Q.E.D. ∎
              </span>
            </motion.div>

            {/* Thinker name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center space-y-1"
            >
              <h3 className="text-xl font-display font-bold text-foreground">{thinker.name}</h3>
              <p className="text-sm text-muted-foreground italic">{thinker.archetype}</p>
            </motion.div>

            {/* Witty proof line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xs font-mono text-amber-400/70 text-center"
            >
              ∀q ∈ Q({thinker.name.split(' ').pop()}), correct(q) = true
              <br />
              ∴ mastery({thinker.slug}) ≡ proven ∎
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-[10px] text-muted-foreground/50 mt-2"
            >
              tap to dismiss
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
