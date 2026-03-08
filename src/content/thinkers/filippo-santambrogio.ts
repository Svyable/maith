import type { Question } from '../types';

export const filippoSantambrogioQuestions: Question[] = [
  {
    id: 21360,
    topic: 'filippo-santambrogio',
    difficulty: 'hard',
    question: 'In Santambrogio\'s exposition of optimal transport, the Kantorovich dual problem replaces transport plans with what?',
    options: [
      'A pair of continuous functions (φ,ψ) satisfying φ(x) + ψ(y) ≤ c(x,y), maximizing ∫φ dμ + ∫ψ dν',
      'A single convex function whose gradient pushes μ to ν',
      'A Markov chain connecting source to target',
      'A flow network with capacity constraints'
    ],
    correctIndex: 0,
    explanation: 'Kantorovich duality replaces the primal (minimizing over couplings) with a dual (maximizing over c-conjugate function pairs). The constraint φ(x)+ψ(y) ≤ c(x,y) encodes the cost structure.',
    realWorld: 'Kantorovich duality is the theoretical backbone of semi-dual OT solvers and Wasserstein distance estimators.',
    hint: 'The dual involves maximizing over "price" functions subject to a cost constraint.'
  },
  {
    id: 21361,
    topic: 'filippo-santambrogio',
    difficulty: 'hard',
    question: 'The c-transform of a function φ, defined as φᶜ(y) = inf_x [c(x,y) − φ(x)], plays what role in optimal transport?',
    options: [
      'It produces the conjugate dual potential, reducing the dual problem to a single-variable optimization',
      'It computes the Fourier transform of the cost function',
      'It yields the gradient of the Brenier map directly',
      'It computes the entropy of the transport plan'
    ],
    correctIndex: 0,
    explanation: 'The c-transform converts one dual variable into the other (ψ = φᶜ), allowing the Kantorovich dual to be written as a supremum over a single function φ, which is the semi-dual formulation.',
    realWorld: 'Semi-dual OT methods using the c-transform power scalable algorithms like the Makov-Cuturi approach for large-scale point cloud registration.',
    hint: 'It is the OT analog of the Legendre-Fenchel conjugate.'
  },
  {
    id: 21362,
    topic: 'filippo-santambrogio',
    difficulty: 'sota',
    question: 'Displacement interpolation (McCann, 1997), central to Santambrogio\'s exposition, interpolates between measures μ₀ and μ₁ along what path?',
    options: [
      'The geodesic in Wasserstein space: μₜ = ((1−t)id + t·T)#μ₀ where T is the optimal map',
      'The linear mixture μₜ = (1−t)μ₀ + tμ₁',
      'The geometric mean of densities: ρₜ = ρ₀^{1−t} · ρ₁^t / Z',
      'The shortest path in total variation distance'
    ],
    correctIndex: 0,
    explanation: 'Displacement interpolation moves mass along optimal transport geodesics, preserving geometric structure. Unlike linear interpolation, it does not create artificial bimodality.',
    realWorld: 'Displacement interpolation is used in image morphing, fluid simulation, and Wasserstein barycenters for data fusion.',
    hint: 'Mass particles travel along straight lines from their source to optimal target positions.'
  },
];
