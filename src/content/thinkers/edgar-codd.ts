import type { Question } from '../types';

export const edgarCoddQuestions: Question[] = [
  {
    id: 31010,
    topic: 'edgar-codd',
    difficulty: 'easy',
    question: 'Before Codd published his 1970 paper on the Relational Model, how were large-scale corporate databases primarily structured?',
    options: [
      'As rigid hierarchical or network structures requiring navigational data links.',
      'As unstructured text files partitioned across multiple localized hard drives.',
      'As graph-based nodes relying on memory-heavy recursive traversal paths.',
      'As strictly chronological log-append ledgers without direct indexing.'
    ],
    correctIndex: 0,
    explanation: 'Pre-relational databases (like IBM’s IMS) used tree-like hierarchical or network models. To find data, programmers had to write code to physically "navigate" from a parent record down through specific pointer chains to the child records.',
    realWorld: 'Codd’s relational model decoupled the logic of querying data from the physical storage on the disk, creating the foundation for SQL.',
    hint: 'You had to follow a breadcrumb trail of specific physical pointers to find what you were looking for.',
  },
  {
    id: 31011,
    topic: 'edgar-codd',
    difficulty: 'hard',
    question: 'In Codd’s Relational Algebra, which mathematical operation is responsible for extracting specific COLUMNS from a table?',
    options: [
      'Projection ($\\pi$)',
      'Selection ($\\sigma$)',
      'Cartesian Product ($\\times$)',
      'Natural Join ($\\bowtie$)'
    ],
    correctIndex: 0,
    explanation: 'Projection (denoted by $\\pi$) creates a new relation containing only the specified attributes (columns). Selection ($\\sigma$) is used to extract specific rows based on a condition.',
    realWorld: 'In modern SQL, Projection corresponds directly to the `SELECT column_name` statement, while Selection corresponds to the `WHERE` clause.',
    hint: 'Think about throwing an image onto a wall—you are only showing a specific "slice" of the data vertically.',
  },
  {
    id: 31012,
    topic: 'edgar-codd',
    difficulty: 'easy',
    question: 'According to Codd’s definition of First Normal Form (1NF), what must be true about the data inside a relational table?',
    options: [
      'Every attribute value must be atomic, meaning it cannot contain repeating groups.',
      'Every non-key attribute must rely on the entire primary key, not just a part of it.',
      'There must be no transitive dependencies between any non-primary key attributes.',
      'The table must contain a sequentially incrementing integer as its primary key.'
    ],
    correctIndex: 0,
    explanation: '1NF dictates that a table’s columns must hold indivisible (atomic) values. You cannot have an array, a list, or repeating groups of data hidden inside a single cell.',
    realWorld: 'Normalizing data prevents update anomalies. If a cell contains "Apple, Banana", searching or updating just "Banana" becomes computationally expensive and error-prone.',
    hint: 'You cannot put a table inside of a table cell.',
  },
  {
    id: 31013,
    topic: 'edgar-codd',
    difficulty: 'sota',
    question: 'What is the absolute mandate of "Rule 0" in Codd’s famous 12 Rules for Relational Database Systems?',
    options: [
      'The system must manage the database entirely through its relational capabilities.',
      'The physical storage mechanism must be completely invisible to the end user.',
      'Every single data point must be accessible via Table Name, Column, and Primary Key.',
      'The database must support a robust, transaction-safe internal rollback mechanism.'
    ],
    correctIndex: 0,
    explanation: 'Rule 0 is the foundational rule: For a system to qualify as a Relational Database Management System (RDBMS), it must use exclusively its relational facilities (not navigational backdoors) to manage the data.',
    realWorld: 'Codd wrote these rules in 1985 because vendors were slapping "Relational" onto old hierarchical databases for marketing purposes without actually implementing the math.',
    hint: 'It is the ultimate gatekeeping rule that invalidates all hybrid "shortcut" architectures.',
  },
  {
    id: 31014,
    topic: 'edgar-codd',
    difficulty: 'hard',
    question: 'Which theoretical concept did Codd introduce to ensure that a database does not lose information when it is split into multiple smaller tables?',
    options: [
      'Lossless-Join Decomposition',
      'Referential Integrity Constraints',
      'Multivalued Dependency Normalization',
      'The ACID Transaction Guarantee'
    ],
    correctIndex: 0,
    explanation: 'Lossless-join decomposition ensures that if you break a large table into smaller normalized tables, you can reconstruct the exact original table using a Natural Join without generating "spurious" (fake) rows.',
    realWorld: 'This math guarantees that when a bank separates your "User Profile" from your "Account Balances," querying them together returns only your actual accounts.',
    hint: 'When you put the pieces back together, you shouldn’t gain or lose any data.',
  }
];