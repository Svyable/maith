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
}
