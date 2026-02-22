import { motion } from 'framer-motion';
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
  selectedDomain: string | null;
  onDomainChange: (domain: string | null) => void;
  domains: string[];
}

export function ThinkerFilters({
  selectedEra,
  onEraChange,
  selectedDomain,
  onDomainChange,
  domains,
}: ThinkerFiltersProps) {
  return (
    <div className="space-y-3">
      {/* Era filter */}
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

      {/* Domain filter */}
      <div>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5 px-1">
          Filter by Domain
        </p>
        <div className="flex flex-wrap gap-1.5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onDomainChange(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              selectedDomain === null
                ? 'bg-accent/15 border-accent text-accent'
                : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
            }`}
          >
            All Domains
          </motion.button>
          {domains.map((domain) => {
            const isActive = selectedDomain === domain;
            return (
              <motion.button
                key={domain}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onDomainChange(isActive ? null : domain)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? 'bg-accent/15 border-accent text-accent'
                    : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
                }`}
              >
                {domain}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
