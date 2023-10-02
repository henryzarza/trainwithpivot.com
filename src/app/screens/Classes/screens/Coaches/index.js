import React, { Fragment } from 'react';
import { t } from 'i18next';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

import { isBigScreen } from '~utils/validations';

import { COACHES, PERCENT_TRIGGER_CARD_COACH } from './constants';
import styles from './styles.module.scss';

function Coaches() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const SceneCmp = isBigScreen() ? Scene : Fragment;
  const TweenCmp = isBigScreen() ? Tween : Fragment;

  return (
    <section className={styles.section}>
      <ControllerCmp>
        <SceneCmp duration={300} triggerHook={0.75}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <h1 className={`big-title text-center ${styles.title}`}>{t('classes:COACHES_TITLE')}</h1>
          </TweenCmp>
        </SceneCmp>
        <div className={styles.container}>
          <ControllerCmp>
            {COACHES.map((coach, index) => (
              <SceneCmp key={coach.id} duration={250} triggerHook={1 - PERCENT_TRIGGER_CARD_COACH * index}>
                <TweenCmp from={{ y: 150, opacity: 0 }} to={{ y: 0, opacity: 1 }}>
                  <div className={styles.card}>
                    <img className={`m-bottom-8 ${styles.coachImg}`} src={coach.image} alt={coach.name} />
                    <h5 className={`subtitle m-bottom-4 ${styles.coachName}`}>{coach.name}</h5>
                    <p className={`base-text ${styles.coachInfo}`}>{coach.info}</p>
                  </div>
                </TweenCmp>
              </SceneCmp>
            ))}
          </ControllerCmp>
        </div>
      </ControllerCmp>
    </section>
  );
}

export default Coaches;
