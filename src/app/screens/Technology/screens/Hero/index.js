import React from 'react';
import { t } from 'i18next';

import { useTransparentHeight } from '~components/Layout/constants';

import imgResponsive from './assets/hero-image-responsive.jpg';
import styles from './styles.module.scss';

function Hero() {
  const heroRef = useTransparentHeight(window.innerHeight);

  return (
    <section className={styles.heroSection}>
      <img ref={heroRef} className={styles.imgContent} src={imgResponsive} alt={t('technology:HERO_TITLE')} />
      <h1 className={`big-subtitle ${styles.title}`}>{t('technology:HERO_TITLE')}</h1>
      <h1 className={`big-subtitle ${styles.title} ${styles.tabletTitle}`}>
        {t('technology:HERO_TITLE_TABLET')}
      </h1>
    </section>
  );
}

export default Hero;
