import type { Question } from '../types';

export const alecRadfordQuestions: Question[] = [
  {
    id: 32330, topic: 'alec-radford', difficulty: 'easy',
    question: 'Alec Radford at OpenAI authored some of the most impactful papers in modern AI. What was the key insight behind GPT (Generative Pre-Training)?',
    options: [
      'Unsupervised pretraining on raw text via autoregressive language modeling, followed by supervised fine-tuning on downstream tasks. The pretraining objective is: $$\\mathcal{L}_{\\text{pretrain}} = -\\sum_{t} \\log P(x_t | x_{<t}; \\theta)$$ The breakthrough: a single pretrained Transformer, fine-tuned with minimal task-specific architecture, matches or beats task-specific models on 9/12 benchmarks. This established the "pretrain-then-fine-tune" paradigm that powers all modern LLMs.',
      'Training a recurrent network on labeled data from scratch for each task independently.',
      'Using reinforcement learning from human feedback (RLHF) as the primary training objective.',
      'Pretraining a model on images, then transferring visual features to text understanding.'
    ],
    correctIndex: 0,
    explanation: 'GPT-1 (2018) showed that language modeling — simply predicting the next word — produces representations that transfer remarkably well. The key architectural choice: using the Transformer decoder (causal attention) rather than the encoder (bidirectional, used by BERT). GPT-2 (2019) scaled this up and showed that "zero-shot" task performance improves with scale. GPT-3 (2020) demonstrated "in-context learning" — performing tasks from examples in the prompt without any gradient updates.',
    realWorld: 'The GPT series launched the LLM revolution: ChatGPT, Claude, Gemini, and all modern AI assistants are direct descendants of Radford\'s pretraining approach. The "pretrain on all text, then prompt" paradigm is now the dominant AI methodology.',
    hint: 'Just predict the next word on lots of text — then the model can do almost anything with minimal fine-tuning.',
    formulaLinks: ['transformer', 'language-modeling'],
  },
  {
    id: 32331, topic: 'alec-radford', difficulty: 'hard',
    question: 'Radford co-invented CLIP (Contrastive Language-Image Pretraining). What is CLIP\'s training objective?',
    options: [
      'Contrastive learning between image-text pairs: given a batch of $N$ (image, text) pairs, maximize the cosine similarity of matching pairs while minimizing it for non-matching pairs. The loss is symmetric InfoNCE: $$\\mathcal{L} = -\\frac{1}{2N} \\sum_{i=1}^N \\left[\\log \\frac{\\exp(\\text{sim}(I_i, T_i)/\\tau)}{\\sum_j \\exp(\\text{sim}(I_i, T_j)/\\tau)} + \\log \\frac{\\exp(\\text{sim}(T_i, I_i)/\\tau)}{\\sum_j \\exp(\\text{sim}(T_i, I_j)/\\tau)}\\right]$$ where $\\text{sim}$ is cosine similarity and $\\tau$ is a learnable temperature.',
      'CLIP is trained by generating captions for images using a language model, then comparing them to ground-truth captions.',
      'CLIP uses pixel-level prediction — reconstructing images from text descriptions via a decoder network.',
      'CLIP is trained on ImageNet classification labels extended with template captions like "a photo of a {class}."'
    ],
    correctIndex: 0,
    explanation: 'CLIP (2021) was trained on 400M image-text pairs scraped from the internet. The contrastive objective learns a shared embedding space where images and text with matching semantics are nearby. Zero-shot classification works by encoding class names as text ("a photo of a dog") and finding the closest text embedding to the image embedding. CLIP achieves ImageNet accuracy competitive with supervised ResNet-50 — without seeing any ImageNet training images.',
    realWorld: 'CLIP is the foundation for DALL-E, Stable Diffusion, Midjourney (text-to-image), and powers image search, content moderation, and multimodal AI systems. Its embedding space is the "lingua franca" of vision-language AI.',
    hint: 'Match images to their text descriptions in a shared space — using contrastive learning on 400M internet pairs.',
    formulaLinks: ['contrastive-learning', 'clip'],
  },
  {
    id: 32332, topic: 'alec-radford', difficulty: 'sota',
    question: 'Radford also created Whisper, a universal speech recognition model. What makes its approach distinctive?',
    options: [
      'Weak supervision at massive scale: Whisper is trained on 680,000 hours of audio with existing (noisy) transcripts scraped from the internet, using a simple encoder-decoder Transformer. The key insight: scale of weakly-labeled data > quality of small clean datasets. The model jointly handles: speech recognition, translation (any language → English), language identification, and timestamp prediction — all as a single sequence-to-sequence task with special tokens: $\\langle|\\text{lang}|\\rangle \\langle|\\text{task}|\\rangle \\langle|\\text{timestamps}|\\rangle \\text{text}$.',
      'A phoneme-based system that converts speech to phonemes, then phonemes to text using a pronunciation dictionary.',
      'A self-supervised model trained on unlabeled audio using contrastive predictive coding (CPC) — no transcripts needed.',
      'A small model trained on 1,000 hours of perfectly transcribed TED talks, fine-tuned for each language separately.'
    ],
    correctIndex: 0,
    explanation: 'Whisper\'s philosophy mirrors GPT: scale the data, simplify the architecture, and let the model figure out the rest. Previous ASR systems used complex pipelines (acoustic model → language model → decoder). Whisper replaces this with a single Transformer trained end-to-end. The 680K hours of training data is ~10x larger than any previous supervised ASR dataset. The multitask framing (transcribe/translate/identify) emerges naturally from the diverse training data.',
    realWorld: 'Whisper powers real-time transcription, YouTube captions, meeting notes, and accessibility tools worldwide. It works across 99 languages and is open-source — democratizing speech recognition technology.',
    hint: 'Not clean data — massive noisy data from the internet. One model does transcription, translation, and language ID.',
    formulaLinks: ['transformer', 'speech-recognition'],
  },
];
