import React from 'react';
import { t } from 'i18next';

import content1Image from './assets/coach.jpg';
import content2Image from './assets/sensor.jpg';
import styles from './styles.module.scss';

function CoachesPrivacy() {
  return (
    <>
      <section className={styles.coachSection}>
        <div className={styles.sectionImage}>
          <img aria-hidden="true" className={`full-width ${styles.image}`} src={content1Image} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t('technology:COACHES_TITLE_1')}</h2>
          <p className={styles.sectionText}>{t('technology:COACHES_CONTENT_1')}</p>
        </div>
      </section>
      <section className={styles.sensorSection}>
        <div className={styles.sectionImage}>
          <img aria-hidden="true" className={styles.image} src={content2Image} />
        </div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>{t('technology:COACHES_TITLE_2')}</h2>
          <p className={styles.sectionText}>{t('technology:COACHES_CONTENT_2')}</p>
        </div>
      </section>
    </>
  );
}

export default CoachesPrivacy;
