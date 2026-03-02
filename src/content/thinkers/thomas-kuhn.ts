import type { Question } from '../types';

export const kuhnQuestions: Question[] = [
  {
    id: 13330,
    topic: 'thomas-kuhn',
    difficulty: 'easy',
    question:
      'Kuhn’s “normal science” describes the typical day-to-day work of scientists under an accepted paradigm. What is normal science mainly doing?',
    options: [
      'Puzzle-solving: extending the paradigm, refining measurements, and resolving anomalies without challenging core assumptions',
      'Constantly replacing paradigms every few weeks',
      'Rejecting experiments in favor of pure philosophy',
      'Proving theories by induction until certainty is achieved'
    ],
    correctIndex: 0,
    explanation:
      'Normal science works within shared exemplars, methods, and standards. Researchers expect the paradigm to be basically right and focus on articulating it.',
    realWorld:
      'Most research papers are incremental improvements, parameter sweeps, calibration studies, or extensions within an accepted framework.',
    hint: 'It’s “puzzles under rules,” not “revolution all the time.”'
  },
  {
    id: 13331,
    topic: 'thomas-kuhn',
    difficulty: 'easy',
    question:
      'In Kuhn’s picture, what role do “anomalies” play?',
    options: [
      'They are mismatches between prediction and observation that can accumulate and eventually contribute to crisis',
      'They instantly falsify a paradigm in one step',
      'They never occur in real science',
      'They are ignored forever by definition'
    ],
    correctIndex: 0,
    explanation:
      'Anomalies are often handled locally at first, but persistent, serious anomalies can erode confidence and lead to a crisis that makes alternative paradigms attractive.',
    realWorld:
      'Measurement discrepancies can be treated as experimental error for years—until they persist across labs and methods.',
    hint: 'Anomalies often start as “bugs,” but sometimes become “feature requests for a new theory.”'
  },
  {
    id: 13332,
    topic: 'thomas-kuhn',
    difficulty: 'hard',
    question:
      'Kuhn argued that during a scientific revolution, standards and even meanings can change (“incommensurability”). What is the best interpretation?',
    options: [
      'Competing paradigms can use key terms differently and prioritize different problems, making direct comparison non-trivial',
      'Scientists literally cannot communicate across paradigms at all',
      'All revolutions are purely political with no empirical content',
      'A new paradigm must contain the old one as a strict subset'
    ],
    correctIndex: 0,
    explanation:
      'Incommensurability does not necessarily mean “no comparison is possible,” but it emphasizes that what counts as evidence, explanation, and even the reference of terms can shift with the paradigm.',
    realWorld:
      'Different ML eras shift “what good looks like”: from hand-coded rules → statistical learning → deep learning → scaling/foundation models with new benchmarks and norms.',
    hint: 'Comparison is harder because the yardsticks can change.'
  },
  {
    id: 13333,
    topic: 'thomas-kuhn',
    difficulty: 'hard',
    question:
      'Which sequence best matches Kuhn’s broad cycle of scientific development?',
    options: [
      'Normal science → anomalies accumulate → crisis → revolution (paradigm shift) → new normal science',
      'Revolution → crisis → normal science → no anomalies ever',
      'Normal science → verification → final truth → end of science',
      'Anomalies → immediate abandonment → chaos forever'
    ],
    correctIndex: 0,
    explanation:
      'Kuhn’s narrative is cyclical: stable paradigm-guided research is periodically interrupted by revolutionary shifts when the old framework can’t handle key problems.',
    realWorld:
      'Fields often have “toolkit + benchmark” eras; when the toolkit hits limits, new methods redefine the benchmark landscape.',
    hint: 'It’s a loop, not a straight line.'
  },
  {
    id: 13334,
    topic: 'thomas-kuhn',
    difficulty: 'sota',
    question:
      'Suppose a research community measures progress by a benchmark score $S$. A Kuhnian “paradigm shift” might look like changing the objective itself. Which scenario best fits?',
    options: [
      'The community moves from optimizing $S$ to optimizing a different metric $S\'$ that values different capabilities, changing methods and “good” explanations',
      'The community keeps the same metric $S$ but buys faster GPUs',
      'The community stops measuring anything and declares victory',
      'The community increases sample size while keeping all else constant'
    ],
    correctIndex: 0,
    explanation:
      'Paradigms encode goals, standards, and exemplars. Changing the core metric (or what counts as success) can reorganize research agendas and reshape method selection.',
    realWorld:
      'Shifts from accuracy-only to robustness, calibration, safety, or multi-objective evaluation can reorganize an entire subfield.',
    hint: 'A new paradigm often changes the scoreboard.'
  }
];