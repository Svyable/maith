import type { Question } from '../types';

export const jacobDevlinQuestions: Question[] = [
  {
    id: 32380, topic: 'jacob-devlin', difficulty: 'easy',
    question: 'Jacob Devlin created BERT, one of the most influential NLP models. What is BERT\'s pretraining approach?',
    options: [
      'Bidirectional masked language modeling: randomly mask 15% of input tokens and predict them using full bidirectional context: $$\\mathcal{L}_{\\text{MLM}} = -\\sum_{i \\in \\text{masked}} \\log P(x_i | x_{\\setminus i}; \\theta)$$ Unlike GPT (left-to-right), BERT\'s Transformer encoder attends to ALL positions simultaneously. Plus a secondary "next sentence prediction" (NSP) task. The key insight: bidirectional context captures deeper understanding than autoregressive (left-to-right) modeling.',
      'BERT uses autoregressive (left-to-right) language modeling, identical to GPT, but with a larger model.',
      'BERT is trained on image-text pairs using contrastive learning, like CLIP.',
      'BERT uses reinforcement learning from human feedback (RLHF) as its primary pretraining signal.'
    ],
    correctIndex: 0,
    explanation: 'BERT (2018) achieved state-of-the-art on 11 NLP benchmarks simultaneously upon release. The masked LM objective was inspired by the Cloze task from psycholinguistics. The bidirectional architecture is crucial: "bank" in "I went to the bank to deposit money" requires right context to disambiguate. BERT-base (110M params) and BERT-large (340M params) became the backbone for virtually all NLP from 2018-2022.',
    realWorld: 'BERT powers Google Search (understanding query intent), Gmail (smart compose), legal document analysis, clinical NLP (extracting diagnoses from medical records), and sentiment analysis at scale.',
    hint: 'Mask random words, predict them using context from BOTH sides — not just left-to-right like GPT.',
    formulaLinks: ['transformer', 'masked-language-model'],
  },
  {
    id: 32381, topic: 'jacob-devlin', difficulty: 'hard',
    question: 'BERT\'s fine-tuning approach was revolutionary. How does a single pretrained model adapt to diverse NLP tasks?',
    options: [
      'Add a thin task-specific layer on top of BERT\'s [CLS] token representation and fine-tune the ENTIRE model end-to-end: for classification, $P(y|x) = \\text{softmax}(W \\cdot h_{[\\text{CLS}]} + b)$; for token-level tasks (NER), $P(y_i|x) = \\text{softmax}(W \\cdot h_i + b)$; for span extraction (QA), predict start/end positions $P(\\text{start}=i) = \\text{softmax}(w_s^\\top h_i)$. The same pretrained weights adapt to all tasks — classification, NER, QA, entailment — by changing only the output head.',
      'Train a separate model from scratch for each task, using BERT\'s architecture but randomly initialized weights.',
      'Freeze BERT\'s weights entirely and train only the output layer — no fine-tuning of the pretrained model.',
      'Use BERT as a fixed feature extractor and train a random forest classifier on the extracted features.'
    ],
    correctIndex: 0,
    explanation: 'BERT\'s transfer learning recipe: (1) pretrain once on massive unlabeled text, (2) fine-tune cheaply on each downstream task with labeled data. The key insight is that fine-tuning ALL layers (not just the output head) is critical — the pretrained representations are good but need task-specific adjustment. With as few as 5,000 labeled examples, fine-tuned BERT outperforms task-specific models trained on 100x more data.',
    realWorld: 'BERT democratized NLP: before BERT, every NLP task required specialized architectures and massive labeled datasets. After BERT, a single pretrained model + small labeled dataset + fine-tuning = state-of-the-art. This reduced the cost and expertise required to deploy NLP by orders of magnitude.',
    hint: 'One pretrained model, many tasks — just swap the output head and fine-tune everything for each task.',
    formulaLinks: ['transfer-learning', 'fine-tuning'],
  },
  {
    id: 32382, topic: 'jacob-devlin', difficulty: 'sota',
    question: 'BERT\'s attention patterns reveal linguistic structure. What have probing studies discovered about what BERT learns?',
    options: [
      'BERT\'s internal representations encode a rich hierarchy of linguistic knowledge: Layer 1-4 encode surface features (POS tags, word identity) with accuracy >96%. Layers 5-8 encode syntactic structure — attention heads recover dependency parse trees with >80% UAS. Layers 9-12 encode semantic features (word sense disambiguation, coreference). Specific attention heads specialize: "syntax heads" attend from a word to its syntactic governor, "positional heads" attend to adjacent tokens, and "rare pattern heads" capture long-range dependencies.',
      'BERT learns no linguistic structure — its representations are uninterpretable random features.',
      'All layers learn identical representations — there is no hierarchy of linguistic knowledge.',
      'BERT only learns statistical co-occurrence patterns (like word2vec) — no syntax or semantics.'
    ],
    correctIndex: 0,
    explanation: 'Clark et al. (2019) and Tenney et al. (2019) discovered BERT\'s "NLP pipeline" — it recapitulates classical NLP stages (POS → parsing → NER → SRL → coreference) across its layers. Hewitt and Manning (2019) found that BERT\'s representations embed parse trees as linear transformations: the squared L2 distance between representations approximates tree distance. This suggests BERT implicitly learns syntactic structure without ever being trained on parse trees.',
    realWorld: 'Understanding what BERT learns is crucial for: (1) AI safety (what knowledge is encoded?), (2) model compression (which layers/heads can be pruned?), (3) curriculum design (what\'s hard for the model?), and (4) the science of language (do neural networks learn grammar like humans?).',
    hint: 'BERT rediscovers the classical NLP pipeline — POS tagging in early layers, syntax in middle, semantics in late layers.',
    formulaLinks: ['attention-mechanism', 'probing-classifiers'],
  },
];
