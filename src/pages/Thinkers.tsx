import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { ThinkerGallery } from '@/components/thinkers/ThinkerGallery';

import { useThinkerQuiz } from '@/hooks/useThinkerQuiz';
import { useQuizSession } from '@/hooks/useQuizSession';
import { useThinkerAchievements } from '@/hooks/useThinkerAchievements';
import { THINKERS } from '@/config/thinkers';
import { DEFAULT_DIFFICULTIES } from '@/config/constants';
import type { Difficulty } from '@/config/constants';
import { t } from '@/i18n';

type Screen = 'gallery' | 'quiz' | 'results';

export default function Thinkers() {
  const navigate = useNavigate();
  
  const [screen, setScreen] = useState<Screen>('gallery');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>(DEFAULT_DIFFICULTIES);

  const { state, questions, currentQuestion, startThinker, answer, nextQuestion, skipQuestion, endQuiz } =
    useThinkerQuiz(selectedDifficulties);

  const { achievedSlugs, awardIfPerfect } = useThinkerAchievements();

  const timeoutRef = useRef<(() => void) | null>(null);

  const handleTimeout = useCallback(() => {
    timeoutRef.current?.();
  }, []);

  const {
    timeLeft, fraction,
    resetTimer, resetSession,
    handleSessionUpdate,
  } = useQuizSession({
    difficulties: selectedDifficulties,
    isQuizActive: screen === 'quiz',
    quizState: state,
    sessionTag: 'thnk',
    topics: selectedSlug ? [selectedSlug] : [],
    onTimeout: handleTimeout,
  });

  const toggleDifficulty = useCallback((d: Difficulty) => {
    setSelectedDifficulties((prev) => {
      if (prev.includes(d)) {
        if (prev.length <= 1) return prev;
        return prev.filter((x) => x !== d);
      }
      return [...prev, d];
    });
  }, []);

  const handleStartThinker = useCallback(
    (slug: string) => {
      setSelectedSlug(slug);
      resetSession();
      startThinker(slug);
      setScreen('quiz');
    },
    [startThinker, resetSession],
  );

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
      // Award achievement on perfect score: ∀q ∈ Q, correct(q) ⟹ Q.E.D. ∎
      if (selectedSlug) {
        awardIfPerfect(selectedSlug, state.correctAnswered, state.totalAnswered, Math.round(state.score));
      }
      setScreen('results');
    }
  }, [state.isFinished, screen, selectedSlug, state.correctAnswered, state.totalAnswered, state.score, awardIfPerfect]);

  const thinkerMeta = selectedSlug ? THINKERS.find((th) => th.slug === selectedSlug) : null;

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader
        streak={state.streak}
        showStreak={screen === 'quiz'}
      />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto w-full">
        <AnimatePresence mode="wait">

          {screen === 'gallery' && (
            <ThinkerGallery
              selectedDifficulties={selectedDifficulties}
              onToggleDifficulty={toggleDifficulty}
              onStartThinker={handleStartThinker}
              onBack={() => navigate('/')}
              achievedSlugs={achievedSlugs}
            />
          )}

          {screen === 'quiz' && currentQuestion && (
            <div key="quiz">
              {thinkerMeta && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-card border border-border">
                  <span className="text-2xl">{thinkerMeta.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-foreground">{thinkerMeta.name}</p>
                    <p className="text-[10px] text-muted-foreground">{thinkerMeta.archetype} · {thinkerMeta.domain}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs font-mono font-bold text-foreground">{state.currentIndex + 1} / {questions.length}</p>
                    <p className="text-[10px] text-muted-foreground">{t('quiz.score')}: {Math.round(state.score)}</p>
                  </div>
                </motion.div>
              )}
              <QuizScreen
                question={currentQuestion}
                currentIndex={state.currentIndex}
                totalQuestions={questions.length}
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
            <QuizResults
              key="results"
              score={state.score}
              totalAnswered={state.totalAnswered}
              correctAnswered={state.correctAnswered}
              bestStreak={state.bestStreak}
              topicBreakdown={state.topicBreakdown}
              difficultyBreakdown={state.difficultyBreakdown}
              difficulties={selectedDifficulties}
              missedQuestions={state.missedQuestions}
              skippedQuestions={state.skippedQuestions}
              onRestart={() => setScreen('gallery')}
            />
          )}

        </AnimatePresence>
      </main>
      {screen === 'gallery' && <div className="relative z-10"><Footer /></div>}
    </div>
  );
}
