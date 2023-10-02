import React, { useCallback, useEffect, useRef, useState, Fragment } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';
import { Controller, Scene } from 'react-scrollmagic';

import { buildThresholdList } from '~utils/style';
import { isBigScreen } from '~utils/validations';

import content1Image from './assets/image-1.jpg';
import content1ImageX3 from './assets/image-1@3x.jpg';
import content2Image from './assets/image-2.jpg';
import content2ImageMobile from './assets/image-2-mobile.jpg';
import {
  DEFAULT_THRESHOLD,
  TITLE_FIXED_TO_ABS_BREAK,
  S3_MIN_STICKY_VISIBILITY,
  S3_MAX_STICKY_VISIBILITY,
  MIN_WIDTH_FIX_IMG_MIDDLE,
  FIX_IMG_MIDDLE,
  FIX_IMG_TOP
} from './constants';
import styles from './styles.module.scss';

function Manifesto() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const mainSectionRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const fixedTitleRef = useRef(null);
  const [s1Visibility, setS1Visibility] = useState(0);
  const [s2Visibility, setS2Visibility] = useState(0);
  const [s3Visibility, setS3Visibility] = useState(0);
  const [absoluteTitle, setAbsoluteTitle] = useState(false);
  const [fixedImages, setFixedImages] = useState(
    window.innerWidth > MIN_WIDTH_FIX_IMG_MIDDLE ? FIX_IMG_MIDDLE : FIX_IMG_TOP
  );

  const handleSectionVisibility = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.target === section1Ref.current) {
        setS1Visibility(entry.intersectionRatio.toFixed(2));
      }

      if (entry.intersectionRect.top > 0) {
        if (entry.target === section2Ref.current) {
          setS2Visibility(entry.intersectionRatio.toFixed(2));
        }
        if (entry.target === section3Ref.current) {
          setS3Visibility(entry.intersectionRatio.toFixed(2));

          if (entry.intersectionRatio > S3_MIN_STICKY_VISIBILITY) {
            const fixedTitleRect = fixedTitleRef.current.getBoundingClientRect();
            const fixedTitleHalf = Math.floor(window.innerHeight / 2 + fixedTitleRect.height / 2);
            setAbsoluteTitle(entry.boundingClientRect.top <= fixedTitleHalf - TITLE_FIXED_TO_ABS_BREAK);
            if (entry.intersectionRatio > S3_MAX_STICKY_VISIBILITY) {
              setAbsoluteTitle(true);
            }
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    section1Ref.current.style.setProperty('--visible', s1Visibility - s2Visibility);
    section2Ref.current.style.setProperty('--visible', s2Visibility - s1Visibility);
  }, [s1Visibility, s2Visibility, s3Visibility]);

  useEffect(() => {
    if (isBigScreen()) {
      const sectionsObserver = new IntersectionObserver(handleSectionVisibility, {
        threshold: buildThresholdList(DEFAULT_THRESHOLD)
      });

      sectionsObserver.observe(section1Ref.current);
      sectionsObserver.observe(section2Ref.current);
      sectionsObserver.observe(section3Ref.current);
    }
  }, [handleSectionVisibility]);

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
    <section ref={mainSectionRef} className={styles.manifestoSection}>
      <div className={styles.innerContent}>
        <section ref={section1Ref} className={`${styles.subSection} ${styles.titleSection} ${styles.first}`}>
          <div className={clsx(styles.fixedWrapper, { [styles.absolute]: absoluteTitle })}>
            <h2 className={styles.mainTitle}>{t('home:MANIFESTO_TITLE_1')}</h2>
          </div>
        </section>
        <section ref={section2Ref} className={`${styles.subSection} ${styles.titleSection} ${styles.second}`}>
          <div className={clsx(styles.fixedWrapper, { [styles.absolute]: absoluteTitle })}>
            <h2 ref={fixedTitleRef} className={`${styles.mainTitle} ${styles.secondTitle}`}>
              {t('home:MANIFESTO_TITLE_2')}
            </h2>
          </div>
        </section>
        <section ref={section3Ref} className={styles.section3} />
        <ControllerCmp>
          <Scene duration={700} triggerHook={fixedImages} enabled={isBigScreen()} pin>
            {progress => (
              <section className={`${styles.subSection} ${styles.contentSection} ${styles.first}`}>
                <p className={clsx(styles.sectionText, { [styles.visible]: progress })}>
                  {t('home:MANIFESTO_CONTENT_1')}
                </p>
                <h2 className={`${styles.mainTitle} ${styles.secondTitle}`}>{t('home:MANIFESTO_TITLE_2')}</h2>
                <picture className={styles.sectionImage}>
                  <source media="(min-width: 810px)" srcSet={content1ImageX3} />
                  <img
                    className={styles.sectionImage}
                    src={content1Image}
                    alt={t('home:MANIFESTO_IMAGE_1_ALT_TEXT')}
                  />
                </picture>
              </section>
            )}
          </Scene>
        </ControllerCmp>
        <ControllerCmp>
          <Scene duration={700} triggerHook={fixedImages} enabled={isBigScreen()} pin>
            {progress => (
              <section className={`${styles.subSection} ${styles.contentSection} ${styles.second}`}>
                <picture className={styles.sectionImage}>
                  <source media="(max-width: 550px)" srcSet={content2ImageMobile} />
                  <img
                    className={styles.sectionImage}
                    src={content2Image}
                    alt={t('home:MANIFESTO_IMAGE_2_ALT_TEXT')}
                  />
                </picture>
                <p className={clsx(styles.sectionText, { [styles.visible]: progress })}>
                  {t('home:MANIFESTO_CONTENT_2')}
                </p>
              </section>
            )}
          </Scene>
        </ControllerCmp>
      </div>
    </section>
  );
}

export default Manifesto;
