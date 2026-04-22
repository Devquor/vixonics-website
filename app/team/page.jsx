'use client';

import PageHero from '@/components/PageHero';
import TeamCard from '@/components/TeamCard';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import styles from './page.module.css';

const leadership = [
  { name: 'Ahmad Raza', role: 'CEO & Co-Founder', skills: ['Strategy', 'Business Dev', 'Leadership'], size: 'large', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Sara Khan', role: 'CTO & Co-Founder', skills: ['System Design', 'Cloud Arch', 'React'], size: 'large', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Bilal Ahmed', role: 'Head of Design', skills: ['Figma', 'UX Research', 'Motion'], size: 'large', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=80' },
];

const coreTeam = [
  { name: 'Zainab Mirza', role: 'Lead Full-Stack Developer', skills: ['Next.js', 'PostgreSQL'], size: 'small', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Omar Farooq', role: 'Flutter Developer', skills: ['Flutter', 'Firebase'], size: 'small', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Ayesha Iqbal', role: 'AI/ML Engineer', skills: ['Python', 'TensorFlow'], size: 'small', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Hamza Butt', role: 'DevOps Engineer', skills: ['AWS', 'Docker', 'K8s'], size: 'small', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Rimsha Tariq', role: 'UI/UX Designer', skills: ['Figma', 'Framer'], size: 'small', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80' },
  { name: 'Ali Hassan', role: 'Backend Developer', skills: ['Node.js', 'GraphQL'], size: 'small', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=80' },
];

export default function Team() {
  return (
    <main>
      <PageHero title="Meet Our Team" subtitle="The passionate people who make great software happen" breadcrumb="Home → Team" />

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Leadership</h2>
          <div className="section-underline" />
        </AnimatedSection>
        <div className={styles.leadershipGrid}>
          {leadership.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 0.1}>
              <TeamCard {...m} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h2 className="section-title">Core Team</h2>
          <div className="section-underline" />
        </AnimatedSection>
        <div className={styles.coreGrid}>
          {coreTeam.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 0.08}>
              <TeamCard {...m} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>
              Want to Join the Team?
            </h3>
            <p className={styles.ctaText}>
              We&apos;re always looking for talented people who love building great software.
            </p>
            <Link href="/careers" className={styles.ctaBtn}>
              View Open Roles →
            </Link>
          </div>
        </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
