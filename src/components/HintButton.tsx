import { motion } from 'framer-motion';

interface HintButtonProps {
  onHint: () => void;
  used: boolean;
}

export function HintButton({ onHint, used }: HintButtonProps) {
  return (
    <motion.button
      whileHover={!used ? { scale: 1.05 } : undefined}
      whileTap={!used ? { scale: 0.95 } : undefined}
      onClick={onHint}
      disabled={used}
      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
        used
          ? 'bg-secondary/50 border-border text-muted-foreground cursor-not-allowed opacity-50'
          : 'bg-accent/10 border-accent/30 text-accent hover:bg-accent/20'
      }`}
    >
      {used ? '💡 Used' : '💡 50/50 Hint'}
    </motion.button>
  );
}
