'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const allProjects = [
  { title: 'MediTrack Pro', description: 'Healthcare management platform for clinics across Pakistan.', tags: ['Next.js', 'PostgreSQL', 'AWS'], category: 'Web', image: '/images/visuals/web-platform.jpg' },
  { title: 'EduSpark LMS', description: 'Learning management system serving 50,000+ students.', tags: ['React', 'Node.js', 'MongoDB'], category: 'Web', image: '/images/visuals/web-platform.jpg' },
  { title: 'AgriConnect Portal', description: 'B2B marketplace connecting farmers with wholesalers.', tags: ['Next.js', 'Stripe', 'Redis'], category: 'Web', image: '/images/visuals/web-platform.jpg' },

  { title: 'SafeRide PK', description: 'GPS-based ride-hailing mobile app with real-time tracking.', tags: ['Flutter', 'Firebase', 'Google Maps'], category: 'Mobile', image: '/images/visuals/mobile-app.jpg' },
  { title: 'FoodBox App', description: 'On-demand food delivery app with live order tracking.', tags: ['React Native', 'Node.js', 'Socket.io'], category: 'Mobile', image: '/images/visuals/mobile-app.jpg' },

  { title: 'AgroAI', description: 'AI-powered crop disease detection for Pakistani farmers.', tags: ['Python', 'TensorFlow', 'FastAPI'], category: 'AI', image: '/images/visuals/ai-dashboard.jpg' },
  { title: 'SupportBot Pro', description: 'NLP customer support chatbot handling 80% of queries automatically.', tags: ['OpenAI', 'LangChain', 'Next.js'], category: 'AI', image: '/images/visuals/ai-dashboard.jpg' },

  { title: 'Zilza.pk', description: 'Full-featured e-commerce platform with multi-vendor support.', tags: ['Next.js', 'Stripe', 'PostgreSQL'], category: 'E-commerce', image: '/images/visuals/ecommerce-store.jpg' },
  { title: 'LuxeCart', description: 'Premium Shopify headless storefront with 3D product views.', tags: ['Shopify', 'React', 'Three.js'], category: 'E-commerce', image: '/images/visuals/ecommerce-store.jpg' },
];

const filters = ['All', 'Web', 'Mobile', 'AI', 'E-commerce'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main>
      <PageHero title="Our Portfolio" subtitle="Real projects, real results — delivered for real businesses" breadcrumb="Home → Portfolio" />

      <section className={styles.section}>
        <div className="container">
        <AnimatedSection>
          <div className={styles.tabsWrap}>
          <div className={styles.tabs}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={styles.tab}
                style={{
                  border: `1px solid ${active === f ? 'var(--accent)' : 'var(--border)'}`,
                  background: active === f ? 'var(--accent)' : 'transparent',
                  color: active === f ? 'white' : 'var(--text-muted)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
          </div>
        </AnimatedSection>

        <motion.div
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>
      </section>
    </main>
  );
}
