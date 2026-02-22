import type { GlossaryTerm } from './types';

export const csTerms: GlossaryTerm[] = [
  { id: 'big-o', field: 'cs', term: 'Big-O Notation', definition: 'Describes the upper bound of an algorithm\'s time or space complexity as input grows: $O(n)$, $O(n \\log n)$, $O(n^2)$, etc.', example: 'Binary search is $O(\\log n)$ vs linear search\'s $O(n)$.' },
  { id: 'gradient-descent', field: 'cs', term: 'Gradient Descent', definition: 'An iterative optimisation algorithm that updates parameters in the direction $-\\nabla L$ to minimise a loss function $L$.', example: 'Training neural networks by adjusting millions of weights each step.' },
  { id: 'transformer', field: 'cs', term: 'Transformer', definition: 'A neural architecture using self-attention to process sequences in parallel, replacing recurrence. Introduced in "Attention Is All You Need" (2017).', example: 'GPT, BERT, and all modern LLMs are built on the Transformer.' },
  { id: 'backpropagation', field: 'cs', term: 'Backpropagation', definition: 'An algorithm that computes the gradient of the loss with respect to each weight by applying the chain rule layer-by-layer from output to input.', example: 'Every deep learning framework uses backprop to train models.' },
  { id: 'np-hard', field: 'cs', term: 'NP-Hard', definition: 'A problem class where no known polynomial-time algorithm exists. Every NP problem can be reduced to an NP-hard problem.', example: 'The Traveling Salesman Problem is NP-hard.' },
  { id: 'hash-function', field: 'cs', term: 'Hash Function', definition: 'Maps data of arbitrary size to a fixed-size value. Good hash functions are deterministic, uniform, and collision-resistant.', example: 'SHA-256 secures Bitcoin transactions and password storage.' },
  { id: 'overfitting', field: 'cs', term: 'Overfitting', definition: 'When a model learns noise in the training data rather than the underlying pattern, resulting in poor generalisation to new data.', example: 'A model with 99% train accuracy but 60% test accuracy is overfitting.' },
  { id: 'turing-complete', field: 'cs', term: 'Turing Completeness', definition: 'A system that can simulate any Turing machine, meaning it can compute anything that is computable given enough time and memory.', example: 'Python, C++, and even Conway\'s Game of Life are Turing-complete.' },
];
