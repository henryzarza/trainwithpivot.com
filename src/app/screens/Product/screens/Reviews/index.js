import React from 'react';
import { t } from 'i18next';

import { REVIEWS } from './constants';
import styles from './styles.module.scss';
import Review from './components/Review';

function Manifesto() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.sectionTitle}>{t('product:REVIEW_TITLE')}</h2>
      <div className={styles.reviews}>
        {REVIEWS.map(review => (
          <Review
            key={review.id}
            className={styles.review}
            stars={review.stars}
            comment={review.comment}
            author={review.author}
          />
        ))}
      </div>
    </section>
  );
}

export default Manifesto;
