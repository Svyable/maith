import type { Question } from "../types";

export const gramSchmidtQuestions: Question[] = [
  {
    id: 304039,
    topic: "gram-schmidt",
    difficulty: "easy",
    question:
      "The Gram–Schmidt process starts with a linearly independent set of vectors and produces:",
    options: [
      "An orthogonal or orthonormal basis spanning the same subspace",
      "A set of eigenvalues of the original matrix",
      "A basis for the null space only",
      "A nonlinear coordinate transform",
    ],
    correctIndex: 0,
    explanation:
      "Gram–Schmidt systematically subtracts projections to turn a linearly independent set into mutually orthogonal vectors spanning the same space. If normalized, the result is orthonormal.",
    realWorld:
      "This is used in linear algebra, least squares, signal decomposition, and QR factorization.",
    hint: "Same span, cleaner geometry.",
    symbolLinks: {},
    formulaLinks: ["Gram–Schmidt process"],
    glossaryLinks: ["orthogonal-basis", "linear-algebra", "orthonormal-basis"],
  },
  {
    id: 304040,
    topic: "gram-schmidt",
    difficulty: "hard",
    question:
      "What is subtracted from a vector during Gram–Schmidt to make it orthogonal to earlier basis vectors?",
    options: [
      "Its projections onto the previously constructed orthogonal vectors",
      "Its determinant with each earlier vector",
      "Its eigenvalues under the covariance matrix",
      "Its componentwise product with each basis vector",
    ],
    correctIndex: 0,
    explanation:
      "To orthogonalize a vector, Gram–Schmidt subtracts off the parts lying along earlier basis directions. These are the projection terms.",
    realWorld:
      "Projection subtraction is the same geometric idea behind decorrelation, regression residuals, and some signal separation methods.",
    hint: "Remove the parts already explained by previous directions.",
    symbolLinks: {},
    formulaLinks: ["Projection formula", "Gram–Schmidt process"],
    glossaryLinks: ["projection", "orthogonality", "least-squares"],
  },
  {
    id: 304041,
    topic: "gram-schmidt",
    difficulty: "sota",
    question:
      "Why is modified Gram–Schmidt often preferred over classical Gram–Schmidt in numerical computing?",
    options: [
      "It is typically more numerically stable in finite-precision arithmetic",
      "It always uses fewer floating-point operations than QR factorization",
      "It avoids normalization entirely",
      "It works only for sparse integer matrices",
    ],
    correctIndex: 0,
    explanation:
      "In floating-point computation, classical Gram–Schmidt can lose orthogonality due to roundoff. Modified Gram–Schmidt reorganizes the computations to improve numerical stability.",
    realWorld:
      "Stable orthogonalization matters in scientific computing, optimization, and machine learning when solving least-squares problems or building orthonormal bases.",
    hint: "Same idea, better floating-point behavior.",
    symbolLinks: {},
    formulaLinks: ["Modified Gram–Schmidt", "QR factorization"],
    glossaryLinks: ["numerical-stability", "floating-point-arithmetic", "scientific-computing"],
  },
];
