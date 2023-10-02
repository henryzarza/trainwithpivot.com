import React from 'react';
import { t } from 'i18next';

import InlcudedImg from './assets/included.jpg';
import styles from './styles.module.scss';

// eslint-disable-next-line prettier/prettier
const items = [['2X', '1X', '4X'], ['4X', '4X', '4X', '4X'], ['1', '1', '1']];

function Included() {
  let itemAmount = -1;
  return (
    <section className={`column center ${styles.includedSection}`}>
      <h2 className={`row center middle big-title text-center ${styles.sectionTitle}`}>
        {t('product:INCLUDED')}
      </h2>
      <img alt="elements included" src={InlcudedImg} className={styles.includedImg} />
      <div className={styles.listContainer}>
        {items.map((section, sectionIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <ul key={sectionIndex}>
            {section.map(item => {
              itemAmount = itemAmount + 1;
              return (
                <li key={itemAmount} className={`${styles.item} subtitle bold`}>
                  <strong className={`${styles.itemTitle} bold`}>{item}</strong>
                  {t(`product:ITEM_${itemAmount + 1}`)}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
}

Included.displayName = 'Included';

export default Included;
