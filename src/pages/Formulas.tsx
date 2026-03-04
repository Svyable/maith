import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { QuizHeader } from '@/components/QuizHeader';
import { FloatingBackground } from '@/components/FloatingBackground';
import { Footer } from '@/components/Footer';
import { SearchFilter } from '@/components/SearchFilter';
import { LatexRenderer } from '@/components/LatexRenderer';

import { EQUATIONS, EQUATION_DOMAINS, type Equation, type Domain } from '@/config/equations';
import { Badge } from '@/components/ui/badge';
import { t } from '@/i18n';

type SortKey = 'rank' | 'beauty' | 'year' | 'name';

const DIFFICULTY_STYLES: Record<string, string> = {
  easy: 'bg-success/15 text-success border-success/30',
  hard: 'bg-accent/15 text-accent border-accent/30',
  sota: 'bg-destructive/15 text-destructive border-destructive/30',
};

function getDifficultyLabel(d: string): string {
  const map: Record<string, string> = {
    easy: 'logos.accessible',
    hard: 'logos.advanced',
    sota: 'logos.frontier',
  };
  return t(map[d] ?? d);
}

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

/* ─── Domain stats computed once ─── */
const DOMAIN_STATS = (() => {
  const map = new Map<string, { count: number; emoji: string }>();
  for (const eq of EQUATIONS) {
    const existing = map.get(eq.domain);
    if (existing) {
      existing.count++;
    } else {
      map.set(eq.domain, { count: 1, emoji: eq.domainEmoji });
    }
  }
  return Array.from(map.entries())
    .map(([domain, { count, emoji }]) => ({ domain, count, emoji }))
    .sort((a, b) => b.count - a.count);
})();

const DIFFICULTY_COUNTS = (() => {
  const counts = { easy: 0, hard: 0, sota: 0 };
  for (const eq of EQUATIONS) counts[eq.difficulty]++;
  return counts;
})();

