'use client';

import { motion, useReducedMotion } from 'framer-motion';

const directionMap = {
  up:    { initial: { opacity: 0, y: 50 },  animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 60 },  animate: { opacity: 1, x: 0 } },
};

export default function AnimatedSection({ children, delay = 0, direction = 'up' }) {
  const { initial, animate } = directionMap[direction] || directionMap.up;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={initial}
      whileInView={shouldReduceMotion ? undefined : animate}
      viewport={{ once: true, margin: '150px' }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
