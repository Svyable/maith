import { useState, useCallback } from 'react';
import { allQuestions, type Question } from '@/content';
import { calculatePoints } from '@/domain/scoring';
import { type Difficulty, getDifficultyMeta } from '@/config/constants';
import { supabase } from '@/integrations/supabase/client';
import { getLocale } from '@/i18n';
import { tQuestion, tQuestionOptions } from '@/utils/tQuestion';

/** What the server returns (no answers) */
export interface PublicQuestion {
  id: number;
  topic: string;
  difficulty: 'easy' | 'hard' | 'sota';
  question: string;
  options: string[];
  hint: string;
}

/** After server check we get this back */
export interface CheckResult {
  correct: boolean;
  correctIndex: number;
  explanation: string;
  realWorld: string;
}

export interface QuizState {
  currentIndex: number;
  score: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  correctAnswered: number;
  answeredIds: number[];
  topicBreakdown: Record<string, { correct: number; total: number }>;
  isFinished: boolean;
  currentQuestions: PublicQuestion[];
  loading: boolean;
  /** After answering, the check result for current question */
  lastCheckResult: CheckResult | null;
}

/** Local fallback: select + strip questions, apply client-side translations */
function selectQuestionsLocal(topics: string[], count: number): PublicQuestion[] {
  let pool = topics.length === 0
    ? [...allQuestions]
    : allQuestions.filter((q) => topics.includes(q.topic));

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count).map(({ correctIndex, explanation, realWorld, ...pub }) => {
    // Apply client-side translations for the question and hint
    return {
      ...pub,
      question: tQuestion(pub.id, 'question', pub.question),
      hint: tQuestion(pub.id, 'hint', pub.hint),
      options: tQuestionOptions(pub.id, pub.options),
    };
  });
}

/** Fetch sanitized questions from edge function (with locale) */
async function fetchQuestionsFromServer(topics: string[], count: number): Promise<PublicQuestion[]> {
  const locale = getLocale();
  try {
    const { data, error } = await supabase.functions.invoke('quiz-next', {
      body: { topics, seenIds: [], count, locale },
    });
    if (error) throw error;
    return data?.questions ?? [];
  } catch {
    return selectQuestionsLocal(topics, count);
  }
}

/** Check answer via edge function (with locale for translated explanation) */
async function checkAnswerOnServer(questionId: number, selectedIndex: number): Promise<CheckResult | null> {
  const locale = getLocale();
  try {
    const { data, error } = await supabase.functions.invoke('quiz-check', {
      body: { questionId, selectedIndex, locale },
    });
    if (error) throw error;
    return data as CheckResult;
  } catch {
    return null;
  }
}

export function useQuiz(selectedTopics: string[] = [], difficulty: Difficulty = 'ADVN') {
  const meta = getDifficultyMeta(difficulty);

  const [state, setState] = useState<QuizState>(() => ({
    currentIndex: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalAnswered: 0,
    correctAnswered: 0,
    answeredIds: [],
    topicBreakdown: {},
    isFinished: false,
    currentQuestions: [],
    loading: true,
    lastCheckResult: null,
  }));

  const currentQuestion = state.currentQuestions[state.currentIndex] || null;

  const initQuiz = useCallback(async (topics: string[], diff: Difficulty) => {
    const m = getDifficultyMeta(diff);
    setState({
      currentIndex: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      totalAnswered: 0,
      correctAnswered: 0,
      answeredIds: [],
      topicBreakdown: {},
      isFinished: false,
      currentQuestions: [],
      loading: true,
      lastCheckResult: null,
    });

    const questions = await fetchQuestionsFromServer(topics, m.questionsPerQuiz);
    setState(prev => ({ ...prev, currentQuestions: questions, loading: false }));
  }, []);

  const answer = useCallback(async (optionIndex: number): Promise<CheckResult | null> => {
    if (!currentQuestion) return null;

    const result = await checkAnswerOnServer(currentQuestion.id, optionIndex);
    if (!result) {
      // Client-side fallback: also translate explanation and realWorld
      const localQ = allQuestions.find(q => q.id === currentQuestion.id);
      if (!localQ) return null;
      const isCorrect = optionIndex === localQ.correctIndex;
      const fallback: CheckResult = {
        correct: isCorrect,
        correctIndex: localQ.correctIndex,
        explanation: tQuestion(localQ.id, 'explanation', localQ.explanation),
        realWorld: tQuestion(localQ.id, 'realWorld', localQ.realWorld),
      };
      applyAnswer(fallback, currentQuestion);
      return fallback;
    }

    applyAnswer(result, currentQuestion);
    return result;
  }, [currentQuestion, difficulty]);

  function applyAnswer(result: CheckResult, q: PublicQuestion) {
    setState((prev) => {
      const newStreak = result.correct ? prev.streak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      const points = result.correct ? calculatePoints(difficulty, q.difficulty, newStreak) : 0;

      const topicBreakdown = { ...prev.topicBreakdown };
      const existing = topicBreakdown[q.topic] || { correct: 0, total: 0 };
      topicBreakdown[q.topic] = {
        correct: existing.correct + (result.correct ? 1 : 0),
        total: existing.total + 1,
      };

      return {
        ...prev,
        score: prev.score + points,
        streak: newStreak,
        bestStreak: newBestStreak,
        totalAnswered: prev.totalAnswered + 1,
        correctAnswered: prev.correctAnswered + (result.correct ? 1 : 0),
        answeredIds: [...prev.answeredIds, q.id],
        topicBreakdown,
        lastCheckResult: result,
      };
    });
  }

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentIndex >= prev.currentQuestions.length - 1) {
        return { ...prev, isFinished: true, lastCheckResult: null };
      }
      return { ...prev, currentIndex: prev.currentIndex + 1, lastCheckResult: null };
    });
  }, []);

  const skipQuestion = useCallback(() => {
    setState((prev) => ({ ...prev, streak: 0 }));
    nextQuestion();
  }, [nextQuestion]);

  const restartQuiz = useCallback(async (topics: string[] = [], diff: Difficulty = difficulty) => {
    await initQuiz(topics, diff);
  }, [difficulty, initQuiz]);

  return {
    state,
    currentQuestion,
    answer,
    nextQuestion,
    skipQuestion,
    restartQuiz,
    totalQuestions: state.currentQuestions.length,
  };
}
