import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { EquationCard } from '@/components/formulas/EquationCard';
import {
  FORMULA_DIFFICULTY_STYLES,
  getFormulaDifficultyLabel,
} from '@/components/formulas/formula-display';
import { SearchFilter } from '@/components/SearchFilter';
import { SiteShell } from '@/components/layout/SiteShell';
import {
  EQUATIONS,
  EQUATION_DOMAINS,
  type Difficulty,
} from '@/config/equations';
import {
  countFormulaDifficulties,
  filterAndSortEquations,
  getFormulaCatalogStats,
  type FormulaSortKey,
  type FormulaSpecialFilter,
} from '@/domain/formulas/catalog';
import { t } from '@/i18n';

const CATALOG_STATS = getFormulaCatalogStats(EQUATIONS);

const SORT_OPTIONS: Array<{
  key: FormulaSortKey;
  labelKey: string;
}> = [
  { key: 'rank', labelKey: 'formulas.sortRank' },
  { key: 'beauty', labelKey: 'formulas.sortBeauty' },
  { key: 'year', labelKey: 'formulas.sortEra' },
  { key: 'name', labelKey: 'formulas.sortName' },
];

export default function Formulas() {
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(qParam);

  useEffect(() => {
    if (qParam) setSearch(qParam);
  }, [qParam]);
  const [sortBy, setSortBy] = useState<FormulaSortKey>('rank');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] =
    useState<'all' | Difficulty>('all');
  const [specialFilter, setSpecialFilter] =
    useState<FormulaSpecialFilter>('all');

  const filtered = useMemo(
    () => filterAndSortEquations(EQUATIONS, {
      search,
      sortBy,
      domain: domainFilter,
      difficulty: difficultyFilter,
      special: specialFilter,
    }),
    [search, sortBy, domainFilter, difficultyFilter, specialFilter],
  );

  const filteredDiffCounts = useMemo(
    () => countFormulaDifficulties(filtered),
    [filtered],
  );

  const hasActiveFilters =
    domainFilter !== 'all'
    || difficultyFilter !== 'all'
    || specialFilter !== 'all'
    || Boolean(search.trim());

  return (
    <SiteShell>
      <main className="relative z-10 flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <div className="text-5xl mb-3">📜</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-gradient-primary">{t('formulas.title')}</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">{t('formulas.subtitle')}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {t('formulas.count', { count: EQUATIONS.length, domains: EQUATION_DOMAINS.length })}
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
            <span className="text-xs font-bold text-success">{CATALOG_STATS.difficulties.easy}</span>
            <span className="text-[10px] text-success/70">{t('formulas.accessible')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20">
            <span className="text-xs">📙</span>
            <span className="text-xs font-bold text-accent">{CATALOG_STATS.difficulties.hard}</span>
            <span className="text-[10px] text-accent/70">{t('formulas.advanced')}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-destructive/10 border border-destructive/20">
            <span className="text-xs">📕</span>
            <span className="text-xs font-bold text-destructive">{CATALOG_STATS.difficulties.sota}</span>
            <span className="text-[10px] text-destructive/70">{t('formulas.frontier')}</span>
          </div>
          {CATALOG_STATS.specials.millennium > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
              <span className="text-xs">🏆</span>
              <span className="text-xs font-bold text-primary">{CATALOG_STATS.specials.millennium}</span>
              <span className="text-[10px] text-primary/70">Millennium</span>
            </div>
          )}
          {CATALOG_STATS.specials.nobel > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20">
              <span className="text-xs">🥇</span>
              <span className="text-xs font-bold text-accent">{CATALOG_STATS.specials.nobel}</span>
              <span className="text-[10px] text-accent/70">Nobel</span>
            </div>
          )}
          {CATALOG_STATS.specials.unsolved > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-destructive/10 border border-destructive/20">
              <span className="text-xs">❓</span>
              <span className="text-xs font-bold text-destructive">{CATALOG_STATS.specials.unsolved}</span>
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
            🌐 {t('formulas.allDomains')} ({EQUATIONS.length})
          </button>
          {CATALOG_STATS.domains.map(({ domain, count, emoji }) => (
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
            placeholder={t('formulas.searchPlaceholder')}
            resultCount={filtered.length}
            resultLabel={t('stats.formulas').toLowerCase()}
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
                      : FORMULA_DIFFICULTY_STYLES[d] + ' border'
                    : 'bg-secondary text-muted-foreground hover:text-foreground border border-transparent'
                }`}
              >
                {d === 'all' ? t('formulas.allLevels') : getFormulaDifficultyLabel(d)}
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
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex items-center justify-center gap-4 mb-4 text-xs text-muted-foreground"
          >
            <span>{filtered.length} results</span>
            <span className="text-border">·</span>
            <span className="text-success">{filteredDiffCounts.easy} {t('formulas.accessible')}</span>
            <span className="text-border">·</span>
            <span className="text-accent">{filteredDiffCounts.hard} {t('formulas.advanced')}</span>
            <span className="text-border">·</span>
            <span className="text-destructive">{filteredDiffCounts.sota} {t('formulas.frontier')}</span>
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
              <EquationCard key={eq.rank} equation={eq} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-muted-foreground">{t('formulas.noResults')}</p>
          </div>
        )}

        <div className="pb-8" />
      </main>

    </SiteShell>
  );
}
