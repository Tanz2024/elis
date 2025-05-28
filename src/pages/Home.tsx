import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobedreamweaver,
  SiAdobeaftereffects,
  SiCanva,
  SiUnrealengine,
} from 'react-icons/si';

// Reusable hook for scroll-based fade-in
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

const Home = () => {
  const { t } = useTranslation();
  const skillRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Refs for fade-in animations
  const hero = useFadeIn();
  const videosSection = useFadeIn();
  const skillsSection = useFadeIn();
  const contactSection = useFadeIn();

  const videos = [
    "https://www.youtube.com/embed/VIDEO1",
    "https://www.youtube.com/embed/VIDEO2",
    "https://www.youtube.com/embed/VIDEO3",
    "https://www.youtube.com/embed/VIDEO4",
    "https://www.youtube.com/embed/VIDEO5",
    "https://www.youtube.com/embed/VIDEO6",
  ];

  const skills = [
    { icon: <SiAdobephotoshop />, name: 'Photoshop', level: 'beginner', color: '#00BFFF', percent: 50 },
    { icon: <SiAdobeillustrator />, name: 'Illustrator', level: 'intermediate', color: '#6495ED', percent: 70 },
    { icon: <SiAdobeaftereffects />, name: 'After Effects', level: 'intermediate', color: '#9370DB', percent: 70 },
    { icon: <SiAdobedreamweaver />, name: 'Dreamweaver', level: 'beginner', color: '#DAA520', percent: 50 },
    { icon: <SiCanva />, name: 'Canva', level: 'intermediate', color: '#DAA520', percent: 70 },
    { icon: <SiUnrealengine />, name: 'Unreal Engine', level: 'advanced', color: '#000000', percent: 90 },
  ];

  return (
    <div className={styles.home}>
      {/* === Hero Section === */}
      <section
        ref={hero.ref}
        className={`${styles.hero} ${styles.fadeIn} ${hero.visible ? styles.visible : ''}`}
      >
        <h1 className={styles.brand}>
          <span>ELIS</span><span>ZAINAL</span>
        </h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
        <Link to="/project" className={styles.explore}>{t('home.explore')}</Link>
      </section>

      {/* === Video Section === */}
      <section
        ref={videosSection.ref}
        className={`${styles.videoSection} ${styles.fadeIn} ${videosSection.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('home.whatIDo')}</h2>
        <div className={styles.videoGrid}>
          {videos.map((src, idx) => (
            <iframe
              key={idx}
              src={src}
              title={`Video ${idx + 1}`}
              allowFullScreen
              loading="lazy"
              className={styles.video}
            />
          ))}
        </div>
      </section>

      {/* === Skills Section === */}
      <section
        ref={skillsSection.ref}
        className={`${styles.skillsSection} ${styles.fadeIn} ${skillsSection.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('home.mySkills')}</h2>
        <div className={styles.skillListBar}>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              ref={(el) => (skillRefs.current[idx] = el)}
              className={styles.skillRow}
            >
              <div className={styles.skillLabel}>
                <div className={styles.skillLeft}>
                  {skill.icon}
                  <span>
                    {skill.name} ({t(`home.levels.${skill.level}`)})
                  </span>
                </div>
                <div className={styles.skillPercent} title={`${skill.percent}%`}>
                  {skill.percent}%
                </div>
              </div>
              <div className={styles.progressBackground}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${skill.percent}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Contact Section === */}
      <section
        ref={contactSection.ref}
        className={`${styles.contactSection} ${styles.fadeIn} ${contactSection.visible ? styles.visible : ''}`}
      >
        <h2 className={styles.sectionTitle}>{t('home.contact')}</h2>
        <div className={styles.contactDetails}>
          <h1 className={styles.brandBottom}>
            <span>ELIS</span><span>ZAINAL</span>
          </h1>
          <p className={styles.contactEmail}>eliszainal@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
