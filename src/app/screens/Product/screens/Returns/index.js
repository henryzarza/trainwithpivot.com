import React from 'react';
import { t } from 'i18next';

import Callout from './components/Callout';
import PolicyIcon from './assets/policy-icon.svg';
import TruckIcon from './assets/truck-icon.svg';
import BadgeIcon from './assets/badge-icon.svg';
import styles from './styles.module.scss';

function Returns() {
  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <Callout
          icon={PolicyIcon}
          title={t('product:RETURN_POLICY_TITLE')}
          description={t('product:RETURN_POLICY_DESCRIPTION')}
        />
        <Callout
          icon={TruckIcon}
          title={t('product:DELIVERY_TITLE')}
          description={t('product:DELIVERY_DESCRIPTION')}
        />
        <Callout
          icon={BadgeIcon}
          title={t('product:WARRANTY_TITLE')}
          description={t('product:WARRANTY_DESCRIPTION')}
        />
      </div>
    </section>
  );
}

Returns.displayName = 'Returns';

export default Returns;
