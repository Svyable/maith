import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { TopicSelector } from "./TopicSelector";
import { FieldSelector } from "./FieldSelector";
import { DifficultyPicker } from "./DifficultyPicker";
import { MatrixQuoteBoard } from "./MatrixQuoteBoard";
import { SearchFilter } from "./SearchFilter";
import { StatsShowcase } from "./StatsShowcase";
import { Button } from "./ui/button";
import { type Difficulty, DIFFICULTIES, TOPIC_MAP, TOPICS } from "@/config/constants";
import { FIELD_MAP } from "@/config/fields";
import { allQuestions } from "@/content";
import { allGlossaryTerms } from "@/content/glossary";
import { VAULT_ENTRIES } from "@/config/vault";
import { EQUATIONS } from "@/config/equations";
import { t } from "@/i18n";
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

const DISCOVERY_ITEMS = [
  { path: "/thinkers", title: "home.masterMinds", subtitle: "home.masterMindsSub", emoji: "🗿" },
  { path: "/formulas", title: "home.formulas", subtitle: "home.formulasSub", emoji: "📜" },
  { path: "/glossary", title: "home.glossary", subtitle: "home.glossarySub", emoji: "📖" },
  { path: "/bonafides", title: "home.bonafides", subtitle: "home.bonafidesSub", emoji: "🪪" },
  { path: "/vault", title: "home.vault", subtitle: "home.vaultSub", emoji: "🔐" },
] as const;

export function HomeScreen({ selectedTopics, onToggleTopic, selectedDifficulties, onToggleDifficulty, selectedField, onSelectField, onStart, displayName, onSignOut }: HomeScreenProps) {
  const navigate = useNavigate();
  const [topicSearch, setTopicSearch] = useState("");

  const handleSelectField = (slug: string) => {
    onSelectField(slug);
    selectedTopics.forEach((topic) => onToggleTopic(topic));
  };

  const fieldTopics = useMemo<string[] | undefined>(() => selectedField === "all" ? undefined : FIELD_MAP[selectedField]?.topics, [selectedField]);
  const questionCount = useMemo(() => {
    const relevant = selectedTopics.length > 0
      ? allQuestions.filter((question) => selectedTopics.includes(question.topic))
      : allQuestions.filter((question) => fieldTopics === undefined || fieldTopics.includes(question.topic));
    return relevant.filter((question) => selectedDifficulties.includes(question.difficulty)).length;
  }, [selectedTopics, selectedDifficulties, fieldTopics]);

  const summaryTopics = selectedTopics.length > 0
    ? selectedTopics.map((topic) => TOPIC_MAP[topic]?.label ?? topic).join(", ")
    : selectedField !== "all" ? FIELD_MAP[selectedField]?.label ?? t("home.allTopics") : t("home.allTopics");
  const summaryDifficulty = selectedDifficulties.map((difficulty) => t(DIFFICULTIES.find((item) => item.slug === difficulty)?.tagKey ?? difficulty)).join(" + ");

  return (
    <motion.div key="home" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-8 pb-8">
      {displayName && (
        <div className="flex min-h-11 items-center justify-between">
          <p className="text-sm text-muted-foreground">{t("home.greeting", { name: displayName })}</p>
          {onSignOut && <Button variant="ghost" size="sm" onClick={onSignOut}>{t("home.signOut")}</Button>}
        </div>
      )}

      <section className="text-center" aria-labelledby="home-title">
        <motion.div aria-hidden="true" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} className="text-6xl">🧠</motion.div>
        <h1 id="home-title" className="mt-2 text-4xl font-display font-bold text-foreground md:text-5xl">m<span className="text-gradient-primary">AI</span>th</h1>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">{t("app.tagline")}</p>
      </section>

      <MatrixQuoteBoard />

      <section id="quiz-setup" aria-labelledby="quiz-setup-title" className="scroll-mt-24 space-y-6">
        <div>
          <p className="text-xs font-bold uppercase text-primary">01 · {t("nav.quiz")}</p>
          <h2 id="quiz-setup-title" className="mt-1 text-2xl font-display font-bold text-foreground">{t("home.selectDifficulty")}</h2>
        </div>
        <DifficultyPicker selected={selectedDifficulties} onToggle={onToggleDifficulty} />

        <div className="border-t border-border pt-6">
          <p className="mb-3 text-xs font-bold uppercase text-primary">02 · {t("home.selectTopics")}</p>
          <FieldSelector selectedField={selectedField} onSelectField={handleSelectField} />
        </div>

        <SearchFilter value={topicSearch} onChange={setTopicSearch} placeholder={t("home.searchTopics")} resultLabel={t("stats.topics")} />
        <TopicSelector selected={selectedTopics} onToggle={onToggleTopic} fieldFilter={fieldTopics} searchFilter={topicSearch} />

        <div className="sticky bottom-3 z-20 rounded-lg border border-primary/30 bg-card/95 p-3 shadow-lg backdrop-blur">
          <p className="mb-3 line-clamp-2 text-center text-xs text-muted-foreground">
            {t("home.summary", { topics: summaryTopics, diff: summaryDifficulty, count: questionCount, time: 30 })}
          </p>
          <Button size="lg" onClick={onStart} className="h-14 w-full text-lg font-bold glow-primary">
            {t("home.startQuiz")}
          </Button>
        </div>
      </section>

      <section aria-labelledby="discover-title" className="space-y-3 border-t border-border pt-7">
        <div>
          <h2 id="discover-title" className="text-xl font-display font-bold text-foreground">{t("home.discover")}</h2>
          <p className="text-sm text-muted-foreground">{t("home.discoverSub")}</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {DISCOVERY_ITEMS.map((item) => (
            <Button key={item.path} variant="outline" onClick={() => navigate(item.path)} className="h-auto min-h-20 justify-start whitespace-normal p-3 text-left">
              <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
              <span className="min-w-0 flex-1"><span className="block font-bold">{t(item.title)}</span><span className="line-clamp-1 text-xs font-normal text-muted-foreground">{t(item.subtitle, item.title === "home.masterMinds" ? { count: THINKERS.length } : undefined)}</span></span>
              <span aria-hidden="true">→</span>
            </Button>
          ))}
          <Button variant="outline" asChild className="h-auto min-h-20 justify-start whitespace-normal p-3 text-left">
            <a href="https://geektome.lovable.app" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl" aria-hidden="true">🔤</span>
              <span className="min-w-0 flex-1"><span className="block font-bold">{t("home.alphabet")}</span><span className="line-clamp-1 text-xs font-normal text-muted-foreground">{t("home.alphabetSub")}</span></span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      <StatsShowcase stats={[
        { value: allQuestions.length, label: t("stats.questions"), emoji: "❓" },
        { value: allGlossaryTerms.length, label: t("stats.terms"), emoji: "📖" },
        { value: THINKERS.length, label: t("stats.thinkers"), emoji: "🗿" },
        { value: TOPICS.length, label: t("stats.topics"), emoji: "🧩" },
        { value: VAULT_ENTRIES.length, label: t("stats.secrets"), emoji: "🔐" },
        { value: EQUATIONS.length, label: t("stats.formulas"), emoji: "📐" },
      ]} />
    </motion.div>
  );
}