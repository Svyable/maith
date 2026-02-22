import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { QuizHeader } from '@/components/QuizHeader';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { ThinkerCard } from '@/components/ThinkerCard';
import { DifficultyPicker } from '@/components/DifficultyPicker';
import { useTheme } from '@/hooks/useTheme';
import { useThinkerQuiz } from '@/hooks/useThinkerQuiz';
import { useQuizSession } from '@/hooks/useQuizSession';
import { THINKERS, ANCIENT_THINKERS, MODERN_THINKERS, CONTEMPORARY_THINKERS } from '@/config/thinkers';
import { getThinkerQuestions } from '@/content/thinkers';
import { DEFAULT_DIFFICULTY } from '@/config/constants';
import type { Difficulty } from '@/config/constants';
import { t } from '@/i18n';

type Screen = 'gallery' | 'quiz' | 'results';

export default function Thinkers() {
  const navigate = useNavigate();
  const { isDark, toggle: toggleTheme } = useTheme();
  const [screen, setScreen] = useState<Screen>('gallery');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([DEFAULT_DIFFICULTY]);

  const { state, questions, currentQuestion, startThinker, answer, nextQuestion, skipQuestion, endQuiz } =
    useThinkerQuiz(selectedDifficulties);

  const {
    sessionCorrect, sessionTotal,
    timeLeft, fraction,
    resetTimer, resetSession,
    handleSessionUpdate,
  } = useQuizSession({
    difficulties: selectedDifficulties,
    currentQuestionDifficulty: currentQuestion ? currentQuestion.difficulty : undefined,
    isQuizActive: screen === 'quiz',
    quizState: state,
    sessionTag: 'thnk',
    topics: selectedSlug ? [selectedSlug] : [],
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

  // Transition to results
  useEffect(() => {
    if (state.isFinished && screen === 'quiz') {
      setScreen('results');
    }
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
                  {t('thinkers.gallerySubtitle')}
                </p>
              </div>

              <DifficultyPicker selected={selectedDifficulties} onToggle={toggleDifficulty} />

              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">{t('thinkers.ancientMinds')}</p>
                  <div className="space-y-3">
                    {ANCIENT_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={handleStartThinker} index={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">{t('thinkers.modernPioneers')}</p>
                  <div className="space-y-3">
                    {MODERN_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={handleStartThinker} index={i} />
                    ))}
                  </div>
                </div>
                {CONTEMPORARY_THINKERS.length > 0 && (
                  <div>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">{t('thinkers.contemporary')}</p>
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
                {t('thinkers.backToHome')}
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
                difficulties={selectedDifficulties}
                streak={state.streak}
                timerFraction={fraction}
                timeLeft={timeLeft}
                onAnswer={answer}
                onNext={handleNext}
                onSkip={handleSkip}
                onEndQuiz={handleEndQuiz}
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
              difficultyBreakdown={state.difficultyBreakdown}
              difficulties={selectedDifficulties}
              missedQuestions={state.missedQuestions}
              skippedQuestions={state.skippedQuestions}
              onRestart={() => setScreen('gallery')}
            />
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