const SPECIAL_COUNTS = (() => {
  let millennium = 0, nobel = 0, unsolved = 0;
  for (const eq of EQUATIONS) {
    if (eq.millenniumProblem) millennium++;
    if (eq.nobelPrize) nobel++;
    if (eq.unsolved) unsolved++;
  }
  return { millennium, nobel, unsolved };
})();

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

      {/* Special badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-1">
        {eq.millenniumProblem && <span className="text-xs" title="Millennium Prize Problem">🏆</span>}
        {eq.nobelPrize && <span className="text-xs" title="Nobel Prize">🥇</span>}
        {eq.unsolved && <span className="text-xs" title="Unsolved">❓</span>}
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
            {getDifficultyLabel(eq.difficulty)}
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
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('logos.significance')}</p>
                  <p className="text-foreground/90 leading-relaxed">{eq.significance}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('logos.constants')}</p>
                  <p className="text-foreground/80 font-mono-code text-xs">{eq.constants}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{t('logos.applications')}</p>
                  <p className="text-foreground/80">{eq.applications}</p>
                </div>
                {eq.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {eq.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <div className="mt-2 text-center">
          <span className="text-[10px] text-muted-foreground/50">
            {expanded ? t('logos.collapse') : t('logos.tapToExplore')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Formulas() {
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(qParam);

  useEffect(() => {
    if (qParam) setSearch(qParam);
  }, [qParam]);
  const [sortBy, setSortBy] = useState<SortKey>('rank');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [specialFilter, setSpecialFilter] = useState<string>('all');

  const sortOptions: { key: SortKey; labelKey: string }[] = [
    { key: 'rank', labelKey: 'logos.sortRank' },
    { key: 'beauty', labelKey: 'logos.sortBeauty' },
    { key: 'year', labelKey: 'logos.sortEra' },
    { key: 'name', labelKey: 'logos.sortName' },
  ];

  const filtered = useMemo(() => {
    let pool = [...EQUATIONS];
    if (domainFilter !== 'all') pool = pool.filter((e) => e.domain === domainFilter);
    if (difficultyFilter !== 'all') pool = pool.filter((e) => e.difficulty === difficultyFilter);
    if (specialFilter === 'millennium') pool = pool.filter(e => e.millenniumProblem);
    else if (specialFilter === 'nobel') pool = pool.filter(e => e.nobelPrize);
    else if (specialFilter === 'unsolved') pool = pool.filter(e => e.unsolved);
    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.discoverer.toLowerCase().includes(q) ||
          e.field.toLowerCase().includes(q) ||
          e.domain.toLowerCase().includes(q) ||
          e.applications.toLowerCase().includes(q) ||
          e.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    pool.sort((a, b) => {
      switch (sortBy) {
        case 'rank': return a.rank - b.rank;
        case 'beauty': return b.beauty - a.beauty || a.rank - b.rank;
        case 'year': return parseYear(a.year) - parseYear(b.year);
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
    return pool;
  }, [search, sortBy, domainFilter, difficultyFilter, specialFilter]);

  // Difficulty breakdown of current filtered results
  const filteredDiffCounts = useMemo(() => {
    const c = { easy: 0, hard: 0, sota: 0 };
    for (const eq of filtered) c[eq.difficulty]++;
    return c;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <FloatingBackground />
      <QuizHeader streak={0} showStreak={false} />

      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <div className="text-5xl mb-3">📜</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-gradient-primary">{t('logos.title')}</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">{t('logos.subtitle')}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {t('logos.count', { count: EQUATIONS.length, domains: EQUATION_DOMAINS.length })}
          </p>
        </motion.div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-success/10 border border-success/20">
            <span className="text-xs">📗</span>
            <span className="text-xs font-bold text-success">{DIFFICULTY_COUNTS.easy}</span>
            <span className="text-[10px] text-success/70">{t('logos.accessible')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20">
            <span className="text-xs">📙</span>
            <span className="text-xs font-bold text-accent">{DIFFICULTY_COUNTS.hard}</span>
            <span className="text-[10px] text-accent/70">{t('logos.advanced')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-destructive/10 border border-destructive/20">
            <span className="text-xs">📕</span>
            <span className="text-xs font-bold text-destructive">{DIFFICULTY_COUNTS.sota}</span>
            <span className="text-[10px] text-destructive/70">{t('logos.frontier')}</span>
          </div>
          {SPECIAL_COUNTS.millennium > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
              <span className="text-xs">🏆</span>
              <span className="text-xs font-bold text-primary">{SPECIAL_COUNTS.millennium}</span>
              <span className="text-[10px] text-primary/70">Millennium</span>
            </div>
          )}
          {SPECIAL_COUNTS.nobel > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20">
              <span className="text-xs">🥇</span>
              <span className="text-xs font-bold text-accent">{SPECIAL_COUNTS.nobel}</span>
              <span className="text-[10px] text-accent/70">Nobel</span>
            </div>
          )}
          {SPECIAL_COUNTS.unsolved > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-destructive/10 border border-destructive/20">
              <span className="text-xs">❓</span>
              <span className="text-xs font-bold text-destructive">{SPECIAL_COUNTS.unsolved}</span>
              <span className="text-[10px] text-destructive/70">Unsolved</span>
            </div>
          )}
        </motion.div>

        {/* Domain filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-1.5 justify-center mb-5"
        >
          <button
            onClick={() => setDomainFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              domainFilter === 'all'
                ? 'bg-primary/15 text-primary border border-primary/30 shadow-sm shadow-primary/10'
                : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
            }`}
          >
            🌐 {t('logos.allDomains')} ({EQUATIONS.length})
          </button>
          {DOMAIN_STATS.map(({ domain, count, emoji }) => (
            <button
              key={domain}
              onClick={() => setDomainFilter(domainFilter === domain ? 'all' : domain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                domainFilter === domain
                  ? 'bg-primary/15 text-primary border border-primary/30 shadow-sm shadow-primary/10'
                  : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent hover:border-border'
              }`}
            >
              {emoji} {domain} ({count})
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <div className="space-y-3 mb-6 max-w-xl mx-auto">
          <SearchFilter
            value={search}
            onChange={setSearch}
            placeholder={t('logos.searchPlaceholder')}
            resultCount={filtered.length}
            resultLabel={t('stats.formulas').toLowerCase()}
          />

          {/* Sort buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {sortOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortBy(opt.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  sortBy === opt.key
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {t(opt.labelKey)}
              </button>
            ))}
          </div>

          {/* Difficulty + Special filter row */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {(['all', 'easy', 'hard', 'sota'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  difficultyFilter === d
                    ? d === 'all'
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : DIFFICULTY_STYLES[d] + ' border'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {d === 'all' ? t('logos.allLevels') : getDifficultyLabel(d)}
              </button>
            ))}
            <span className="text-border mx-1">|</span>
            {([
              { key: 'all', label: 'All', icon: '' },
              { key: 'millennium', label: 'Millennium', icon: '🏆' },
              { key: 'nobel', label: 'Nobel', icon: '🥇' },
              { key: 'unsolved', label: 'Unsolved', icon: '❓' },
            ] as const).map((s) => (
              <button
                key={s.key}
                onClick={() => setSpecialFilter(s.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  specialFilter === s.key
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results breakdown bar */}
        {(domainFilter !== 'all' || difficultyFilter !== 'all' || specialFilter !== 'all' || search.trim()) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex items-center justify-center gap-4 mb-4 text-xs text-muted-foreground"
          >
            <span>{filtered.length} results</span>
            <span className="text-border">·</span>
            <span className="text-success">{filteredDiffCounts.easy} {t('logos.accessible')}</span>
            <span className="text-border">·</span>
            <span className="text-accent">{filteredDiffCounts.hard} {t('logos.advanced')}</span>
            <span className="text-border">·</span>
            <span className="text-destructive">{filteredDiffCounts.sota} {t('logos.frontier')}</span>
            {(domainFilter !== 'all' || difficultyFilter !== 'all' || specialFilter !== 'all') && (
              <button
                onClick={() => { setDomainFilter('all'); setDifficultyFilter('all'); setSpecialFilter('all'); setSearch(''); }}
                className="px-2 py-0.5 rounded bg-muted hover:bg-muted/80 text-muted-foreground text-[10px] transition-colors"
              >
                ✕ Clear
              </button>
            )}
          </motion.div>
        )}

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
            <p className="text-muted-foreground">{t('logos.noResults')}</p>
          </div>
        )}

        <div className="pb-8" />
      </main>

      <Footer />
    </div>
  );
}
