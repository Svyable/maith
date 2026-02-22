import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuizHeader } from '@/components/QuizHeader';
import { Footer } from '@/components/Footer';
import { FloatingBackground } from '@/components/FloatingBackground';
import { HomeScreen } from '@/components/HomeScreen';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuizSession } from '@/hooks/useQuizSession';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { type Difficulty, DEFAULT_DIFFICULTIES } from '@/config/constants';
import { FIELD_MAP } from '@/config/fields';
import { t } from '@/i18n';

type Screen = 'home' | 'quiz' | 'results';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState<string>('all');
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>(DEFAULT_DIFFICULTIES);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const { isDark, toggle: toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const { state, currentQuestion, answer, nextQuestion, skipQuestion, endQuiz, restartQuiz, totalQuestions } =
    useQuiz(selectedTopics, selectedDifficulties);

  // Ref to trigger timeout auto-answer from within QuizScreen
  const timeoutRef = useRef<(() => void) | null>(null);

  const handleTimeout = useCallback(() => {
    timeoutRef.current?.();
  }, []);

  const {
    sessionCorrect, sessionTotal,
    timeLeft, fraction,
    resetTimer, resetSession,
    handleSessionUpdate,
  } = useQuizSession({
    difficulties: selectedDifficulties,
    isQuizActive: screen === 'quiz',
    quizState: state,
    sessionTag: 'quiz',
    topics: selectedTopics,
    onTimeout: handleTimeout,
  });

  // Fetch display name
  useEffect(() => {
    if (!user) { setDisplayName(null); return; }
    supabase.from('profiles').select('display_name').eq('id', user.id).maybeSingle()
      .then(({ data }) => setDisplayName(data?.display_name ?? null));
  }, [user]);

  const handleNext = useCallback(() => {
    nextQuestion();
    resetTimer();
  }, [nextQuestion, resetTimer]);

  const handleSkip = useCallback(() => {
    skipQuestion();
    resetTimer();
  }, [skipQuestion, resetTimer]);

  const handleEndQuiz = useCallback(() => {
    endQuiz();
  }, [endQuiz]);

  useEffect(() => {
    if (state.isFinished && screen === 'quiz') {
      setScreen('results');
    }
  }, [state.isFinished, screen]);

  const startQuiz = useCallback(async () => {
    const effectiveTopics = selectedTopics.length > 0
      ? selectedTopics
      : selectedField !== 'all'
        ? (FIELD_MAP[selectedField]?.topics ?? [])
        : [];
    resetSession();
    setScreen('quiz');
    await restartQuiz(effectiveTopics, selectedDifficulties);
  }, [restartQuiz, selectedTopics, selectedField, selectedDifficulties, resetSession]);

  const toggleTopic = useCallback((topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }, []);

  const toggleDifficulty = useCallback((d: Difficulty) => {
    setSelectedDifficulties((prev) => {
      if (prev.includes(d)) {
        if (prev.length <= 1) return prev; // Must keep at least one
        return prev.filter((x) => x !== d);
      }
      return [...prev, d];
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader
        streak={state.streak}
        showStreak={screen === 'quiz'}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => setScreen('home')}
      />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {screen === 'home' && (
            <HomeScreen
              selectedTopics={selectedTopics}
              onToggleTopic={toggleTopic}
              selectedDifficulties={selectedDifficulties}
              onToggleDifficulty={toggleDifficulty}
              selectedField={selectedField}
              onSelectField={setSelectedField}
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
            <div className="max-w-lg mx-auto">
              <QuizScreen
                question={currentQuestion}
                currentIndex={state.currentIndex}
                totalQuestions={totalQuestions}
                score={state.score}
                difficulties={selectedDifficulties}
                streak={state.streak}
                timerFraction={fraction}
                timeLeft={timeLeft}
                onAnswer={answer}
                onNext={handleNext}
                onSkip={handleSkip}
                onEndQuiz={handleEndQuiz}
                onSessionUpdate={handleSessionUpdate}
                timeoutRef={timeoutRef}
              />
            </div>
          )}

          {screen === 'results' && (
            <div className="max-w-lg mx-auto">
              <QuizResults
                score={state.score}
                totalAnswered={state.totalAnswered}
                correctAnswered={state.correctAnswered}
                bestStreak={state.bestStreak}
                topicBreakdown={state.topicBreakdown}
                difficultyBreakdown={state.difficultyBreakdown}
                difficulties={selectedDifficulties}
                missedQuestions={state.missedQuestions}
                skippedQuestions={state.skippedQuestions}
                onRestart={startQuiz}
                onNewTopics={() => setScreen('home')}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      {screen === 'home' && <Footer />}
    </div>
  );
};

export default Index;
