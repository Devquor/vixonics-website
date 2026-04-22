'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const categories = ['All', 'Development', 'Design', 'AI', 'Business'];

const posts = [
  {
    category: 'Development',
    title: 'Why Next.js 14 is the Future of Web Development',
    excerpt: 'Server Components, streaming, and the App Router have changed how we think about building for the web. Here\'s what every developer needs to know.',
    readTime: '6 min read',
    author: 'Ahmad Raza',
    date: 'Dec 12, 2024',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80',
  },
  {
    category: 'AI',
    title: 'Building Production-Grade LLM Apps with LangChain',
    excerpt: 'We share lessons learned from deploying RAG pipelines in production — from chunking strategies to latency optimization.',
    readTime: '8 min read',
    author: 'Ayesha Iqbal',
    date: 'Dec 5, 2024',
    featured: false,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&h=600&q=80',
  },
  {
    category: 'Design',
    title: 'Design Systems That Scale: Lessons from 50+ Projects',
    excerpt: 'How we approach design tokens, component libraries, and documentation to keep teams aligned as products grow.',
    readTime: '5 min read',
    author: 'Bilal Ahmed',
    date: 'Nov 28, 2024',
    featured: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&h=600&q=80',
  },
  {
    category: 'Development',
    title: 'Flutter vs React Native in 2024: An Honest Comparison',
    excerpt: 'After building 10+ mobile apps with both frameworks, here\'s our honest take on which to choose for your next project.',
    readTime: '7 min read',
    author: 'Omar Farooq',
    date: 'Nov 20, 2024',
    featured: false,
    image: '/images/visuals/mobile-app.jpg',
  },
  {
    category: 'Business',
    title: 'How Pakistani Software Houses Can Win International Clients',
    excerpt: 'Practical strategies we\'ve used to build trust, communicate effectively, and deliver value to clients overseas.',
    readTime: '4 min read',
    author: 'Ahmad Raza',
    date: 'Nov 14, 2024',
    featured: false,
    image: '/images/visuals/ecommerce-store.jpg',
  },
  {
    category: 'AI',
    title: 'Computer Vision for Agriculture: Our AgroAI Journey',
    excerpt: 'A behind-the-scenes look at how we built a crop disease detection system using YOLOv8 and deployed it in rural Pakistan.',
    readTime: '9 min read',
    author: 'Ayesha Iqbal',
    date: 'Nov 6, 2024',
    featured: false,
    image: '/images/visuals/ai-dashboard.jpg',
  },
];

const categoryColors = {
  Development: '#2563EB',
  AI: '#059669',
  Design: '#e11d48',
  Business: '#f97316',
};

export default function Blog() {
  const [active, setActive] = useState('All');

  const featured = posts[0];
  const rest = posts.slice(1);
  const displayPosts = active === 'All' ? rest : rest.filter((p) => p.category === active);

  const getInitials = (name) => name.split(' ').map((n) => n[0]).join('');

  return (
    <main>
      <PageHero title="Insights & Articles" subtitle="Thoughts on software, design, AI, and building great products" breadcrumb="Home → Blog" />

      <section className={styles.section}>
        <div className="container">

        <AnimatedSection>
          <div className={styles.featured}>
            <div className={styles.featuredMedia}>
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.featuredBody}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(37,99,235,0.15)', color: 'var(--accent)', fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px' }}>FEATURED</span>
                <span className="pill-badge">{featured.category}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '24px', fontWeight: '800', color: 'var(--text-white)', lineHeight: '1.3', marginBottom: '14px' }}>{featured.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>{getInitials(featured.author)}</div>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{featured.author} · {featured.readTime} · {featured.date}</span>
              </div>
              <a href="#" style={{ display: 'inline-block', marginTop: '20px', color: 'var(--accent)', fontSize: '14px', fontWeight: '600' }}>Read More →</a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.filtersWrap}>
          <div className={styles.filters}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={styles.filterBtn}
                style={{
                  border: `1px solid ${active === c ? 'var(--accent)' : 'var(--border)'}`,
                  background: active === c ? 'var(--accent)' : 'transparent',
                  color: active === c ? 'white' : 'var(--text-muted)',
                }}
              >
                {c}
              </button>
            ))}
          </div>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {displayPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.08}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <div style={{ height: '160px', position: 'relative' }}>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: categoryColors[post.category] || 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{post.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '17px', fontWeight: '700', color: 'var(--text-white)', margin: '8px 0 10px', lineHeight: '1.3' }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '14px' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700' }}>{getInitials(post.author)}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '12px', color: 'var(--text-white)', fontWeight: '600' }}>{post.author}</p>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.readTime} · {post.date}</p>
                    </div>
                    <a href="#" style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: '600' }}>Read →</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
