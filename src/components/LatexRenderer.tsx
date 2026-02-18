import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexRendererProps {
  text: string;
  className?: string;
}

export function LatexRenderer({ text, className = '' }: LatexRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Replace $...$ with rendered KaTeX
    const parts = text.split(/(\$[^$]+\$)/g);
    containerRef.current.innerHTML = '';

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
        const span = document.createElement('span');
        span.textContent = part;
        containerRef.current?.appendChild(span);
      }
    });
  }, [text]);

  return <div ref={containerRef} className={className} />;
}
