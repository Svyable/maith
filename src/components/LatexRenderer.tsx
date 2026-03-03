import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexRendererProps {
  text: string;
  className?: string;
}

// Splits plain text into segments of markdown links and plain text
function parseMarkdownLinks(raw: string): { type: 'text' | 'link'; text: string; href?: string }[] {
  const result: { type: 'text' | 'link'; text: string; href?: string }[] = [];
  const linkRe = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(raw)) !== null) {
    if (m.index > last) result.push({ type: 'text', text: raw.slice(last, m.index) });
    result.push({ type: 'link', text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < raw.length) result.push({ type: 'text', text: raw.slice(last) });
  return result;
}

export function LatexRenderer({ text, className = '' }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    // First split on LaTeX $...$
    const parts = text.split(/(\$[^$]+\$)/g);

    parts.forEach((part) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        const span = document.createElement('span');
        try {
          katex.render(math, span, { throwOnError: false, displayMode: false });
        } catch {
          span.textContent = math;
        }
        containerRef.current?.appendChild(span);
      } else {
        // Parse markdown links within plain text segments
        const segments = parseMarkdownLinks(part);
        segments.forEach((seg) => {
          if (seg.type === 'link') {
            const a = document.createElement('a');
            a.href = seg.href!;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = seg.text;
            a.className = 'text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid';
            containerRef.current?.appendChild(a);
          } else {
            const span = document.createElement('span');
            span.textContent = seg.text;
            containerRef.current?.appendChild(span);
          }
        });
      }
    });
  }, [text]);

  return <div ref={containerRef} className={className} />;
}
