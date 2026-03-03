import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ThinkerCard } from '@/components/ThinkerCard';
import { ThinkerFilters, FieldFilter, type EraFilter } from './ThinkerFilters';
import { DifficultyPicker } from '@/components/DifficultyPicker';
import { SearchFilter } from '@/components/SearchFilter';
import { THINKERS, type ThinkerMeta } from '@/config/thinkers';
import { getThinkerQuestions } from '@/content/thinkers';
import { t } from '@/i18n';
import type { Difficulty } from '@/config/constants';

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
}

const ERA_LABELS: Record<string, string> = {
  ancient: '⚔️ Ancient Minds',
  modern: '🚀 Modern Pioneers',
  contemporary: '✨ Contemporary',
  prodigy: '🌟 Prodigies',
};

export function ThinkerGallery({
  selectedDifficulties,
  onToggleDifficulty,
  onStartThinker,
  onBack,
}: ThinkerGalleryProps) {
  const [selectedEra, setSelectedEra] = useState<EraFilter>('all');
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Filter thinkers by era, field, and search
  const filteredThinkers = useMemo(() => {
    return THINKERS.filter((th) => {
      if (selectedEra !== 'all' && th.era_group !== selectedEra) return false;
      if (selectedField && !th.fields.includes(selectedField)) return false;
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
  }, [selectedEra, selectedField, search]);

  // Derive available field slugs from era-filtered thinkers (so field chips update with era)
  const availableFieldSlugs = useMemo(() => {
    const eraFiltered = selectedEra === 'all' ? THINKERS : THINKERS.filter((th) => th.era_group === selectedEra);
    const slugs = new Set<string>();
    for (const th of eraFiltered) {
      for (const f of th.fields) slugs.add(f);
    }
    return slugs;
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
          {filteredThinkers.length} thinker{filteredThinkers.length !== 1 ? 's' : ''} ·{' '}
          {filteredThinkers.reduce((sum, th) => sum + getThinkerQuestions(th.slug).length, 0)} questions
        </p>
      </div>

      <DifficultyPicker selected={selectedDifficulties} onToggle={onToggleDifficulty} />

      <SearchFilter
        value={search}
        onChange={setSearch}
        placeholder="Search thinkers…"
        resultCount={filteredThinkers.length}
        resultLabel="thinkers"
      />

      <ThinkerFilters selectedEra={selectedEra} onEraChange={setSelectedEra} />

      {/* Thinker cards grouped by era */}
      <div className="space-y-5">
        {Object.entries(groupedThinkers).map(([era, thinkers]) => (
          <div key={era}>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
              {ERA_LABELS[era] || era}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {thinkers.map((thinker, i) => (
                <ThinkerCard
                  key={thinker.slug}
                  thinker={thinker}
                  questionCount={getThinkerQuestions(thinker.slug).length}
                  onSelect={onStartThinker}
                  index={i}
                />
              ))}
            </div>
          </div>
        ))}
        {filteredThinkers.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">
            No thinkers match your filters. Try adjusting your selection.
          </p>
        )}
      </div>

      {/* Field filter below cards */}
      <FieldFilter
        selectedField={selectedField}
        onFieldChange={setSelectedField}
        availableFieldSlugs={availableFieldSlugs}
      />

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
