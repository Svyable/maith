import type { Question } from '../types';

// ── Data Wrangling ──
export const dataWranglingQuestions: Question[] = [
  {
    id: 86100,
    topic: 'data-wrangling',
    difficulty: 'easy',
    question: 'One-hot encoding converts categorical variables into:',
    options: [
      'Binary indicator columns, one per category',
      'A single continuous numerical value',
      'Alphabetically sorted text strings',
      'Hash values for encryption',
    ],
    correctIndex: 0,
    explanation: 'One-hot encoding creates k binary columns for k categories, enabling ML models to process categorical features.',
    realWorld: 'pandas.get_dummies() and sklearn.OneHotEncoder are standard tools for this transformation.',
    hint: 'Each category gets its own 0/1 column.',
  },
  {
    id: 86101,
    topic: 'data-wrangling',
    difficulty: 'hard',
    question: 'Target encoding (mean encoding) risks overfitting because:',
    options: [
      'It leaks target information into features, especially for high-cardinality categories with few samples',
      'It always produces NaN values',
      'It cannot handle numerical targets',
      'It reduces the number of features to zero',
    ],
    correctIndex: 0,
    explanation: 'Replacing categories with target means creates data leakage. Regularization (smoothing, CV-based encoding) mitigates this.',
    realWorld: 'Kaggle top competitors use regularized target encoding with cross-validation folds to avoid leakage.',
    hint: 'If the feature already contains the answer, the model memorizes rather than learns.',
  },
  {
    id: 86102,
    topic: 'data-wrangling',
    difficulty: 'sota',
    question: 'Feature stores (e.g., Feast, Tecton) solve a key MLOps challenge by:',
    options: [
      'Providing consistent feature computation between training and serving, preventing train-serve skew',
      'Replacing the need for any feature engineering',
      'Storing only raw data without transformations',
      'Eliminating the need for data pipelines',
    ],
    correctIndex: 0,
    explanation: 'Feature stores centralize feature definitions, ensuring identical transformations in batch training and real-time inference.',
    realWorld: 'Uber\'s Michelangelo and Spotify\'s feature store serve millions of predictions with consistent features.',
    hint: 'The same feature logic must run identically in training and production.',
  },
];

// ── MLOps ──
export const mlopsQuestions: Question[] = [
  {
    id: 86200,
    topic: 'mlops',
    difficulty: 'easy',
    question: 'Model versioning in MLOps is important because:',
    options: [
      'It enables reproducibility, rollback, and auditing of model changes',
      'It makes models run faster',
      'It eliminates the need for testing',
      'It reduces model accuracy intentionally',
    ],
    correctIndex: 0,
    explanation: 'Version control for models (MLflow, DVC) tracks experiments, hyperparameters, and artifacts for reproducible ML.',
    realWorld: 'Netflix uses ML model versioning to A/B test recommendation algorithms and roll back poor performers.',
    hint: 'Same principle as code versioning, applied to ML artifacts.',
  },
  {
    id: 86201,
    topic: 'mlops',
    difficulty: 'hard',
    question: 'Data drift monitoring detects when:',
    options: [
      'The statistical distribution of input features changes relative to training data',
      'The model\'s source code has bugs',
      'GPU utilization drops below 50%',
      'The training dataset grows larger',
    ],
    correctIndex: 0,
    explanation: 'Data drift (covariate shift) degrades model performance silently. Statistical tests (KS, PSI) detect distribution changes.',
    realWorld: 'COVID-19 caused massive data drift in credit scoring models — pre-pandemic patterns became invalid overnight.',
    hint: 'If the real world changes but the model doesn\'t know, performance degrades.',
  },
  {
    id: 86202,
    topic: 'mlops',
    difficulty: 'sota',
    question: 'LLMOps differs from traditional MLOps primarily because LLMs require:',
    options: [
      'Prompt management, RAG pipelines, guardrails, and evaluation of open-ended outputs',
      'Exactly the same CI/CD pipeline as tabular ML',
      'No monitoring or evaluation whatsoever',
      'Only CPU-based infrastructure',
    ],
    correctIndex: 0,
    explanation: 'LLMOps adds prompt versioning, retrieval-augmented generation, safety filters, and LLM-as-judge evaluation beyond traditional MLOps.',
    realWorld: 'LangSmith, Weights & Biases Prompts, and Braintrust are emerging LLMOps platforms.',
    hint: 'LLMs have unique challenges: prompts, hallucinations, and evaluating free-text outputs.',
  },
];

// ── Data Visualization ──
export const dataVizQuestions: Question[] = [
  {
    id: 86300,
    topic: 'data-visualization',
    difficulty: 'easy',
    question: 'Edward Tufte\'s "data-ink ratio" principle advocates:',
    options: [
      'Maximizing the share of ink used to present actual data vs. non-data decoration',
      'Using as many colors as possible',
      'Adding 3D effects to all charts',
      'Including decorative borders on every visualization',
    ],
    correctIndex: 0,
    explanation: 'Tufte\'s principle: remove chartjunk and non-data ink to let the data speak clearly.',
    realWorld: 'Minimalist dashboards following Tufte\'s principles are standard at companies like Google and Bloomberg.',
    hint: 'Every drop of ink should represent data.',
  },
  {
    id: 86301,
    topic: 'data-visualization',
    difficulty: 'hard',
    question: 'Pre-attentive visual attributes (e.g., color hue, position, size) are processed by the brain in:',
    options: [
      'Less than 250 milliseconds, before conscious attention',
      'At least 10 seconds of focused study',
      'Only after reading the chart title',
      'Never — all visual processing requires conscious effort',
    ],
    correctIndex: 0,
    explanation: 'Pre-attentive processing allows instant pattern detection (pop-out effect), making it crucial for effective visualization design.',
    realWorld: 'Dashboard designers leverage pre-attentive attributes to highlight KPI anomalies instantly.',
    hint: 'Your brain processes these visual cues almost instantly, before you "think" about them.',
  },
  {
    id: 86302,
    topic: 'data-visualization',
    difficulty: 'sota',
    question: 'Observable Plot and D3.js follow the Grammar of Graphics paradigm, which decomposes visualizations into:',
    options: [
      'Data, aesthetics (mappings), geometric objects, scales, coordinate systems, and facets',
      'Only x-axis and y-axis',
      'A single monolithic chart type selector',
      'Pure CSS styling without data binding',
    ],
    correctIndex: 0,
    explanation: 'Wilkinson\'s Grammar of Graphics (implemented in ggplot2, Vega-Lite, Observable Plot) provides composable visualization primitives.',
    realWorld: 'ggplot2 in R and Observable Plot in JS are the most popular grammar-of-graphics implementations.',
    hint: 'It\'s a compositional system: layer geometric objects with aesthetic mappings.',
  },
];
