'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags = [], category, gradient, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Project preview */}
      <div
        style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0', background: gradient || 'var(--gradient)', overflow: 'hidden' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {image && (
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>View Project →</span>
        </motion.div>
      </div>

      <div style={{ padding: '20px' }}>
        {category && (
          <span
            style={{
              fontSize: '11px',
              color: 'var(--accent)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {category}
          </span>
        )}
        <h3
          style={{
            fontFamily: 'var(--font-syne), Syne, sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            color: 'var(--text-white)',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            marginBottom: '14px',
          }}
        >
          {description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tags.map((tag) => (
            <span key={tag} className="pill-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
