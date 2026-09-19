import { toSeoSlug } from './reference-utils';

export const FORMULA_REFERENCE_ALIASES: Record<string, string | null> = {
  'higgs-potential': 'higgs-mechanism',
  'kohn-sham': 'density-functional-theory-kohn-sham',
  'bekenstein-hawking': 'bekenstein-hawking-entropy',
  'cauchy-riemann': null,
  'riemann-zeta': 'riemann-zeta-function',
  'euler-polyhedron': 'eulers-polyhedral-formula',
  'gauss-bonnet': 'gauss-bonnet-theorem',
  'newton-raphson': null,
  'conformal-prediction': 'conformal-prediction-coverage',
  'gam-additive-model': 'gam-generalized-additive-model',
  'brenier-map': 'brenier-map-quadratic-ot',
  'penrose-or-timescale': 'penrose-objective-reduction-timescale',
};

export const THINKER_REFERENCE_ALIASES: Record<string, string | null> = {
  boltzmann: 'ludwig-boltzmann',
  gibbs: 'willard-gibbs',
  onsager: null,
  wilson: 'kenneth-wilson',
  dirac: 'paul-dirac',
  einstein: 'albert-einstein',
  feynman: 'richard-feynman',
  dyson: 'freeman-dyson',
  alfven: 'hannes-alfven',
  lyapunov: 'aleksandr-lyapunov',
  lorenz: 'edward-lorenz',
  kohn: null,
  maldacena: 'juan-maldacena',
  thooft: 'gerard-thooft',
  susskind: 'leonard-susskind',
  cauchy: 'augustin-louis-cauchy',
  riemann: 'bernhard-riemann',
  euler: 'leonhard-euler',
  hilbert: 'david-hilbert',
  banach: 'stefan-banach',
  gauss: 'carl-friedrich-gauss',
  newton: 'isaac-newton',
};

export const UNRESOLVED_GLOSSARY_RELATED_IDS = new Set([
  'sam',
  'prediction-interval',
  'birkhoff-polytope',
]);

export function resolveFormulaRouteSlug(reference: string): string | null {
  const key = toSeoSlug(reference);
  return Object.prototype.hasOwnProperty.call(FORMULA_REFERENCE_ALIASES, key)
    ? FORMULA_REFERENCE_ALIASES[key]
    : key;
}

export function resolveThinkerRouteSlug(reference: string): string | null {
  const key = toSeoSlug(reference);
  return Object.prototype.hasOwnProperty.call(THINKER_REFERENCE_ALIASES, key)
    ? THINKER_REFERENCE_ALIASES[key]
    : key;
}

export function shouldLinkGlossaryRelatedId(id: string): boolean {
  return !UNRESOLVED_GLOSSARY_RELATED_IDS.has(id);
}
