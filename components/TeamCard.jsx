'use client';

import Image from 'next/image';

export default function TeamCard({ name, role, skills = [], size = 'small', image }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  const avatarSize = size === 'large' ? '80px' : '64px';
  const fontSize = size === 'large' ? '24px' : '20px';

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '28px',
        textAlign: 'center',
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: '50%',
          background: 'var(--gradient)',
          display: 'grid',
          placeItems: 'center',
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {image ? (
          <Image src={image} alt={`${name} portrait`} fill sizes="80px" style={{ objectFit: 'cover' }} />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontSize,
              fontWeight: '700',
              color: 'white',
            }}
          >
            {initials}
          </span>
        )}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-syne), Syne, sans-serif',
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-white)',
          marginTop: '12px',
          marginBottom: '4px',
        }}
      >
        {name}
      </h3>

      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px' }}>
        {role}
      </p>

      {skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginBottom: size === 'large' ? '16px' : '0' }}>
          {skills.map((skill) => (
            <span key={skill} className="pill-badge">
              {skill}
            </span>
          ))}
        </div>
      )}

      {size === 'large' && (
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} LinkedIn`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontSize: '13px', marginTop: '12px' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}
