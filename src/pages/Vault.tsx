import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { SearchFilter } from '@/components/SearchFilter';
import { LatexRenderer } from '@/components/LatexRenderer';
import { useTheme } from '@/hooks/useTheme';
import { VAULT_ENTRIES, VAULT_AGENCIES, type VaultEntry } from '@/config/vault';
import { vaultQuestions } from '@/content/vault';
import { Badge } from '@/components/ui/badge';

type SortKey = 'rank' | 'secrecy' | 'impact' | 'classified' | 'declassified';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'rank', label: '🏆 Rank' },
  { key: 'secrecy', label: '🔒 Secrecy' },
  { key: 'impact', label: '💥 Impact' },
  { key: 'classified', label: '📅 Classified' },
  { key: 'declassified', label: '📂 Declassified' },
];

function SecrecyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-3 rounded-sm transition-colors ${
            i < level
              ? level >= 9
                ? 'bg-destructive'
                : level >= 7
                ? 'bg-accent'
                : 'bg-primary'
              : 'bg-muted-foreground/15'
          }`}
        />
      ))}
      <span className="text-[10px] font-mono-code text-muted-foreground ml-1">{level}/10</span>
    </div>
  );
}

function ClassificationBadge({ entry }: { entry: VaultEntry }) {
  const isStillClassified = entry.declassifiedYear.toLowerCase().includes('still');
  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border ${
      isStillClassified
        ? 'bg-destructive/15 text-destructive border-destructive/40'
        : 'bg-success/15 text-success border-success/40'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isStillClassified ? 'bg-destructive animate-pulse' : 'bg-success'}`} />
      {isStillClassified ? 'STILL CLASSIFIED' : 'DECLASSIFIED'}
    </div>
  );
}

function VaultCard({ entry, index, onQuiz }: { entry: VaultEntry; index: number; onQuiz: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const relatedQuizCount = vaultQuestions.filter(
    (q) => q.explanation.toLowerCase().includes(entry.id.replace('-', ' ')) ||
           q.realWorld.toLowerCase().includes(entry.name.toLowerCase().split(' ')[0])
  ).length;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ delay: Math.min(index * 0.04, 0.35) }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm hover:border-destructive/30 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top-secret corner stripe */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className="absolute top-3 -right-6 rotate-45 bg-destructive/80 text-destructive-foreground text-[8px] font-bold px-6 py-0.5 tracking-widest">
          TOP SECRET
        </div>
      </div>

      {/* Rank */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-xs font-bold font-mono-code text-muted-foreground/60">
          #{entry.rank}
        </span>
      </div>

      <div className="relative p-5 pt-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">{entry.domainEmoji}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-foreground text-base leading-tight">
              {entry.name}
            </h3>
            {entry.codename && (
              <p className="text-[10px] font-mono-code text-accent mt-0.5">
                CODENAME: {entry.codename}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">
              {entry.agency} · {entry.field}
            </p>
          </div>
        </div>

        {/* Classification status */}
        <div className="mb-3">
          <ClassificationBadge entry={entry} />
        </div>

        {/* Timeline bar */}
        <div className="rounded-xl bg-background/60 border border-border/40 p-3 mb-3">
          <div className="flex items-center justify-between text-xs">
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Classified</p>
              <p className="font-bold font-mono-code text-destructive">{entry.classifiedYear}</p>
            </div>
            <div className="flex-1 mx-3 h-px bg-gradient-to-r from-destructive/60 via-muted-foreground/30 to-success/60" />
            <div className="text-center">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Declassified</p>
              <p className="font-bold font-mono-code text-success">{entry.declassifiedYear}</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-foreground/85 leading-relaxed mb-3">{entry.summary}</p>

        {/* Meters */}
        <div className="space-y-1.5 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">Secrecy</span>
            <SecrecyMeter level={entry.secrecyLevel} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground w-14">Impact</span>
            <SecrecyMeter level={entry.impact} />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-destructive/30 text-destructive">
            {entry.agency}
          </Badge>
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border">
            {entry.domain}
          </Badge>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/40 space-y-4 text-sm">
                <div>
                  <p className="text-xs font-bold text-destructive/80 uppercase tracking-wide mb-1">📁 Full Story</p>
                  <p className="text-foreground/90 leading-relaxed">{entry.fullStory}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">👤 Key Figures</p>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.keyFigures.map((f) => (
                      <Badge key={f} variant="secondary" className="text-[10px]">{f}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">⚡ Historical Significance</p>
                  <p className="text-foreground/80 leading-relaxed">{entry.significance}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">🌍 Legacy</p>
                  <p className="text-foreground/80 leading-relaxed">{entry.legacy}</p>
                </div>

                {/* Quiz link */}
                <button
                  onClick={(e) => { e.stopPropagation(); onQuiz(entry.relatedTopic); }}
                  className="w-full py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-semibold text-xs transition-colors"
                >
                  🧠 Test Your Knowledge — {entry.relatedTopic} quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded ? '▲ collapse' : '▼ tap to declassify'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Vault() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('rank');
  const [agencyFilter, setAgencyFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    let pool = [...VAULT_ENTRIES];

    if (agencyFilter !== 'all') {
      pool = pool.filter((e) => e.agency === agencyFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.agency.toLowerCase().includes(q) ||
          e.codename?.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q) ||
          e.keyFigures.some((f) => f.toLowerCase().includes(q))
      );
    }

    pool.sort((a, b) => {
      switch (sortBy) {
        case 'rank': return a.rank - b.rank;
        case 'secrecy': return b.secrecyLevel - a.secrecyLevel || a.rank - b.rank;
        case 'impact': return b.impact - a.impact || a.rank - b.rank;
        case 'classified': return parseInt(a.classifiedYear) - parseInt(b.classifiedYear);
        case 'declassified': {
          const aY = a.declassifiedYear.match(/\d+/);
          const bY = b.declassifiedYear.match(/\d+/);
          return (aY ? parseInt(aY[0]) : 9999) - (bY ? parseInt(bY[0]) : 9999);
        }
        default: return 0;
      }
    });

    return pool;
  }, [search, sortBy, agencyFilter]);

  const handleQuiz = (topic: string) => {
    navigate(`/?topic=${topic}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader
        streak={0}
        showStreak={false}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onHome={() => {}}
      />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="text-5xl mb-3">🔐</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            The <span className="text-destructive">Vault</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Humanity's greatest classified secrets — declassified, ranked & explored.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {VAULT_ENTRIES.length} entries · {vaultQuestions.length} quiz questions
          </p>
        </motion.div>

        {/* Controls */}
        <div className="space-y-3 mb-6 max-w-xl mx-auto">
          <SearchFilter
            value={search}
            onChange={setSearch}
            placeholder="Search secrets, codenames, agencies, figures…"
            resultCount={filtered.length}
            resultLabel="entries"
          />

          {/* Sort */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortBy(opt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  sortBy === opt.key
                    ? 'bg-destructive/15 text-destructive border border-destructive/30'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Agency filter */}
          <div className="flex justify-center">
            <select
              value={agencyFilter}
              onChange={(e) => setAgencyFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-destructive/40"
            >
              <option value="all">All Agencies</option>
              {VAULT_AGENCIES.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((entry, i) => (
              <VaultCard key={entry.id} entry={entry} index={i} onQuiz={handleQuiz} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-muted-foreground">No classified entries match your search.</p>
          </div>
        )}

        <div className="pb-8" />
      </main>

      <Footer />
    </div>
  );
}
