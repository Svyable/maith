// Type declarations for canvas-confetti
// See: https://www.npmjs.com/package/canvas-confetti

declare module 'canvas-confetti' {
  export interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    scalar?: number;
    drift?: number;
    ticks?: number;
    origin?: {
      x?: number;
      y?: number;
    };
    colors?: string[];
    shapes?: Array<'square' | 'circle'>;
    disableForReducedMotion?: boolean;
    disableForReducedMotionOverride?: boolean;
    disableForReducedMotionForce?: boolean;
  }

  export default function confetti(options?: ConfettiOptions): void;
}
