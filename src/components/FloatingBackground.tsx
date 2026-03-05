import { useEffect, useRef, useState, useCallback, memo } from "react";

interface MathSymbol {
  id: number;
  symbol: string;
  type: "single" | "equation";
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  hue: number;
}

const SINGLE_SYMBOLS = [
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "θ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "π",
  "ρ",
  "σ",
  "τ",
  "φ",
  "χ",
  "ψ",
  "ω",
  "Γ",
  "Δ",
  "Θ",
  "Λ",
  "Π",
  "Σ",
  "Φ",
  "Ψ",
  "Ω",
  "∑",
  "∫",
  "∇",
  "∞",
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
];

const EQUATIONS = [
  // Euler's Identity
  "e^{iπ}+1=0",
  // Pythagorean Theorem
  "a^2+b^2=c^2",
  // Quadratic Formula
  "x=\\frac{-b±√(b^2-4ac)}{2a}",
  // Bayes' Theorem
  "P(A|B)=\\frac{P(B|A)P(A)}{P(B)}",
  // Normal Distribution
  "f(x)=\\frac{1}{σ√(2π)}e^{-\\frac{(x-μ)^2}{2σ^2}}",
  // Fourier Transform
  "\\hat{f}(ξ)=∫_{-∞}^∞ f(x)e^{-2πixξ} dx",
  // Taylor Series
  "f(x)=∑_{n=0}^∞ \\frac{f^{(n)}(a)}{n!}(x-a)^n",
  // SVD
  "A=UΣV^T",
  // Gradient Descent
  "θ←θ-η∇_θL(θ)",
  // E=mc²
  "E=mc^2",
  // Navier-Stokes
  "ρ(∂_tv+(v·∇)v)=-∇p+μ∇^2v+f",
];

const MAX_SYMBOLS = 20;
const SCROLL_THRESHOLD = 50;

export const FloatingBackground = memo(function FloatingBackground() {
  const [symbols, setSymbols] = useState<MathSymbol[]>([]);
  const lastScrollY = useRef(0);
  const symbolIdRef = useRef(0);
  const rafRef = useRef<number>();

  const spawnSymbol = useCallback(() => {
    const isEquation = Math.random() < 0.35; // 35% chance of equation

    const symbol = isEquation
      ? EQUATIONS[Math.floor(Math.random() * EQUATIONS.length)]
      : SINGLE_SYMBOLS[Math.floor(Math.random() * SINGLE_SYMBOLS.length)];

    const spawnX = 25 + Math.random() * 50; // Wider spawn area
    const spawnY = 5 + Math.random() * 5; // Top of screen

    const newSymbol: MathSymbol = {
      id: symbolIdRef.current++,
      symbol,
      type: isEquation ? "equation" : "single",
      x: spawnX,
      y: spawnY,
      opacity: 1,
      scale: isEquation ? 0.8 + Math.random() * 0.4 : 1.0 + Math.random() * 0.4,
      rotation: (Math.random() - 0.5) * 10,
      velocityX: (Math.random() - 0.5) * 0.12,
      velocityY: 0.15 + Math.random() * 0.08,
      hue: 200 + Math.random() * 50, // Cool math blues
    };

    setSymbols((prev) => [...prev.slice(-(MAX_SYMBOLS - 1)), newSymbol]);
  }, []);

  // Gentle scroll spawning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      if (scrollDelta > SCROLL_THRESHOLD) {
        spawnSymbol();
        lastScrollY.current = currentScrollY;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [spawnSymbol]);

  // Continuous gentle spawning (background effect)
  useEffect(() => {
    const interval = setInterval(() => {
      if (symbols.length < MAX_SYMBOLS * 0.7) {
        spawnSymbol();
      }
    }, 2000); // Every 2 seconds

    return () => clearInterval(interval);
  }, [spawnSymbol, symbols.length]);

  // Smooth physics
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      setSymbols((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.velocityX * delta,
            y: s.y + s.velocityY * delta,
            opacity: Math.max(0, s.opacity - 0.0018 * delta),
            rotation: s.rotation + 0.08 * delta,
            velocityY: s.velocityY + 0.0008 * delta,
          }))
          .filter((s) => s.opacity > 0 && s.y < 115),
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
            color: `hsla(${s.hue}, 55%, 70%, ${s.opacity})`,
            fontSize: s.type === "equation" ? `${1.6 + s.scale * 0.8}rem` : `${1.3 + s.scale * 0.5}rem`,
            textShadow: `0 0 12px hsla(${s.hue}, 60%, 50%, ${s.opacity * 0.3})`,
            lineHeight: 1.1,
          }}
        >
          {/* Render LaTeX-style equations with better spacing */}
          {s.symbol.includes("\\") ? (
            <span dangerouslySetInnerHTML={{ __html: s.symbol.replace(/\\\\/g, "\\") }} />
          ) : (
            s.symbol
          )}
        </span>
      ))}
    </div>
  );
});
