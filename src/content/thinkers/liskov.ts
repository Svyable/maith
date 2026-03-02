// liskov.ts
import type { Question } from '../types';

export const liskovQuestions: Question[] = [
  {
    id: 67025,
    topic: 'liskov',
    difficulty: 'easy',
    question:
      'Barbara Liskov is associated with the Liskov Substitution Principle (LSP). What does LSP state (informally)?',
    options: [
      'Objects of a subtype should be usable wherever objects of the supertype are expected, without breaking correctness',
      'Subtypes must add at least one new method',
      'Inheritance always improves design',
      'All functions must be pure'
    ],
    correctIndex: 0,
    explanation:
      'LSP is about behavioral substitutability: subtype instances must honor the expectations (contracts) of the base type.',
    realWorld:
      'Prevents brittle inheritance hierarchies and API surprises; central to SOLID design principles.',
    hint:
      'Subtype must not violate base-type promises.'
  },
  {
    id: 67026,
    topic: 'liskov',
    difficulty: 'hard',
    question:
      'In Design by Contract terms, LSP implies what relationship between preconditions and postconditions when overriding a method?',
    options: [
      'A subtype should not strengthen preconditions and should not weaken postconditions',
      'A subtype should strengthen both preconditions and postconditions',
      'A subtype should weaken preconditions and weaken postconditions',
      'Contracts are irrelevant under inheritance'
    ],
    correctIndex: 0,
    explanation:
      'To remain substitutable, the derived method must accept at least what the base accepts (no stronger preconditions) and guarantee at least what the base guarantees (no weaker postconditions).',
    realWorld:
      'Explains classic pitfalls like “Square is not a Rectangle” when mutability and setters are involved.',
    hint:
      'Accept more (or equal), promise more (or equal).'
  },
  {
    id: 67027,
    topic: 'liskov',
    difficulty: 'hard',
    question:
      'Which example is a classic violation of LSP in object-oriented design?',
    options: [
      'Implementing Square as a subtype of Rectangle when Rectangle allows independent width/height mutation',
      'Using an interface to abstract over two implementations',
      'Replacing a concrete class with a subclass that preserves behavior',
      'Refactoring duplicate code into a helper function'
    ],
    correctIndex: 0,
    explanation:
      'If a Rectangle API allows setWidth and setHeight independently, a Square subtype must break that expectation or silently change behavior, violating substitutability.',
    realWorld:
      'Motivates composition over inheritance and careful design of mutable APIs.',
    hint:
      'Square/Rectangle is the famous one.'
  },
  {
    id: 67028,
    topic: 'liskov',
    difficulty: 'sota',
    question:
      'Liskov also contributed to distributed systems (e.g., CLU and later work on replication). In fault-tolerant replication, what property does “linearizability” aim to guarantee?',
    options: [
      'Operations appear to occur atomically in a single global order consistent with real-time order',
      'Operations may be observed in any order as long as each node is consistent locally',
      'Only eventual consistency is required',
      'Reads are allowed to return arbitrary stale values forever'
    ],
    correctIndex: 0,
    explanation:
      'Linearizability is a strong consistency condition: each operation takes effect at some instant between invocation and response, yielding behavior like a single correct copy.',
    realWorld:
      'Used as a correctness target for distributed locks, key-value stores, and consensus-backed services.',
    hint:
      '“As if there were one copy.”'
  },
  {
    id: 67029,
    topic: 'liskov',
    difficulty: 'sota',
    question:
      'A practical way to avoid LSP violations is to program to abstractions. Which approach most directly supports substitutability?',
    options: [
      'Define small interfaces with clear contracts (pre/postconditions) and favor composition over deep inheritance',
      'Rely on runtime type checks everywhere (instanceof) to special-case subtypes',
      'Expose all fields as public so subtypes can modify them freely',
      'Use global variables so behavior is uniform'
    ],
    correctIndex: 0,
    explanation:
      'Clear contracts + composition reduce brittle subclass coupling and make substitution safe and predictable.',
    realWorld:
      'Common guidance in API design and microservice boundaries: explicit contracts beat implicit inheritance assumptions.',
    hint:
      'Small contracts + composition = safer substitution.'
  }
];