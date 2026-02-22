import type { GlossaryTerm } from './types';

export const economicsTerms: GlossaryTerm[] = [
  { id: 'supply-demand', field: 'economics', term: 'Supply & Demand', definition: 'The fundamental model where price is determined by the intersection of how much producers will supply and how much consumers will buy.', example: 'Oil price spikes when OPEC cuts supply while demand stays constant.' },
  { id: 'gdp', field: 'economics', term: 'Gross Domestic Product (GDP)', definition: 'The total monetary value of all finished goods and services produced within a country\'s borders in a specific period.', example: 'US GDP is roughly $28 trillion annually.' },
  { id: 'nash-equilibrium', field: 'economics', term: 'Nash Equilibrium', definition: 'A state in a game where no player can improve their payoff by unilaterally changing their strategy, given other players\' strategies.', example: 'Two competing firms choosing identical prices in a Bertrand duopoly.' },
  { id: 'moral-hazard', field: 'economics', term: 'Moral Hazard', definition: 'When an entity takes on more risk because it does not bear the full consequences of that risk.', example: 'Banks taking excessive risks knowing they\'ll be bailed out by governments.' },
  { id: 'opportunity-cost', field: 'economics', term: 'Opportunity Cost', definition: 'The value of the best alternative forgone when making a choice. Every decision has an implicit cost.', example: 'Attending university has an opportunity cost of 4 years of potential salary.' },
  { id: 'elasticity', field: 'economics', term: 'Elasticity', definition: 'Measures how much quantity demanded or supplied responds to a change in price: $E = \\frac{\\%\\Delta Q}{\\%\\Delta P}$.', example: 'Luxury goods are highly elastic; insulin is highly inelastic.' },
  { id: 'inflation', field: 'economics', term: 'Inflation', definition: 'A sustained increase in the general price level of goods and services, eroding purchasing power over time.', example: 'Central banks target ~2% annual inflation as a stability benchmark.' },
];
