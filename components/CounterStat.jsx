'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './CounterStat.module.css';

export default function CounterStat({ end, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(end / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.number}>
        {count}
        <span>{suffix}</span>
      </div>
      <p className={styles.label}>
        {label}
      </p>
    </div>
  );
}
