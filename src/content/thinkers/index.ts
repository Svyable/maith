import { hintonQuestions } from './hinton';
import { turingQuestions } from './turing';
import { shannonQuestions } from './shannon';
import { poincareQuestions } from './poincare';
import { riemannQuestions } from './riemann';
import { feynmanQuestions } from './feynman';
import { vonNeumannQuestions } from './vonneumann';
import { pearlQuestions } from './pearl';
import { simonsQuestions, ramanujanQuestions } from './simons-ramanujan';
// Ancient thinkers
import { euclidQuestions } from './euclid';
import { archimedесQuestions } from './archimedes';
import { newtonQuestions } from './newton';
import { eulerQuestions } from './euler';
import { pythagorasQuestions } from './pythagoras';
import { gaussQuestions } from './gauss';
// New ancient thinkers
import { leibnizQuestions } from './leibniz';
import { fermatQuestions } from './fermat';
import { alkhwarizmiQuestions } from './alkhwarizmi';
import { lovelaceQuestions } from './lovelace';
import { noetherQuestions } from './noether';
import { curieQuestions } from './curie';
// Modern thinkers
import { bengioQuestions } from './bengio';
import { lecunQuestions } from './lecun';
import { suttonQuestions } from './sutton';
import { goodfellowQuestions } from './goodfellow';
import { vapnikQuestions } from './vapnik';
import { einsteinQuestions } from './einstein';
import { godelQuestions } from './godel';
import { diracQuestions } from './dirac';
import { kolmogorovQuestions } from './kolmogorov';
import { hawkingQuestions } from './hawking';
// Contemporary thinkers
import { hassabisQuestions } from './hassabis';
import { vaswaniQuestions } from './vaswani';
import { karpathyQuestions } from './karpathy';
import { altmanQuestions } from './altman';
import { amodeiQuestions } from './amodei';
import { ngQuestions } from './ng';
import { lifeiQuestions } from './lifeifei';
import { ilyaQuestions } from './ilya';
// Global MasterMinds
import { taoQuestions } from './tao';
import { erdosQuestions } from './erdos';
import { ramanQuestions } from './raman';
import { mirzakhaniQuestions } from './mirzakhani';
import { chernQuestions } from './chern';
import { zhangQuestions } from './zhang';
import { goldwasserQuestions } from './goldwasser';
import { kashiwaraQuestions } from './kashiwara';
import { birkarQuestions } from './birkar';
import { grothendieckQuestions } from './grothendieck';
import { kovalevskayaQuestions } from './kovalevskaya';
// New additions
import { jeffDeanQuestions } from './jeffdean';
import { kaiFuLeeQuestions } from './kaifulee';
import { schmidhuberQuestions } from './schmidhuber';
import { linnainmaaQuestions } from './linnainmaa';
import { kozyrkovQuestions } from './kozyrkov';
import { suleymanQuestions } from './suleyman';
import { hilbertQuestions } from './hilbert';
import { gebruQuestions } from './gebru';
// Prodigies
import { pascalQuestions } from './pascal';
import { galoisQuestions } from './galois';
import { hamiltonWRQuestions } from './hamilton-wr';
import { abelQuestions } from './abel';
import { scholzeQuestions } from './scholze';
import { venkateshQuestions } from './venkatesh';
import { deviQuestions } from './devi';
import { demaineQuestions } from './demaine';
// Earth & Space thinkers
import { carlSaganQuestions } from './carl-sagan';
import { wegenerQuestions } from './wegener';
import { veraRubinQuestions } from './vera-rubin';
// Economics thinkers
import { adamSmithQuestions } from './adam-smith';
import { johnNashQuestions } from './john-nash';
import { keynesQuestions } from './keynes';
// Engineering thinkers
import { nikolaTeslaQuestions } from './nikola-tesla';
import { vonBraunQuestions } from './von-braun';
import { hedyLamarrQuestions } from './hedy-lamarr';
// Biology thinkers
import { darwinQuestions } from './darwin';
import { rosalindFranklinQuestions } from './rosalind-franklin';
import { doudnaQuestions } from './jennifer-doudna';
// Chemistry thinkers
import { mendeleevQuestions } from './mendeleev';
import { lavoisierQuestions } from './lavoisier';
import { paulingQuestions } from './pauling';
// Medical thinkers
import { flemingQuestions } from './fleming';
import { jennerQuestions } from './jenner';
// Quant thinkers
import { fischerBlackQuestions } from './fischer-black';
import { edThorpQuestions } from './ed-thorp';
// Human Sciences thinkers
import { kahnemanQuestions } from './kahneman';
import { pavlovQuestions } from './pavlov';
// Data Science thinkers
import { tukeyQuestions } from './tukey';
// π Pioneers & Trigonometry
import { vieteQuestions } from './viete';
import { wallisQuestions } from './wallis';
import { gregoryQuestions } from './gregory';
import { vanCeulenQuestions } from './van-ceulen';
import { alkashiQuestions as alkashiPiQuestions } from './al-kashi';
import { ptolemyQuestions } from './ptolemy';
import { hipparchusQuestions } from './hipparchus';
import { tusiQuestions } from './al-tusi';
// Cryptography Pioneers
import { satoshiQuestions } from './satoshi';
import { diffieQuestions } from './diffie-hellman';
import { shamirQuestions } from './shamir';
import { kerckhoffsQuestions } from './kerckhoffs';
import { merkleQuestions } from './merkle';
import { rivestQuestions } from './rivest';
// Applied Sciences: Optics, Comms, Semiconductors, Materials
import { alhazenQuestions } from './alhazen';
import { maxwellQuestions } from './maxwell';
import { marconiQuestions } from './marconi';
import { shockleyQuestions } from './shockley';
import { kilbyQuestions } from './kilby';
import { hookeQuestions } from './hooke';
import { hubbleQuestions } from './hubble';
import { georgeGreenQuestions } from './george-green';
import { faradayQuestions } from './faraday';
import { planckQuestions } from './planck';
import { bohrQuestions } from './bohr';
// New thinkers: Engineering, Economics, Quant, CS
import { kalmanQuestions } from './kalman';
import { wienerQuestions } from './wiener';
import { thalerQuestions } from './thaler';
import { senQuestions } from './sen';
import { mertonRobertQuestions } from './merton-robert';
import { markowitzQuestions } from './markowitz';
import { lamportQuestions } from './lamport';
import { martinLofQuestions } from './martin-lof';
import type { Question } from '../types';

