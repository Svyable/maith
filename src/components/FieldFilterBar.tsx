import { motion } from 'framer-motion';
import { FIELDS } from '@/config/fields';
import { t } from '@/i18n';

interface FieldFilterBarProps {
  /** Current selected field slug ('all' for everything) */
  selectedField: string;
  onFieldChange: (slug: string) => void;
  /** Only show fields present in this set (pass null to show all available) */
  availableSlugs?: Set<string> | string[] | null;
  /** Optional per-slug count to display in parentheses */
  counts?: Record<string, number>;
  /** Total count for the "All" button (if counts provided) */
  totalCount?: number;
}

/** Shared field-filter bar used across Glossary, Formulas, Thinkers, etc. */
export function FieldFilterBar({
  selectedField,
  onFieldChange,
  availableSlugs,
  counts,
  totalCount,
}: FieldFilterBarProps) {
  const available = availableSlugs
    ? availableSlugs instanceof Set
      ? availableSlugs
      : new Set(availableSlugs)
    : null;

  const visibleFields = FIELDS.filter((f) => {
    if (f.slug === 'all') return true;
    if (!f.available) return false;
    if (available && !available.has(f.slug)) return false;
    return true;
  });

  return (
    <div className="flex flex-wrap gap-1.5 justify-center">
      {visibleFields.map((field) => {
        const isActive = selectedField === field.slug;
        const label = t(`field.${field.slug}`) || field.label;
        const count = field.slug === 'all' ? totalCount : counts?.[field.slug];

        return (
          <motion.button
            key={field.slug}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onFieldChange(field.slug)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isActive
                ? 'bg-primary/15 border-primary text-primary'
                : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
            }`}
          >
            {field.emoji} {label}
            {count != null && (
              <span className="ml-1 text-muted-foreground/70">({count})</span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
