import React, { Fragment, useRef, useCallback } from 'react';
import { t } from 'i18next';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';

import { checkVisible, isBigScreen } from '~utils/validations';
import { useScrollListener } from '~utils/style';
import { debounce } from '~utils/object';
import routes from '~constants/routes';
import { COACHES } from '~screens/Classes/screens/Coaches/constants';

import CardSlider from './components/CardSlider';
import {
  CLASSES,
  PERCENT_TRIGGER_CARD,
  PERCENT_TRIGGER_CARD_COACH,
  OPACITY_PERCENT,
  SCALE_OPACITY_TITLE,
  QTY_COACHES_TO_SHOW
} from './constants';
import styles from './styles.module.scss';

function ClassesCoaches() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const SceneCmp = isBigScreen() ? Scene : Fragment;
  const TweenCmp = isBigScreen() ? Tween : Fragment;
  const refSection = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const section = refSection.current;
      if (isBigScreen()) {
        if (checkVisible(section)) {
          const sectionPositionY = section.getBoundingClientRect().y;
          if (sectionPositionY > 0) {
            const opacityTitle = Math.max(
              ((window.innerHeight / 2 - sectionPositionY) / SCALE_OPACITY_TITLE) * OPACITY_PERCENT,
              0
            );
            section.style.setProperty('--position-title', 'fixed');
            section.style.setProperty('--opacity-title', Math.min(opacityTitle, 1).toFixed(2));
            section.style.setProperty('padding-top', '100vh');
          } else {
            section.style.setProperty('--position-title', 'relative');
            section.style.setProperty('padding-top', 0);
          }
        } else {
          section.style.setProperty('--position-title', 'relative');
          section.style.setProperty('padding-top', 0);
        }
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  return (
    <section ref={refSection} className={styles.section}>
      <ControllerCmp>
        <h1 className={`big-title text-center ${styles.title} ${styles.main}`}>
          {t('home:CLASSES_COACHES_TITLE_1')}
        </h1>
        <div className={`${styles.containerClasses}`}>
          <ControllerCmp>
            {CLASSES.map((item, index) => (
              <SceneCmp key={item.id} duration={300} triggerHook={1 - PERCENT_TRIGGER_CARD * index}>
                <TweenCmp from={{ y: 200, opacity: 0 }} to={{ y: 0, opacity: 1 }}>
                  <CardSlider key={item.id} data={item} />
                </TweenCmp>
              </SceneCmp>
            ))}
          </ControllerCmp>
        </div>
        <SceneCmp duration={200} triggerHook={0.9}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <Link to={routes.CLASSES} className={`button ${styles.button} ${styles.first}`}>
              {t('home:CLASSES_COACHES_BTN_CLASSES')}
            </Link>
          </TweenCmp>
        </SceneCmp>
        <SceneCmp duration={450} triggerHook={0.8}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <h1 className={`big-title text-center ${styles.title} ${styles.last}`}>
              {t('home:CLASSES_COACHES_TITLE_2')}
            </h1>
          </TweenCmp>
        </SceneCmp>
        <div className={styles.container}>
          <ControllerCmp>
            {COACHES.slice(0, QTY_COACHES_TO_SHOW).map((coach, index) => (
              <SceneCmp key={coach.id} duration={250} triggerHook={1 - PERCENT_TRIGGER_CARD_COACH * index}>
                <TweenCmp from={{ y: 150, opacity: 0 }} to={{ y: 0, opacity: 1 }}>
                  <div key={coach.id} className={styles.card}>
                    <img className={`m-bottom-6 ${styles.coachImg}`} src={coach.image} alt={coach.name} />
                    <h5 className={`subtitle m-bottom-4 ${styles.coachName}`}>{coach.name}</h5>
                    <p className="base-text">{coach.info}</p>
                  </div>
                </TweenCmp>
              </SceneCmp>
            ))}
          </ControllerCmp>
        </div>
        <SceneCmp duration={200} triggerHook={0.9}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <Link to={routes.CLASSES} className={`button ${styles.button}`}>
              {t('home:CLASSES_COACHES_BTN_COACHES')}
            </Link>
          </TweenCmp>
        </SceneCmp>
      </ControllerCmp>
    </section>
  );
}

export default ClassesCoaches;
