import type { Question } from '../types';

export const topologyQuestions: Question[] = [
  {
    id: 41201, topic: 'topology', difficulty: 'easy',
    question: 'In topology, a coffee mug and a donut (torus) are considered equivalent because:',
    options: [
      'They are homeomorphic — one can be continuously deformed into the other without cutting or gluing, as both have exactly one hole',
      'They are made of the same material',
      'They have the same volume',
      'They weigh the same amount',
    ],
    correctIndex: 0,
    explanation: 'Topology studies properties preserved under continuous deformation (stretching, bending — no cutting/gluing). The number of holes (genus) is a topological invariant: a mug has one hole (the handle), as does a torus. They\'re "the same shape" topologically.',
    realWorld: 'Topological data analysis (TDA) uses persistent homology to find "holes" in high-dimensional data — revealing structure in protein folding, brain connectivity, and sensor networks.',
    hint: 'Imagine the mug is made of clay — you can smoothly reshape it into a donut without tearing.',
  },
  {
    id: 41202, topic: 'topology', difficulty: 'hard',
    question: 'The Euler characteristic $\\chi = V - E + F$ for a convex polyhedron always equals:',
    options: [
      '2 — for any convex polyhedron with V vertices, E edges, and F faces (e.g., cube: 8-12+6=2, tetrahedron: 4-6+4=2)',
      '0',
      '1',
      'It varies depending on the specific polyhedron',
    ],
    correctIndex: 0,
    explanation: 'Euler\'s formula (1758) is one of topology\'s earliest results. For a sphere (genus 0), χ=2. For a torus (genus 1), χ=0. In general, χ = 2-2g where g is the genus. This connects combinatorics to topology.',
    realWorld: 'The Euler characteristic is used in mesh processing (3D graphics, CAD), computational geometry, and topological data analysis. Any bug in a mesh triangulation can be caught by checking if χ has the expected value.',
    hint: 'Vertices minus edges plus faces — try it on a cube: 8 - 12 + 6.',
  },
  {
    id: 41203, topic: 'topology', difficulty: 'sota',
    question: 'Persistent homology in topological data analysis (TDA) works by:',
    options: [
      'Growing balls around data points at increasing radii, tracking when topological features (components, loops, voids) appear and disappear — features that persist across many scales represent true structure',
      'Sorting data points by distance from the origin',
      'Applying PCA to reduce dimensionality',
      'Clustering data using k-means',
    ],
    correctIndex: 0,
    explanation: 'Persistent homology builds a filtration of simplicial complexes at increasing scale parameters. Birth-death pairs of topological features are recorded in a "persistence diagram." Long-lived features represent genuine data topology; short-lived ones are noise.',
    realWorld: 'TDA has found novel structures in protein binding sites, detected coverage holes in sensor networks, identified market regimes in financial data, and discovered new subtypes of breast cancer from gene expression data.',
    hint: 'Grow circles around each point — track which clusters merge, which loops form, and how long they last.',
  },
];
