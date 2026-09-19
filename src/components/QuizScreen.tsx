import { useState, useCallback, useEffect, type MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';
import { OptionButton } from './OptionButton';
import { TimerBar } from './TimerBar';
import { ExplanationPopup } from './ExplanationPopup';
import { HintPanel } from './HintPanel';
import { PaperPill } from './PaperPill';
import type { PublicQuestion, CheckResult } from '@/domain/quiz';
import { type Difficulty, getDifficultyMeta, TOPIC_MAP, toDifficulty } from '@/config/constants';
import { useKeyboard } from '@/hooks/useKeyboard';
import { t } from '@/i18n';
import { streakBonusLabel } from '@/domain/scoring';

interface QuizScreenProps {
  question: PublicQuestion;
  currentIndex: number;
  totalQuestions: number;
  score: number;
  difficulties: Difficulty[];
  streak: number;
  timerFraction: number;
  timeLeft: number;
  onAnswer: (index: number) => Promise<CheckResult | null>;
  onEliminate: () => number[];
  onNext: () => void;
  onSkip: () => void;
  onEndQuiz: () => void;
  onSessionUpdate: (correct: boolean) => void;
  timeoutRef?: MutableRefObject<(() => void) | null>;
}

const DIFF_BADGE: Record<string, { bg: string; text: string }> = {
  easy: { bg: 'bg-success/10 border-success/30', text: 'text-success' },
  hard: { bg: 'bg-accent/10 border-accent/30', text: 'text-accent' },
  sota: { bg: 'bg-destructive/10 border-destructive/30', text: 'text-destructive' },
};

export function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  score,
  difficulties,
  streak,
  timerFraction,
  timeLeft,
  onAnswer,
  onEliminate,
  onNext,
  onSkip,
  onEndQuiz,
  onSessionUpdate,
  timeoutRef,
}: QuizScreenProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<'pending' | 'checking' | 'correct' | 'wrong'>('pending');
  const [hintShown, setHintShown] = useState(false);
  const [eliminateUsed, setEliminateUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);

  const topicMeta = TOPIC_MAP[question.topic];
  const qDiffMeta = getDifficultyMeta(toDifficulty(question.difficulty));
  const diffBadge = DIFF_BADGE[question.difficulty] ?? DIFF_BADGE.hard;

  const handleSelect = useCallback(async (index: number) => {
    if (answerState !== 'pending') return;
    if (eliminatedOptions.includes(index)) return;
    setSelectedOption(index);
    setAnswerState('checking');

    const originalIndex = question.originalIndices[index];
    const result = await onAnswer(originalIndex);
    if (result) {
      const shuffledCorrectIndex = question.originalIndices.indexOf(result.correctIndex);
      setCheckResult({ ...result, correctIndex: shuffledCorrectIndex });
      setAnswerState(result.correct ? 'correct' : 'wrong');
      onSessionUpdate(result.correct);
    } else {
      setAnswerState('pending');
      setSelectedOption(null);
    }
  }, [onAnswer, answerState, onSessionUpdate, eliminatedOptions, question.originalIndices]);

  const handleTimeoutAnswer = useCallback(async () => {
    if (answerState !== 'pending') return;
    const originalIndex = -1;
    const result = await onAnswer(originalIndex);
    if (result) {
      const shuffledCorrectIndex = question.originalIndices.indexOf(result.correctIndex);
      setCheckResult({ ...result, correctIndex: shuffledCorrectIndex });
      setAnswerState('wrong');
      setSelectedOption(-1);
      onSessionUpdate(false);
    }
  }, [answerState, onAnswer, onSessionUpdate, question.originalIndices]);

  useEffect(() => {
    if (timeoutRef) timeoutRef.current = handleTimeoutAnswer;
    return () => { if (timeoutRef) timeoutRef.current = null; };
  }, [timeoutRef, handleTimeoutAnswer]);

  const resetQuestionState = useCallback(() => {
    setSelectedOption(null);
    setAnswerState('pending');
    setHintShown(false);
    setEliminateUsed(false);
    setEliminatedOptions([]);
    setCheckResult(null);
  }, []);

  const handleNext = useCallback(() => {
    resetQuestionState();
    onNext();
  }, [onNext, resetQuestionState]);

  const handleSkip = useCallback(() => {
    resetQuestionState();
    onSkip();
  }, [onSkip, resetQuestionState]);

  const handleShowHint = useCallback(() => {
    if (hintShown || answerState !== 'pending') return;
    setHintShown(true);
  }, [hintShown, answerState]);

  const handleEliminate = useCallback(() => {
    if (eliminateUsed || answerState !== 'pending') return;
    const indices = onEliminate();
    if (indices.length === 0) return;
    setEliminateUsed(true);
    setEliminatedOptions(indices);
  }, [eliminateUsed, answerState, onEliminate]);

  const isAnswered = answerState === 'correct' || answerState === 'wrong';
  const nextStreakBonus = streakBonusLabel(streak + 1);

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
        <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${diffBadge.bg} ${diffBadge.text}`}>
          {qDiffMeta.emoji} {qDiffMeta.tag}
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
      <TimerBar fraction={timerFraction} timeLeft={timeLeft} paused={answerState !== 'pending'} />

      {/* Topic + difficulty badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-lg">{topicMeta?.emoji ?? '📐'}</span>
        <span className="text-xs text-muted-foreground font-medium">{topicMeta?.label ?? question.topic}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${diffBadge.text}`}>
          {t('difficulty.pts', { pts: qDiffMeta.pointsPerCorrect })}
        </span>
        {streak > 0 && (
          <span
            className="ml-auto inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-xs font-bold text-accent"
            aria-label={t('quiz.streak', { count: streak })}
          >
            <span aria-hidden="true">🔥</span>
            <span className="font-mono">{streak}</span>
            <span className="text-accent/60" aria-hidden="true">·</span>
            <span className="font-mono">{nextStreakBonus}</span>
          </span>
        )}
      </div>

      {/* Paper pill (SOTA questions) */}
      {question.paper && (
        <PaperPill paper={question.paper} />
      )}

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
          let state: 'default' | 'correct' | 'wrong' | 'reveal' = 'default';
          if (isAnswered && checkResult) {
            if (i === checkResult.correctIndex) {
              state = i === selectedOption ? 'correct' : 'reveal';
            } else if (i === selectedOption) {
              state = 'wrong';
            }
          }
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
              selected={answerState === 'checking' && i === selectedOption}
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
          symbolLinks={checkResult.symbolLinks}
          paper={question.paper}
          glossaryLinks={checkResult.glossaryLinks}
          formulaLinks={checkResult.formulaLinks}
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
          <div className="flex items-center gap-2">
            <button
              onClick={handleSkip}
              className="min-h-11 flex-1 text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {t('quiz.skip')}
            </button>
            <button
              onClick={onEndQuiz}
              className="min-h-11 text-center text-sm text-destructive/80 hover:text-destructive transition-colors py-2 px-3 rounded-lg border border-destructive/30 hover:border-destructive/50"
            >
              {t('quiz.endQuiz')}
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground/50 text-center hidden sm:block">{t('quiz.keys')}</p>
        </div>
      )}
    </motion.div>
  );
}
