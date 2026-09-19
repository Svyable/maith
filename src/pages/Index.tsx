import { useState, useCallback, useEffect, useRef, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SiteShell } from '@/components/layout/SiteShell';
import { HomeScreen } from '@/components/HomeScreen';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuizSession } from '@/hooks/useQuizSession';

import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { type Difficulty, DEFAULT_DIFFICULTIES, TOPIC_MAP } from '@/config/constants';
import { resolveTopicSlug } from '@/config/content-registry';
import { QUIZ_FIELD_MAP } from '@/config/fields';
import { resolveQuizTopics } from '@/domain/quiz';
import { t } from '@/i18n';
import { Button } from '@/components/ui/button';

type Screen = 'home' | 'quiz' | 'results';

const QuizScreen = lazy(() => import('@/components/QuizScreen').then((module) => ({ default: module.QuizScreen })));
const QuizResults = lazy(() => import('@/components/QuizResults').then((module) => ({ default: module.QuizResults })));

function isStandardField(slug: string | null): slug is string {
  if (!slug) return false;
  return Boolean(QUIZ_FIELD_MAP[slug]);
}

const Index = () => {
  const [searchParams] = useSearchParams();
  const requestedTopic = searchParams.get('topic');
  const requestedField = searchParams.get('field');
  const canonicalRequestedTopic = requestedTopic ? resolveTopicSlug(requestedTopic) : null;
  const validRequestedTopic = canonicalRequestedTopic && TOPIC_MAP[canonicalRequestedTopic]
    ? canonicalRequestedTopic
    : null;
  const initialField = validRequestedTopic
    ? TOPIC_MAP[validRequestedTopic].field
    : isStandardField(requestedField)
      ? requestedField
      : 'all';

  const [screen, setScreen] = useState<Screen>('home');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(() => validRequestedTopic ? [validRequestedTopic] : []);
  const [selectedField, setSelectedField] = useState<string>(initialField);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>(DEFAULT_DIFFICULTIES);
  
  const { user, signOut } = useAuth();
  const { profile } = useProfile();

  const { state, currentQuestion, answer, eliminateOptions, nextQuestion, skipQuestion, endQuiz, restartQuiz, practiceUnresolved, totalQuestions } =
    useQuiz(selectedTopics, selectedDifficulties);

  // Ref to trigger timeout auto-answer from within QuizScreen
  const timeoutRef = useRef<(() => void) | null>(null);

  const handleTimeout = useCallback(() => {
    timeoutRef.current?.();
  }, []);

  const currentQuestionResolved = currentQuestion
    ? state.answeredIds.includes(currentQuestion.id)
    : false;

  const {
    timeLeft, fraction,
    resetTimer, resetSession,
    handleSessionUpdate,
  } = useQuizSession({
    difficulties: selectedDifficulties,
    isQuizActive: screen === 'quiz' && !currentQuestionResolved,
    quizState: state,
    sessionTag: 'quiz',
    topics: selectedTopics,
    onTimeout: handleTimeout,
  });

  useEffect(() => {
    if (validRequestedTopic) {
      setSelectedTopics([validRequestedTopic]);
      setSelectedField(TOPIC_MAP[validRequestedTopic].field);
      setScreen('home');
      return;
    }

    if (isStandardField(requestedField)) {
      setSelectedTopics([]);
      setSelectedField(requestedField);
      setScreen('home');
    }
  }, [validRequestedTopic, requestedField]);

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

  const handlePracticeUnresolved = useCallback(() => {
    if (state.missedQuestions.length === 0 && state.skippedQuestions.length === 0) return;
    resetSession();
    practiceUnresolved();
    setScreen('quiz');
  }, [practiceUnresolved, resetSession, state.missedQuestions.length, state.skippedQuestions.length]);

  useEffect(() => {
    if (state.isFinished && screen === 'quiz') {
      setScreen('results');
    }
  }, [state.isFinished, screen]);

  const startQuiz = useCallback(() => {
    const effectiveTopics = resolveQuizTopics(selectedTopics, selectedField);
    resetSession();
    setScreen('quiz');
    restartQuiz(effectiveTopics, selectedDifficulties);
  }, [restartQuiz, selectedTopics, selectedField, selectedDifficulties, resetSession]);

  const toggleTopic = useCallback((topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }, []);

  const useAllTopics = useCallback(() => {
    setSelectedTopics([]);
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
    <SiteShell streak={state.streak} showStreak={screen === 'quiz'} showFooter={screen === 'home'}>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto w-full">
        <Suspense fallback={<div className="min-h-48" aria-hidden="true" />}>
        <AnimatePresence mode="wait">
          {screen === 'home' && (
            <HomeScreen
              selectedTopics={selectedTopics}
              onToggleTopic={toggleTopic}
              selectedDifficulties={selectedDifficulties}
              onToggleDifficulty={toggleDifficulty}
              selectedField={selectedField}
              onSelectField={setSelectedField}
              onUseAllTopics={useAllTopics}
              onStart={startQuiz}
              displayName={profile?.display_name ?? null}
              onSignOut={user ? signOut : undefined}
            />
          )}

          {screen === 'quiz' && state.loading && (
            <div className="flex min-h-64 items-center justify-center py-20" role="status" aria-live="polite">
              <div className="w-full max-w-xs text-center space-y-4">
                <div className="mx-auto h-10 w-10 rounded-full border-2 border-border border-t-primary animate-spin" aria-hidden="true" />
                <p className="text-muted-foreground">
                  {state.loadingProgress && state.loadingProgress.total > 1
                    ? t('quiz.loadingProgress', state.loadingProgress)
                    : t('quiz.loading')}
                </p>
                <progress
                  className="h-1.5 w-full overflow-hidden rounded-full accent-primary"
                  value={state.loadingProgress?.loaded ?? 0}
                  max={state.loadingProgress?.total ?? 1}
                />
              </div>
            </div>
          )}

          {screen === 'quiz' && state.loadError && (
            <div className="flex min-h-64 items-center justify-center py-20" role="alert">
              <div className="max-w-sm text-center space-y-4">
                <h1 className="text-xl font-display font-bold text-foreground">{t('quiz.loadError')}</h1>
                <p className="text-sm text-muted-foreground">{t('quiz.loadErrorDetail')}</p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" onClick={() => setScreen('home')}>{t('quiz.backToSetup')}</Button>
                  <Button onClick={startQuiz}>{t('quiz.retry')}</Button>
                </div>
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
                onEliminate={eliminateOptions}
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
                onPracticeUnresolved={handlePracticeUnresolved}
                onNewTopics={() => setScreen('home')}
              />
            </div>
          )}
        </AnimatePresence>
        </Suspense>
      </main>

    </SiteShell>
  );
};

export default Index;
