import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FlashCard } from './FlashCard';
import { getAllGlossaryTerms, getGlossaryByField, getGlossaryFields } from '@/content/glossary';
import { FIELDS } from '@/config/fields';
import { t } from '@/i18n';
import { LanguageFlags } from '@/components/LanguageFlags';

export function GlossaryScreen() {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('all');
  const [search, setSearch] = useState('');

  const allTerms = useMemo(() => getAllGlossaryTerms(), [/* re-run when locale changes via rerender */]);
  const availableFields = useMemo(() => getGlossaryFields(), [/* same */]);

  const fieldChips = useMemo(() => {
    return [
      { slug: 'all', label: t('glossary.allFields'), emoji: '🌐' },
      ...FIELDS.filter((f) => f.slug !== 'all' && f.available && availableFields.includes(f.slug)).map(
        (f) => ({ slug: f.slug, label: f.label, emoji: f.emoji })
      ),
    ];
  }, [availableFields]);

  const terms = useMemo(() => {
    let pool = getGlossaryByField(selectedField);

    const q = search.trim().toLowerCase();
    if (q) {
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
      className="mx-auto w-full max-w-6xl px-4 md:px-6 space-y-6"
    >
      {/* Header */}
      <div className="text-center space-y-2 pt-2">
        <div className="text-5xl">📖</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Gloss<span className="text-gradient-primary">ary</span>
        </h2>

        <LanguageFlags />

        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          {t('glossary.subtitle')}
        </p>
        <p className="text-xs text-muted-foreground/70">
          {t('glossary.count', { terms: allTerms.length, fields: availableFields.length })}
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder={t('glossary.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          {search.trim().length > 0 && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
              aria-label={t('glossary.clearSearch') ?? 'Clear search'}
              title={t('glossary.clearSearch') ?? 'Clear'}
            >
              ✕
            </button>
          )}
        </div>

        {/* Field chips */}
        <div className="flex flex-wrap gap-2">
          {fieldChips.map((f) => {
            const isActive = selectedField === f.slug;
            const count = f.slug === 'all' ? allTerms.length : getGlossaryByField(f.slug).length;

            return (
              <motion.button
                key={f.slug}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedField(f.slug)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? 'bg-primary/15 border-primary text-primary'
                    : 'bg-secondary border-border text-muted-foreground hover:border-muted-foreground/50'
                }`}
              >
                {f.emoji} {f.label}{' '}
                <span className="text-muted-foreground/70">({count})</span>
              </motion.button>
            );
          })}
        </div>

        {/* Results summary */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {t('glossary.showing', { count: terms.length }) ?? `${terms.length} results`}
          </p>

          {(selectedField !== 'all' || search.trim()) && (
            <button
              onClick={() => {
                setSelectedField('all');
                setSearch('');
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition"
            >
              {t('glossary.resetFilters') ?? 'Reset'}
            </button>
          )}
        </div>
      </div>

      {/* Masonry cards */}
      <div className="columns-1 lg:columns-2 gap-4 [column-fill:_balance]">
        {terms.map((term, i) => (
          <div key={term.id} className="mb-4 break-inside-avoid">
            <FlashCard term={term} index={i} />
          </div>
        ))}

        {terms.length === 0 && (
          <div className="lg:col-span-2">
            <p className="text-center text-sm text-muted-foreground py-10">
              {t('glossary.noResults')}
            </p>
          </div>
        )}
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="w-full py-3 rounded-2xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
      >
        {t('glossary.backHome')}
      </button>

      <div className="pb-6" />
    </motion.div>
  );
}