import React, { useRef, useCallback, useState } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';

import { isBigScreen, checkVisible, isTablet } from '~utils/validations';
import { useScrollListener, interpolateValues, limitNumberWithinRange } from '~utils/style';
import { debounce } from '~utils/object';

import Graphic from './components/Graphic';
import icPie from './assets/Ic_pie.png';
import icPerson from './assets/Ic_person.png';
import styles from './styles.module.scss';
import {
  OPACITY_PERCENT,
  SCALE_OPACITY_IMG,
  SCALE_OPACITY_TITLE,
  SCALE_OPACITY_IMGS,
  STROKE_DASHOFFSET_GRAPHIC,
  GRAPHIC_FILL_MAX_OPACITY,
  CALORIES_BURNED,
  POUNDS_LIFTED,
  LEADERBOARD_RANK,
  LEADERBOARD_RANK_DECIMAL
} from './constants';

function Feedback() {
  const [caloriesBurned, setCaloriesBurned] = useState(isBigScreen() ? 0 : CALORIES_BURNED);
  const [poundsLifted, setPoundsLifted] = useState(isBigScreen() ? 0 : POUNDS_LIFTED);
  const [leaderboardRank, setLeaderboardRank] = useState(isBigScreen() ? 0 : LEADERBOARD_RANK);
  const refSection = useRef(null);
  const refContent = useRef(null);
  const refMetrics = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const section = refSection.current;
      if (checkVisible(section) && isBigScreen()) {
        const sectionPositionY = section.getBoundingClientRect().y;
        const opacityImages = Math.max(
          // eslint-disable-next-line prettier/prettier
          ((window.innerHeight / SCALE_OPACITY_TITLE - sectionPositionY) / SCALE_OPACITY_IMGS) * OPACITY_PERCENT,
          0
        );
        const opacityContent = Math.max(
          ((window.innerHeight / 2 - sectionPositionY) / 2) * OPACITY_PERCENT,
          0
        );
        const opacityImg = Math.max(
          ((window.innerHeight / 2 - sectionPositionY) / SCALE_OPACITY_IMG) * OPACITY_PERCENT,
          0
        );
        refMetrics.current.style.setProperty('opacity', Math.min(opacityImages.toFixed(2), 1));
        refContent.current.style.setProperty('opacity', Math.min(opacityContent.toFixed(2), 1));
        section.style.setProperty('--graphic-opacity', Math.min(opacityImg.toFixed(2), 1));
        const pathLine = Math.max(
          interpolateValues(
            window.innerHeight / SCALE_OPACITY_IMG - sectionPositionY,
            0,
            window.innerHeight / SCALE_OPACITY_IMG
          ),
          0
        );
        section.style.setProperty(
          '--graphic-line',
          // eslint-disable-next-line prettier/prettier
          STROKE_DASHOFFSET_GRAPHIC - Math.min((pathLine * STROKE_DASHOFFSET_GRAPHIC).toFixed(2), STROKE_DASHOFFSET_GRAPHIC)
        );
        section.style.setProperty(
          '--graphic-fill-opacity',
          Math.min(pathLine.toFixed(2), GRAPHIC_FILL_MAX_OPACITY)
        );
        const metricValue = limitNumberWithinRange(
          interpolateValues(window.innerHeight - sectionPositionY, 0, window.innerHeight),
          0,
          1
        );
        const leaderboard =
          LEADERBOARD_RANK_DECIMAL + LEADERBOARD_RANK - (metricValue * LEADERBOARD_RANK_DECIMAL).toFixed(0);
        setCaloriesBurned((metricValue * CALORIES_BURNED).toFixed(0));
        setPoundsLifted((metricValue * POUNDS_LIFTED).toFixed(0));
        setLeaderboardRank(leaderboard > LEADERBOARD_RANK ? leaderboard : LEADERBOARD_RANK);
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  return (
    <section ref={refSection} className={clsx(styles.section, { [styles.isTablet]: isTablet() })}>
      <div className={`row middle center ${styles.content}`}>
        <div className={`column item-1 full-width ${styles.graphicContent}`}>
          <div ref={refMetrics} className={`row space-between ${styles.metricsContainer}`}>
            <div className="column m-right-1 item-1">
              <span className={`m-bottom-2 uppercase-text ${styles.metricTitle}`}>
                {t('home:FEEDBACK_CALORIES')}
              </span>
              <span className={`m-bottom-3 ${styles.metricValue}`}>{caloriesBurned}</span>
              <div className="row">
                <img
                  src={icPie}
                  className={`m-right-1 ${styles.metricIcon}`}
                  alt={t('home:FEEDBACK_LIFTING')}
                />
                <span className={`m-bottom-2 ${styles.metricDescription}`}>{t('home:FEEDBACK_LIFTING')}</span>
              </div>
            </div>
            <div className="column m-right-1 item-1">
              <span className={`m-bottom-2 uppercase-text ${styles.metricTitle}`}>
                {t('home:FEEDBACK_POUNDS')}
              </span>
              <span className={`m-bottom-3 ${styles.metricValue}`}>{poundsLifted}</span>
              <div className="row">
                <img
                  src={icPie}
                  className={`m-right-1 ${styles.metricIcon}`}
                  alt={t('home:FEEDBACK_RESTING')}
                />
                <span className={`m-bottom-2 ${styles.metricDescription}`}>{t('home:FEEDBACK_RESTING')}</span>
              </div>
            </div>
            <div className="column item-1">
              <span className={`m-bottom-2 uppercase-text ${styles.metricTitle}`}>
                {t('home:FEEDBACK_LEADERBOARD')}
              </span>
              <span className={`m-bottom-3 ${styles.metricValue}`}>
                {leaderboardRank} <span className={styles.metricSmallValue}>/{LEADERBOARD_RANK_DECIMAL}</span>
              </span>
              <div className="row">
                <img
                  src={icPerson}
                  className={`m-right-1 ${styles.metricIcon}`}
                  alt={t('home:FEEDBACK_MUSCLE')}
                />
                <span className={`m-bottom-2 ${styles.metricDescription}`}>{t('home:FEEDBACK_MUSCLE')}</span>
              </div>
            </div>
          </div>
          <span className={`full-width ${styles.separator}`} />
          <Graphic
            className={`full-width ${styles.graph}`}
            lineClass={styles.graphicPath}
            fillClass={styles.graphicFill}
          />
        </div>
        <div ref={refContent} className={`column item-1 full-width ${styles.textContent} ${styles.opacity}`}>
          <h3 className="big-subtitle m-bottom-5">{t('home:FEEDBACK_TITLE')}</h3>
          <p className="base-text">{t('home:FEEDBACK_TEXT')}</p>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
