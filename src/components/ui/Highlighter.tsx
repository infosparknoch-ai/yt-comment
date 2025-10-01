import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HighlighterProps {
  children: ReactNode;
  action?: 'highlight' | 'underline';
  color?: string;
}

export function Highlighter({ children, action = 'highlight', color = '#FF9800' }: HighlighterProps) {
  if (action === 'underline') {
    return (
      <span className="relative inline-block">
        <span className="relative z-10">{children}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 w-full h-0.5 origin-left"
          style={{ backgroundColor: color }}
        />
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 origin-left opacity-30"
        style={{ backgroundColor: color }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}