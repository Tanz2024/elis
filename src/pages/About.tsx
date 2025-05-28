import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

import profileImage from '../assets/profile.jpg';
import hobby1 from '../assets/hobby1.jpg';
import hobby2 from '../assets/hobby2.jpg';
import hobby3 from '../assets/hobby3.jpg';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
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

const About = () => {
  const { t } = useTranslation();

  const profile = useFadeIn();
  const education = useFadeIn();
  const hobby = useFadeIn();
  const work = useFadeIn();
  const extra = useFadeIn();

  return (
    <section id="about" className={styles.about}>

      {/* === Profile Section === */}
      <div
        ref={profile.ref}
        className={`${styles.profileSection} ${styles.fadeIn} ${profile.visible ? styles.visible : ''}`}
      >
        <div className={styles.imageBox}>
          <img src={profileImage} alt="Elis Zainal portrait" className={styles.profileImage} />
        </div>
        <div className={styles.bioBox}>
          <h2 className={styles.aboutTitle}>{t('about.title')}</h2>
          <p className={styles.aboutText}>{t('about.bio')}</p>
        </div>
      </div>

      {/* === Education Section === */}
      <div
        ref={education.ref}
        className={`${styles.sectionDark} ${styles.fadeIn} ${education.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('about.education')}</h2>
        <div className={styles.listSection}>
          <div>
            <p>● {t('about.diploma')}</p>
            <span>UiTM Alor Gajah, Melaka (2025)</span>
          </div>
          <div>
            <p>● {t('about.spm')}</p>
            <span>SMK Kamil, Pasir Puteh, Kelantan (2022)</span>
          </div>
        </div>
      </div>

      {/* === Hobby Section === */}
      <div
        ref={hobby.ref}
        className={`${styles.hobbySection} ${styles.fadeIn} ${hobby.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('about.hobby')}</h2>
        <div className={styles.hobbyImages}>
          <img src={hobby1} alt="Baking hobby 1" />
          <img src={hobby2} alt="Baking hobby 2" />
          <img src={hobby3} alt="Baking hobby 3" />
        </div>
        <p className={styles.hobbyText}>{t('about.hobbyText')}</p>
      </div>

      {/* === Work Experience Section === */}
      <div
        ref={work.ref}
        className={`${styles.sectionSplit} ${styles.fadeIn} ${work.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('about.work')}</h2>
        <div className={styles.workImages}>
          <div className={styles.workCard}>
            <img src={work1} alt="Assistant Teacher" />
            <p className={styles.workTitle}>
              <span className={styles.dot}>●</span>{t('about.work1')}
            </p>
            <p className={styles.workPlace}>TASKA BONDA MAMA MUTIARA HATI</p>
            <p className={styles.workYear}>(2024)</p>
          </div>
          <div className={styles.workCard}>
            <img src={work2} alt="Sales Assistant" />
            <p className={styles.workTitle}>
              <span className={styles.dot}>●</span>{t('about.work2')}
            </p>
            <p className={styles.workPlace}>KEDAI MAKAN CHE YAH</p>
            <p className={styles.workYear}>(2023)</p>
          </div>
        </div>
      </div>

      {/* === Extracurricular Activities === */}
      <div
        ref={extra.ref}
        className={`${styles.sectionDark} ${styles.fadeIn} ${extra.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('about.extra')}</h2>
        <div className={styles.listSection}>
          <div>
            <p>● {t('about.extra1')}</p>
          </div>
          <div>
            <p>● {t('about.extra2')}</p>
          </div>
          <div>
            <p>● {t('about.extra3')}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
