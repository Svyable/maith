import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';
import { OptionButton } from './OptionButton';
import { TimerBar } from './TimerBar';
import { ExplanationPopup } from './ExplanationPopup';
import { HintPanel } from './HintPanel';
import { type PublicQuestion, type CheckResult } from '@/hooks/useQuiz';
import { type Difficulty, getDifficultyMeta, TOPIC_MAP } from '@/config/constants';
import { useKeyboard } from '@/hooks/useKeyboard';
import { t } from '@/i18n';

interface QuizScreenProps {
  question: PublicQuestion;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  difficulty: Difficulty;
  streak: number;
  timerFraction: number;
  timeLeft: number;
  onAnswer: (index: number) => Promise<CheckResult | null>;
  onNext: () => void;
  onSkip: () => void;
  sessionCorrect: number;
  sessionTotal: number;
  onSessionUpdate: (correct: boolean) => void;
}

export function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  score,
  difficulty,
  streak,
  timerFraction,
  timeLeft,
  onAnswer,
  onNext,
  onSkip,
  onSessionUpdate,
}: QuizScreenProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<'pending' | 'checking' | 'correct' | 'wrong'>('pending');
  const [hintShown, setHintShown] = useState(false);
  const [eliminateUsed, setEliminateUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);

  const diffMeta = getDifficultyMeta(difficulty);
  const topicMeta = TOPIC_MAP[question.topic];

  const handleSelect = useCallback(async (index: number) => {
    if (answerState !== 'pending') return;
    if (eliminatedOptions.includes(index)) return;
    setSelectedOption(index);
    setAnswerState('checking');

    const result = await onAnswer(index);
    if (result) {
      setCheckResult(result);
      setAnswerState(result.correct ? 'correct' : 'wrong');
      onSessionUpdate(result.correct);
    } else {
      setAnswerState('pending');
      setSelectedOption(null);
    }
  }, [onAnswer, answerState, onSessionUpdate, eliminatedOptions]);

  const handleNext = useCallback(() => {
    setSelectedOption(null);
    setAnswerState('pending');
    setHintShown(false);
    setEliminateUsed(false);
    setEliminatedOptions([]);
    setCheckResult(null);
    onNext();
  }, [onNext]);

  const handleSkip = useCallback(() => {
    setSelectedOption(null);
    setAnswerState('pending');
    setHintShown(false);
    setEliminateUsed(false);
    setEliminatedOptions([]);
    setCheckResult(null);
    onSkip();
  }, [onSkip]);

  const handleShowHint = useCallback(() => {
    if (hintShown || answerState !== 'pending') return;
    setHintShown(true);
  }, [hintShown, answerState]);

  const handleEliminate = useCallback(() => {
    if (eliminateUsed || answerState !== 'pending') return;
    setEliminateUsed(true);
    // We don't know correctIndex on the client yet — eliminate 2 of the 4 options
    // but we must NOT reveal which is correct, so we pick randomly from all 4.
    // After answering the correct one will still light up via checkResult.correctIndex.
    const indices = [0, 1, 2, 3];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setEliminatedOptions(indices.slice(0, 2));
  }, [eliminateUsed, answerState]);

  const isAnswered = answerState === 'correct' || answerState === 'wrong';

  // Keyboard shortcuts
  useKeyboard({
    onOption: answerState === 'pending' ? handleSelect : undefined,
    onHint: answerState === 'pending' ? handleShowHint : undefined,
    onNext: isAnswered ? handleNext : undefined,
    onSkip: answerState === 'pending' ? handleSkip : undefined,
    enabled: true,
  });

  return (
    <motion.div
      key={`quiz-${question.id}`}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="space-y-5"
    >
      {/* Progress */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground font-mono">
          {t('quiz.question', { current: currentIndex + 1, total: totalQuestions })}
        </span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border bg-${diffMeta.color}/10 border-${diffMeta.color}/30 text-${diffMeta.color}`}>
          {diffMeta.tag}
        </span>
        <span className="font-mono font-bold text-foreground">
          {t('quiz.points', { score: Math.round(score) })}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Timer */}
      <TimerBar fraction={timerFraction} timeLeft={timeLeft} />

      {/* Topic badge */}
      <div className="flex items-center gap-2">
        <span className="text-lg">{topicMeta?.emoji ?? '📐'}</span>
        <span className="text-xs text-muted-foreground font-medium">{topicMeta?.label ?? question.topic}</span>
        {streak >= 3 && (
          <span className="ml-auto text-xs font-bold text-accent">
            {t('quiz.streak', { count: streak })}
          </span>
        )}
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6 min-h-[100px] flex items-center justify-center overflow-x-auto">
        <LatexRenderer
          text={question.question}
          className="text-xl font-display font-semibold text-card-foreground text-center leading-relaxed"
        />
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isEliminated = eliminatedOptions.includes(i);
          // correctIndex reveal ALWAYS wins — even over eliminated state
          let state: 'default' | 'correct' | 'wrong' | 'reveal' = 'default';
          if (isAnswered && checkResult) {
            if (i === checkResult.correctIndex) {
              state = i === selectedOption ? 'correct' : 'reveal';
            } else if (i === selectedOption) {
              state = 'wrong';
            }
            // Non-correct eliminated options go back to 'default' (greyed out disabled)
          }
          // Only show eliminated styling while still pending (before answer)
          const showEliminated = isEliminated && !isAnswered;
          return (
            <OptionButton
              key={i}
              text={opt}
              index={i}
              onSelect={handleSelect}
              disabled={answerState !== 'pending' || isEliminated}
              state={state}
              eliminated={showEliminated}
            />
          );
        })}
      </div>

      {/* Checking indicator */}
      {answerState === 'checking' && (
        <div className="text-center text-sm text-muted-foreground animate-pulse">{t('quiz.checking')}</div>
      )}

      {/* Explanation */}
      {isAnswered && checkResult && (
        <ExplanationPopup
          isCorrect={answerState === 'correct'}
          explanation={checkResult.explanation}
          realWorld={checkResult.realWorld}
          hint={hintShown ? undefined : question.hint}
          onNext={handleNext}
        />
      )}

      {/* Bottom actions */}
      {answerState === 'pending' && (
        <div className="space-y-2">
          <HintPanel
            hint={question.hint}
            hintShown={hintShown}
            onShowHint={handleShowHint}
            onEliminate={handleEliminate}
            eliminateUsed={eliminateUsed}
            disabled={answerState !== 'pending'}
          />
          <button
            onClick={handleSkip}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {t('quiz.skip')}
          </button>
          <p className="text-[10px] text-muted-foreground/50 text-center hidden sm:block">{t('quiz.keys')}</p>
        </div>
      )}
    </motion.div>
  );
}
