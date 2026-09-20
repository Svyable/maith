// Canonical concept graph for the mastery layer.
//
// Topics remain the routing/loading taxonomy. Concepts are smaller pedagogical
// units that can span reference surfaces and eventually drive learner mastery.

export type ConceptStatus = 'active' | 'experimental' | 'deprecated';

export interface Concept {
  id: string;
  label: string;
  field: string;
  topics: readonly string[];
  prerequisites: readonly string[];
  related?: readonly string[];
  applications?: readonly string[];
  status: ConceptStatus;
}

export const CONCEPTS: readonly Concept[] = [
  // ── Linear Algebra pilot ───────────────────────────────────
  {
    id: 'matrix-dimensions',
    label: 'Matrix Dimensions',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: [],
    related: ['matrix-multiplication'],
    status: 'active',
  },
  {
    id: 'matrix-multiplication',
    label: 'Matrix Multiplication',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-dimensions'],
    applications: ['linear systems', 'neural-network layers'],
    status: 'active',
  },
  {
    id: 'linear-systems',
    label: 'Linear Systems',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-multiplication'],
    applications: ['circuits', 'least squares', 'numerical solvers'],
    status: 'active',
  },
  {
    id: 'vector-norms',
    label: 'Vector Norms',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: [],
    applications: ['distance', 'regularization'],
    status: 'active',
  },
  {
    id: 'matrix-transpose',
    label: 'Matrix Transpose',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-dimensions'],
    related: ['symmetric-matrices', 'orthogonal-matrices'],
    status: 'active',
  },
  {
    id: 'dot-product-orthogonality',
    label: 'Dot Product & Orthogonality',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['vector-norms'],
    applications: ['projections', 'PCA', 'Gram-Schmidt'],
    status: 'active',
  },
  {
    id: 'identity-matrix',
    label: 'Identity Matrix',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-multiplication'],
    status: 'active',
  },
  {
    id: 'symmetric-matrices',
    label: 'Symmetric Matrices',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-transpose'],
    applications: ['covariance matrices', 'kernel methods'],
    status: 'active',
  },
  {
    id: 'eigenvalues-eigenvectors',
    label: 'Eigenvalues & Eigenvectors',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-multiplication'],
    applications: ['PCA', 'dynamical systems', 'Markov chains'],
    status: 'active',
  },
  {
    id: 'null-space',
    label: 'Null Space',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['linear-systems'],
    related: ['matrix-singularity', 'column-space'],
    status: 'active',
  },
  {
    id: 'matrix-singularity',
    label: 'Matrix Singularity',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['null-space'],
    applications: ['solver diagnostics', 'rank analysis'],
    status: 'active',
  },
  {
    id: 'matrix-trace',
    label: 'Matrix Trace',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-dimensions'],
    status: 'active',
  },
  {
    id: 'orthogonal-matrices',
    label: 'Orthogonal Matrices',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['matrix-transpose', 'dot-product-orthogonality'],
    applications: ['QR decomposition', 'stable transformations'],
    status: 'active',
  },
  {
    id: 'column-space',
    label: 'Column Space',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['linear-systems'],
    applications: ['least squares', 'range of linear maps'],
    status: 'active',
  },
  {
    id: 'diagonalization',
    label: 'Diagonalization',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['eigenvalues-eigenvectors'],
    applications: ['matrix powers', 'dynamical systems'],
    status: 'active',
  },
  {
    id: 'frobenius-norm',
    label: 'Frobenius Norm',
    field: 'math',
    topics: ['linear-algebra'],
    prerequisites: ['vector-norms'],
    applications: ['matrix regularization', 'matrix approximation'],
    status: 'active',
  },

  // ── Calculus pilot ─────────────────────────────────────────
  {
    id: 'derivatives',
    label: 'Derivatives',
    field: 'math',
    topics: ['calculus'],
    prerequisites: ['continuity'],
    applications: ['rates of change', 'optimization'],
    status: 'active',
  },
  {
    id: 'continuity',
    label: 'Continuity',
    field: 'math',
    topics: ['calculus'],
    prerequisites: [],
    related: ['derivatives'],
    status: 'active',
  },
  {
    id: 'gradient',
    label: 'Gradient',
    field: 'math',
    topics: ['calculus'],
    prerequisites: ['derivatives'],
    applications: ['multivariable optimization', 'machine learning'],
    status: 'active',
  },
  {
    id: 'elementary-derivatives',
    label: 'Elementary Derivatives',
    field: 'math',
    topics: ['calculus'],
    prerequisites: ['derivatives'],
    applications: ['symbolic differentiation', 'modeling'],
    status: 'active',
  },
  {
    id: 'product-rule',
    label: 'Product Rule',
    field: 'math',
    topics: ['calculus'],
    prerequisites: ['derivatives'],
    status: 'active',
  },
  {
    id: 'antiderivatives',
    label: 'Antiderivatives',
    field: 'math',
    topics: ['calculus'],
    prerequisites: ['derivatives'],
    applications: ['integration', 'accumulation'],
    status: 'active',
  },
] as const;

export const CONCEPT_MAP: Readonly<Record<string, Concept>> = Object.fromEntries(
  CONCEPTS.map((concept) => [concept.id, concept]),
);
