import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { QuizHeader } from '@/components/QuizHeader';
import { HomeScreen } from '@/components/HomeScreen';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { useQuiz } from '@/hooks/useQuiz';
import { useTimer } from '@/hooks/useTimer';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { submitSession } from '@/domain/quiz';
import { supabase } from '@/integrations/supabase/client';
import { type Difficulty, getDifficultyMeta, DEFAULT_DIFFICULTY, CONTENT_VERSION } from '@/config/constants';
import { t } from '@/i18n';

type Screen = 'home' | 'quiz' | 'results';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DEFAULT_DIFFICULTY);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const { isDark, toggle: toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const { state, currentQuestion, answer, nextQuestion, skipQuestion, restartQuiz, totalQuestions } = useQuiz(selectedTopics, selectedDifficulty);

  const diffMeta = getDifficultyMeta(selectedDifficulty);

  // Fetch display name
  useEffect(() => {
    if (!user) { setDisplayName(null); return; }
    supabase.from('profiles').select('display_name').eq('id', user.id).maybeSingle()
      .then(({ data }) => setDisplayName(data?.display_name ?? null));
  }, [user]);

  // Submit session to DB when quiz finishes (guard with ref to prevent double-submit)
  const submittedRef = useRef(false);
  useEffect(() => {
    if (state.isFinished && screen === 'quiz' && user && !submittedRef.current) {
      submittedRef.current = true;
      submitSession(user.id, 'quiz', {
        topics: selectedTopics.length > 0 ? selectedTopics : Object.keys(state.topicBreakdown),
        difficulty: selectedDifficulty,
        score: state.score,
        totalAnswered: state.totalAnswered,
        correctAnswered: state.correctAnswered,
        bestStreak: state.bestStreak,
        topicBreakdown: state.topicBreakdown,
        contentVersion: CONTENT_VERSION,
      });
    }
    // Reset guard when starting a fresh quiz
    if (!state.isFinished) submittedRef.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isFinished, screen, user]);

  const handleTimeout = useCallback(() => {
    if (screen === 'quiz') {
      setSessionTotal((t) => t + 1);
    }
  }, [screen]);

  const { timeLeft, reset: resetTimer, fraction } = useTimer(diffMeta.timePerQuestion, handleTimeout, screen === 'quiz');

  const handleSessionUpdate = useCallback((correct: boolean) => {
    setSessionTotal((t) => t + 1);
    if (correct) {
      setSessionCorrect((c) => c + 1);
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 }, colors: ['#22d3ee', '#f59e0b', '#22c55e'] });
    }
  }, []);

  const handleNext = useCallback(() => {
    nextQuestion();
    resetTimer();
  }, [nextQuestion, resetTimer]);

  const handleSkip = useCallback(() => {
    skipQuestion();
    resetTimer();
  }, [skipQuestion, resetTimer]);

  useEffect(() => {
    if (state.isFinished && screen === 'quiz') {
      setScreen('results');
    }
  }, [state.isFinished, screen]);

  const startQuiz = useCallback(async () => {
    setSessionCorrect(0);
    setSessionTotal(0);
    resetTimer();
    setScreen('quiz');
    await restartQuiz(selectedTopics, selectedDifficulty);
  }, [restartQuiz, selectedTopics, selectedDifficulty, resetTimer]);

  const toggleTopic = useCallback((topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader
        streak={state.streak}
        showStreak={screen === 'quiz'}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => setScreen('home')}
      />

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          {screen === 'home' && (
            <HomeScreen
              selectedTopics={selectedTopics}
              onToggleTopic={toggleTopic}
              selectedDifficulty={selectedDifficulty}
              onSelectDifficulty={setSelectedDifficulty}
              onStart={startQuiz}
              displayName={displayName}
              onSignOut={user ? signOut : undefined}
            />
          )}

          {screen === 'quiz' && state.loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center space-y-3">
                <div className="text-4xl animate-bounce">🧠</div>
                <p className="text-muted-foreground">{t('quiz.loading')}</p>
              </div>
            </div>
          )}

          {screen === 'quiz' && !state.loading && currentQuestion && (
            <QuizScreen
              question={currentQuestion}
              currentIndex={state.currentIndex}
              totalQuestions={totalQuestions}
              score={state.score}
              difficulty={selectedDifficulty}
              streak={state.streak}
              timerFraction={fraction}
              timeLeft={timeLeft}
              onAnswer={answer}
              onNext={handleNext}
              onSkip={handleSkip}
              sessionCorrect={sessionCorrect}
              sessionTotal={sessionTotal}
              onSessionUpdate={handleSessionUpdate}
            />
          )}

          {screen === 'results' && (
            <QuizResults
              score={state.score}
              totalAnswered={state.totalAnswered}
              correctAnswered={state.correctAnswered}
              bestStreak={state.bestStreak}
              topicBreakdown={state.topicBreakdown}
              difficulty={selectedDifficulty}
              sessionCorrect={sessionCorrect}
              sessionTotal={sessionTotal}
              onRestart={() => setScreen('home')}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
