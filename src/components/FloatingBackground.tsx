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

  // ALL 31+ EQUATIONS (your favorites!)
  "e^{iπ}+1=0", // Euler's Identity
  "a^2+b^2=c^2", // Pythagorean Theorem
  "x=\\frac{-b±√(b^2-4ac)}{2a}", // Quadratic Formula
  "P(A|B)=\\frac{P(B|A)P(A)}{P(B)}", // Bayes' Theorem
  "f(x)=\\frac{1}{σ√(2π)}e^{-\\frac{(x-μ)^2}{2σ^2}}", // Normal Distribution
  "\\hat{f}(ξ)=∫_{-∞}^∞ f(x)e^{-2πixξ} dx", // Fourier Transform
  "f(x)=∑_{n=0}^∞ \\frac{f^{(n)}(a)}{n!}(x-a)^n", // Taylor Series
  "A=UΣV^T", // SVD
  "θ←θ-η∇_θL(θ)", // Gradient Descent
  "E=mc^2", // Mass-Energy
  "ρ(∂_tv+(v·∇)v)=-∇p+μ∇^2v+f", // Navier-Stokes
  "V-E+F=2", // Euler Characteristic
  "∇f=λ∇g", // Lagrange Multipliers
  "Av=λv", // Eigenvalue Equation
  "∫_a^b f(x)dx=F(b)-F(a)", // Fundamental Theorem of Calculus
  "e^{iθ}=cosθ+isinθ", // Euler's Formula
  "ζ(s)=∑_{n=1}^∞ 1/n^s", // Riemann Zeta
  "|⟨u,v⟩|^2≤⟨u,u⟩⟨v,v⟩", // Cauchy-Schwarz
  "P(|\\bar{X}_n-μ|>ε)→0", // Law of Large Numbers
  "S=k_B lnΩ", // Boltzmann Entropy
  "∇·E=ρ/ε_0", // Gauss's Law
  "\\frac{d}{dx}∫f(x)dx=f(x)", // FTC derivative form
  "∑_{k=0}^n \\binom{n}{k} x^k y^{n-k}=(x+y)^n", // Binomial Theorem
  "n!≈√(2πn)(n/e)^n", // Stirling
  "γ=lim_{n→∞}(∑_{k=1}^n 1/k - ln n)", // Euler-Mascheroni
  "DKL(P||Q)=∑P(x)ln(P(x)/Q(x))", // KL Divergence
  "iℏ∂_tΨ=HΨ", // Schrödinger
  "∂^2u/∂t^2=c^2∇^2u", // Wave Equation
  "G_{μν}+Λg_{μν}=8πG/c^4 T_{μν}", // Einstein Field Equations

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

const MAX_SYMBOLS = 42; // The Answer ✨

export const FloatingBackground = memo(function FloatingBackground() {
  const [symbols, setSymbols] = useState<MathSymbol[]>([]);
  const lastScrollY = useRef(0);
  const symbolIdRef = useRef(0);
  const rafRef = useRef<number>();

  const spawnSymbol = useCallback(() => {
    const symbol = MATH_SYMBOL_LIBRARY[Math.floor(Math.random() * MATH_SYMBOL_LIBRARY.length)];

    // RANDOM FULL-SCREEN SPAWN
    const x = Math.random() * 100;
    const y = -8 + Math.random() * 3; // Just above top edge

    const newSymbol: MathSymbol = {
      id: symbolIdRef.current++,
      symbol,
      x,
      y,
      opacity: 0, // Fade in
      scale: 0.7 + Math.random() * 0.8, // BIGGER
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 0.3, // Gentle drift
      velocityY: 0.12 + Math.random() * 0.06, // Slow downward
      hue: 180 + Math.random() * 120, // Cool math palette
    };

    setSymbols((prev) => [...prev.slice(-(MAX_SYMBOLS - 1)), newSymbol]);
  }, []);

  // Scroll gently breathes life into background
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      // Gentle spawn (25% chance)
      if (Math.random() < 0.25) {
        spawnSymbol();
      }

      // Subtle brightness pulse
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

  // Ambient spawning for constant life
  useEffect(() => {
    const interval = setInterval(() => {
      if (symbols.length < MAX_SYMBOLS * 0.75) {
        spawnSymbol();
      }
    }, 1600); // Every 1.6s

    return () => clearInterval(interval);
  }, [spawnSymbol, symbols.length]);

  // Subtle drifting physics
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      setSymbols((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.velocityX * delta * 0.22,
            y: s.y + s.velocityY * delta * 0.22,
            // Breathing fade effect
            opacity: Math.max(0, s.opacity + (Math.random() - 0.49) * 0.006 * delta),
            rotation: s.rotation + 0.9 * delta,
            velocityY: s.velocityY + 0.0015 * delta,
            hue: (s.hue + 0.8 * delta) % 360,
          }))
          .filter((s) => s.opacity > 0.03 && s.y < 115),
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
