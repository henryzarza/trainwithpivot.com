import React, { useCallback, useRef, Fragment, useState, useEffect } from 'react';
import { t } from 'i18next';
import { Controller, Scene } from 'react-scrollmagic';
import clsx from 'clsx';

import { isBigScreen, checkVisible } from '~utils/validations';
import { useScrollListener } from '~utils/style';
import { debounce } from '~utils/object';

import content1Image from './assets/image-1.jpg';
import content1ImageResponsive from './assets/image-1-small.jpg';
import content2Image from './assets/image-2.jpg';
import content2ImageResponsive from './assets/image-2-small.jpg';
import {
  SCALE_OPACITY_TITLE,
  OPACITY_PERCENT,
  MIN_WIDTH_FIX_IMG_MIDDLE,
  FIX_IMG_MIDDLE,
  FIX_IMG_TOP
} from './constants';
import styles from './styles.module.scss';

function Strength() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [fixedImages, setFixedImages] = useState(
    window.innerWidth > MIN_WIDTH_FIX_IMG_MIDDLE ? FIX_IMG_MIDDLE : FIX_IMG_TOP
  );

  const scrollFunc = useCallback(
    debounce(() => {
      const section = sectionRef.current;
      if (checkVisible(section) && isBigScreen()) {
        const sectionPositionY = section.getBoundingClientRect().y;
        if (sectionPositionY > 0) {
          const opacityTitle = Math.max(
            ((window.innerHeight / 2 - sectionPositionY) / SCALE_OPACITY_TITLE) * OPACITY_PERCENT,
            0
          );
          section.style.setProperty('--title-position', 'fixed');
          section.style.setProperty('padding-top', '100vh');
          section.style.setProperty('--title-opacity', Math.min(opacityTitle, 1).toFixed(2));
        } else {
          section.style.setProperty('padding-top', 0);
          section.style.setProperty('--title-position', 'initial');
        }
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  const handleResize = useCallback(el => {
    setFixedImages(el.target.innerWidth > MIN_WIDTH_FIX_IMG_MIDDLE ? FIX_IMG_MIDDLE : FIX_IMG_TOP);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <section ref={sectionRef} className={`column center ${styles.section}`}>
      <h1 ref={titleRef} className={`big-title text-center ${styles.title}`}>
        {t('classes:STRENGTH_TITLE')}
      </h1>
      <ControllerCmp>
        <Scene duration={700} triggerHook={fixedImages} enabled={isBigScreen()} pin>
          {progress => (
            <section className={`row full-width ${styles.firstSection}`}>
              <picture className="full-width">
                <source media="(max-width: 768px)" srcSet={content1ImageResponsive} />
                <img
                  alt={t('classes:STRENGTH_IMAGE_1_ALT_TEXT')}
                  className={styles.image}
                  src={content1Image}
                />
              </picture>
              <p className={clsx(`big-text ${styles.sectionText}`, { [styles.visible]: progress })}>
                {t('classes:STRENGTH_CONTENT_1')}
              </p>
            </section>
          )}
        </Scene>
        <Scene duration={700} triggerHook={fixedImages} enabled={isBigScreen()} pin>
          {progress => (
            <section className={`row end full-width ${styles.secondSection}`}>
              <p className={clsx(`big-text ${styles.sectionText}`, { [styles.visible]: progress })}>
                {t('classes:STRENGTH_CONTENT_2')}
              </p>
              <picture className={styles.lastPicture}>
                <source media="(max-width: 768px)" srcSet={content2ImageResponsive} />
                <img
                  alt={t('classes:STRENGTH_IMAGE_2_ALT_TEXT')}
                  className={styles.image}
                  src={content2Image}
                />
              </picture>
            </section>
          )}
        </Scene>
      </ControllerCmp>
    </section>
  );
}

export default Strength;
