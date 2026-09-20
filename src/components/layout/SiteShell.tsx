import type { PropsWithChildren } from 'react';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { QuizHeader } from '@/components/QuizHeader';

interface SiteShellProps extends PropsWithChildren {
  streak?: number;
  showStreak?: boolean;
  showFooter?: boolean;
}

/**
 * Shared application chrome for top-level pages.
 *
 * Pages keep ownership of their own <main> layout, overlays, and state.
 * This shell only centralizes the global background/header/footer frame.
 */
export function SiteShell({
  children,
  streak = 0,
  showStreak = false,
  showFooter = true,
}: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader streak={streak} showStreak={showStreak} />
      {children}
      {showFooter && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}
    </div>
  );
}
