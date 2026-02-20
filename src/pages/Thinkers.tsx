import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { QuizHeader } from '@/components/QuizHeader';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { ThinkerCard } from '@/components/ThinkerCard';
import { DifficultyPicker } from '@/components/DifficultyPicker';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { useTimer } from '@/hooks/useTimer';
import { useThinkerQuiz } from '@/hooks/useThinkerQuiz';
import { THINKERS, ANCIENT_THINKERS, MODERN_THINKERS, CONTEMPORARY_THINKERS } from '@/config/thinkers';
import { getThinkerQuestions } from '@/content/thinkers';
import { submitSession } from '@/domain/quiz';
import { getDifficultyMeta, DEFAULT_DIFFICULTY, CONTENT_VERSION } from '@/config/constants';
import type { Difficulty } from '@/config/constants';
import { t } from '@/i18n';

type Screen = 'gallery' | 'quiz' | 'results';

export default function Thinkers() {
  const navigate = useNavigate();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { user } = useAuth();
  const [screen, setScreen] = useState<Screen>('gallery');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DEFAULT_DIFFICULTY);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const submittedRef = useRef(false);

  const { state, questions, currentQuestion, startThinker, answer, nextQuestion, skipQuestion } =
    useThinkerQuiz(selectedDifficulty);

  const diffMeta = getDifficultyMeta(selectedDifficulty);

  const handleTimeout = useCallback(() => {
    if (screen === 'quiz') setSessionTotal((p) => p + 1);
  }, [screen]);

  const { timeLeft, reset: resetTimer, fraction } = useTimer(
    diffMeta.timePerQuestion,
    handleTimeout,
    screen === 'quiz',
  );

  const handleStartThinker = useCallback(
    (slug: string) => {
      setSelectedSlug(slug);
      setSessionCorrect(0);
      setSessionTotal(0);
      submittedRef.current = false;
      startThinker(slug);
      resetTimer();
      setScreen('quiz');
    },
    [startThinker, resetTimer],
  );

  const handleSessionUpdate = useCallback((correct: boolean) => {
    setSessionTotal((p) => p + 1);
    if (correct) {
      setSessionCorrect((p) => p + 1);
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

  // Transition to results + submit session (single submission guard)
  useEffect(() => {
    if (state.isFinished && screen === 'quiz') {
      setScreen('results');
      if (user && selectedSlug && !submittedRef.current) {
        submittedRef.current = true;
        submitSession(user.id, 'thnk', {
          topics: [selectedSlug],
          difficulty: selectedDifficulty,
          score: state.score,
          totalAnswered: state.totalAnswered,
          correctAnswered: state.correctAnswered,
          bestStreak: state.bestStreak,
          topicBreakdown: state.topicBreakdown,
          contentVersion: CONTENT_VERSION,
        });
      }
    }
    if (!state.isFinished) submittedRef.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isFinished, screen]);

  const thinkerMeta = selectedSlug ? THINKERS.find((th) => th.slug === selectedSlug) : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader
        streak={state.streak}
        showStreak={screen === 'quiz'}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => { setScreen('gallery'); setSelectedSlug(null); }}
      />

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">

          {/* ── Gallery ── */}
          {screen === 'gallery' && (
            <motion.div key="gallery" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="space-y-5"
            >
              <div className="text-center space-y-2">
                <div className="text-5xl">🎓</div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Who&apos;s <span className="text-gradient-primary">Who</span>
                </h2>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Choose a legendary thinker. Master their domain. Prove you know the shoulders you stand on.
                </p>
              </div>

              {/* Difficulty picker for thinker mode */}
              <DifficultyPicker selected={selectedDifficulty} onSelect={setSelectedDifficulty} />

              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">⚔️ Ancient Minds</p>
                  <div className="space-y-3">
                    {ANCIENT_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={handleStartThinker} index={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">🚀 Modern Pioneers</p>
                  <div className="space-y-3">
                    {MODERN_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={handleStartThinker} index={i} />
                    ))}
                  </div>
                </div>
                {CONTEMPORARY_THINKERS.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">✨ Contemporary</p>
                    <div className="space-y-3">
                      {CONTEMPORARY_THINKERS.map((thinker, i) => (
                        <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={handleStartThinker} index={i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => navigate('/')}
                className="w-full py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                ← Back to Math Mastery
              </button>
              <div className="pb-6" />
            </motion.div>
          )}

          {/* ── Quiz ── */}
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
            </div>
          )}

          {/* ── Results ── */}
          {screen === 'results' && (
            <QuizResults
              key="results"
              score={state.score}
              totalAnswered={state.totalAnswered}
              correctAnswered={state.correctAnswered}
              bestStreak={state.bestStreak}
              topicBreakdown={state.topicBreakdown}
              difficulty={selectedDifficulty}
              sessionCorrect={sessionCorrect}
              sessionTotal={sessionTotal}
              onRestart={() => setScreen('gallery')}
            />
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
