import React, { useRef, useCallback } from 'react';
import { t } from 'i18next';

import { checkVisible, isBigScreen } from '~utils/validations';
import { useScrollListener, limitNumberWithinRange } from '~utils/style';
import { debounce } from '~utils/object';

import weight1 from './assets/weight-1.png';
import weight2 from './assets/weight-2.png';
import weight5 from './assets/weight-5.png';
import weight10 from './assets/weight-10.png';
import styles from './styles.module.scss';
import {
  SCALE_TRANSLATE_IMG,
  TITLE_OPACITY_PERCENT_WINDOW,
  SCALE_TRANSLATE_IMG_3,
  OPACITY_PERCENT,
  OFFSET_BETWEEN_TITLE
} from './constants';

function Weights() {
  const refDescription = useRef(null);
  const refSection = useRef(null);
  const refImg2 = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const section = refSection.current;
      const description = refDescription.current;
      if (checkVisible(section) && isBigScreen()) {
        const halfWindowHeight = window.innerHeight / OFFSET_BETWEEN_TITLE;
        const translateImg1 = Math.max(halfWindowHeight + window.scrollY - section.offsetTop, 0);
        section.style.setProperty('--position-title', 'fixed');
        section.style.setProperty('--translate1', `-${(translateImg1 / SCALE_TRANSLATE_IMG).toFixed(0)}px`);
        const img2PositionY = refImg2.current.getBoundingClientRect().y;
        const titleOpacity = limitNumberWithinRange(
          (img2PositionY - window.innerHeight / TITLE_OPACITY_PERCENT_WINDOW) * OPACITY_PERCENT,
          0,
          1
        );
        section.style.setProperty('--opacity-title', Math.min(titleOpacity.toFixed(2), 1));
        if (titleOpacity > 0) {
          const translateImg3 = Math.max(window.innerHeight / 2 + window.scrollY - section.offsetTop, 0);
          section.style.setProperty(
            '--translate3',
            `${(translateImg3 / SCALE_TRANSLATE_IMG_3).toFixed(0)}px`
          );
        }
        if (checkVisible(description)) {
          const descriptionPositionY = description.getBoundingClientRect().y;
          const descriptionOpacity = Math.max(
            (descriptionPositionY - window.innerHeight / 2) * OPACITY_PERCENT,
            0
          );
          description.style.opacity = 1 - Math.min(descriptionOpacity, 1);
        }
      } else {
        refSection.current.style.setProperty('--position-title', 'relative');
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  return (
    <section className={styles.section} ref={refSection}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img
            src={weight1}
            aria-hidden="true"
            alt={t('home:WEIGHT_1')}
            className={`${styles.imgWeight} ${styles.first}`}
          />
          <h3 className={`big-title text-center ${styles.title}`}>{t('home:WEIGHTS_TITLE')}</h3>
        </div>
        <img
          src={weight2}
          aria-hidden="true"
          alt={t('home:WEIGHT_2')}
          className={`${styles.imgWeight} ${styles.second}`}
        />
        <img
          ref={refImg2}
          src={weight5}
          aria-hidden="true"
          alt={t('home:WEIGHT_5')}
          className={`${styles.imgWeight} ${styles.three}`}
        />
        <img
          src={weight10}
          aria-hidden="true"
          alt={t('home:WEIGHT_10')}
          className={`${styles.imgWeight} ${styles.last}`}
        />
        <div ref={refDescription} className={styles.description}>
          <h6 className={`big-subtitle m-bottom-5 ${styles.subtitle}`}>{t('home:WEIGHTS_SUBTITLE')}</h6>
          <p className="base-text">{t('home:WEIGHTS_CONTENT')}</p>
        </div>
      </div>
    </section>
  );
}

export default Weights;
