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

export default function TermsPage() {
  return (
    <main>
      <PageHero
        title="Terms of Service"
        subtitle="Terms governing the use of Vixonics website and services"
        breadcrumb="Home -> Terms of Service"
      />

      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '1000px' }}>
        <p style={{ ...textStyle, marginBottom: '20px' }}>
          Last updated: {updatedAt}
        </p>

        <div className={styles.stack}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>1. Acceptance of Terms</h2>
            <p style={textStyle}>
              By accessing this website, you agree to these Terms of Service and applicable laws.
              If you do not agree, please do not use the site.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>2. Website Use</h2>
            <p style={textStyle}>
              You agree to use this website only for lawful purposes and in a way that does not harm
              the site, company, or other users.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>3. Intellectual Property</h2>
            <p style={textStyle}>
              All content on this site, including branding, text, and design elements, belongs to Vixonics
              unless otherwise stated.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>4. Service Engagement</h2>
            <p style={textStyle}>
              Project scope, delivery timelines, pricing, and ownership terms are defined in individual
              proposals or contracts and override general website content.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>5. Disclaimer</h2>
            <p style={textStyle}>
              This website and its content are provided on an as-is basis without warranties of any kind,
              express or implied.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>6. Contact</h2>
            <p style={textStyle}>
              For terms-related questions, contact hello@vixonics.com.
            </p>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
