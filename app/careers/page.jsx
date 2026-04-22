'use client';

import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const benefits = [
  { icon: '🏠', title: 'Remote-Friendly', desc: 'Work from anywhere in Pakistan. We trust our team to deliver, wherever they are.' },
  { icon: '📈', title: 'Growth Culture', desc: 'Regular learning sessions, conference sponsorships, and a clear promotion path.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Above-market salaries, performance bonuses, and yearly increments.' },
  { icon: '🤝', title: 'Great Team', desc: 'Work alongside experienced, passionate engineers who push each other to grow.' },
];

export default function Careers() {
  return (
    <main>
      <PageHero title="Careers at Vixonics" subtitle="Build your career with a growing software house" breadcrumb="Home → Careers" />

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Why Work With Us</h2>
          <div className="section-underline" />
        </AnimatedSection>
        <div className={styles.benefitsGrid}>
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '18px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '10px' }}>{b.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Current openings */}
        <AnimatedSection>
          <h2 className="section-title">Current Openings</h2>
          <div className="section-underline" />
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.noOpeningsCard}>
            <h3 className={styles.noOpeningsTitle}>No positions are available right now.</h3>
            <p className={styles.noOpeningsText}>
              We are not actively hiring at the moment, but we are always happy to connect with talented people for future roles.
            </p>
            <a
              href="mailto:careers@vixonics.com?subject=Talent%20Pool%20Application"
              className={`btn-primary ${styles.notifyBtn}`}
            >
              Join Our Talent Pool
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', textAlign: 'center', marginTop: '32px' }}>
            Follow us for updates or send your CV to{' '}
            <a href="mailto:careers@vixonics.com" style={{ color: 'var(--accent)' }}>careers@vixonics.com</a> to be considered when new opportunities open.
          </p>
        </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
