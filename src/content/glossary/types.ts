/** A single glossary flash-card term */
export interface GlossaryTerm {
  id: string;
  /** Field slug from FIELDS registry (e.g. 'math', 'physics') */
  field: string;
  /** Topic slug for finer grouping (optional) */
  topic?: string;
  /** The term / phrase */
  term: string;
  /** Plain-language definition (supports LaTeX via $...$) */
  definition: string;
  /** One-liner showing where/why this matters in practice */
  example?: string;
  /** Related term ids for "see also" links */
  related?: string[];
  /** Hero formula rendered large via KaTeX (e.g. '$E = mc^2$') */
  formula?: string;
  /** Raw LaTeX source for the formula (shown in source tab) */
  latex?: string;
  /** Lean 4 / pseudocode representation */
  code?: string;
  /** Quiz question IDs linked to this term (for future cross-ref) */
  questionIds?: string[];
}
