import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TopicSelector } from './TopicSelector';
import { DifficultyPicker } from './DifficultyPicker';
import { LanguageSelector } from './LanguageSelector';
import { type Difficulty, getDifficultyMeta, TOPIC_MAP } from '@/config/constants';
import { allQuestions } from '@/content';
import { t } from '@/i18n';
import { useLocale } from '@/hooks/useLocale';
import { useMemo, useState, useEffect } from 'react';
import { getRandomQuote, type Quote } from '@/data/quotes';

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
  const diffMeta = getDifficultyMeta(selectedDifficulty);
  const { locale, changeLocale } = useLocale();
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote('en'));

  // Refresh quote when locale changes
  useEffect(() => {
    setQuote(getRandomQuote(locale));
  }, [locale]);

  const questionCount = useMemo(() => {
    const pool = selectedTopics.length === 0
      ? allQuestions
      : allQuestions.filter(q => selectedTopics.includes(q.topic));
    return pool.length;
  }, [selectedTopics]);

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

      {/* Difficulty Picker */}
      <div className="w-full">
        <DifficultyPicker selected={selectedDifficulty} onSelect={onSelectDifficulty} />
      </div>

      {/* Topic Selector */}
      <div className="w-full">
        <TopicSelector
          selected={selectedTopics}
          onToggle={onToggleTopic}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-xl glow-primary animate-pulse-glow"
      >
        {t('home.startQuiz')}
      </motion.button>

      <p className="text-xs font-medium text-accent text-center">
        {t('quiz.questionCount', { count: questionCount })}
      </p>

      <p className="text-xs text-muted-foreground text-center">
        {t('home.summary', {
          topics: selectedTopics.length === 0
            ? t('home.allTopics')
            : selectedTopics.map(tp => TOPIC_MAP[tp]?.label ?? tp).join(', '),
          diff: diffMeta.tag,
          count: diffMeta.questionsPerQuiz,
          time: diffMeta.timePerQuestion,
        })}
      </p>
      <div className="pb-6" />
    </motion.div>
  );
}
