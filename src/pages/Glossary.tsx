import { QuizHeader } from '@/components/QuizHeader';
import { GlossaryScreen } from '@/components/glossary/GlossaryScreen';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { useNavigate } from 'react-router-dom';

export default function Glossary() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader
        streak={0}
        showStreak={false}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => navigate('/')}
      />
      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto w-full">
        <GlossaryScreen />
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
