import { useMemo, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FlashCard } from "./FlashCard";
import { getAllGlossaryTerms, getGlossaryByField, getGlossaryFields } from "@/content/glossary";
import { FieldFilterBar } from "@/components/FieldFilterBar";
import { t } from "@/i18n";
import { useLocale } from "@/hooks/useLocale";

interface FilterState {
  search: string;
  field: string;
}

export function GlossaryScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { locale } = useLocale();

  // Combined filter state
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("term") ?? "",
    field: "all",
  });

  // Sync URL param on mount
  useEffect(() => {
    const term = searchParams.get("term");
    if (term) {
      setFilters((prev) => ({ ...prev, search: term.replace(/-/g, " ") }));
    }
  }, []);

  const allTerms = useMemo(() => getAllGlossaryTerms(), [locale]);
  const availableFields = useMemo(() => getGlossaryFields(), [locale]);

  // Memoized field counts
  const fieldCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allTerms.length };
    availableFields.forEach((f) => {
      counts[f] = getGlossaryByField(f).length;
    });
    return counts;
  }, [allTerms.length, availableFields]);

  // Optimized filtering with debounced search
  const terms = useMemo(() => {
    let pool = filters.field === "all" ? allTerms : getGlossaryByField(filters.field);

    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      pool = pool.filter((term) => term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q));
    }

    return pool;
  }, [filters.field, filters.search, allTerms]);

  // Reset filters callback
  const resetFilters = useCallback(() => {
    setFilters({ search: "", field: "all" });
  }, []);

  // Update URL on search change (debounced)
  useEffect(() => {
    if (filters.search.trim()) {
      const slug = filters.search.trim().replace(/\s+/g, "-").toLowerCase();
      navigate(`?term=${slug}`, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [filters.search, navigate]);

  return (
    <motion.div
      key="glossary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto w-full max-w-6xl px-4 md:px-6 space-y-6 min-h-screen"
    >
      {/* Header */}
      <section className="text-center space-y-3 pt-4 pb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl mb-4"
          aria-hidden="true"
        >
          📖
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight"
        >
          Mathematical<span className="text-gradient-primary"> Glossary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          {t("glossary.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-muted-foreground/80"
        >
          {availableFields.length} fields • {allTerms.length.toLocaleString()} terms
        </motion.p>
      </section>

      {/* Controls - Improved layout */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4 bg-card/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl"
      >
        {/* Unified Search + Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="lg:col-span-2 relative">
            <input
              type="text"
              placeholder={t("glossary.searchPlaceholder")}
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              className="w-full px-5 py-4 rounded-2xl border-2 border-border/50 bg-card/80 backdrop-blur-sm text-lg text-foreground placeholder:text-muted-foreground/80 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/20 transition-all duration-300"
              autoComplete="off"
            />
            {filters.search && (
              <motion.button
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Clear search"
              >
                ✕
              </motion.button>
            )}
          </div>

          <FieldFilterBar
            selectedField={filters.field}
            onFieldChange={(field) => setFilters((prev) => ({ ...prev, field }))}
            availableSlugs={availableFields}
            counts={fieldCounts}
            totalCount={allTerms.length}
            className="w-full"
          />
        </div>

        {/* Results summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 pb-1"
        >
          <p className="text-sm text-muted-foreground font-medium">
            {terms.length === 1 ? `${terms.length} term found` : `${terms.length.toLocaleString()} terms found`}
          </p>

          {(filters.field !== "all" || filters.search) && (
            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              onClick={resetFilters}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-all duration-200"
            >
              Clear filters
            </motion.button>
          )}
        </motion.div>
      </motion.section>

      {/* Enhanced Masonry Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative"
      >
        {terms.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
            {terms.map((term, i) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="mb-6 break-inside-avoid w-full"
              >
                <FlashCard term={term} index={i} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-24 px-8 text-center rounded-3xl border-2 border-dashed border-border/50 bg-card/50 backdrop-blur-sm min-h-[400px]"
          >
            <div className="text-6xl mb-6 opacity-20">🔍</div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-display font-semibold text-muted-foreground mb-4"
            >
              No results found
            </motion.p>
            <p className="text-muted-foreground/70 max-w-md mb-8">
              Try adjusting your search or filter by field above.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetFilters}
              className="px-8 py-3 rounded-2xl bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300"
            >
              Show all terms
            </motion.button>
          </motion.div>
        )}
      </motion.section>

      {/* Enhanced Back CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/")}
        className="w-full max-w-md mx-auto py-4 px-8 rounded-3xl border-2 border-border/50 bg-gradient-to-r from-card to-card/50 backdrop-blur-sm text-lg font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-400"
      >
        ← Back to Home
      </motion.button>

      <div className="h-12" />
    </motion.div>
  );
}
