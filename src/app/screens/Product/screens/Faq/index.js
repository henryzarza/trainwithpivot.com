import React from 'react';
import { t } from 'i18next';

import FaqAccordion from '~components/Faq';

import { items } from './constants';
import styles from './styles.module.scss';

function Faq() {
  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={`${styles.sectionTitle} big-title`}>{t('product:FAQ')}</h2>
      <FaqAccordion items={items} />
    </section>
  );
}

export default Faq;
