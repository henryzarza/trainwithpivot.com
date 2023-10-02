import React, { Fragment } from 'react';
import { t } from 'i18next';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { isBigScreen, isTablet } from '~utils/validations';
import routes from '~constants/routes';

import styles from './styles.module.scss';

function RightMoves() {
  const ControllerCmp = isBigScreen() ? Controller : Fragment;
  const SceneCmp = isBigScreen() ? Scene : Fragment;
  const TweenCmp = isBigScreen() ? Tween : Fragment;

  return (
    <section className={clsx(styles.section, { [styles.isTablet]: isTablet() })}>
      <div className={`row middle ${styles.sectionContent}`}>
        <div className={styles.imgContent} />
        <div className={styles.content}>
          <ControllerCmp>
            <SceneCmp duration={300} triggerHook={0.65}>
              <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <h3 className={`big-subtitle white-text m-bottom-5 ${styles.text}`}>
                  {t('home:RIGHT_MOVES_TITLE')}
                </h3>
                <p className={`base-text white-text m-bottom-10 ${styles.text}`}>
                  {t('home:RIGHT_MOVES_CONTENT')}
                </p>
              </TweenCmp>
            </SceneCmp>
            <SceneCmp duration={200} triggerHook={0.85}>
              <TweenCmp from={{ opacity: 0 }} to={{ opacity: 1 }}>
                <Link to={routes.TECHNOLOGY} className={`button ${styles.button}`}>
                  {t('home:RIGHT_MOVES_BUTTON')}
                </Link>
              </TweenCmp>
            </SceneCmp>
          </ControllerCmp>
        </div>
      </div>
    </section>
  );
}

export default RightMoves;
