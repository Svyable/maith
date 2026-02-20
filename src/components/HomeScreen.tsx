import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TopicSelector } from './TopicSelector';
import { FieldSelector } from './FieldSelector';
import { DifficultyPicker } from './DifficultyPicker';
import { LanguageSelector } from './LanguageSelector';
import { type Difficulty, getDifficultyMeta, TOPIC_MAP } from '@/config/constants';
import { FIELD_MAP } from '@/config/fields';
import { allQuestions } from '@/content';
import { t } from '@/i18n';
import { useLocale } from '@/hooks/useLocale';
import { useMemo, useState, useEffect } from 'react';
import { getRandomQuote, type Quote } from '@/data/quotes';
import { THINKERS } from '@/config/thinkers';

interface HomeScreenProps {
  selectedTopics: string[];
  onToggleTopic: (topic: string) => void;
  selectedDifficulty: Difficulty;
  onSelectDifficulty: (d: Difficulty) => void;
  onStart: () => void;
  displayName?: string | null;
  onSignOut?: () => void;
}

export function HomeScreen({
  selectedTopics,
  onToggleTopic,
  selectedDifficulty,
  onSelectDifficulty,
  onStart,
  displayName,
  onSignOut,
}: HomeScreenProps) {
  const navigate = useNavigate();
  const diffMeta = getDifficultyMeta(selectedDifficulty);
  const { locale, changeLocale } = useLocale();
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote('en'));
  const [selectedField, setSelectedField] = useState<string>('all');

  // Refresh quote when locale changes
  useEffect(() => {
    setQuote(getRandomQuote(locale));
  }, [locale]);

  // When field changes, clear topic selection so the new field's topics show
  const handleSelectField = (slug: string) => {
    setSelectedField(slug);
    // Clear selected topics so the new field context applies
    selectedTopics.forEach((t) => onToggleTopic(t));
  };

  // Derive topic slugs filtered to the selected field
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

      <div className="text-center space-y-3">
        <motion.div
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-7xl"
        >
          🧠
        </motion.div>
        <h2 className="text-4xl font-display font-bold text-foreground">
          Math <span className="text-gradient-primary">Mastery</span>
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

      {/* Language Selector */}
      <div className="w-full space-y-2">
        <h3 className="text-xs font-bold text-muted-foreground text-center">{t('language.title')}</h3>
        <LanguageSelector locale={locale} onChangeLocale={changeLocale} />
      </div>

      {/* Field Selector */}
      <div className="w-full">
        <FieldSelector selectedField={selectedField} onSelectField={handleSelectField} />
      </div>

      {/* Topic Selector — scoped to the selected field */}
      <div className="w-full">
        <TopicSelector
          selected={selectedTopics}
          onToggle={onToggleTopic}
          fieldFilter={fieldTopics}
        />
      </div>

      {/* Difficulty Picker */}
      <div className="w-full">
        <DifficultyPicker selected={selectedDifficulty} onSelect={onSelectDifficulty} />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-xl glow-primary animate-pulse-glow"
      >
        {t('home.startQuiz')}
      </motion.button>

      {/* Who's Who entry point */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate('/thinkers')}
        className="w-full py-3 rounded-xl border-2 border-accent/50 bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all flex items-center justify-center gap-3"
      >
        <span className="text-xl">🎓</span>
        <div className="text-left">
          <p className="font-bold text-sm text-foreground">Who&apos;s Who in AI &amp; Math</p>
          <p className="text-[10px] text-muted-foreground">{THINKERS.length} legendary thinkers · Ancient &amp; Modern</p>
        </div>
        <span className="ml-auto text-accent font-bold text-sm">→</span>
      </motion.button>

      <p className="text-xs font-medium text-accent text-center">
        {t('quiz.questionCount', { count: questionCount })}
      </p>

      <p className="text-xs text-muted-foreground text-center">
        {summaryTopicsLabel} · {diffMeta.tag} · {diffMeta.questionsPerQuiz} questions · {diffMeta.timePerQuestion}s timer
      </p>
      <div className="pb-6" />
    </motion.div>
  );
}
