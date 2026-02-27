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
      />
      <main className="relative flex-1 py-6 w-full mx-auto">
        <GlossaryScreen />
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  );
}
