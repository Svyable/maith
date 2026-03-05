import { useEffect, useRef, useState, useCallback, memo } from 'react';

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
  'α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','π','ρ','σ','τ','υ','φ','χ','ψ','ω',
  'Γ','Δ','Θ','Λ','Ξ','Π','Σ','Φ','Ψ','Ω',
  // Math Operators
  '∑','∫','∬','∮','∇','∂','∆','∞','∅','∈','∉','∪','∩','⊂','⊃','≅','≈','≠','≤','≥',
  // Analysis & CS
  '𝒪','lim','det','tr','dim','ker',
  // LaTeX Special
  '\\','$','{','}',
  // Numbers & Relations
  'ℕ','ℤ','ℚ','ℝ','ℂ','±','×','÷','√','∛',
];

const MAX_SYMBOLS = 40;

export const FloatingBackground = memo(function FloatingBackground() {
  const [symbols, setSymbols] = useState<MathSymbol[]>([]);
  const lastScrollY = useRef(0);
  const symbolIdRef = useRef(0);
  const rafRef = useRef<number>();

  const spawnSymbol = useCallback(() => {
    const symbol = MATH_SYMBOL_LIBRARY[Math.floor(Math.random() * MATH_SYMBOL_LIBRARY.length)];
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 2.8;

    const newSymbol: MathSymbol = {
      id: symbolIdRef.current++,
      symbol,
      x: 45 + Math.random() * 10,
      y: 2 + Math.random() * 4, // spawn near top (header area)
      opacity: 1,
      scale: 0.5 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      velocityX: Math.cos(angle) * speed,
      velocityY: Math.sin(angle) * speed + 0.8, // bias downward
      hue: Math.random() * 360,
    };

    setSymbols((prev) => [...prev.slice(-(MAX_SYMBOLS - 1)), newSymbol]);
  }, []);

  // Scroll triggers particles
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      if (scrollDelta > 10) {
        spawnSymbol();
        lastScrollY.current = currentScrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [spawnSymbol]);

  // Physics animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 16.67;
      lastTime = time;

      setSymbols((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.velocityX * delta * 0.4,
            y: s.y + s.velocityY * delta * 0.4,
            opacity: s.opacity - 0.006 * delta,
            rotation: s.rotation + 2 * delta,
            velocityY: s.velocityY + 0.02 * delta, // gravity
            hue: (s.hue + 2.5 * delta) % 360,
          }))
          .filter((s) => s.opacity > 0)
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[1]"
      aria-hidden
    >
      {symbols.map((s) => (
        <span
          key={s.id}
          className="absolute font-mono-code font-bold select-none will-change-transform"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            transform: `scale(${s.scale}) rotate(${s.rotation}deg)`,
            color: `hsla(${s.hue}, 70%, 60%, ${s.opacity * 0.7})`,
            fontSize: `${0.8 + s.scale * 0.6}rem`,
            textShadow: `0 0 6px hsla(${s.hue}, 80%, 50%, ${s.opacity * 0.4})`,
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
});
