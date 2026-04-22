'use client';

import { motion } from 'framer-motion';
import styles from './PageHero.module.css';

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        {breadcrumb && (
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.breadcrumb}
          >
            {breadcrumb}
          </motion.p>
        )}

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
