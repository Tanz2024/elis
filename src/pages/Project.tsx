import { useEffect, useRef, useState } from 'react';
import styles from './Project.module.css';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';

// Images
import ai1 from '../assets/Ai1.png';
import ai2 from '../assets/Ai2.jpg';
import ai3 from '../assets/Ai3.png';
import ill1 from '../assets/adobeillustrator.png';
import ill2 from '../assets/adobeillustrator1.png';
import ill3 from '../assets/adobeillustrator3.png';
import ps1 from '../assets/adobephotoshop.jpg';
import ps2 from '../assets/adobephotoshop2.jpg';
import canva1 from '../assets/canva1.png';
import canva2 from '../assets/canva2.png';
import canva3 from '../assets/canva3.png';

// Videos
import ae1 from '../assets/aftereffect1.mp4';
import ae2 from '../assets/aftereffect2.mp4';
import ae3 from '../assets/afteeffect4.mp4';
import ae4 from '../assets/aftereffect5.mp4';
import ae5 from '../assets/aftereffect6.mp4';
import ae6 from '../assets/Aaftereffects3.mp4';
import unrealVideo from '../assets/unrealengine.mp4';

// Lottie icons
import muteIcon from '../assets/mute_16046496.json';
import volumeIcon from '../assets/volume_16046452.json';

const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const VideoCard = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  return (
    <div className={styles.cardVideoWrapper}>
      <video
        ref={videoRef}
        src={src}
        className={styles.cardVideo}
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
        title={title}
      />
      <button onClick={toggleMute} className={styles.muteButton} aria-label="Toggle sound">
        <Lottie
          animationData={isMuted ? muteIcon : volumeIcon}
          loop={false}
          style={{ width: 28, height: 28 }}
        />
      </button>
    </div>
  );
};

const Project = () => {
  const { t } = useTranslation();

  const quote = useFadeIn();
  const ae = useFadeIn();
  const ill = useFadeIn();
  const ps = useFadeIn();
  const ai = useFadeIn();
  const canva = useFadeIn();
  const unreal = useFadeIn();

  const aeVideos1 = [ae1, ae2, ae3];
  const aeVideos2 = [ae4, ae5, ae6];

  const unrealRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleUnrealMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (unrealRef.current) {
      unrealRef.current.muted = !unrealRef.current.muted;
      setIsMuted(unrealRef.current.muted);
    }
  };

  const toggleUnrealPlay = () => {
    if (unrealRef.current) {
      unrealRef.current.paused ? unrealRef.current.play() : unrealRef.current.pause();
    }
  };

  return (
    <section className={styles.project}>
      {/* Quote */}
      <div ref={quote.ref} className={`${styles.fullWhite} ${quote.visible ? styles.visible : ''}`}>
        <p className={styles.quote}>
          {t('project.quote.line1')}<br />
          {t('project.quote.line2')}<br />
          {t('project.quote.line3')}
        </p>
      </div>

      {/* Adobe After Effects */}
      <div ref={ae.ref} className={`${styles.sectionDark} ${ae.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>{t('project.sections.ae')}</h2>
        <div className={styles.grid}>
          {aeVideos1.map((src, i) => (
            <VideoCard key={`ae1-${i}`} src={src} title={`AE Video 1-${i + 1}`} />
          ))}
        </div>
        <div className={styles.grid}>
          {aeVideos2.map((src, i) => (
            <VideoCard key={`ae2-${i}`} src={src} title={`AE Video 2-${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Illustrator */}
      <div ref={ill.ref} className={`${styles.sectionWhite} ${ill.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>Adobe Illustrator</h2>
        <div className={styles.grid}>
          {[ill1, ill2, ill3].map((img, i) => (
            <img key={`ill-${i}`} src={img} alt={`Illustrator ${i + 1}`} className={styles.cardImage} loading="lazy" />
          ))}
        </div>
      </div>

      {/* Photoshop */}
      <div ref={ps.ref} className={`${styles.sectionDark} ${ps.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>{t('project.sections.ps')}</h2>
        <div className={styles.grid}>
          {[ps1, ps2].map((img, i) => (
            <img key={`ps-${i}`} src={img} alt={`Photoshop ${i + 1}`} className={styles.cardImage} loading="lazy" />
          ))}
        </div>
      </div>

      {/* AI / GPT */}
      <div ref={ai.ref} className={`${styles.sectionWhite} ${ai.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>AI / GPT</h2>
        <div className={styles.grid}>
          {[ai1, ai2, ai3].map((img, i) => (
            <img key={`ai-${i}`} src={img} alt={`AI ${i + 1}`} className={styles.cardImage} loading="lazy" />
          ))}
        </div>
      </div>

      {/* Canva */}
      <div ref={canva.ref} className={`${styles.sectionDark} ${canva.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>{t('project.sections.canva')}</h2>
        <div className={styles.grid}>
          {[canva1, canva2, canva3].map((img, i) => (
            <img key={`canva-${i}`} src={img} alt={`Canva ${i + 1}`} className={styles.cardImage} loading="lazy" />
          ))}
        </div>
      </div>

      {/* Unreal Engine */}
      <div ref={unreal.ref} className={`${styles.sectionWhite} ${unreal.visible ? styles.visible : ''}`}>
        <h2 className={styles.sectionTitle}>{t('project.sections.unreal')}</h2>
        <div className={styles.grid}>
          <div className={styles.cardVideoWrapper}>
            <video
              ref={unrealRef}
              src={unrealVideo}
              autoPlay
              loop
              muted
              playsInline
              onClick={toggleUnrealPlay}
              className={styles.cardVideo}
              title="Unreal Engine Gameplay"
            />
            <button onClick={toggleUnrealMute} className={styles.muteButton} aria-label="Toggle sound">
              <Lottie
                animationData={isMuted ? muteIcon : volumeIcon}
                loop={false}
                style={{ width: 28, height: 28 }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
