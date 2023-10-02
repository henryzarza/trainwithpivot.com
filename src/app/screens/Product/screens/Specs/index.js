import React from 'react';
import { t } from 'i18next';
import { string } from 'prop-types';

import { DEFAULT_WEIGHT_UNIT } from '~constants/locale';
import { DIMENSIONS } from '~constants/product';

import content1Image from './assets/pivot-specs.png';
import styles from './styles.module.scss';

function Specs({ weightUnit }) {
  return (
    <section className={styles.specsSection}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>{t('product:SPECS_TITLE')}</h2>
        <p className={styles.sectionText}>{t('product:SPECS_CONTENT')}</p>
        <div className={styles.dimensions}>
          <div className={styles.dimension}>
            <h3 data-abbrv={t('product:HEIGHT')[0]} className={styles.dimensionName}>
              {t('product:HEIGHT')}
            </h3>
            <p className={styles.dimensionValue}>{DIMENSIONS.height}</p>
          </div>
          <div className={styles.dimension}>
            <h3 data-abbrv={t('product:WIDTH')[0]} className={styles.dimensionName}>
              {t('product:WIDTH')}
            </h3>
            <p className={styles.dimensionValue}>{DIMENSIONS.width}</p>
          </div>
          <div className={styles.dimension}>
            <h3 data-abbrv={t('product:DEPTH')[0]} className={styles.dimensionName}>
              {t('product:DEPTH')}
            </h3>
            <p className={styles.dimensionValue}>{DIMENSIONS.depth}</p>
          </div>
          <div className={styles.dimension}>
            <h3 data-abbrv={weightUnit} className={styles.dimensionName}>
              {t('product:WEIGHT')}
            </h3>
            <p className={styles.dimensionValue}>
              {`${DIMENSIONS.weight} `}
              <span className={styles.dimensionUnit}>{weightUnit}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sectionImage}>
        <img aria-hidden="true" className={styles.image} src={content1Image} />
      </div>
    </section>
  );
}

Specs.defaultProps = {
  weightUnit: DEFAULT_WEIGHT_UNIT
};

Specs.propTypes = {
  weightUnit: string
};

export default Specs;