export const allThinkerQuestions: Question[] = [
  // Original 10
  ...hintonQuestions,
  ...turingQuestions,
  ...shannonQuestions,
  ...poincareQuestions,
  ...riemannQuestions,
  ...feynmanQuestions,
  ...vonNeumannQuestions,
  ...pearlQuestions,
  ...simonsQuestions,
  ...ramanujanQuestions,
  // Ancient thinkers
  ...euclidQuestions,
  ...archimedесQuestions,
  ...newtonQuestions,
  ...eulerQuestions,
  ...pythagorasQuestions,
  ...gaussQuestions,
  // New ancient
  ...leibnizQuestions,
  ...fermatQuestions,
  ...alkhwarizmiQuestions,
  ...lovelaceQuestions,
  ...noetherQuestions,
  ...curieQuestions,
  // Modern
  ...bengioQuestions,
  ...lecunQuestions,
  ...suttonQuestions,
  ...goodfellowQuestions,
  ...vapnikQuestions,
  ...einsteinQuestions,
  ...godelQuestions,
  ...diracQuestions,
  ...kolmogorovQuestions,
  ...hawkingQuestions,
  // Contemporary
  ...hassabisQuestions,
  ...vaswaniQuestions,
  ...karpathyQuestions,
  ...altmanQuestions,
  ...amodeiQuestions,
  ...ngQuestions,
  ...lifeiQuestions,
  ...ilyaQuestions,
  // Global MasterMinds
  ...taoQuestions,
  ...erdosQuestions,
  ...ramanQuestions,
  ...mirzakhaniQuestions,
  ...chernQuestions,
  ...zhangQuestions,
  ...goldwasserQuestions,
  ...kashiwaraQuestions,
  ...birkarQuestions,
  ...grothendieckQuestions,
  ...kovalevskayaQuestions,
  // New additions
  ...jeffDeanQuestions,
  ...kaiFuLeeQuestions,
  ...schmidhuberQuestions,
  ...linnainmaaQuestions,
  ...kozyrkovQuestions,
  ...suleymanQuestions,
  ...hilbertQuestions,
  ...gebruQuestions,
  // Prodigies
  ...pascalQuestions,
  ...galoisQuestions,
  ...hamiltonWRQuestions,
  ...abelQuestions,
  ...scholzeQuestions,
  ...venkateshQuestions,
  ...deviQuestions,
  ...demaineQuestions,
  // Earth & Space
  ...carlSaganQuestions,
  ...wegenerQuestions,
  ...veraRubinQuestions,
  // Economics
  ...adamSmithQuestions,
  ...johnNashQuestions,
  ...keynesQuestions,
  // Engineering
  ...nikolaTeslaQuestions,
  ...vonBraunQuestions,
  ...hedyLamarrQuestions,
  // Biology
  ...darwinQuestions,
  ...rosalindFranklinQuestions,
  ...doudnaQuestions,
  // Chemistry
  ...mendeleevQuestions,
  ...lavoisierQuestions,
  ...paulingQuestions,
  // Medical
  ...flemingQuestions,
  ...jennerQuestions,
  // Quant
  ...fischerBlackQuestions,
  ...edThorpQuestions,
  // Human Sciences
  ...kahnemanQuestions,
  ...pavlovQuestions,
  // Data Science
  ...tukeyQuestions,
  // π Pioneers & Trigonometry
  ...vieteQuestions,
  ...wallisQuestions,
  ...gregoryQuestions,
  ...vanCeulenQuestions,
  ...alkashiPiQuestions,
  ...ptolemyQuestions,
  ...hipparchusQuestions,
  ...tusiQuestions,
  // Cryptography Pioneers
  ...satoshiQuestions,
  ...diffieQuestions,
  ...shamirQuestions,
  ...kerckhoffsQuestions,
  ...merkleQuestions,
  ...rivestQuestions,
  // Applied Sciences
  ...alhazenQuestions,
  ...maxwellQuestions,
  ...marconiQuestions,
  ...shockleyQuestions,
  ...kilbyQuestions,
  ...hookeQuestions,
  // New thinkers
  ...hubbleQuestions,
  ...georgeGreenQuestions,
  ...faradayQuestions,
  ...planckQuestions,
  ...bohrQuestions,
  // New thinkers
  ...kalmanQuestions,
  ...wienerQuestions,
  ...thalerQuestions,
  ...senQuestions,
  ...mertonRobertQuestions,
  ...markowitzQuestions,
  ...lamportQuestions,
  ...martinLofQuestions,
];
export function getThinkerQuestions(slug: string): Question[] {
  return allThinkerQuestions.filter((q) => q.topic === slug);
}
