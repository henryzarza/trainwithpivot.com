import React from 'react';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

import routes from '~constants/routes';

import content1Image from './assets/pivot-training-subscription.png';
import styles from './styles.module.scss';

function Subscription() {
  return (
    <section className={styles.subscriptionSection}>
      <img aria-hidden="true" className={styles.image} src={content1Image} />
      <div className={styles.sectionContent}>
        <div className={styles.contentWrapper}>
          <h2 className={`big-subtitle ${styles.sectionTitle}`}>{t('product:SUBSCRIPTION_TITLE')}</h2>
          <p className={`base-text ${styles.sectionText}`}>{t('product:SUBSCRIPTION_CONTENT')}</p>
          <Link to={routes.CLASSES} className={styles.learnMoreBtn}>
            {t('product:SUBSCRIPTION_LEARN_MORE')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
