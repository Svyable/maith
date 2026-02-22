import { motion } from 'framer-motion';
import { FIELDS } from '@/config/fields';
import { t } from '@/i18n';

export type EraFilter = 'all' | 'ancient' | 'modern' | 'contemporary' | 'prodigy';

interface EraOption {
  key: EraFilter;
  label: string;
  emoji: string;
}

const ERA_OPTIONS: EraOption[] = [
  { key: 'all', label: 'All', emoji: '🌐' },
  { key: 'ancient', label: t('thinkers.ancientMinds') || 'Ancient Minds', emoji: '' },
  { key: 'modern', label: t('thinkers.modernPioneers') || 'Modern Pioneers', emoji: '' },
  { key: 'contemporary', label: t('thinkers.contemporary') || 'Contemporary', emoji: '' },
  { key: 'prodigy', label: t('thinkers.prodigies') || 'Prodigies', emoji: '' },
];

interface ThinkerFiltersProps {
  selectedEra: EraFilter;
  onEraChange: (era: EraFilter) => void;
}

export function ThinkerFilters({ selectedEra, onEraChange }: ThinkerFiltersProps) {
  return (
    <div>
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
        Explore by Era
      </p>
      <div className="flex flex-wrap gap-1.5">
        {ERA_OPTIONS.map((opt) => {
          const isActive = selectedEra === opt.key;
          return (
            <motion.button
              key={opt.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEraChange(opt.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-primary/15 border-primary text-primary'
                  : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
              }`}
            >
              {opt.emoji ? `${opt.emoji} ` : ''}{opt.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/** Field filter shown below thinker cards */
interface FieldFilterProps {
  selectedField: string | null;
  onFieldChange: (field: string | null) => void;
  /** Only show fields that have matching thinkers */
  availableFieldSlugs: Set<string>;
}

export function FieldFilter({ selectedField, onFieldChange, availableFieldSlugs }: FieldFilterProps) {
  const visibleFields = FIELDS.filter(
    (f) => f.slug !== 'all' && f.available && availableFieldSlugs.has(f.slug)
  );

  return (
    <div>
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
        Filter by Field
      </p>
      <div className="flex flex-wrap gap-1.5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFieldChange(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            selectedField === null
              ? 'bg-accent/15 border-accent text-accent'
              : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
          }`}
        >
          🌐 All Fields
        </motion.button>
        {visibleFields.map((field) => {
          const isActive = selectedField === field.slug;
          return (
            <motion.button
              key={field.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFieldChange(isActive ? null : field.slug)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-accent/15 border-accent text-accent'
                  : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
              }`}
            >
              {field.emoji} {field.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
