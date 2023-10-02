import React, { useCallback, useEffect, useRef, useState } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';

import { buildThresholdList } from '~utils/style';
import { isBigScreen, isTablet } from '~utils/validations';

import imgInitial from './assets/pivot.png';
import pivotUp from './assets/pivot_up.png';
import pivotDown from './assets/pivot_down_mobile.png';
import pivotMetrics from './assets/pivot_up_2.png';
import pivotScreen1 from './assets/pivot-screen-1.png';
import pivotScreen2 from './assets/pivot-screen-2.png';
import pivotUnit from './assets/pivot-unit.png';
import pivotScreen1x from './assets/pivot_unit_01.png';
import pivotScreen2x from './assets/pivot_unit_02.png';
import { DEFAULT_THRESHOLD, SEQUENCE } from './constants';
import { requestImageBatch } from './utils';
import styles from './styles.module.scss';

function Introducing() {
  const mainSectionRef = useRef(null);
  const pivotImgSectionRef = useRef(null);
  const titleSection = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [absoluteTitle, setAbsoluteTitle] = useState(true);
  const [titleSectionVisibility, setTitleSectionVisibility] = useState(0);
  const [s1Visibility, setS1Visibility] = useState(0);
  const [s2Visilibity, setS2Visibility] = useState(0);
  const [s3Visibility, setS3Visibility] = useState(0);
  const [s1PassedBy, setS1PassedBy] = useState(false);
  const [s2PassedBy, setS2PassedBy] = useState(false);
  const [currentStepImg, setCurrentStepImg] = useState(imgInitial);
  const [sequenceImgs, setSequenceImgs] = useState([]);

  const handleSectionVisibility = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.target === mainSectionRef.current) {
        setAbsoluteTitle(entry.intersectionRatio <= 0);
      }
      if (entry.target === titleSection.current) {
        setTitleSectionVisibility(Number(entry.intersectionRatio.toFixed(2)));
      }
      if (entry.target === section1Ref.current) {
        setS1Visibility(Number(entry.intersectionRatio.toFixed(2)));
        setS1PassedBy(entry.boundingClientRect.top < 0);
      }
      if (entry.target === section2Ref.current) {
        setS2Visibility(Number(entry.intersectionRatio.toFixed(2)));
        setS2PassedBy(entry.boundingClientRect.top < 0);
      }
    });
  }, []);

  const handleImagesPosition = useCallback(
    entries => {
      const { intersectionRatio, boundingClientRect } = entries[0];
      setS3Visibility(Number(intersectionRatio.toFixed(2)));
      if (boundingClientRect.top >= 0) {
        const currentPosition = Math.floor((sequenceImgs.length - 1) * intersectionRatio.toFixed(2));
        setCurrentStepImg(sequenceImgs[currentPosition]);
      } else {
        setCurrentStepImg(sequenceImgs[sequenceImgs.length - 1]);
      }
    },
    [sequenceImgs]
  );

  const requestAllImages = useCallback(async () => {
    const images = await requestImageBatch(SEQUENCE, 0, []);
    setSequenceImgs(images);
  }, []);

  useEffect(() => {
    mainSectionRef.current.style.setProperty('--opacity-section-1', s1PassedBy ? 1 : s1Visibility);
    mainSectionRef.current.style.setProperty('--opacity-section-2', s2PassedBy ? 1 : s2Visilibity);
    titleSection.current.style.setProperty('--visible', titleSectionVisibility);
    section1Ref.current.style.setProperty('--visible', s1Visibility);
    section2Ref.current.style.setProperty('--visible', s2Visilibity);
    pivotImgSectionRef.current.style.setProperty('--visible-cover', s2PassedBy ? 0 : 1);
    section3Ref.current.style.setProperty('--visible', s3Visibility);
    if (isBigScreen()) {
      pivotImgSectionRef.current.style.setProperty('--img-rotate-display', s3Visibility ? 'flex' : 'none');
      pivotImgSectionRef.current.style.setProperty('--img-initial-display', s3Visibility ? 'none' : 'flex');
    }
  }, [titleSectionVisibility, s1PassedBy, s1Visibility, s2PassedBy, s2Visilibity, s3Visibility]);

  useEffect(() => {
    const sectionsObserver = new IntersectionObserver(handleSectionVisibility, {
      threshold: buildThresholdList(DEFAULT_THRESHOLD)
    });

    sectionsObserver.observe(mainSectionRef.current);
    sectionsObserver.observe(titleSection.current);
    sectionsObserver.observe(section1Ref.current);
    sectionsObserver.observe(section2Ref.current);
    sectionsObserver.observe(section3Ref.current);
  }, [handleSectionVisibility]);

  useEffect(() => {
    if (sequenceImgs.length === SEQUENCE.length) {
      const imagesObserver = new IntersectionObserver(handleImagesPosition, {
        threshold: buildThresholdList(DEFAULT_THRESHOLD)
      });
      imagesObserver.observe(section3Ref.current);
    }
  }, [handleImagesPosition, sequenceImgs.length]);

  useEffect(() => {
    requestAllImages();
  }, [requestAllImages]);

  return (
    <section
      ref={mainSectionRef}
      className={clsx(styles.introducingSection, { [styles.isTablet]: isTablet() })}
    >
      <div className={styles.innerSection}>
        <section ref={titleSection} className={`${styles.subSection} ${styles.titleSection} ${styles.first}`}>
          <div className={clsx(styles.fixedWrapper, { [styles.absolute]: absoluteTitle })}>
            <h2 className={`big-title ${styles.title}`}>{t('home:INTRODUCING_TITLE')}</h2>
          </div>
        </section>
        <section ref={pivotImgSectionRef} className={`${styles.subSection} ${styles.thePivot}`}>
          <div className={styles.fixedWrapper}>
            <div className={styles.sectionImage}>
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.tabletImg}`}
                src={pivotUnit}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.imgInitial}`}
                src={imgInitial}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.tabletImg} ${styles.tabletImgCover}`}
                src={pivotScreen1x}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.tabletImg} ${styles.tabletImgCoverPast}`}
                src={pivotScreen2x}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.imgCover}`}
                src={pivotScreen1}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.imgRotate}`}
                src={currentStepImg}
                alt={t('home:PIVOT_IMAGE')}
              />
            </div>
            <div className={styles.sectionCaption} />
          </div>
        </section>
        <section ref={section1Ref} className={`${styles.subSection} ${styles.smarterHomeGym}`}>
          <div className={clsx(styles.fixedWrapper, { [styles.absolute]: absoluteTitle })}>
            <div className={styles.sectionImage}>
              <img
                aria-hidden="true"
                className={styles.imgResponsive}
                src={pivotUp}
                alt={t('home:PIVOT_IMAGE')}
              />
            </div>
            <div className={styles.sectionCaption}>
              <div className={styles.captionContainer}>
                <span className={`big-subtitle ${styles.captionTitle}`}>
                  {t('home:INTRODUCING_TITLE_CAPTION_1')}
                </span>
                <p className="base-text">{t('home:INTRODUCING_CONTENT_CAPTION_1')}</p>
              </div>
            </div>
          </div>
        </section>
        <section ref={section2Ref} className={`${styles.subSection} ${styles.deepInsights}`}>
          <div className={clsx(styles.fixedWrapper, { [styles.absolute]: absoluteTitle })}>
            <div className={styles.sectionImage}>
              <img
                aria-hidden="true"
                className={`${styles.img} ${styles.tabletImg}`}
                src={pivotScreen2x}
                alt={t('home:PIVOT_IMAGE')}
              />
              <img aria-hidden="true" className={styles.img} src={pivotScreen2} alt={t('home:PIVOT_IMAGE')} />
              <img
                aria-hidden="true"
                className={styles.imgResponsive}
                src={pivotMetrics}
                alt={t('home:PIVOT_IMAGE')}
              />
            </div>
            <div className={styles.sectionCaption}>
              <div className={styles.captionContainer}>
                <span className={`big-subtitle ${styles.captionTitle}`}>
                  {t('home:INTRODUCING_TITLE_CAPTION_2')}
                </span>
                <p className="base-text">{t('home:INTRODUCING_CONTENT_CAPTION_2')}</p>
              </div>
            </div>
          </div>
        </section>
        <section ref={section3Ref} className={`${styles.subSection} ${styles.noMess}`}>
          <div className={styles.fixedWrapper}>
            <div className={styles.sectionImage}>
              <img alt={t('home:PIVOT_IMAGE')} className={styles.imgResponsive} src={pivotDown} />
            </div>
            <div className={styles.sectionCaption}>
              <div className={styles.captionContainer}>
                <span className={`big-subtitle ${styles.captionTitle}`}>
                  {t('home:INTRODUCING_TITLE_CAPTION_3')}
                </span>
                <p className={`base-text ${styles.captionContent}`}>
                  {t('home:INTRODUCING_CONTENT_CAPTION_3')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Introducing;
