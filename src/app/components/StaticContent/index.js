import React from 'react';
import { t } from 'i18next';
import { shape, string } from 'prop-types';
import DOMPurify from 'dompurify';

import { TAGS } from './constants';
import styles from './styles.module.scss';

function Content({ config, title, id }) {
  const renderContent = element => {
    let content = '';
    // eslint-disable-next-line guard-for-in
    for (const key in element) {
      if (key.includes(TAGS.PARAGRAPH)) {
        content += `<p class="base-text m-bottom-4">${element[key]}</p>`;
      } else if (key.includes(TAGS.LIST)) {
        content += `<ul class="m-bottom-4 ${styles.items}">${element[key]
          .map(list => `<li>${list}</li>`)
          .join('')}</ul>`;
      } else if (key.includes(TAGS.ORDERED_LIST)) {
        content += `<ul class="m-bottom-4 ${styles.items} ${styles.ordered}">${element[key]
          .map(list => `<li>${list}</li>`)
          .join('')}</ul>`;
      } else if (key.includes(TAGS.HEAD)) {
        content += `<h6 class="subtitle m-bottom-4 ${styles.customSubtitle}">${element[key]}</h6>`;
      } else if (key.includes(TAGS.SUBHEAD)) {
        content += `<span class="small-subtitle m-bottom-4">${element[key]}</span>`;
      }
    }
    return DOMPurify.sanitize(content);
  };

  return (
    <section className={styles.section} id={id}>
      <h1 className={`title m-bottom-10 ${styles.mainTitle}`}>{title}</h1>
      <div className={styles.content}>
        <h6 className="small-subtitle">
          {t('privacyLegalTerms:LAST_UPDATED', { date: config.lastUpdated })}
        </h6>
        <div>
          {config.content.map((privacy, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="m-bottom-6"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: renderContent(privacy)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Content.propTypes = {
  config: shape().isRequired,
  title: string.isRequired,
  id: string
};

export default Content;
