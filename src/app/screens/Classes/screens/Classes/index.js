import React, { Fragment } from 'react';
import { t } from 'i18next';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

import { isBigScreen } from '~utils/validations';
import CardSlider from '~screens/Home/screens/ClassesCoaches/components/CardSlider';
import { CLASSES, PERCENT_TRIGGER_CARD } from '~screens/Home/screens/ClassesCoaches/constants';

import styles from './styles.module.scss';

function Classes() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const SceneCmp = isBigScreen() ? Scene : Fragment;
  const TweenCmp = isBigScreen() ? Tween : Fragment;

  return (
    <section className={styles.section}>
      <ControllerCmp>
        <SceneCmp duration={200} triggerHook={0.75}>
          <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <h1 className={`title text-center ${styles.title}`}>{t('classes:CLASSES_TITLE')}</h1>
          </TweenCmp>
        </SceneCmp>
      </ControllerCmp>
      <div className={`${styles.container}`}>
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
    </section>
  );
}

export default Classes;
