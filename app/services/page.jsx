'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import styles from './page.module.css';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9M3 12h18"/>
      </svg>
    ),
    bullets: [
      'Custom React & Next.js web applications',
      'RESTful and GraphQL API development',
      'Progressive Web Apps (PWA)',
      'Performance optimization & SEO',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'GraphQL'],
    image: '/images/visuals/web-platform.jpg',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3"/>
      </svg>
    ),
    bullets: [
      'Cross-platform iOS & Android with Flutter',
      'React Native for rapid development',
      'Native integrations & device APIs',
      'App Store & Play Store deployment',
    ],
    stack: ['Flutter', 'React Native', 'Firebase', 'Swift', 'Kotlin'],
    image: '/images/visuals/mobile-app.jpg',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
      </svg>
    ),
    bullets: [
      'User research & persona development',
      'Wireframing, prototyping in Figma',
      'Design systems & component libraries',
      'Usability testing & iteration',
    ],
    stack: ['Figma', 'Adobe XD', 'Framer', 'Lottie', 'Storybook'],
    image: '/images/visuals/design-workbench.jpg',
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Solutions',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.41 2.7H4.21C2.77 18.4 1.8 16.7 2.8 15.7L4.2 14.3"/>
      </svg>
    ),
    bullets: [
      'Custom NLP chatbots & virtual assistants',
      'Computer vision & image recognition',
      'Predictive analytics & ML pipelines',
      'LLM integration (GPT, Gemini, Claude)',
    ],
    stack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'FastAPI'],
    image: '/images/visuals/ai-dashboard.jpg',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
      </svg>
    ),
    bullets: [
      'AWS, GCP, Azure infrastructure setup',
      'Docker & Kubernetes containerization',
      'CI/CD pipeline implementation',
      'Cloud cost optimization & security',
    ],
    stack: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    image: '/images/visuals/cloud-ops.jpg',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
      </svg>
    ),
    bullets: [
      'Custom storefront development',
      'Shopify & WooCommerce solutions',
      'Payment gateway integration',
      'Inventory & order management',
    ],
    stack: ['Shopify', 'Next.js', 'Stripe', 'WooCommerce', 'Medusa.js'],
    image: '/images/visuals/ecommerce-store.jpg',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We understand your business, goals, and requirements in depth.' },
  { num: '02', title: 'Design', desc: 'Wireframes, prototypes, and design systems tailored to your brand.' },
  { num: '03', title: 'Development', desc: 'Clean, tested code built with modern frameworks and best practices.' },
  { num: '04', title: 'Testing', desc: 'Comprehensive QA — unit tests, integration tests, UAT.' },
  { num: '05', title: 'Launch', desc: 'Smooth deployment, monitoring, and post-launch support.' },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'It depends on scope. A basic web app takes 4–6 weeks. Complex platforms with AI or mobile apps typically take 3–6 months. We provide accurate estimates after discovery.' },
  { q: 'Do you work with international clients?', a: 'Yes! We work with clients across Pakistan, Gulf, Europe, and North America. All communication happens in English and we adapt to your timezone for meetings.' },
  { q: 'What technologies do you specialize in?', a: 'Our core stack is React/Next.js, Flutter, Node.js, Python, and PostgreSQL. We also work with AWS, Firebase, Docker, and integrate AI using OpenAI and custom ML models.' },
  { q: 'Do you provide post-launch support?', a: 'Absolutely. We offer flexible maintenance packages — from basic bug fixes to ongoing feature development. Most clients stay with us long-term as their technology partner.' },
  { q: 'How do we get started?', a: 'Simply reach out via our contact form or WhatsApp. We schedule a free 30-minute discovery call, understand your needs, and send a detailed proposal within 48 hours.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={styles.faqButton}
      >
        {q}
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0, color: 'var(--accent)', fontSize: '24px', lineHeight: '1' }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p className={styles.faqText}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  return (
    <main>
      <PageHero title="Our Services" subtitle="End-to-end digital solutions tailored for your business" breadcrumb="Home → Services" />

      {/* Service sections — alternating layout */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`${styles.serviceSection} ${i % 2 === 1 ? styles.altBg : ''}`}
        >
          <div className={`container ${styles.serviceGrid}`}>
            <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={styles.serviceText} style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>{svc.icon}</div>
              <h2 className={styles.serviceTitle}>{svc.title}</h2>
              <ul className={styles.serviceList}>
                {svc.bullets.map((b) => (
                  <li key={b}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className={styles.stackRow}>
                {svc.stack.map((t) => (
                  <span key={t} className="pill-badge">{t}</span>
                ))}
              </div>
              <Link href="/contact" className="btn-primary">Request This Service →</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'}>
              <div className={styles.visual} style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <Image
                  src={svc.image}
                  alt={`${svc.title} visual`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <section className={styles.processSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Our Process</h2>
            <div className="section-underline" style={{ margin: '0 auto 60px' }} />
          </AnimatedSection>
          <div className={styles.processRow}>
            {processSteps.map((step, i) => (
              <div key={step.num} className={styles.processStep}>
                {i < processSteps.length - 1 && (
                  <div className={styles.processStepLine} style={{ position: 'absolute', top: '28px', left: '60%', right: '-40%', height: '2px', background: 'var(--border)' }} />
                )}
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'var(--font-syne), Syne, sans-serif', fontWeight: '700', fontSize: '16px', color: 'white', position: 'relative', zIndex: 1 }}>
                  {step.num}
                </div>
                <h4 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '16px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '8px' }}>{step.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', padding: '0 8px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`container ${styles.faqWrap}`}>
          <AnimatedSection>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
            <div className="section-underline" style={{ margin: '0 auto 48px' }} />
          </AnimatedSection>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </main>
  );
}
