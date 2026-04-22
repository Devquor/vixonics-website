'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const serviceOptions = [
  'Select a service…',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'AI & ML Solutions',
  'Cloud & DevOps',
  'E-commerce',
  'Other',
];

const budgetOptions = [
  'Select budget range…',
  'Under PKR 100,000',
  'PKR 100,000 – 300,000',
  'PKR 300,000 – 700,000',
  'PKR 700,000 – 1,500,000',
  'PKR 1,500,000+',
];

const infoCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    title: 'Location',
    value: 'Cantt, Lahore, Pakistan',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
    title: 'Email',
    value: 'hello@vixonics.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    title: 'Phone',
    value: '+92 302 4127316',
  },
];

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px 16px',
  color: 'var(--text-white)',
  fontSize: '15px',
  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const dropdownOptionStyle = {
  color: '#0f172a',
  background: '#ffffff',
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError('Something went wrong. Please try again or WhatsApp us directly.');
      }
    } catch {
      setServerError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' };
  const errorStyle = { color: '#ef4444', fontSize: '12px', marginTop: '4px' };

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <main>
      <PageHero title="Contact Us" subtitle="Ready to start your project? Let's build something together." breadcrumb="Home → Contact" />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>

          {/* Left: Info */}
          <AnimatedSection direction="left">
            <h2 className={styles.title}>
              Let&apos;s Build Something Together
            </h2>
            <p className={styles.infoText}>
              Tell us about your project and we&apos;ll get back to you within 24 hours. Whether it&apos;s a quick question or a full project brief, we&apos;re here.
            </p>

            <div className={styles.infoList}>
              {infoCards.map((card) => (
                <div key={card.title} className={styles.infoCard}>
                  <div style={{ color: 'var(--accent)', flexShrink: 0 }}>{card.icon}</div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{card.title}</p>
                    <p style={{ fontSize: '15px', color: 'var(--text-white)' }}>{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp card */}
            <div
              onClick={() => window.open(`https://wa.me/${waNumber}?text=Hi%20Vixonics!%20I'd%20like%20to%20discuss%20a%20project.`, '_blank')}
              className={styles.waCard}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(37,211,102,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(37,211,102,0.08)'}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p style={{ color: 'var(--text-white)', fontWeight: '600', fontSize: '15px' }}>Chat with us on WhatsApp</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Usually reply within 1 hour</p>
              </div>
            </div>

            <div className={styles.socials}>
              {['LinkedIn', 'GitHub', 'Twitter'].map((s) => (
                <a key={s} href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: 'border-color 0.2s, color 0.2s' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.3px' }}>{s[0]}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            {submitted ? (
              <div className={styles.formSuccess}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5" style={{ margin: '0 auto 20px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 013 10c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"/>
                </svg>
                <h3 style={{ fontFamily: 'var(--font-syne), Syne, sans-serif', fontSize: '28px', fontWeight: '800', color: 'var(--text-white)', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>We&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.formCard}
                noValidate
              >
                <div className={styles.inputGrid}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Ahmad Raza"
                      className={styles.input}
                      style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'var(--border)' }}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@company.com"
                      className={styles.input}
                      style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'var(--border)' }}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+92 302 4127316"
                    className={styles.input}
                    style={inputStyle}
                  />
                </div>

                <div className={styles.inputGrid}>
                  <div>
                    <label style={labelStyle}>Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={styles.select}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        appearance: 'none',
                        color: formData.service ? 'var(--text-white)' : 'var(--text-muted)',
                      }}
                    >
                      {serviceOptions.map((o) => (
                        <option
                          key={o}
                          value={o.startsWith('Select') ? '' : o}
                          style={dropdownOptionStyle}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className={styles.select}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        appearance: 'none',
                        color: formData.budget ? 'var(--text-white)' : 'var(--text-muted)',
                      }}
                    >
                      {budgetOptions.map((o) => (
                        <option
                          key={o}
                          value={o.startsWith('Select') ? '' : o}
                          style={dropdownOptionStyle}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project — what you need, your timeline, and any other details…"
                    className={styles.textarea}
                    style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#ef4444' : 'var(--border)' }}
                  />
                  {errors.message && <p style={errorStyle}>{errors.message}</p>}
                </div>

                {serverError && (
                  <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', borderRadius: 'var(--radius-sm)', padding: '12px 16px' }}>
                    <p style={{ color: '#ef4444', fontSize: '14px' }}>{serverError}</p>
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className={styles.submit}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    padding: '15px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    transition: 'background 0.2s',
                  }}
                >
                  {loading ? 'Sending…' : 'Send Message →'}
                </motion.button>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
                  We typically respond within 24 hours · Cantt, Lahore, Pakistan (PKT UTC+5)
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
