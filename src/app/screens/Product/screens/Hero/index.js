import React, { useState, useRef, useEffect } from 'react';
import { t } from 'i18next';
import clsx from 'clsx';
import { number } from 'prop-types';
import { Link } from 'react-router-dom';

import LocalStorageService from '~services/LocalStorageService';
import { PRICES, PIVOT_COLOR_OPTIONS } from '~constants/product';
import Stars from '~components/Stars';
import routes from '~constants/routes';
import { useTransparentHeight } from '~components/Layout/constants';

import blackPivot from './assets/black-pivot.mp4';
import whitePivot from './assets/white-pivot.mp4';
import whitePivotImg from './assets/white-pivot.png';
import blackPivotImg from './assets/black-pivot.png';
import background from './assets/background.mp4';
import styles from './styles.module.scss';

function Hero({ price, deferredPrice, membershipFee }) {
  const whiteVideoRef = useRef(null);
  const blackVideoRef = useRef(null);
  const [currentColor, setCurrentColor] = useState(PIVOT_COLOR_OPTIONS.white);
  const heroRef = useTransparentHeight();

  useEffect(() => {
    whiteVideoRef.current.play();
    LocalStorageService.setStationColor(PIVOT_COLOR_OPTIONS.white);
  }, []);

  const handleChangeVideo = color => {
    if (currentColor === color) {
      return;
    }

    let nextVideoRef = blackVideoRef;
    if (currentColor === PIVOT_COLOR_OPTIONS.black) {
      nextVideoRef = whiteVideoRef;
    }
    setCurrentColor(color);
    LocalStorageService.setStationColor(color);
    nextVideoRef.current.play();
  };

  return (
    <section className={styles.heroSection} ref={heroRef}>
      <video className={styles.backgroundVideo} playsInline muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className={styles.sectionImage}>
        <video
          ref={blackVideoRef}
          className={clsx(styles.bgVideo, { [styles.visible]: currentColor === PIVOT_COLOR_OPTIONS.black })}
          poster={blackPivotImg}
          playsInline
          muted
        >
          <source src={blackPivot} type="video/mp4" />
        </video>
        <video
          ref={whiteVideoRef}
          className={clsx(styles.bgVideo, { [styles.visible]: currentColor === PIVOT_COLOR_OPTIONS.white })}
          poster={whitePivotImg}
          playsInline
          muted
        >
          <source src={whitePivot} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2' />
        </video>
      </div>
      <h1 className={styles.sectionTitle}>{t('product:HERO_TITLE')}</h1>
      <Stars className={styles.stars} value={4.5} showText />
      <p className={styles.description}>{t('product:HERO_DESCRIPTION')}</p>
      <div className={styles.priceDetails}>
        <span className={styles.price}>{`$${price}`}</span>
        <span className={styles.deferredPrice}>{t('product:PAY_AS_LITTE', { price: deferredPrice })}</span>
        <span className={styles.membershipFee}>{t('product:MEMBERSHIP_FEE', { fee: membershipFee })}</span>
        <Link to={routes.CLASSES} className={styles.learnMore}>
          {t('product:LEARN_MORE')}
        </Link>
      </div>
      <div className={styles.colorPicker}>
        <button
          className={clsx(styles.colorBtn, styles.whiteBtn, {
            [styles.selected]: currentColor === PIVOT_COLOR_OPTIONS.white
          })}
          onClick={() => handleChangeVideo(PIVOT_COLOR_OPTIONS.white)}
          type="button"
        />
        <button
          className={clsx(styles.colorBtn, styles.blackBtn, {
            [styles.selected]: currentColor === PIVOT_COLOR_OPTIONS.black
          })}
          onClick={() => handleChangeVideo(PIVOT_COLOR_OPTIONS.black)}
          type="button"
        />
        <span className={styles.selectedColorText}>{t(`product:${currentColor}`)}</span>
      </div>
      <Link to={{ pathname: routes.CHECKOUT, query: { color: currentColor } }}>
        <button className={styles.reserveBtn} type="button">
          {t('product:RESERVE')}
        </button>
      </Link>
      <span className={styles.disclaimer}>{t('product:DISCLAIMER')}</span>
    </section>
  );
}

Hero.defaultProps = {
  deferredPrice: PRICES.deferredPrice,
  membershipFee: PRICES.membershipFee,
  price: PRICES.originalPrice
};

Hero.propTypes = {
  deferredPrice: number,
  membershipFee: number,
  price: number
};

export default Hero;
