import React, { useCallback, useRef } from 'react';
import { t } from 'i18next';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { checkVisible, isBigScreen } from '~utils/validations';
import { useScrollListener } from '~utils/style';
import { debounce } from '~utils/object';
import { DEFAULT_SYMBOL_CURRENCY } from '~constants/locale';
import routes from '~constants/routes';

import {
  PRICE,
  PRICE_COACHES,
  MONTHS_DURATION,
  OPACITY_PERCENT,
  SCALE_OPACITY_PRICE,
  SCALE_OPACITY_DESCRIPTION
} from './constants';
import styles from './styles.module.scss';

function Subscription({ isAnimationBlocked }) {
  const refSection = useRef(null);

  const scrollFunc = useCallback(
    debounce(() => {
      const section = refSection.current;
      if (isBigScreen()) {
        if (checkVisible(section)) {
          const sectionPositionY = section.getBoundingClientRect().y;
          if (sectionPositionY > 0) {
            const opacityPrice = Math.max(
              ((window.innerHeight / 2 - sectionPositionY) / SCALE_OPACITY_PRICE) * OPACITY_PERCENT,
              0
            );
            const opacityDescription = Math.max(
              ((window.innerHeight / SCALE_OPACITY_DESCRIPTION - sectionPositionY) / 2) * OPACITY_PERCENT,
              0
            );
            section.style.setProperty('--section-position', 'fixed');
            section.style.setProperty('--price-opacity', Math.min(opacityPrice, 1).toFixed(2));
            section.style.setProperty('--description-opacity', Math.min(opacityDescription, 1).toFixed(2));
          } else {
            section.style.setProperty('--section-position', 'initial');
          }
        } else {
          section.style.setProperty('--section-position', 'initial');
        }
      }
    }),
    []
  );

  useScrollListener(scrollFunc, !isAnimationBlocked);

  return (
    <section
      ref={refSection}
      className={clsx(`column center ${styles.section}`, { [styles.withoutAnimation]: isAnimationBlocked })}
    >
      <div className={styles.content}>
        <div className={`column center ${styles.priceContent}`}>
          <h3 className={`big-title row m-bottom-10 ${styles.title}`}>
            <span className={`subtitle ${styles.priceSymbol}`}>{DEFAULT_SYMBOL_CURRENCY}</span>
            {PRICE}
          </h3>
          <h6 className={`subtitle ${styles.subtitle}`}>
            {t('home:SUBSCRIPTION_MONTHS', { number: MONTHS_DURATION })}
          </h6>
        </div>
        <div className={`column ${styles.descriptionContent}`}>
          <h4 className={`big-subtitle ${styles.descriptionTitle}`}>{t('home:SUBSCRIPTION_TITLE')}</h4>
          <p className="base-text m-bottom-10">
            {t('home:SUBSCRIPTION_DESCRIPTION', {
              price: `${DEFAULT_SYMBOL_CURRENCY}${PRICE_COACHES}`
            })}
          </p>
          <Link to={routes.PRODUCT} className={`button ${styles.button}`}>
            {t('home:RIGHT_MOVES_BUTTON')}
          </Link>
        </div>
      </div>
    </section>
  );
}

Subscription.propTypes = {
  isAnimationBlocked: bool
};

export default Subscription;
