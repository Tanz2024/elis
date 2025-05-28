import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>
          <span className={styles.logoSpan}>ELIS</span>
          <span className={styles.logoSpanAlt}>ZAINAL</span>
        </h1>

        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
          <Link to="/home" className={styles.navLink}>{t('header.home')}</Link>
          <Link to="/about" className={styles.navLink}>{t('header.about')}</Link>
          <Link to="/project" className={styles.navLink}>{t('header.project')}</Link>
          <Link to="/contact" className={styles.navLink}>{t('header.contact')}</Link>
        </nav>

        <button
          className={styles.hamburger}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className={menuOpen ? styles.barOpen1 : ''}></span>
          <span className={menuOpen ? styles.barOpen2 : ''}></span>
          <span className={menuOpen ? styles.barOpen3 : ''}></span>
        </button>
      </div>

      <div className={`${styles.navMobile} ${menuOpen ? styles.open : ''}`}>
        <Link to="/home" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t('header.home')}</Link>
        <Link to="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t('header.about')}</Link>
        <Link to="/project" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t('header.project')}</Link>
        <Link to="/contact" className={styles.navLink} onClick={() => setMenuOpen(false)}>{t('header.contact')}</Link>
      </div>
    </header>
  );
};

export default Header;
