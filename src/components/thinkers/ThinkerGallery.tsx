import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ThinkerCard } from '@/components/ThinkerCard';
import { ThinkerFilters, type EraFilter } from './ThinkerFilters';
import { DifficultyPicker } from '@/components/DifficultyPicker';
import { THINKERS, type ThinkerMeta } from '@/config/thinkers';
import { getThinkerQuestions } from '@/content/thinkers';
import { t } from '@/i18n';
import type { Difficulty } from '@/config/constants';

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
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Derive unique domains from all thinkers
  const allDomains = useMemo(() => {
    const domainSet = new Set(THINKERS.map((t) => t.domain));
    return Array.from(domainSet).sort();
  }, []);

  // Filter thinkers
  const filteredThinkers = useMemo(() => {
    return THINKERS.filter((th) => {
      if (selectedEra !== 'all' && th.era_group !== selectedEra) return false;
      if (selectedDomain && th.domain !== selectedDomain) return false;
      return true;
    });
  }, [selectedEra, selectedDomain]);

  // Group by era for display
  const groupedThinkers = useMemo(() => {
    const groups: Record<string, ThinkerMeta[]> = {};
    const order = ['ancient', 'modern', 'contemporary', 'prodigy'];
    for (const era of order) {
      const list = filteredThinkers.filter((t) => t.era_group === era);
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
        <div className="text-5xl">🎓</div>
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

      <ThinkerFilters
        selectedEra={selectedEra}
        onEraChange={setSelectedEra}
        selectedDomain={selectedDomain}
        onDomainChange={setSelectedDomain}
        domains={allDomains}
      />

      {/* Thinker cards grouped by era */}
      <div className="space-y-5">
        {Object.entries(groupedThinkers).map(([era, thinkers]) => (
          <div key={era}>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
              {ERA_LABELS[era] || era}
            </p>
            <div className="space-y-3">
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
