import { motion } from 'framer-motion';
import { LatexRenderer } from './LatexRenderer';

interface OptionButtonProps {
  text: string;
  index: number;
  onSelect: (index: number) => void;
  disabled: boolean;
  state: 'default' | 'correct' | 'wrong' | 'reveal';
  /** Visually dim/strike the option as eliminated by 50/50 */
  eliminated?: boolean;
}

const labels = ['A', 'B', 'C', 'D'];

export function OptionButton({ text, index, onSelect, disabled, state, eliminated = false }: OptionButtonProps) {
  const stateClasses = {
    default: 'bg-card border-border hover:border-primary hover:glow-primary',
    correct: 'bg-success/15 border-success glow-success',
    wrong: 'bg-destructive/15 border-destructive glow-destructive',
    reveal: 'bg-success/10 border-success/50',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      animate={state === 'wrong' ? { x: [0, -8, 8, -8, 8, 0] } : undefined}
      transition={{ duration: 0.4 }}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-start gap-3 min-h-[52px] select-none overflow-hidden
        ${eliminated ? 'opacity-25 cursor-not-allowed line-through' : stateClasses[state]}
        ${disabled && state === 'default' && !eliminated ? 'opacity-50 cursor-not-allowed' : ''}
        ${!disabled ? 'cursor-pointer' : ''}
      `}
    >
      <span className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-mono text-sm font-bold ${
        state === 'correct' ? 'bg-success text-success-foreground' :
        state === 'wrong' ? 'bg-destructive text-destructive-foreground' :
        state === 'reveal' ? 'bg-success/30 text-success' :
        eliminated ? 'bg-secondary/30 text-muted-foreground' :
        'bg-secondary text-secondary-foreground'
      }`}>
        {eliminated ? '✕' : labels[index]}
      </span>
      <LatexRenderer text={text} className={`text-card-foreground leading-relaxed pt-1 ${eliminated ? 'text-muted-foreground' : ''}`} />
    </motion.button>
  );
}
