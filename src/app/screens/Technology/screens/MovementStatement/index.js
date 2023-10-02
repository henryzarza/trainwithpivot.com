import React, { Fragment, useRef, useCallback, useEffect, useState } from 'react';
import { t } from 'i18next';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import clsx from 'clsx';

import { isAllowedScreenInMobile, isTablet } from '~utils/validations';
import { buildThresholdList } from '~utils/style';

import { DEFAULT_THRESHOLD } from './constants';
import movementStatement from './assets/movement-statement.svg';
import styles from './styles.module.scss';

function MovementStatement() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const description1Ref = useRef(null);
  const [s1Visibility, setS1Visibility] = useState(0);
  const [s1PassedBy, setS1PassedBy] = useState(false);
  const ControllerCmp = isAllowedScreenInMobile() ? Controller : Fragment;
  const SceneCmp = isAllowedScreenInMobile() ? Scene : Fragment;
  const TweenCmp = isAllowedScreenInMobile() ? Tween : Fragment;

  const handleSectionVisibility = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.target === section2Ref.current) {
        setS1Visibility(Number(entry.intersectionRatio.toFixed(2)));
        setS1PassedBy(entry.boundingClientRect.top < 0);
        const visible = entry.boundingClientRect.top < 0 ? 1 : entry.intersectionRatio.toFixed(2);
        section3Ref.current.style.setProperty('--visible-text', visible);
        section1Ref.current.style.setProperty('--visible-text-2', visible > 0 ? 1 : 0);
      }
      if (entry.target === description1Ref.current) {
        const visible = entry.boundingClientRect.top < 0 ? 1 : entry.intersectionRatio.toFixed(2);
        section1Ref.current.style.setProperty('--visible-text', visible);
      }
    });
  }, []);

  useEffect(() => {
    section1Ref.current.style.setProperty('--visible', s1PassedBy ? 0 : 1 - s1Visibility);
    section3Ref.current.style.setProperty('--visible', s1PassedBy ? 1 : s1Visibility);
  }, [s1Visibility, s1PassedBy]);

  useEffect(() => {
    if (isAllowedScreenInMobile()) {
      const sectionsObserver = new IntersectionObserver(handleSectionVisibility, {
        threshold: buildThresholdList(DEFAULT_THRESHOLD)
      });

      sectionsObserver.observe(section2Ref.current);
      sectionsObserver.observe(description1Ref.current);
    }
  }, [handleSectionVisibility]);

  return (
    <section className={clsx(styles.section, { [styles.isTablet]: isTablet() })}>
      <ControllerCmp>
        <SceneCmp duration={300} triggerHook={0.8}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <h1 className={`big-title white-text text-center ${styles.title}`}>
              {t('technology:MOVEMENT_STATEMENT_TITLE')}
            </h1>
          </TweenCmp>
        </SceneCmp>
      </ControllerCmp>
      <div className={styles.sectionContainer}>
        <ControllerCmp>
          <SceneCmp duration={300} triggerHook={0.8}>
            <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
              <h1 className={`big-title white-text text-center ${styles.title} ${styles.last}`}>
                {t('technology:MOVEMENT_STATEMENT_TITLE')}
              </h1>
            </TweenCmp>
          </SceneCmp>
        </ControllerCmp>
        <div ref={section1Ref} className={styles.content}>
          <h1 className={`big-title white-text text-center ${styles.title} ${styles.mobile}`}>
            {t('technology:MOVEMENT_STATEMENT_TITLE')}
          </h1>
          <div className={`${styles.description} ${styles.first}`}>
            <h3 className={`big-subtitle white-text m-bottom-5 ${styles.subtitle}`}>
              {t('technology:MOVEMENT_STATEMENT_SUBTITLE_1')}
            </h3>
            <p className={`base-text white-text ${styles.descriptionText}`}>
              {t('technology:MOVEMENT_STATEMENT_CONTENT_1')}
            </p>
            <div ref={description1Ref} className={styles.descriptionInteraction} />
          </div>
        </div>
        <div ref={section3Ref} className={`${styles.content} ${styles.last}`}>
          <div className={`${styles.description} ${styles.last}`}>
            <h3 className={`big-subtitle white-text m-bottom-5 ${styles.lastSubtitle}`}>
              {t('technology:MOVEMENT_STATEMENT_SUBTITLE_2')}
            </h3>
            <p className={`base-text white-text m-bottom-10 ${styles.descriptionText}`}>
              {t('technology:MOVEMENT_STATEMENT_CONTENT_2')}
            </p>
            <img
              className={styles.metrics}
              src={movementStatement}
              alt={t('technology:MOVEMENT_STATEMENT_IMG')}
            />
          </div>
        </div>
      </div>
      <div className={styles.sectionInteraction} />
      <div ref={section2Ref} className={styles.sectionInteraction} />
      <div className={styles.sectionInteraction} />
    </section>
  );
}

export default MovementStatement;
