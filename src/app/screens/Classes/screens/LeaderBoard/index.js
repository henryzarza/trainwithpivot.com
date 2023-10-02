import React, { useRef, useCallback } from 'react';
import { t } from 'i18next';

import { isBigScreen, checkVisible } from '~utils/validations';
import { useScrollListener } from '~utils/style';
import { debounce } from '~utils/object';

import board from './assets/board.gif';
import styles from './styles.module.scss';
import { OPACITY_PERCENT, SCALE_OPACITY_IMG, SCALE_OPACITY_CONTENT } from './constants';

function LeaderBoard() {
  const refSection = useRef(null);
  const refContent = useRef(null);
  const refImg = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const section = refSection.current;
      if (checkVisible(section) && isBigScreen()) {
        const sectionPositionY = section.getBoundingClientRect().y;
        const opacityImage = Math.max(
          ((window.innerHeight / SCALE_OPACITY_IMG - sectionPositionY) / 2) * OPACITY_PERCENT,
          0
        );
        const opacityContent = Math.max(
          ((window.innerHeight / 2 - sectionPositionY) / SCALE_OPACITY_CONTENT) * OPACITY_PERCENT,
          0
        );
        refContent.current.style.setProperty('opacity', Math.min(opacityContent.toFixed(2), 1));
        refImg.current.style.setProperty('opacity', Math.min(opacityImage.toFixed(2), 1));
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  return (
    <section ref={refSection} className={styles.section}>
      <div className={styles.content}>
        <h3 className={`big-subtitle m-bottom-12 text-center white-text ${styles.hiddenTitle}`}>
          {t('classes:LEADERBOARD_TITLE')}
        </h3>
        <img
          ref={refImg}
          className={styles.board}
          src={board}
          alt={t('classes:LEADERBOARD_IMAGE_ALT_TEXT')}
        />
        <div ref={refContent} className={`column full-width ${styles.textContent}`}>
          <h3 className={`big-subtitle m-bottom-5 white-text ${styles.title}`}>
            {t('classes:LEADERBOARD_TITLE')}
          </h3>
          <p className={`base-text white-text ${styles.description}`}>{t('classes:LEADERBOARD_TEXT')}</p>
        </div>
      </div>
    </section>
  );
}

export default LeaderBoard;
