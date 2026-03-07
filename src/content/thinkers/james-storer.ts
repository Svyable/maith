import type { Question } from '../types';

export const jamesStorerQuestions: Question[] = [
  {
    id: 308019, topic: 'james-storer', difficulty: 'easy',
    question: 'James Storer and Thomas Szymanski refined LZ77 into LZSS (1982) by:',
    options: [
      'Using a flag bit to distinguish literals from match references, avoiding expansion on short matches',
      'Removing the sliding window entirely',
      'Adding lossy compression for images',
      'Switching to dictionary-based (LZ78) parsing'
    ],
    correctIndex: 0,
    explanation: 'LZSS adds a 1-bit flag before each token: 0 = literal byte, 1 = (offset, length) match. This prevents the overhead of encoding short matches that would be longer than the literal.',
    realWorld: 'LZSS directly influenced deflate (ZIP, gzip, PNG), making it arguably the most impactful compression refinement ever.',
    hint: 'A single flag bit decides: "copy from earlier" or "just store the byte."',
    glossaryLinks: ['lossless-compression'],
  },
  {
    id: 308020, topic: 'james-storer', difficulty: 'hard',
    question: 'The key theoretical insight of LZSS over LZ77 is:',
    options: [
      'Only encoding a match when it saves space (match length > reference overhead), improving compression on low-redundancy data',
      'Using larger dictionaries',
      'Compressing the sliding window itself',
      'Eliminating the need for decompression buffers'
    ],
    correctIndex: 0,
    explanation: 'LZ77 always outputs a triple (offset, length, next_char), wasting bits when no useful match exists. LZSS adaptively chooses between literals and matches based on which is shorter.',
    realWorld: 'This "only compress when it helps" principle is fundamental to all practical LZ variants.',
    hint: 'Don\'t waste bits encoding a "match" that\'s longer than just storing the data.',
  },
  {
    id: 308021, topic: 'james-storer', difficulty: 'sota',
    question: 'Deflate (RFC 1951), used in ZIP and PNG, combines LZSS with:',
    options: [
      'Huffman coding of the LZSS output — literal/length codes and distance codes in separate Huffman trees',
      'Arithmetic coding',
      'BWT post-processing',
      'ANS entropy coding'
    ],
    correctIndex: 0,
    explanation: 'Deflate uses LZSS for match finding, then encodes literals and match lengths with one Huffman tree and distances with another. The trees can be static or dynamic (stored in the stream).',
    realWorld: 'Deflate is the most widely deployed compression algorithm in history: ZIP, gzip, PNG, HTTP, PDF all use it.',
    hint: 'Two Huffman trees: one for what to copy (or literal), one for where to copy from.',
  },
];
