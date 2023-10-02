import React from 'react';
import { t } from 'i18next';

import content1Image from './assets/sensor.gif';
import screenContent1 from './assets/sensor.png';
import content1ResponsiveImage from './assets/sensor-responsive.gif';
import screenContent1Responsive from './assets/sensor-responsive.png';
import content2Image from './assets/camera.png';
import styles from './styles.module.scss';

function Vision() {
  return (
    <>
      <section className={styles.sensorSection}>
        <div className={styles.sectionImage}>
          <picture>
            <source media="(min-width: 550px)" srcSet={content1Image} />
            <img aria-hidden="true" className={styles.image} src={content1ResponsiveImage} />
          </picture>
          <picture>
            <source media="(min-width: 550px)" srcSet={screenContent1} />
            <img
              className={styles.screen}
              src={screenContent1Responsive}
              alt={t('technology:VISION_TITLE_1')}
              aria-hidden="true"
            />
          </picture>
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t('technology:VISION_TITLE_1')}</h2>
          <p className={styles.sectionText}>{t('technology:VISION_CONTENT_1')}</p>
        </div>
      </section>
      <section className={styles.cameraSection}>
        <div className={styles.sectionImage}>
          <img aria-hidden="true" className={styles.image} src={content2Image} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t('technology:VISION_TITLE_2')}</h2>
          <p className={styles.sectionText}>{t('technology:VISION_CONTENT_2')}</p>
        </div>
      </section>
    </>
  );
}

export default Vision;
