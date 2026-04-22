import PageHero from '@/components/PageHero';
import styles from './page.module.css';

const updatedAt = 'April 20, 2026';

const sectionStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-md)',
  padding: '28px',
};

const headingStyle = {
  fontFamily: 'var(--font-syne), Syne, sans-serif',
  fontSize: '22px',
  fontWeight: '700',
  color: 'var(--text-white)',
  marginBottom: '12px',
};

const textStyle = {
  color: 'var(--text-muted)',
  fontSize: '15px',
  lineHeight: '1.8',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        subtitle="How Vixonics collects, uses, and protects your information"
        breadcrumb="Home -> Privacy Policy"
      />

      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '1000px' }}>
        <p style={{ ...textStyle, marginBottom: '20px' }}>
          Last updated: {updatedAt}
        </p>

        <div className={styles.stack}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>1. Information We Collect</h2>
            <p style={textStyle}>
              We may collect contact details you submit through our forms, including your name, email address,
              phone number, selected service, budget range, and project message.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>2. How We Use Information</h2>
            <p style={textStyle}>
              We use submitted information to respond to inquiries, provide proposals, improve our services,
              and communicate about potential projects.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>3. Sharing and Disclosure</h2>
            <p style={textStyle}>
              We do not sell your personal data. We may use trusted service providers for email delivery,
              hosting, and analytics when needed to operate our website.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>4. Data Security</h2>
            <p style={textStyle}>
              We apply reasonable technical and organizational safeguards to protect personal information.
              However, no method of transmission or storage is 100% secure.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>5. Your Rights</h2>
            <p style={textStyle}>
              You may request access, correction, or deletion of your personal information by contacting us at
              hello@vixonics.com.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>6. Contact</h2>
            <p style={textStyle}>
              For privacy-related questions, email us at hello@vixonics.com.
            </p>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
