/**
 * A single glossary flash-card term.
 *
 * Cross-linking fields mirror the Question metadata pattern so that
 * glossary cards, quiz questions, formulas, and thinker profiles all
 * reference each other through the same slug-based system.
 */
export interface GlossaryTerm {
  /** Unique slug (e.g. 'big-o', 'fourier-transform') */
  id: string;

  /** Field slug from FIELDS registry (e.g. 'math', 'physics') */
  field: string;

  /** Topic slug for finer grouping (e.g. 'quantum-mechanics') */
  topic?: string;

  /** The term / phrase */
  term: string;

  /** Plain-language definition (supports LaTeX via $...$) */
  definition: string;

  /** One-liner showing where/why this matters in practice */
  example?: string;

  // ── Visual / technical tabs ───────────────────────────────

  /** Hero formula rendered large via KaTeX (e.g. '$E = mc^2$') */
  formula?: string;

  /** Raw LaTeX source for the formula (shown in source tab) */
  latex?: string;

  /** Lean 4 / pseudocode representation */
  code?: string;

  // ── Cross-linking metadata ────────────────────────────────

  /** Related glossary term IDs for "see also" links */
  related?: string[];

  /**
   * Maps a symbol key (e.g. "n") to its GeekToMe letter slug (e.g. "nu").
   * Mirrors the Question.symbolLinks pattern.
   */
  symbolLinks?: Record<string, string>;

  /**
   * Formula/equation names for cross-linking to the Formulas page.
   * Uses the same slug system as Question.formulaLinks.
   */
  formulaLinks?: string[];

  /**
   * Thinker slugs for cross-linking to the Thinkers gallery.
   * E.g. ['euler', 'gauss', 'noether']
   */
  thinkerLinks?: string[];

  /** Quiz question IDs linked to this term */
  questionIds?: string[];

  /** Difficulty tier hint: how advanced is this concept? */
  difficulty?: 'intro' | 'intermediate' | 'advanced';
}
