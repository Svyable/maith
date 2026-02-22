import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TopicSelector } from './TopicSelector';
import { FieldSelector } from './FieldSelector';
import { DifficultyPicker } from './DifficultyPicker';
import { LanguageSelector } from './LanguageSelector';
import { type Difficulty, DIFFICULTIES, TOPIC_MAP } from '@/config/constants';
import { FIELD_MAP } from '@/config/fields';
import { allQuestions } from '@/content';
import { t } from '@/i18n';
import { useLocale } from '@/hooks/useLocale';
import { useMemo, useState, useEffect } from 'react';
import { getRandomQuote, type Quote } from '@/content/quotes';
import { THINKERS } from '@/config/thinkers';

interface HomeScreenProps {
  selectedTopics: string[];
  onToggleTopic: (topic: string) => void;
  selectedDifficulties: Difficulty[];
  onToggleDifficulty: (d: Difficulty) => void;
  selectedField: string;
  onSelectField: (slug: string) => void;
  onStart: () => void;
  displayName?: string | null;
  onSignOut?: () => void;
}

export function HomeScreen({
  selectedTopics,
  onToggleTopic,
  selectedDifficulties,
  onToggleDifficulty,
  selectedField,
  onSelectField,
  onStart,
  displayName,
  onSignOut,
}: HomeScreenProps) {
  const navigate = useNavigate();
  const { locale, changeLocale } = useLocale();
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote('en'));

  useEffect(() => {
    setQuote(getRandomQuote(locale));
  }, [locale]);

  const handleSelectField = (slug: string) => {
    onSelectField(slug);
    selectedTopics.forEach((t) => onToggleTopic(t));
  };

  const fieldTopics = useMemo<string[] | undefined>(() => {
    if (selectedField === 'all') return undefined;
    return FIELD_MAP[selectedField]?.topics ?? undefined;
  }, [selectedField]);

  const questionCount = useMemo(() => {
    const pool = selectedTopics.length === 0
      ? allQuestions.filter((q) => fieldTopics === undefined || fieldTopics.includes(q.topic))
      : allQuestions.filter((q) => selectedTopics.includes(q.topic));
    return pool.length;
  }, [selectedTopics, fieldTopics]);

  const summaryTopicsLabel = useMemo(() => {
    if (selectedTopics.length > 0) {
      return selectedTopics.map((tp) => TOPIC_MAP[tp]?.label ?? tp).join(', ');
    }
    if (selectedField !== 'all') {
      return FIELD_MAP[selectedField]?.label ?? t('home.allTopics');
    }
    return t('home.allTopics');
  }, [selectedTopics, selectedField]);

  const diffLabels = selectedDifficulties
    .map((d) => DIFFICULTIES.find((m) => m.slug === d)?.tag ?? d)
    .join(' + ');

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center gap-6 pt-6"
    >
      {/* User greeting */}
      {displayName && (
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {t('home.greeting', { name: displayName })}
          </p>
          {onSignOut && (
            <button onClick={onSignOut} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t('home.signOut')}
            </button>
          )}
        </div>
      )}

      {/* Brand header */}
      <div className="text-center space-y-3">
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-7xl"
        >
          🧠
        </motion.div>
        <h2 className="text-4xl font-display font-bold text-foreground">
          m<span className="text-gradient-primary">AI</span>th
        </h2>
        <p className="text-muted-foreground max-w-xs mx-auto">
          {t('app.tagline')}
        </p>
      </div>

      {/* Motivational Quote */}
      <motion.div
        key={quote.text}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-xl border border-border/60 bg-card/50 p-4 text-center"
      >
        <p className="text-sm italic text-muted-foreground leading-relaxed">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="text-xs font-semibold text-accent mt-2">— {quote.author}</p>
      </motion.div>

      {/* ─── Top Action Zone: Difficulty + Start + MasterMinds ─── */}
      <div className="w-full space-y-4">
        {/* Difficulty Picker */}
        <DifficultyPicker selected={selectedDifficulties} onToggle={onToggleDifficulty} />

        {/* Start Quiz */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-xl glow-primary animate-pulse-glow"
        >
          {t('home.startQuiz')}
        </motion.button>

        {/* MasterMinds entry */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/thinkers')}
          className="w-full py-3 rounded-xl border-2 border-accent/50 bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all flex items-center justify-center gap-3"
        >
          <span className="text-xl">🎓</span>
          <div className="text-left">
            <p className="font-bold text-sm text-foreground">{t('home.masterMinds')}</p>
            <p className="text-[10px] text-muted-foreground">{t('home.masterMindsSub', { count: THINKERS.length })}</p>
          </div>
          <span className="ml-auto text-accent font-bold text-sm">→</span>
        </motion.button>
      </div>

      {/* Session summary */}
      <p className="text-xs text-muted-foreground text-center">
        {summaryTopicsLabel} · {diffLabels} · {questionCount} questions available
      </p>

      {/* Language Selector */}
      <div className="w-full space-y-2">
        <h3 className="text-xs font-bold text-muted-foreground text-center">{t('language.title')}</h3>
        <LanguageSelector locale={locale} onChangeLocale={changeLocale} />
      </div>

      {/* Field Selector */}
      <div className="w-full">
        <FieldSelector selectedField={selectedField} onSelectField={handleSelectField} />
      </div>

      {/* Topic Selector */}
      <div className="w-full">
        <TopicSelector
          selected={selectedTopics}
          onToggle={onToggleTopic}
          fieldFilter={fieldTopics}
        />
      </div>

      <p className="text-xs font-medium text-accent text-center">
        {t('quiz.questionCount', { count: questionCount })}
      </p>

      <div className="pb-6" />
    </motion.div>
  );
}
