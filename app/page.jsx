'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CounterStat from '@/components/CounterStat';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import styles from './page.module.css';

/* ── Service icons ── */
const icons = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9M3 12h18" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.41 2.7H4.21C2.77 18.4 1.8 16.7 2.8 15.7L4.2 14.3" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
};

const services = [
  { icon: icons.web, title: 'Web Development', description: 'React, Next.js, and full-stack web applications built to scale.', slug: 'web-development' },
  { icon: icons.mobile, title: 'Mobile Apps', description: 'Cross-platform iOS & Android apps with Flutter and React Native.', slug: 'mobile-apps' },
  { icon: icons.design, title: 'UI/UX Design', description: 'User-centered design with Figma — beautiful, intuitive interfaces.', slug: 'ui-ux-design' },
  { icon: icons.ai, title: 'AI & ML Solutions', description: 'Custom AI integrations, chatbots, NLP & machine learning pipelines.', slug: 'ai-ml' },
  { icon: icons.cloud, title: 'Cloud & DevOps', description: 'AWS, GCP, Docker, CI/CD pipelines — reliable cloud infrastructure.', slug: 'cloud-devops' },
  { icon: icons.ecommerce, title: 'E-commerce', description: 'Custom storefronts, Shopify/WooCommerce, payments & logistics.', slug: 'ecommerce' },
];

const projects = [
  { title: 'MediTrack Pro', description: 'Healthcare management platform for clinics across Pakistan.', tags: ['Next.js', 'PostgreSQL', 'AWS'], category: 'Web', image: '/images/visuals/web-platform.jpg' },
  { title: 'SafeRide PK', description: 'GPS-based ride-hailing mobile app with real-time tracking.', tags: ['Flutter', 'Firebase', 'Google Maps'], category: 'Mobile', image: '/images/visuals/mobile-app.jpg' },
  { title: 'AgroAI', description: 'AI-powered crop disease detection for Pakistani farmers.', tags: ['Python', 'TensorFlow', 'FastAPI'], category: 'AI', image: '/images/visuals/ai-dashboard.jpg' },
];

const testimonials = [
  { quote: 'Vixonics delivered our e-commerce platform on time and within budget. The quality is exceptional — our sales grew 40% after launch.', name: 'Usman Tariq', company: 'RetailPK, Lahore', rating: 5 },
  { quote: 'The team understood our vision perfectly and built a mobile app that our users love. Professional, responsive, and highly skilled.', name: 'Fatima Malik', company: 'HealthTech Solutions', rating: 5 },
  { quote: 'Outstanding AI integration work. They custom-built our NLP chatbot that handles 80% of customer queries automatically. Impressed.', name: 'Hamza Sheikh', company: 'FinServe Pakistan', rating: 5 },
];

const checkItems = [
  '3+ years building digital products in Pakistan & beyond',
  'Full-stack expertise across 10+ modern technologies',
  'Agile development with weekly client check-ins',
  'Clean code, comprehensive docs, on-time delivery',
  'Post-launch support & maintenance packages',
];

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroBg} />

        <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroLeft}>
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={styles.heroTitle}
          >
            We Build Digital Products{' '}
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              That Scale
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.heroSubtitle}
          >
            From Lahore to the world — we craft web apps, mobile products, and AI solutions that drive real business results.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className={styles.heroButtons}
          >
            <Link href="/contact" className={`btn-primary ${styles.heroBtn}`}>
              Start a Project →
            </Link>
            <Link href="/portfolio" className={`btn-outline ${styles.heroBtn}`}>
              View Our Work
            </Link>
          </motion.div>
        </div>

        <div className={styles.heroRight}>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className={styles.heroCard}
          >
            <p className={styles.heroBadge}>Project Growth</p>
            <div className={styles.chart}>
              {[35, 55, 45, 72, 90].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i === 4 ? 'var(--gradient)' : 'rgba(37,99,235,0.3)',
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.3s',
                  }}
                />
              ))}
            </div>
            <div className={styles.heroStats}>
              <div>
                <p className={`${styles.heroNumber} ${styles.heroNumberBlue}`}>50+</p>
                <p className={styles.heroSmall}>Projects</p>
              </div>
              <div>
                <p className={`${styles.heroNumber} ${styles.heroNumberPurple}`}>30+</p>
                <p className={styles.heroSmall}>Clients</p>
              </div>
              <div className={styles.progressWrap}>
                <svg width="52" height="52" viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="22" fill="none" stroke="var(--border)" strokeWidth="4" />
                  <circle cx="26" cy="26" r="22" fill="none" stroke="var(--accent)" strokeWidth="4"
                    strokeDasharray="138.23" strokeDashoffset="27.64"
                    strokeLinecap="round" transform="rotate(-90 26 26)" />
                  <text x="26" y="30" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">80%</text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className={styles.chevron}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <CounterStat end={50} suffix="+" label="Projects Delivered" />
          <CounterStat end={30} suffix="+" label="Happy Clients" />
          <CounterStat end={3} suffix="+" label="Years Experience" />
          <CounterStat end={6} label="Core Services" />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <h2 className="section-title">What We Do</h2>
          <div className="section-underline" />
        </AnimatedSection>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '150px' }}
          className={`${styles.servicesGrid} ${styles.sectionBottom}`}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/services" className="btn-outline">See All Services →</Link>
        </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSecondary}`}>
        <div className={`container ${styles.whyGrid}`}>
          <AnimatedSection direction="left">
            <h2 className="section-title">Why Choose Vixonics?</h2>
            <div className="section-underline" />
            <div className={styles.checkList}>
              {checkItems.map((item) => (
                <div key={item} className={styles.checkItem}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="12" fill="var(--accent)" fillOpacity="0.15" />
                    <path d="M7 12l3.5 3.5L17 8.5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={styles.checkText}>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className={styles.whyCard}>
              <h3 className={styles.whyTitle}>
                50+ Projects Delivered Across Pakistan & Beyond
              </h3>
              <p className={styles.whyText}>
                From healthcare to fintech, e-commerce to logistics — we've built solutions for industries that matter.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Recent Work</h2>
          <div className="section-underline" />
        </AnimatedSection>

        <div className={`${styles.portfolioGrid} ${styles.sectionBottom}`}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/portfolio" className="btn-outline">View All Projects →</Link>
        </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSecondary}`}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>What Our Clients Say</h2>
          </AnimatedSection>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t) => (
              <AnimatedSection key={t.name} delay={0.1}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.ctaOuter}>
        <div className="container">
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something Great?
          </h2>
          <p className={styles.ctaText}>
            Let&apos;s talk about your project. Based in Cantt, Lahore — serving clients worldwide.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get In Touch →
          </Link>
        </div>
        </div>
      </div>
    </main>
  );
}
