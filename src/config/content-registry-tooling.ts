// Tooling-only extension of the canonical registry. Never import from app runtime code.
import { BONAFIDES } from './bonafides';
import type { ContentTopicMeta } from './content-registry';

export interface QuestionPackMeta {
  group: string;
  module: string;
  exports: readonly string[];
  kind: 'standard-quiz' | 'vault';
  includeInStandardQuiz: boolean;
}

export const BONAFIDE_TOPICS: ContentTopicMeta[] = BONAFIDES.flatMap((credential) =>
  credential.topics.map((slug) => ({
    slug, label: credential.label, emoji: credential.emoji, description: credential.description,
    field: 'bonafide', kind: 'bonafide' as const, available: credential.available, loaderGroups: ['bonafides'],
  })),
);

export const QUESTION_PACKS: readonly QuestionPackMeta[] = [
  {
    "group": "linear-algebra",
    "module": "./linear-algebra",
    "exports": [
      "linearAlgebraQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "calculus",
    "module": "./calculus",
    "exports": [
      "calculusQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "probability-stats",
    "module": "./probability-stats",
    "exports": [
      "probabilityStatsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "optimization",
    "module": "./optimization",
    "exports": [
      "optimizationQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "discrete-math",
    "module": "./discrete-math",
    "exports": [
      "discreteMathQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "physics",
    "module": "./physics",
    "exports": [
      "physicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quant",
    "module": "./quant",
    "exports": [
      "quantQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "chemistry",
    "module": "./chemistry",
    "exports": [
      "chemistryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "biology",
    "module": "./biology",
    "exports": [
      "biologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "computer-science",
    "module": "./computer-science",
    "exports": [
      "computerScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "earth-space",
    "module": "./earth-space",
    "exports": [
      "earthSpaceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "astrophysics",
    "module": "./astrophysics",
    "exports": [
      "astrophysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "engineering",
    "module": "./engineering",
    "exports": [
      "engineeringQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "economics",
    "module": "./economics",
    "exports": [
      "economicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "new-topics",
    "module": "./new-topics",
    "exports": [
      "electromagnetismQuestions",
      "numberTheoryQuestions",
      "realAnalysisQuestions",
      "riskManagementQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "thermodynamics",
    "module": "./thermodynamics",
    "exports": [
      "thermodynamicsTopicQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-computing",
    "module": "./quantum-computing",
    "exports": [
      "quantumComputingQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "game-theory",
    "module": "./game-theory",
    "exports": [
      "gameTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "robotics",
    "module": "./robotics",
    "exports": [
      "roboticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "meteorology",
    "module": "./meteorology",
    "exports": [
      "meteorologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "audio-engineering",
    "module": "./audio-engineering",
    "exports": [
      "audioEngineeringQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "neuroscience",
    "module": "./neuroscience",
    "exports": [
      "neuroscienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "linguistics",
    "module": "./linguistics",
    "exports": [
      "linguisticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "oceanography",
    "module": "./oceanography",
    "exports": [
      "oceanographyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "cybersecurity",
    "module": "./cybersecurity",
    "exports": [
      "cybersecurityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "aerospace",
    "module": "./aerospace",
    "exports": [
      "aerospaceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "nuclear-physics",
    "module": "./nuclear-physics",
    "exports": [
      "nuclearPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "fluid-dynamics",
    "module": "./fluid-dynamics",
    "exports": [
      "fluidDynamicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "philosophy-of-science",
    "module": "./philosophy-of-science",
    "exports": [
      "philosophyScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "topology",
    "module": "./topology",
    "exports": [
      "topologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "psychology",
    "module": "./psychology",
    "exports": [
      "psychologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "environmental-science",
    "module": "./environmental-science",
    "exports": [
      "environmentalScienceQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "pharmacology",
    "module": "./pharmacology",
    "exports": [
      "pharmacologyQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "differential-equations",
    "module": "./differential-equations",
    "exports": [
      "differentialEquationsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "abstract-algebra",
    "module": "./abstract-algebra",
    "exports": [
      "abstractAlgebraQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "optics",
    "module": "./optics",
    "exports": [
      "opticsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "relativity",
    "module": "./relativity",
    "exports": [
      "relativityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "statistical-physics",
    "module": "./statistical-physics",
    "exports": [
      "statisticalPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "plasma-physics",
    "module": "./plasma-physics",
    "exports": [
      "plasmaPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "condensed-matter",
    "module": "./condensed-matter",
    "exports": [
      "condensedMatterQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "nonlinear-dynamics",
    "module": "./nonlinear-dynamics",
    "exports": [
      "nonlinearDynamicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-field-theory",
    "module": "./quantum-field-theory",
    "exports": [
      "quantumFieldTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "many-body-physics",
    "module": "./many-body-physics",
    "exports": [
      "manyBodyPhysicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "quantum-gravity",
    "module": "./quantum-gravity",
    "exports": [
      "quantumGravityQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "distributed-systems",
    "module": "./distributed-systems",
    "exports": [
      "distributedSystemsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "operating-systems",
    "module": "./operating-systems",
    "exports": [
      "operatingSystemsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2024",
    "module": "./sota-2024",
    "exports": [
      "sota2024Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2025",
    "module": "./sota-2025",
    "exports": [
      "sota2025Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "sota-2026",
    "module": "./sota-2026",
    "exports": [
      "sota2026Questions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "combinatorics",
    "module": "./combinatorics",
    "exports": [
      "combinatoricsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "category-theory",
    "module": "./category-theory",
    "exports": [
      "categoryTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "ergodic-theory",
    "module": "./ergodic-theory",
    "exports": [
      "ergodicTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "algebraic-geometry",
    "module": "./algebraic-geometry",
    "exports": [
      "algebraicGeometryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "measure-theory",
    "module": "./measure-theory",
    "exports": [
      "measureTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "compiler-theory",
    "module": "./compiler-theory",
    "exports": [
      "compilerTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "control-theory",
    "module": "./control-theory",
    "exports": [
      "controlTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "signal-processing",
    "module": "./signal-processing",
    "exports": [
      "signalProcessingQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "behavioral-economics",
    "module": "./behavioral-economics",
    "exports": [
      "behavioralEconomicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "development-economics",
    "module": "./development-economics",
    "exports": [
      "developmentEconomicsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "market-microstructure",
    "module": "./market-microstructure",
    "exports": [
      "marketMicrostructureQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "credit-risk",
    "module": "./credit-risk",
    "exports": [
      "creditRiskQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "prediction-markets",
    "module": "./prediction-markets",
    "exports": [
      "predictionMarketsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "formal-verification",
    "module": "./formal-verification",
    "exports": [
      "formalVerificationQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "ai-substrates",
    "module": "./ai-substrates",
    "exports": [
      "aiSubstratesQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "information-theory",
    "module": "./information-theory",
    "exports": [
      "informationTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "complex-analysis",
    "module": "./complex-analysis",
    "exports": [
      "complexAnalysisQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "functional-analysis",
    "module": "./functional-analysis",
    "exports": [
      "functionalAnalysisQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "graph-theory",
    "module": "./graph-theory",
    "exports": [
      "graphTheoryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "differential-geometry",
    "module": "./differential-geometry",
    "exports": [
      "differentialGeometryQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "numerical-methods",
    "module": "./numerical-methods",
    "exports": [
      "numericalMethodsQuestions"
    ],
    "kind": "standard-quiz",
    "includeInStandardQuiz": true
  },
  {
    "group": "vault",
    "module": "./vault",
    "exports": [
      "vaultQuestions"
    ],
    "kind": "vault",
    "includeInStandardQuiz": false
  }
] as const;

