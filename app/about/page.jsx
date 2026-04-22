'use client';

import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import GlowCard from '@/components/GlowCard';
import TeamCard from '@/components/TeamCard';
import Link from 'next/link';
import styles from './page.module.css';

const timeline = [
  { year: '2021', text: 'Vixonics founded by Ahmad Raza in Cantt, Lahore with a team of 3 developers.' },
  { year: '2022', text: 'Expanded to mobile app development; delivered first enterprise client project.' },
  { year: '2023', text: 'Launched AI & ML division; grew team to 15+ professionals.' },
  { year: '2024', text: 'Serving 30+ active clients across Pakistan, Gulf, and Europe.' },
];

const values = [
  {
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01 3 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"/></svg>,
    title: 'Quality First',
    description: 'We never ship code we aren\'t proud of. Every line is reviewed, tested, and optimized.',
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>,
    title: 'Innovation Driven',
    description: 'We stay ahead of the curve — AI, cloud-native, serverless. Always evolving.',
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>,
    title: 'Client-Centric',
    description: 'Your success is our success. Weekly updates, transparent communication, always.',
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    title: 'On-Time Delivery',
    description: 'We respect deadlines. Our agile process ensures predictable, timely delivery.',
  },
];

export default function About() {
  return (
    <main>
      <PageHero
        title="About Vixonics"
        subtitle="Our story, mission, and the team behind the work"
        breadcrumb="Home → About"
      />

      {/* Our Story */}
      <section className={styles.section}>
        <div className={`container ${styles.storyGrid}`}>
          {/* Left: paragraphs */}
          <AnimatedSection direction="left">
            <h2 className="section-title">Our Story</h2>
            <div className="section-underline" />
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              Vixonics was born in 2021 from a simple belief: Pakistani talent deserves world-class tools and opportunities. Founded in Cantt, Lahore, we started as a small team of passionate engineers who wanted to build technology that matters.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              Over three years, we have grown from a 3-person startup to a full-service software house serving clients across Pakistan, the Gulf, and Europe. Our portfolio spans healthcare, fintech, logistics, e-commerce, and more.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8' }}>
              Today, Vixonics is recognized as one of Lahore's emerging tech companies, known for clean code, reliable delivery, and a team that genuinely cares about client success.
            </p>
          </AnimatedSection>

          {/* Right: Timeline */}
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} direction="right" delay={i * 0.12}>
                <div className={styles.timelineRow} style={{ paddingBottom: i < timeline.length - 1 ? '32px' : '0' }}>
                  {i < timeline.length - 1 && (
                    <div style={{ position: 'absolute', left: '10px', top: '28px', width: '2px', height: 'calc(100% - 4px)', background: 'var(--border)' }} />
                  )}
                  <div className={styles.timelineDot} />
                  <div>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} ${styles.secondary}`}>
        <div className={`container ${styles.missionGrid}`}>
          <AnimatedSection direction="left">
            <div style={{ background: 'var(--bg-card)', borderLeft: '4px solid var(--accent)', borderRadius: 'var(--radius-md)', padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '24px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '14px' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
                To empower businesses with cutting-edge digital solutions — building scalable, reliable, and beautiful software that drives measurable growth and lasting impact.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div style={{ background: 'var(--bg-card)', borderLeft: '4px solid #7C3AED', borderRadius: 'var(--radius-md)', padding: '36px' }}>
              <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '24px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '14px' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
                To be the most trusted software partner for businesses in Pakistan and across emerging markets, recognized globally for innovation, quality, and integrity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Core Values</h2>
          <div className="section-underline" />
        </AnimatedSection>
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <GlowCard icon={v.icon} title={v.title} description={v.description} />
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.secondary}`}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">The Team</h2>
            <div className="section-underline" />
          </AnimatedSection>
          <div className={styles.teamGrid}>
            {[
              { name: 'Ahmad Raza', role: 'CEO & Founder', skills: ['Strategy', 'Biz Dev'], size: 'large', image: 'https://images.unsplash.com/photo-1693021652671-7b3623af0f93?auto=format&fit=crop&w=600&h=600&q=80' },
              { name: 'Sara Khan', role: 'CTO', skills: ['System Design', 'Arch'], size: 'large', image: 'https://images.unsplash.com/photo-1702974776993-1ce5ec6ab27b?auto=format&fit=crop&w=600&h=600&q=80' },
              { name: 'Bilal Ahmed', role: 'Head of Design', skills: ['Figma', 'UX'], size: 'large', image: 'https://images.unsplash.com/photo-1602133187081-4874fdbd555c?auto=format&fit=crop&w=600&h=600&q=80' },
              { name: 'Zainab Mirza', role: 'Lead Developer', skills: ['React', 'Node.js'], size: 'large', image: 'https://images.unsplash.com/photo-1773439877295-15e34acb4ae0?auto=format&fit=crop&w=600&h=600&q=80' },
            ].map((m) => (
              <AnimatedSection key={m.name} delay={0.1}>
                <TeamCard {...m} />
              </AnimatedSection>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/team" className="btn-outline">Meet Full Team →</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <div className={styles.locationCard}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            <div>
              <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '22px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '8px' }}>Based in Lahore, Pakistan</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Cantt, Lahore, Pakistan · Open Mon–Sat 9am–7pm PKT</p>
            </div>
          </div>
        </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
