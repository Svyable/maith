import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ThinkerCard } from '@/components/ThinkerCard';
import { FieldFilterBar } from '@/components/FieldFilterBar';
import { SearchFilter } from '@/components/SearchFilter';
import { ThinkerProgressBar } from '@/components/thinkers/ThinkerProgressBar';
import { AchievementFilter, type AchievementFilterValue } from '@/components/thinkers/AchievementFilter';
import { THINKERS, type ThinkerMeta } from '@/config/thinkers';
import { getThinkerQuestions } from '@/content/thinkers';
import { t } from '@/i18n';
import type { Difficulty } from '@/config/constants';
type EraFilter = 'all' | 'ancient' | 'modern' | 'contemporary' | 'prodigy';

/** Parse a birth year from era strings like "≈570–495 BC", "1643–1727", "4th century BC" */
function parseBirthYear(era: string): number {
  const bc = era.toLowerCase().includes('bc');
  const centuryMatch = era.match(/(\d+)\w*\s*century/i);
  if (centuryMatch) return bc ? -(parseInt(centuryMatch[1]) * 100) : (parseInt(centuryMatch[1]) - 1) * 100;
  const yearMatch = era.match(/(\d{3,4})/);
  if (!yearMatch) return 9999;
  const year = parseInt(yearMatch[1]);
  return bc ? -year : year;
}

interface ThinkerGalleryProps {
  selectedDifficulties: Difficulty[];
  onToggleDifficulty: (d: Difficulty) => void;
  onStartThinker: (slug: string) => void;
  onBack: () => void;
  achievedSlugs: Set<string>;
}

const ERA_BUTTONS: { key: EraFilter; emoji: string; labelKey: string }[] = [
  { key: 'ancient', emoji: '⚔️', labelKey: 'thinkers.ancientMinds' },
  { key: 'modern', emoji: '🚀', labelKey: 'thinkers.modernPioneers' },
  { key: 'contemporary', emoji: '✨', labelKey: 'thinkers.contemporary' },
  { key: 'prodigy', emoji: '🌟', labelKey: 'thinkers.prodigies' },
];

