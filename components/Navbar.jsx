'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : styles.notScrolled}`}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Vixonics logo"
              width={42}
              height={42}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoTextWrap}>
              <span className={styles.logoText}>VIXONICS</span>
              <span className={styles.location}>Cantt, Lahore</span>
            </div>
          </Link>

          <div className={styles.centerLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.rightActions}>
            <Link href="/contact" className={styles.cta}>
              Get a Quote
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={styles.hamburger}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={styles.hamburgerStack}>
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileInner}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className={styles.mobileCtaWrap}>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={`${styles.cta} ${styles.mobileCta}`}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
