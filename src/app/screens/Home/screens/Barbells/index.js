import React, { useRef, useCallback } from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import { checkVisible, isBigScreen } from '~utils/validations';
import { useScrollListener } from '~utils/style';
import { debounce } from '~utils/object';
import { vividTangerine } from '~utils/colors';
import routes from '~constants/routes';

import {
  SCROLL_TRANSFORM_DIFFERENCE,
  SCROLL_ALPHA_DIFFERENCE,
  TRANSFORM_STEP,
  OPACITY_PERCENT
} from './constants';
import collar1 from './assets/collar-1.png';
import collar2 from './assets/collar-2.png';
import largeBar from './assets/large-bar.png';
import smallBar from './assets/small-bar.png';
import styles from './styles.module.scss';

function Barbells() {
  const refSection = useRef(null);
  const refDescription = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const sectionParallax = refSection.current;
      const description = refDescription.current;
      if (isBigScreen() && checkVisible(sectionParallax)) {
        const windowScroll = window.scrollY - sectionParallax.offsetTop;
        const alpha = Math.max(
          ((windowScroll + SCROLL_ALPHA_DIFFERENCE) / sectionParallax.offsetHeight) * 2,
          0
        );
        sectionParallax.style.backgroundColor = `rgba(${vividTangerine}, ${alpha.toFixed(2)})`;
        const translate = Math.max(windowScroll + SCROLL_TRANSFORM_DIFFERENCE, 0);
        const gears = refSection.current.querySelectorAll('img');
        gears.forEach(el => {
          el.style.transform = `translateY(-${translate / TRANSFORM_STEP}px)`;
        });
        if (checkVisible(description)) {
          const descriptionPositionY = description.getBoundingClientRect().y;
          const descriptionOpacity = Math.max(
            (descriptionPositionY - window.innerHeight / 2) * OPACITY_PERCENT,
            0
          );
          description.style.opacity = 1 - Math.min(descriptionOpacity, 1);
        }
      }
    }),
    []
  );

  useScrollListener(scrollFunc);

  return (
    <section className={styles.section} ref={refSection}>
      <div className={styles.content}>
        <img src={collar2} aria-hidden="true" alt={t('home:BARBELLS_COLLAR_2')} className={styles.imgCog} />
        <img src={collar1} aria-hidden="true" alt={t('home:BARBELLS_COLLAR')} className={styles.imgCog} />
        <img src={largeBar} aria-hidden="true" alt={t('home:BARBELLS_LARGE_BAR')} className={styles.imgCog} />
        <img src={smallBar} aria-hidden="true" alt={t('home:BARBELLS_SMALL_BAR')} className={styles.imgCog} />
        <div className={styles.description} ref={refDescription}>
          <h6 className={`big-subtitle m-bottom-5 ${styles.title}`}>{t('home:BARBELLS_TITLE')}</h6>
          <p className="base-text m-bottom-10">{t('home:BARBELLS_CONTENT')}</p>
          <Link to={routes.PRODUCT} className={`button ${styles.button}`}>
            {t('home:RIGHT_MOVES_BUTTON')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Barbells;
