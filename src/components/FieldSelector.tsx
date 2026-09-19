import { motion } from 'framer-motion';
import { QUIZ_FIELDS, type FieldMeta } from '@/config/fields';
import { cn } from '@/lib/utils';
import { t } from '@/i18n';

interface FieldSelectorProps {
  selectedField: string;
  onSelectField: (slug: string) => void;
}

export function FieldSelector({ selectedField, onSelectField }: FieldSelectorProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{t('home.fieldLabel')}</h3>
      <div className="flex flex-wrap gap-2">
        {QUIZ_FIELDS.map((field, i) => (
          <FieldPill
            key={field.slug}
            field={field}
            isSelected={selectedField === field.slug}
            onSelect={() => !field.available ? undefined : onSelectField(field.slug)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

function FieldPill({
  field,
  isSelected,
  onSelect,
  index,
}: {
  field: FieldMeta;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}) {
  const colorMap: Record<string, { selected: string; hover: string }> = {
    primary:     { selected: 'bg-primary/15 border-primary text-primary',         hover: 'hover:border-primary/40' },
    accent:      { selected: 'bg-accent/15 border-accent text-accent',             hover: 'hover:border-accent/40' },
    success:     { selected: 'bg-success/15 border-success text-success',          hover: 'hover:border-success/40' },
    destructive: { selected: 'bg-destructive/15 border-destructive text-destructive', hover: 'hover:border-destructive/40' },
  };

  const colors = colorMap[field.color] ?? colorMap.primary;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      whileHover={field.available ? { scale: 1.04 } : {}}
      whileTap={field.available ? { scale: 0.97 } : {}}
      onClick={field.available ? onSelect : undefined}
      disabled={!field.available}
      className={cn(
        'relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all',
        isSelected
          ? colors.selected
          : 'border-border text-muted-foreground bg-card/50',
        field.available ? colors.hover : 'opacity-40 cursor-not-allowed',
      )}
    >
      <span>{field.emoji}</span>
      <span>{t(`field.${field.slug}`) || field.label}</span>
      {!field.available && (
        <span className="ml-1 text-[9px] font-bold text-muted-foreground bg-muted px-1 py-0.5 rounded-full">
          {t('field.soon')}
        </span>
      )}
    </motion.button>
  );
}
