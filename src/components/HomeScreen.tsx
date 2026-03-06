import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TopicSelector } from "./TopicSelector";
import { FieldSelector } from "./FieldSelector";
import { DifficultyPicker } from "./DifficultyPicker";
import { MatrixQuoteBoard } from "./MatrixQuoteBoard";
import { LanguageSelector } from "./LanguageSelector";
import { SearchFilter } from "./SearchFilter";
import { StatsShowcase } from "./StatsShowcase";
import { type Difficulty, DIFFICULTIES, TOPIC_MAP, TOPICS } from "@/config/constants";
import { FIELD_MAP, FIELDS } from "@/config/fields";
import { allQuestions } from "@/content";
import { allGlossaryTerms } from "@/content/glossary";
import { VAULT_ENTRIES } from "@/config/vault";
import { vaultQuestions } from "@/content/vault";
import { EQUATIONS } from "@/config/equations";
import { t } from "@/i18n";
import { useLocale } from "@/hooks/useLocale";
import { useMemo, useState } from "react";
import { THINKERS } from "@/config/thinkers";

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
  const [topicSearch, setTopicSearch] = useState("");

  const handleSelectField = (slug: string) => {
    onSelectField(slug);
    selectedTopics.forEach((t) => onToggleTopic(t));
  };

  const fieldTopics = useMemo<string[] | undefined>(() => {
    if (selectedField === "all") return undefined;
    return FIELD_MAP[selectedField]?.topics ?? undefined;
  }, [selectedField]);

  const questionCount = useMemo(() => {
    const pool =
      selectedTopics.length === 0
        ? allQuestions.filter((q) => fieldTopics === undefined || fieldTopics.includes(q.topic))
        : allQuestions.filter((q) => selectedTopics.includes(q.topic));
    return pool.length;
  }, [selectedTopics, fieldTopics]);

  const summaryTopicsLabel = useMemo(() => {
    if (selectedTopics.length > 0) {
      return selectedTopics.map((tp) => TOPIC_MAP[tp]?.label ?? tp).join(", ");
    }
    if (selectedField !== "all") {
      return FIELD_MAP[selectedField]?.label ?? t("home.allTopics");
    }
    return t("home.allTopics");
  }, [selectedTopics, selectedField]);

  const diffLabels = selectedDifficulties.map((d) => DIFFICULTIES.find((m) => m.slug === d)?.tag ?? d).join(" + ");

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
          <p className="text-sm text-muted-foreground">{t("home.greeting", { name: displayName })}</p>
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("home.signOut")}
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
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          m<span className="text-gradient-primary">AI</span>th
        </h2>
        <p className="text-muted-foreground max-w-xs md:max-w-md mx-auto">{t("app.tagline")}</p>
      </div>

      {/* Motivational Quote — Matrix cycling */}
      <MatrixQuoteBoard />

      {/* ─── Top Action Zone: Desktop 2-col, Mobile stack ─── */}
      <div className="w-full max-w-xl space-y-4">
        {/* Difficulty Picker */}
        <DifficultyPicker selected={selectedDifficulties} onToggle={onToggleDifficulty} />

        {/* Start Quiz */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-2xl glow-primary animate-pulse-glow tracking-wide"
        >
          {t("home.startQuiz")} 🚀
        </motion.button>

        {/* Master Minds */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/thinkers")}
          className="w-full py-4 rounded-2xl border-2 border-accent/60 bg-accent/10 hover:bg-accent/20 hover:border-accent transition-all flex items-center gap-4 px-5 glow-accent"
        >
          <span className="text-3xl">🗿</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t("home.masterMinds")}</p>
            <p className="text-xs text-muted-foreground">{t("home.masterMindsSub", { count: THINKERS.length })}</p>
          </div>
          <span className="text-accent font-bold text-lg">→</span>
        </motion.button>

        {/* Glossary */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/glossary")}
          className="w-full py-4 rounded-2xl border-2 border-primary/60 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all flex items-center gap-4 px-5 glow-primary"
        >
          <span className="text-3xl">📖</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t("home.glossary")}</p>
            <p className="text-xs text-muted-foreground">{t("home.glossarySub")}</p>
          </div>
          <span className="text-primary font-bold text-lg">→</span>
        </motion.button>

        {/* Formulas — Greatest Equations */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/formulas")}
          className="w-full py-4 rounded-2xl border-2 border-primary/60 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all flex items-center gap-4 px-5 glow-primary"
        >
          <span className="text-3xl">📜</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t("home.formulas")}</p>
            <p className="text-xs text-muted-foreground">{t("home.formulasSub")}</p>
          </div>
          <span className="text-primary font-bold text-lg">→</span>
        </motion.button>

        {/* Bonafides — Professional Certifications */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/bonafides")}
          className="w-full py-4 rounded-2xl border-2 border-accent/60 bg-accent/10 hover:bg-accent/20 hover:border-accent transition-all flex items-center gap-4 px-5 glow-accent"
        >
          <span className="text-3xl">🪪</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t('home.bonafides')}</p>
            <p className="text-xs text-muted-foreground">{t('home.bonafidesSub')}</p>
          </div>
          <span className="text-accent font-bold text-lg">→</span>
        </motion.button>

        {/* Alphabet — Greek Letters (external) */}
        <motion.a
          href="https://greektome.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 rounded-2xl border-2 border-primary/60 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all flex items-center gap-4 px-5 glow-primary"
        >
          <span className="text-3xl">🔤</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t("home.alphabet")}</p>
            <p className="text-xs text-muted-foreground">{t("home.alphabetSub")}</p>
          </div>
          <span className="text-primary font-bold text-lg">→</span>
        </motion.a>

        {/* Vault — Classified Secrets */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/vault")}
          className="w-full py-4 rounded-2xl border-2 border-destructive/60 bg-destructive/10 hover:bg-destructive/20 hover:border-destructive transition-all flex items-center gap-4 px-5"
        >
          <span className="text-3xl">🔐</span>
          <div className="text-left flex-1">
            <p className="font-bold text-lg text-foreground">{t("home.vault")}</p>
            <p className="text-xs text-muted-foreground">{t("home.vaultSub")}</p>
          </div>
          <span className="text-destructive font-bold text-lg">→</span>
        </motion.button>
      </div>

      {/* Stats showcase — 2 rows of 3 */}
      <StatsShowcase
        stats={[
          { value: allQuestions.length, label: t("stats.questions"), emoji: "❓" },
          { value: allGlossaryTerms.length, label: t("stats.terms"), emoji: "📖" },
          { value: THINKERS.length, label: t("stats.thinkers"), emoji: "🗿" },
          { value: TOPICS.length, label: t("stats.topics"), emoji: "🧩" },
          { value: VAULT_ENTRIES.length, label: t("stats.secrets"), emoji: "🔐" },
          { value: EQUATIONS.length, label: t("stats.formulas"), emoji: "📐" },
        ]}
      />

      {/* Language Selector */}
      <div className="w-full max-w-xl space-y-2">
        <h3 className="text-xs font-bold text-muted-foreground text-center">{t("language.title")}</h3>
        <LanguageSelector locale={locale} onChangeLocale={changeLocale} />
      </div>


      {/* Field Selector */}
      <div className="w-full">
        <FieldSelector selectedField={selectedField} onSelectField={handleSelectField} />
      </div>

      {/* Start Quiz */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-2xl glow-primary animate-pulse-glow tracking-wide"
      >
        {t("home.startQuiz")} 🚀
      </motion.button>

      {/* Topic Search */}
      <div className="w-full max-w-xl">
        <SearchFilter
          value={topicSearch}
          onChange={setTopicSearch}
          placeholder={t("home.searchTopics")}
          resultLabel="topics"
        />
      </div>

      {/* Topic Selector */}
      <div className="w-full">
        <TopicSelector
          selected={selectedTopics}
          onToggle={onToggleTopic}
          fieldFilter={fieldTopics}
          searchFilter={topicSearch}
        />
      </div>

      {/* Duplicate Start Quiz under Topics */}
      <div className="w-full max-w-xl">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-2xl glow-primary animate-pulse-glow tracking-wide"
        >
          {t("home.startQuiz")} 🚀
        </motion.button>
      </div>

      <p className="text-xs font-medium text-accent text-center">{t("quiz.questionCount", { count: questionCount })}</p>

      <div className="pb-6" />
    </motion.div>
  );
}
