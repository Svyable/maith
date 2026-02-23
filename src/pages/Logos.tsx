import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { SearchFilter } from '@/components/SearchFilter';
import { LatexRenderer } from '@/components/LatexRenderer';
import { useTheme } from '@/hooks/useTheme';
import { EQUATIONS, EQUATION_DOMAINS, type Equation } from '@/config/equations';
import { Badge } from '@/components/ui/badge';

type SortKey = 'rank' | 'beauty' | 'year' | 'name';

const DIFFICULTY_STYLES: Record<string, string> = {
  easy: 'bg-success/15 text-success border-success/30',
  hard: 'bg-accent/15 text-accent border-accent/30',
  sota: 'bg-destructive/15 text-destructive border-destructive/30',
};

const DIFFICULTY_LABEL: Record<string, string> = {
  easy: 'Accessible',
  hard: 'Advanced',
  sota: 'Frontier',
};

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'rank', label: '🏆 Rank' },
  { key: 'beauty', label: '✨ Beauty' },
  { key: 'year', label: '📅 Era' },
  { key: 'name', label: '🔤 A–Z' },
];

function parseYear(y: string): number {
  const m = y.match(/-?\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

function BeautyStars({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className={`text-xs ${i < score ? 'text-accent' : 'text-muted-foreground/30'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function EquationCard({ eq, index }: { eq: Equation; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Rank badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-xs font-bold font-mono-code text-muted-foreground/60">
          #{eq.rank}
        </span>
      </div>

      {/* Glow overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl flex-shrink-0">{eq.domainEmoji}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-foreground text-base leading-tight">
              {eq.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {eq.discoverer} · {eq.year}
            </p>
          </div>
        </div>

        {/* Equation display */}
        <div className="rounded-xl bg-background/60 border border-border/40 p-4 mb-3 flex items-center justify-center min-h-[3.5rem]">
          <LatexRenderer
            text={`$${eq.equation}$`}
            className="text-lg font-mono-code text-foreground"
          />
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-primary/30 text-primary">
            {eq.domain}
          </Badge>
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border">
            {eq.field}
          </Badge>
          <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${DIFFICULTY_STYLES[eq.difficulty]}`}>
            {DIFFICULTY_LABEL[eq.difficulty]}
          </span>
        </div>

        {/* Beauty */}
        <BeautyStars score={eq.beauty} />

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/40 space-y-3 text-sm">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Historical Significance</p>
                  <p className="text-foreground/90 leading-relaxed">{eq.significance}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Key Constants</p>
                  <p className="text-foreground/80 font-mono-code text-xs">{eq.constants}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Real-World Applications</p>
                  <p className="text-foreground/80">{eq.applications}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded ? '▲ collapse' : '▼ tap to explore'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Logos() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('rank');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    let pool = [...EQUATIONS];

    // Domain filter
    if (domainFilter !== 'all') {
      pool = pool.filter((e) => e.domain === domainFilter);
    }

    // Difficulty filter
    if (difficultyFilter !== 'all') {
      pool = pool.filter((e) => e.difficulty === difficultyFilter);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.discoverer.toLowerCase().includes(q) ||
          e.field.toLowerCase().includes(q) ||
          e.domain.toLowerCase().includes(q) ||
          e.applications.toLowerCase().includes(q)
      );
    }

    // Sort
    pool.sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return a.rank - b.rank;
        case 'beauty':
          return b.beauty - a.beauty || a.rank - b.rank;
        case 'year':
          return parseYear(a.year) - parseYear(b.year);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return pool;
  }, [search, sortBy, domainFilter, difficultyFilter]);

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
          <div className="text-5xl mb-3">📜</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-gradient-primary">Logos</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Humanity's greatest equations — ranked, tagged & explored.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {EQUATIONS.length} equations across {EQUATION_DOMAINS.length} domains
          </p>
        </motion.div>

        {/* Controls */}
        <div className="space-y-3 mb-6 max-w-xl mx-auto">
          <SearchFilter
            value={search}
            onChange={setSearch}
            placeholder="Search equations, discoverers, applications…"
            resultCount={filtered.length}
            resultLabel="equations"
          />

          {/* Sort buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortBy(opt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  sortBy === opt.key
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {/* Domain filter */}
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">All Domains</option>
              {EQUATION_DOMAINS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Difficulty filter */}
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="all">All Levels</option>
              <option value="easy">Accessible</option>
              <option value="hard">Advanced</option>
              <option value="sota">Frontier</option>
            </select>
          </div>
        </div>

        {/* Equation grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((eq, i) => (
              <EquationCard key={eq.rank} eq={eq} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-muted-foreground">No equations match your search.</p>
          </div>
        )}

        <div className="pb-8" />
      </main>

      <Footer />
    </div>
  );
}
