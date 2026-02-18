import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { QuizHeader } from '@/components/QuizHeader';
import { QuizScreen } from '@/components/QuizScreen';
import { QuizResults } from '@/components/QuizResults';
import { ThinkerCard } from '@/components/ThinkerCard';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import { useTimer } from '@/hooks/useTimer';
import { THINKERS, ANCIENT_THINKERS, MODERN_THINKERS } from '@/config/thinkers';
import { getThinkerQuestions, allThinkerQuestions } from '@/content/thinkers';

import { supabase } from '@/integrations/supabase/client';
import { getDifficultyMeta, CONTENT_VERSION } from '@/config/constants';
import type { Difficulty } from '@/config/constants';
import type { PublicQuestion, CheckResult } from '@/hooks/useQuiz';
import { calculatePoints } from '@/domain/scoring';
import { t } from '@/i18n';

type Screen = 'gallery' | 'quiz' | 'results';

interface ThinkerQuizState {
  currentIndex: number;
  score: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  correctAnswered: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
  isFinished: boolean;
  questions: PublicQuestion[];
  lastCheckResult: CheckResult | null;
}

const DIFFICULTY: Difficulty = 'ADVN';
const diffMeta = getDifficultyMeta(DIFFICULTY);

function stripQuestion(q: ReturnType<typeof getThinkerQuestions>[number]): PublicQuestion {
  const { correctIndex: _c, explanation: _e, realWorld: _r, ...pub } = q;
  return pub;
}

function localCheck(questionId: number, selectedIndex: number): CheckResult | null {
  const q = allThinkerQuestions.find((x) => x.id === questionId);
  if (!q) return null;
  return {
    correct: selectedIndex === q.correctIndex,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    realWorld: q.realWorld,
  };
}

export default function Thinkers() {
  const navigate = useNavigate();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { user } = useAuth();
  const [screen, setScreen] = useState<Screen>('gallery');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  const [quizState, setQuizState] = useState<ThinkerQuizState>({
    currentIndex: 0, score: 0, streak: 0, bestStreak: 0,
    totalAnswered: 0, correctAnswered: 0, topicBreakdown: {},
    isFinished: false, questions: [], lastCheckResult: null,
  });

  const currentQuestion = quizState.questions[quizState.currentIndex] ?? null;

  const handleTimeout = useCallback(() => {
    if (screen === 'quiz') setSessionTotal((p) => p + 1);
  }, [screen]);

  const { timeLeft, reset: resetTimer, fraction } = useTimer(diffMeta.timePerQuestion, handleTimeout, screen === 'quiz');

  const startThinker = useCallback((slug: string) => {
    const rawQs = getThinkerQuestions(slug);
    const shuffled = [...rawQs].sort(() => Math.random() - 0.5);
    const questions = shuffled.map(stripQuestion);
    setSelectedSlug(slug);
    setSessionCorrect(0);
    setSessionTotal(0);
    setQuizState({
      currentIndex: 0, score: 0, streak: 0, bestStreak: 0,
      totalAnswered: 0, correctAnswered: 0, topicBreakdown: {},
      isFinished: false, questions, lastCheckResult: null,
    });
    resetTimer();
    setScreen('quiz');
  }, [resetTimer]);

  const answer = useCallback(async (optionIndex: number): Promise<CheckResult | null> => {
    if (!currentQuestion) return null;
    const result = localCheck(currentQuestion.id, optionIndex);
    if (!result) return null;

    setQuizState((prev) => {
      const newStreak = result.correct ? prev.streak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      const points = result.correct ? calculatePoints(DIFFICULTY, currentQuestion.difficulty, newStreak) : 0;
      const topicBreakdown = { ...prev.topicBreakdown };
      const existing = topicBreakdown[currentQuestion.topic] || { correct: 0, total: 0 };
      topicBreakdown[currentQuestion.topic] = {
        correct: existing.correct + (result.correct ? 1 : 0),
        total: existing.total + 1,
      };
      return {
        ...prev, score: prev.score + points, streak: newStreak, bestStreak: newBestStreak,
        totalAnswered: prev.totalAnswered + 1,
        correctAnswered: prev.correctAnswered + (result.correct ? 1 : 0),
        topicBreakdown, lastCheckResult: result,
      };
    });
    return result;
  }, [currentQuestion]);

  const handleSessionUpdate = useCallback((correct: boolean) => {
    setSessionTotal((p) => p + 1);
    if (correct) {
      setSessionCorrect((p) => p + 1);
      confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 }, colors: ['#22d3ee', '#f59e0b', '#22c55e'] });
    }
  }, []);

  const nextQuestion = useCallback(() => {
    setQuizState((prev) => {
      if (prev.currentIndex >= prev.questions.length - 1) {
        return { ...prev, isFinished: true, lastCheckResult: null };
      }
      return { ...prev, currentIndex: prev.currentIndex + 1, lastCheckResult: null };
    });
    resetTimer();
  }, [resetTimer]);

  const skipQuestion = useCallback(() => {
    setQuizState((prev) => ({ ...prev, streak: 0 }));
    nextQuestion();
  }, [nextQuestion]);

  // Transition to results + submit session
  useEffect(() => {
    if (quizState.isFinished && screen === 'quiz') {
      setScreen('results');
      if (user && selectedSlug) {
        const clientSessionId = `thnk-${user.id}-${Date.now()}`;
        supabase.rpc('submit_quiz_session', {
          p_client_session_id: clientSessionId,
          p_topics: [selectedSlug],
          p_difficulty: DIFFICULTY,
          p_score: Math.round(quizState.score),
          p_total_answered: quizState.totalAnswered,
          p_correct_answered: quizState.correctAnswered,
          p_best_streak: quizState.bestStreak,
          p_topic_breakdown: quizState.topicBreakdown,
          p_content_version: CONTENT_VERSION,
        });
      }
    }
  }, [quizState.isFinished, screen]);

  const thinkerMeta = selectedSlug ? THINKERS.find((t) => t.slug === selectedSlug) : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader
        streak={quizState.streak}
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

              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">⚔️ Ancient Minds</p>
                  <div className="space-y-3">
                    {ANCIENT_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={startThinker} index={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">🚀 Modern Pioneers</p>
                  <div className="space-y-3">
                    {MODERN_THINKERS.map((thinker, i) => (
                      <ThinkerCard key={thinker.slug} thinker={thinker} questionCount={getThinkerQuestions(thinker.slug).length} onSelect={startThinker} index={i} />
                    ))}
                  </div>
                </div>
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
                    <p className="text-xs font-mono font-bold text-foreground">{quizState.currentIndex + 1} / {quizState.questions.length}</p>
                    <p className="text-[10px] text-muted-foreground">{t('quiz.score')}: {Math.round(quizState.score)}</p>
                  </div>
                </motion.div>
              )}
              <QuizScreen
                question={currentQuestion}
                currentIndex={quizState.currentIndex}
                totalQuestions={quizState.questions.length}
                score={quizState.score}
                difficulty={DIFFICULTY}
                streak={quizState.streak}
                timerFraction={fraction}
                timeLeft={timeLeft}
                onAnswer={answer}
                onNext={nextQuestion}
                onSkip={skipQuestion}
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
              score={quizState.score}
              totalAnswered={quizState.totalAnswered}
              correctAnswered={quizState.correctAnswered}
              bestStreak={quizState.bestStreak}
              topicBreakdown={quizState.topicBreakdown}
              difficulty={DIFFICULTY}
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
