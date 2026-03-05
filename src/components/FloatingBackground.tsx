import { useEffect, useRef, useState, useCallback, memo } from "react";
import { ArrowRightIcon } from "lucide-react";
import brandName from "@/assets/maith-brandname.png";

interface MathSymbol {
  id: number;
  symbol: string;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  hue: number;
}

const MATH_SYMBOL_LIBRARY = [
  // 🔥 GREEK LETTERS (rainbow explosion!)
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ζ",
  "η",
  "θ",
  "ι",
  "κ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "ο",
  "π",
  "ρ",
  "σ",
  "τ",
  "υ",
  "φ",
  "χ",
  "ψ",
  "ω",
  "Α",
  "Β",
  "Γ",
  "Δ",
  "Ε",
  "Ζ",
  "Η",
  "Θ",
  "Ι",
  "Κ",
  "Λ",
  "Μ",
  "Ν",
  "Ο",
  "Π",
  "Ρ",
  "Σ",
  "Τ",
  "Υ",
  "Φ",
  "Χ",
  "Ψ",
  "Ω",

  // 🎨 OPERATORS (neon pop!)
  "∑",
  "∫",
  "∬",
  "∮",
  "∇",
  "∂",
  "∆",
  "∞",
  "∅",
  "∈",
  "∉",
  "∪",
  "∩",
  "⊂",
  "⊃",
  "≅",
  "≈",
  "≠",
  "≤",
  "≥",
  "±",
  "×",
  "÷",

  // ✨ CS/MATH MIX (qntlab energy)
  "𝒪",
  "Θ",
  "Ω",
  "lim",
  "det",
  "tr",
  "dim",
  "ker",
  "argmin",
  "max",
  "min",

  // 💎 EQUATION SNIPPETS (fun!)
  "e^{iπ}",
  "a^2+b^2",
  "P(A|B)",
  "∇f=λ∇g",
  "Av=λv",
  "E=mc^2",

  // 🎪 WILD CARDS (chaos!)
  "$",
  "\\",
  "{",
  "}",
  "def",
  "λ",
  "→",
  "⟹",
  "∀",
  "∃",
  "ℕ",
  "ℝ",
];

export const MaithAnimatedLogo = memo(function MaithAnimatedLogo() {
  const [symbols, setSymbols] = useState<MathSymbol[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const symbolIdRef = useRef(0);
  const rafRef = useRef<number>();

  const spawnSymbol = useCallback(() => {
    const symbol = MATH_SYMBOL_LIBRARY[Math.floor(Math.random() * MATH_SYMBOL_LIBRARY.length)];
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.4 + Math.random() * 2.8; // MORE ENERGY!

    const newSymbol: MathSymbol = {
      id: symbolIdRef.current++,
      symbol,
      x: 48 + (Math.random() - 0.5) * 12, // Tight center burst
      y: 42 + (Math.random() - 0.5) * 18,
      opacity: 1,
      scale: 0.5 + Math.random() * 0.8, // BIGGER range
      rotation: Math.random() * 360,
      velocityX: Math.cos(angle) * speed * 1.2,
      velocityY: Math.sin(angle) * speed * 0.9 - 0.3,
      hue: Math.random() * 360,
    };

    setSymbols((prev) => [...prev.slice(-42), newSymbol]); // MORE SYMBOLS!
  }, []);

  // SCROLL EXPLOSION (faster response)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      if (scrollDelta > 12) {
        // FASTER trigger
        spawnSymbol();
        lastScrollY.current = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [spawnSymbol]);

  // HOVER EXPLOSION (DOUBLE BURST!)
  const handleMouseEnter = useCallback(() => {
    for (let i = 0; i < 8; i++) {
      // MORE!
      setTimeout(() => spawnSymbol(), i * 35);
    }
  }, [spawnSymbol]);

  // CHAOTIC PHYSICS (qntlab DNA)
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      setSymbols((prev) => {
        if (prev.length === 0) return prev;

        return prev
          .map((s) => ({
            ...s,
            x: s.x + s.velocityX * delta * 0.45,
            y: s.y + s.velocityY * delta * 0.45,
            opacity: s.opacity - 0.0075 * delta, // Slightly faster fade
            rotation: s.rotation + 2.2 * delta, // SPINNING!
            velocityY: s.velocityY + 0.018 * delta, // GRAVITY!
            hue: (s.hue + 3.8 * delta) % 360, // RAINBOW CYCLE!
          }))
          .filter((s) => s.opacity > 0.02);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      {/* NEON PARTICLE EXPLOSION */}
      <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
        {symbols.map((s) => (
          <span
            key={s.id}
            className="absolute font-mono font-black select-none will-change-transform tracking-tight"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              opacity: s.opacity,
              transform: `translate(-50%, -50%) scale(${s.scale}) rotate(${s.rotation}deg)`,
              fontSize: `${0.85 + s.scale * 1.1}rem`, // BIGGER!
              color: `hsl(${s.hue}, 92%, 65%)`, // NEON POP!
              textShadow: `
                0 0 8px hsl(${s.hue}, 92%, 55% / 0.8),
                0 0 16px hsl(${s.hue}, 92%, 45% / 0.6),
                0 0 24px hsl(${s.hue}, 92%, 35% / 0.4)
              `,
              whiteSpace: "nowrap",
              filter: `drop-shadow(0 0 4px hsl(${s.hue}, 92%, 50% / 0.5))`,
            }}
          >
            {s.symbol}
          </span>
        ))}
      </div>

      {/* MAITH LOGO - HYPER REACTIVE */}
      <ArrowRightIcon
        className="h-11 sm:h-13 md:h-15 w-auto relative z-10 transition-all duration-600 
                   group-hover:scale-120 group-hover:rotate-[-15deg] 
                   drop-shadow-2xl animate-pulse-slow"
        style={{
          filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.6))",
        }}
      />

      <img
        src={brandName}
        alt="maith"
        className="h-9 sm:h-11 md:h-12 w-auto relative z-10 -ml-3 sm:-ml-4 
                   transition-all duration-600 
                   group-hover:translate-x-2 group-hover:scale-105
                   drop-shadow-2xl bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-1"
      />
    </div>
  );
});