export function ThinkerGallery({
  selectedDifficulties,
  onToggleDifficulty,
  onStartThinker,
  onBack,
  achievedSlugs,
}: ThinkerGalleryProps) {
  const [selectedEra, setSelectedEra] = useState<EraFilter>('all');
  const [selectedField, setSelectedField] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [achievementFilter, setAchievementFilter] = useState<AchievementFilterValue>('all');

  // Count thinkers per era
  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = { ancient: 0, modern: 0, contemporary: 0, prodigy: 0 };
    for (const th of THINKERS) {
      if (counts[th.era_group] != null) counts[th.era_group]++;
    }
    return counts;
  }, []);

  // Filter thinkers by era, field, search, and achievement status
  const filteredThinkers = useMemo(() => {
    return THINKERS.filter((th) => {
      if (selectedEra !== 'all' && th.era_group !== selectedEra) return false;
      if (selectedField !== 'all' && !th.fields.includes(selectedField)) return false;
      if (achievementFilter === 'achieved' && !achievedSlugs.has(th.slug)) return false;
      if (achievementFilter === 'unachieved' && achievedSlugs.has(th.slug)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !th.name.toLowerCase().includes(q) &&
          !th.archetype.toLowerCase().includes(q) &&
          !th.domain.toLowerCase().includes(q) &&
          !th.description.toLowerCase().includes(q) &&
          !th.slug.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
  }, [selectedEra, selectedField, search, achievementFilter, achievedSlugs]);

  // Derive available field slugs from era-filtered thinkers
  const availableFieldSlugs = useMemo(() => {
    const eraFiltered = selectedEra === 'all' ? THINKERS : THINKERS.filter((th) => th.era_group === selectedEra);
    const slugs = new Set<string>();
    for (const th of eraFiltered) {
      for (const f of th.fields) slugs.add(f);
    }
    return slugs;
  }, [selectedEra]);

  // Count thinkers per field for the filter bar
  const fieldCounts = useMemo(() => {
    const eraFiltered = selectedEra === 'all' ? THINKERS : THINKERS.filter((th) => th.era_group === selectedEra);
    const counts: Record<string, number> = {};
    for (const th of eraFiltered) {
      for (const f of th.fields) {
        counts[f] = (counts[f] || 0) + 1;
      }
    }
    return counts;
  }, [selectedEra]);

  // Group by era for display, sorted chronologically within each group
  const groupedThinkers = useMemo(() => {
    const groups: Record<string, ThinkerMeta[]> = {};
    const order = ['ancient', 'modern', 'contemporary', 'prodigy'];
    for (const era of order) {
      const list = filteredThinkers
        .filter((t) => t.era_group === era)
        .sort((a, b) => parseBirthYear(a.era) - parseBirthYear(b.era));
      if (list.length > 0) groups[era] = list;
    }
    return groups;
  }, [filteredThinkers]);

  const totalQuestions = filteredThinkers.reduce((sum, th) => sum + getThinkerQuestions(th.slug).length, 0);

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-5"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="text-5xl">🗿</div>
        <h2 className="text-3xl font-display font-bold text-foreground">
          Master<span className="text-gradient-primary">Minds</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {t('thinkers.gallerySubtitle')}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {filteredThinkers.length} thinker{filteredThinkers.length !== 1 ? 's' : ''} · {totalQuestions} questions
        </p>
      </div>

      {/* User progress stats */}
      <ThinkerProgressBar achievedSlugs={achievedSlugs} />

      {/* Achievement filter */}
      <AchievementFilter
        value={achievementFilter}
        onChange={setAchievementFilter}
        achievedCount={achievedSlugs.size}
        totalCount={THINKERS.length}
      />

      {/* Era buttons — 4 big cards */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1 text-center">
          {t('field.exploreByEra')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {ERA_BUTTONS.map((era) => {
            const isActive = selectedEra === era.key;
            const isAll = selectedEra === 'all';
            return (
              <motion.button
                key={era.key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedEra(isActive ? 'all' : era.key)}
                className={`relative flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all ${
                  isActive
                    ? 'bg-primary/10 border-primary shadow-lg shadow-primary/10'
                    : isAll
                    ? 'bg-card/80 border-border/60 hover:border-primary/40 hover:bg-primary/5'
                    : 'bg-card/40 border-border/30 opacity-60 hover:opacity-80'
                }`}
              >
                <span className="text-3xl">{era.emoji}</span>
                <span className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                  {t(era.labelKey)}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {eraCounts[era.key]} minds
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Field filter bar */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1 text-center">
          {t('field.filterByField')}
        </p>
        <FieldFilterBar
          selectedField={selectedField}
          onFieldChange={setSelectedField}
          availableSlugs={availableFieldSlugs}
          counts={fieldCounts}
          totalCount={selectedEra === 'all' ? THINKERS.length : THINKERS.filter(th => th.era_group === selectedEra).length}
        />
      </div>

      <SearchFilter
        value={search}
        onChange={setSearch}
        placeholder="Search thinkers…"
        resultCount={filteredThinkers.length}
        resultLabel="thinkers"
      />

      {/* Thinker cards grouped by era */}
      <div className="space-y-5">
        {Object.entries(groupedThinkers).map(([era, thinkers]) => {
          const eraBtn = ERA_BUTTONS.find(e => e.key === era);
          return (
            <div key={era}>
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
                {eraBtn ? `${eraBtn.emoji} ${t(eraBtn.labelKey)}` : era}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {thinkers.map((thinker, i) => (
                  <ThinkerCard
                    key={thinker.slug}
                    thinker={thinker}
                    questionCount={getThinkerQuestions(thinker.slug).length}
                    onSelect={onStartThinker}
                    index={i}
                    achieved={achievedSlugs.has(thinker.slug)}
                  />
                ))}
              </div>
            </div>
          );
        })}
        {filteredThinkers.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">
            No thinkers match your filters. Try adjusting your selection.
          </p>
        )}
      </div>

      <button
        onClick={onBack}
        className="w-full py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
      >
        {t('thinkers.backToHome')}
      </button>
      <div className="pb-6" />
    </motion.div>
  );
}
