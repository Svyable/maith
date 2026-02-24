import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FlashCard } from './FlashCard';
import { allGlossaryTerms, getGlossaryByField, getGlossaryFields } from '@/content/glossary';
import { FIELDS } from '@/config/fields';
import { t } from '@/i18n';

export function GlossaryScreen() {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('all');
  const [search, setSearch] = useState('');

  const availableFields = useMemo(() => getGlossaryFields(), []);

  const fieldChips = useMemo(() => {
    return [
      { slug: 'all', label: t('glossary.allFields'), emoji: '🌐' },
      ...FIELDS.filter(
        (f) => f.slug !== 'all' && f.available && availableFields.includes(f.slug)
      ).map((f) => ({ slug: f.slug, label: f.label, emoji: f.emoji })),
    ];
  }, [availableFields]);

  const terms = useMemo(() => {
    let pool = getGlossaryByField(selectedField);
    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter(
        (term) =>
          term.term.toLowerCase().includes(q) ||
          term.definition.toLowerCase().includes(q)
      );
    }
    return pool;
  }, [selectedField, search]);

  return (
    <motion.div
      key="glossary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-5"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="text-5xl">📖</div>
        <h2 className="text-3xl font-display font-bold text-foreground">
          Gloss<span className="text-gradient-primary">ary</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {t('glossary.subtitle')}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {t('glossary.count', { terms: allGlossaryTerms.length, fields: availableFields.length })}
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder={t('glossary.searchPlaceholder')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />

      {/* Field chips */}
      <div className="flex flex-wrap gap-1.5">
        {fieldChips.map((f) => {
          const isActive = selectedField === f.slug;
          const count = f.slug === 'all' ? allGlossaryTerms.length : getGlossaryByField(f.slug).length;
          return (
            <motion.button
              key={f.slug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedField(f.slug)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-primary/15 border-primary text-primary'
                  : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
              }`}
            >
              {f.emoji} {f.label} ({count})
            </motion.button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {terms.map((term, i) => (
          <FlashCard key={term.id} term={term} index={i} />
        ))}
        {terms.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">
            {t('glossary.noResults')}
          </p>
        )}
      </div>

      <button
        onClick={() => navigate('/')}
        className="w-full py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
      >
        {t('glossary.backHome')}
      </button>
      <div className="pb-6" />
    </motion.div>
  );
}
