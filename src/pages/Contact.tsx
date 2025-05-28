import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

// Reusable fade-in hook
const useFadeIn = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const Contact = () => {
  const { t } = useTranslation();
  const fade = useFadeIn();

  return (
    <section
      id="contact"
      ref={fade.ref}
      className={`${styles.contact} ${styles.fadeIn} ${fade.visible ? styles.visible : ''}`}
    >
      <h2 className={styles.title}>{t('contact.title')}</h2>
      <h1 className={styles.name}>
        <span>ELIS</span>
        <span>ZAINAL</span>
      </h1>
      <p className={styles.email}>eliszainall@gmail.com</p>
    </section>
  );
};

export default Contact;
