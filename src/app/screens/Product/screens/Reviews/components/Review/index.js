import React from 'react';
import { number, string } from 'prop-types';

import Stars, { EMPTY_STAR_COLOR_COMPONENT } from '~components/Stars';

import styles from './styles.module.scss';

function Review({ author, className, comment, stars }) {
  return (
    <div className={`${styles.review} ${className}`}>
      <Stars
        className={styles.starsContainer}
        value={stars}
        starComponent={EMPTY_STAR_COLOR_COMPONENT.grey}
        starClassName={styles.star}
      />
      <p className={styles.comment}>{comment}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

Review.defaultProps = {
  className: ''
};

Review.propTypes = {
  author: string,
  className: string,
  comment: string,
  stars: number
};

export default Review;
