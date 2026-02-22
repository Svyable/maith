import { motion } from 'framer-motion';

const SYMBOLS = ['∑', '∫', 'π', '√', '∞', 'Δ', '∇', 'λ', 'θ', 'σ', '∂', 'μ', 'ε', 'ζ'];

const EQUATIONS = [
  'E = mc²',
  'e^{iπ} + 1 = 0',
  '∇ × B = μ₀J',
  'F = ma',
  'S = k ln Ω',
  'ΔxΔp ≥ ℏ/2',
  'ds² = gμν dxμdxν',
  'ψ(x,t) = Ae^{i(kx−ωt)}',
];

const GOLDEN = 137.508; // golden angle in degrees

export function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {SYMBOLS.map((sym, i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute font-mono-code text-primary/[0.06] font-bold select-none"
          style={{
            fontSize: `${1.4 + (i % 4) * 0.7}rem`,
            left: `${(i * GOLDEN) % 100}%`,
            top: `${(i * 97.3) % 100}%`,
          }}
          animate={{
            y: [0, -18 - (i % 3) * 6, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 6 + i * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          {sym}
        </motion.span>
      ))}

      {EQUATIONS.map((eq, i) => (
        <motion.span
          key={`e-${i}`}
          className="absolute font-mono-code text-primary/[0.04] select-none whitespace-nowrap"
          style={{
            fontSize: `${0.75 + (i % 3) * 0.2}rem`,
            left: `${((i + 5) * GOLDEN) % 95}%`,
            top: `${((i + 3) * 71.7) % 90}%`,
          }}
          animate={{
            y: [0, -12 - (i % 2) * 8, 0],
            x: [0, (i % 2 === 0 ? 6 : -6), 0],
            opacity: [0.02, 0.07, 0.02],
          }}
          transition={{
            duration: 10 + i * 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        >
          {eq}
        </motion.span>
      ))}
    </div>
  );
}
