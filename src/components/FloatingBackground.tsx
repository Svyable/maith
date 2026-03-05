import { useEffect, useRef, useState, useCallback, memo } from "react";

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
  // Greek Letters
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
  "π",
  "ρ",
  "σ",
  "τ",
  "υ",
  "φ",
  "χ",
  "ψ",
  "ω",
  "Γ",
  "Δ",
  "Θ",
  "Λ",
  "Ξ",
  "Π",
  "Σ",
  "Φ",
  "Ψ",
  "Ω",

  // Math Operators
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
  "∪",
  "∩",
  "⊂",
  "√",
  "ℕ",
  "ℤ",
  "ℚ",
  "ℝ",
  "ℂ",
  "±",

  // ALL 31+ EQUATIONS
  "e^{iπ}+1=0",
  "a^2+b^2=c^2",
  "x=\\frac{-b±√(b^2-4ac)}{2a}",
  "P(A|B)=\\frac{P(B|A)P(A)}{P(B)}",
  "f(x)=\\frac{1}{σ√(2π)}e^{-\\frac{(x-μ)^2}{2σ^2}}",
  "\\hat{f}(ξ)=∫_{-∞}^∞ f(x)e^{-2πixξ} dx",
  "f(x)=∑_{n=0}^∞ \\frac{f^{(n)}(a)}{n!}(x-a)^n",
  "A=UΣV^T",
  "θ←θ-η∇_θL(θ)",
  "E=mc^2",
  "ρ(∂_tv+(v·∇)v)=-∇p+μ∇^2v+f",
  "V-E+F=2",
  "∇f=λ∇g",
  "Av=λv",
  "∫_a^b f(x)dx=F(b)-F(a)",
  "e^{iθ}=cosθ+isinθ",
  "ζ(s)=∑_{n=1}^∞ 1/n^s",
  "|⟨u,v⟩|^2≤⟨u,u⟩⟨v,v⟩",
  "P(|\\bar{X}_n-μ|>ε)→0",
  "S=k_B lnΩ",
  "∇·E=ρ/ε_0",
  "\\frac{d}{dx}∫f(x)dx=f(x)",
  "∑_{k=0}^n \\binom{n}{k} x^k y^{n-k}=(x+y)^n",
  "n!≈√(2πn)(n/e)^n",
  "γ=lim_{n→∞}(∑_{k=1}^n 1/k - ln n)",
  "DKL(P||Q)=∑P(x)ln(P(x)/Q(x))",
  "iℏ∂_tΨ=HΨ",
  "∂^2u/∂t^2=c^2∇^2u",
  "G_{μν}+Λg_{μν}=8πG/c^4 T_{μν}",

  // Analysis & CS
  "𝒪",
  "Θ",
  "Ω",
  "lim",
  "det",
  "tr",
  "dim",
  "ker",

  // LaTeX Special
  "\\\\\\\\",
  "$",
  "{",
  "}",
];

const MAX_SYMBOLS = 42;

export const FloatingBackground = memo(function FloatingBackground() {
  const [symbols, setSymbols] = useState<MathSymbol[]>([]);
  const lastScrollY = useRef(0);
  const symbolIdRef = useRef(0);
  const rafRef = useRef<number>();

  const spawnSymbol = useCallback(() => {
    const symbol = MATH_SYMBOL_LIBRARY[Math.floor(Math.random() * MATH_SYMBOL_LIBRARY.length)];

    // SPAWN FROM ALL 4 EDGES (random screen entry)
    const edge = Math.floor(Math.random() * 4);
    let x, y;

    switch (edge) {
      case 0: // Top edge
        x = Math.random() * 100;
        y = -8;
        break;
      case 1: // Right edge
        x = 105;
        y = Math.random() * 100;
        break;
      case 2: // Bottom edge
        x = Math.random() * 100;
        y = 108;
        break;
      case 3: // Left edge
        x = -8;
        y = Math.random() * 100;
        break;
    }

    const newSymbol: MathSymbol = {
      id: symbolIdRef.current++,
      symbol,
      x,
      y,
      opacity: 0, // Fade in effect
      scale: 0.7 + Math.random() * 0.8, // BIGGER symbols
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 0.28, // Gentle inward drift
      velocityY: (Math.random() - 0.5) * 0.28,
      hue: 180 + Math.random() * 120, // Cool math palette
    };

    setSymbols((prev) => [...prev.slice(-(MAX_SYMBOLS - 1)), newSymbol]);
  }, []);

  // Scroll gently breathes life (subtle activation)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      // Gentle spawn (25% chance per scroll)
      if (Math.random() < 0.25) {
        spawnSymbol();
      }

      // Subtle brightness pulse on scroll
      setSymbols((prev) =>
        prev.map((s) => ({
          ...s,
          opacity: Math.min(0.7, s.opacity + (Math.random() - 0.45) * 0.08),
        })),
      );

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {}, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [spawnSymbol]);

  // Ambient spawning (constant background life)
  useEffect(() => {
    const interval = setInterval(() => {
      if (symbols.length < MAX_SYMBOLS * 0.75) {
        spawnSymbol();
      }
    }, 1600); // Every 1.6 seconds

    return () => clearInterval(interval);
  }, [spawnSymbol, symbols.length]);

  // Subtle drifting physics with breathing effect
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      setSymbols((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.velocityX * delta * 0.22, // Ultra-subtle movement
            y: s.y + s.velocityY * delta * 0.22,
            // Breathing fade-in/out effect
            opacity: Math.max(0, s.opacity + (Math.random() - 0.49) * 0.006 * delta),
            rotation: s.rotation + 0.9 * delta,
            velocityY: s.velocityY + 0.0015 * delta,
            hue: (s.hue + 0.8 * delta) % 360,
          }))
          .filter((s) => s.opacity > 0.03 && s.x > -10 && s.x < 110 && s.y < 115),
      );

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
      {symbols.map((s) => (
        <span
          key={s.id}
          className="absolute font-mono-code font-semibold select-none will-change-transform whitespace-nowrap"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            transform: `translate(-50%, -50%) scale(${s.scale}) rotate(${s.rotation}deg)`,
            color: `hsla(${s.hue}, 65%, 68%, ${s.opacity})`,
            fontSize: `${1.0 + s.scale * 0.7}rem`,
            textShadow: `0 0 7px hsla(${s.hue}, 75%, 55%, ${s.opacity * 0.4})`,
            lineHeight: 1.1,
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
});
