'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './GlowCard.module.css';

export default function GlowCard({ icon, title, description, link }) {
  const cardRef = useRef(null);
  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const maxAngle = 6;
    const rotateY = (dx / (rect.width / 2)) * maxAngle;
    const rotateX = -(dy / (rect.height / 2)) * maxAngle;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    setTimeout(() => {
      if (card) card.style.transition = '';
    }, 300);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -6,
        borderColor: 'var(--accent)',
        boxShadow: '0 0 30px rgba(37,99,235,0.2)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={styles.card}
    >
      {icon && (
        <div className={styles.icon}>
          {icon}
        </div>
      )}
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.desc}>
        {description}
      </p>
      {link && (
        <Link href={link} className={styles.link}>
          Learn More →
        </Link>
      )}
    </motion.div>
  );
}
