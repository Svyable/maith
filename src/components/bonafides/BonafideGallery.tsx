import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DifficultyPicker } from '@/components/DifficultyPicker';
import { SearchFilter } from '@/components/SearchFilter';
import { BONAFIDES, type BonafideMeta } from '@/config/bonafides';
import { getBonafideQuestions } from '@/content/bonafides';
import { t } from '@/i18n';
import type { Difficulty } from '@/config/constants';

interface BonafideGalleryProps {
  selectedDifficulties: Difficulty[];
  onToggleDifficulty: (d: Difficulty) => void;
  onStartBonafide: (slug: string) => void;
  onBack: () => void;
}

export function BonafideGallery({
  selectedDifficulties,
  onToggleDifficulty,
  onStartBonafide,
  onBack,
}: BonafideGalleryProps) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return BONAFIDES.filter((b) => {
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !b.label.toLowerCase().includes(q) &&
          !b.description.toLowerCase().includes(q) &&
          !b.slug.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [search]);

  const availableCount = useMemo(
    () => filtered.filter((b) => b.available).length,
    [filtered],
  );

  const totalQuestions = useMemo(
    () =>
      filtered
        .filter((b) => b.available)
        .reduce((sum, b) => sum + getBonafideQuestions(b.topics).length, 0),
    [filtered],
  );

  return (
    <motion.div
      key="bonafide-gallery"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-5"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="text-5xl">🏆</div>
        <h2 className="text-3xl font-display font-bold text-foreground">
          Bona<span className="text-gradient-primary">fides</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Professional certifications &amp; credentialing exams
        </p>
        <p className="text-xs text-muted-foreground/70">
          {availableCount} credential{availableCount !== 1 ? 's' : ''} · {totalQuestions} questions
        </p>
      </div>

      <DifficultyPicker selected={selectedDifficulties} onToggle={onToggleDifficulty} />

      <SearchFilter
        value={search}
        onChange={setSearch}
        placeholder="Search credentials…"
        resultCount={filtered.length}
        resultLabel="credentials"
      />

      {/* Credential cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((bonafide, i) => (
          <BonafideCard
            key={bonafide.slug}
            bonafide={bonafide}
            questionCount={bonafide.available ? getBonafideQuestions(bonafide.topics).length : 0}
            onSelect={onStartBonafide}
            index={i}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-8">
          No credentials match your search.
        </p>
      )}

      <button
        onClick={onBack}
        className="w-full py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
      >
        ← Back to Home
      </button>
      <div className="pb-6" />
    </motion.div>
  );
}

// ── Card component ──────────────────────────────────────────────────

function BonafideCard({
  bonafide,
  questionCount,
  onSelect,
  index,
}: {
  bonafide: BonafideMeta;
  questionCount: number;
  onSelect: (slug: string) => void;
  index: number;
}) {
  const isAvailable = bonafide.available;

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      onClick={() => isAvailable && onSelect(bonafide.slug)}
      disabled={!isAvailable}
      className={`
        w-full text-left p-4 rounded-xl border transition-all
        ${
          isAvailable
            ? 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer'
            : 'border-border/50 bg-card/50 opacity-60 cursor-not-allowed'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{bonafide.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-foreground text-sm">{bonafide.label}</p>
            {!isAvailable && (
              <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{bonafide.description}</p>
          {isAvailable && (
            <p className="text-[10px] font-mono text-accent mt-1">
              {questionCount} question{questionCount !== 1 ? 's' : ''} · {bonafide.topics.length} topic
              {bonafide.topics.length !== 1 ? 's' : ''}
            </p>
          )}
          {bonafide.sections && bonafide.sections.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {bonafide.sections.map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-medium text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
        {isAvailable && <span className="text-primary font-bold text-lg mt-1">→</span>}
      </div>
    </motion.button>
  );
}
