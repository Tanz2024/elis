import styles from './Footer.module.css';
import { FaEnvelope, FaLinkedin, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const changeLanguage = (lng: 'en' | 'ms' | 'zh') => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <a href="eliszainall@gmail.com" className={styles.icon} aria-label="Email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="linkedin.com/in/elis-zainal-99ba14364" className={styles.icon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.languageSwitch}>
          <button onClick={() => changeLanguage('en')} aria-label="Switch to English">EN</button>
          <button onClick={() => changeLanguage('ms')} aria-label="Switch to Malay">MS</button>
          <button onClick={() => changeLanguage('zh')} aria-label="Switch to Chinese">中文</button>
        </div>

        <div className={styles.bottomText}>
          <p>&copy; {new Date().getFullYear()} Elis Zainal. {t('footer')}</p>
        </div>
      </footer>

      {visible && (
        <button className={styles.scrollButton} onClick={scrollToTop} aria-label="Scroll to top">
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

export default Footer;
