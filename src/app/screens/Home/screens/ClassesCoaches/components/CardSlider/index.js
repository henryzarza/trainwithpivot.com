import React, { forwardRef } from 'react';
import { shape, string } from 'prop-types';

import { ReactComponent as IcClock } from '~screens/Home/screens/ClassesCoaches/assets/clock.svg';

import styles from './styles.module.scss';

const CardSlider = forwardRef(({ data }, ref) => (
  <div className={styles.card} ref={ref}>
    <div className={styles.cardHeader}>
      <span className={`base-text uppercase-text m-bottom-3 ${styles.chip}`}>{data.chip}</span>
      <img className={`m-bottom-3 ${styles.image}`} src={data.image} alt={data.title} />
      <span className={`base-text ${styles.title}`}>{data.title}</span>
      <span className={`base-text uppercase-text ${styles.trainer}`}>{data.trainer}</span>
      <span className="row middle">
        <IcClock className={`m-right-1 ${styles.icClock}`} />
        <span className={`base-text ${styles.schedule}`}>{data.schedule}</span>
      </span>
    </div>
    <div className="column item-1">
      <h5 className={`subtitle m-bottom-4 ${styles.subtitle}`}>{data.category}</h5>
      <p className="base-text">{data.text}</p>
    </div>
  </div>
));

CardSlider.propTypes = {
  data: shape({
    image: string.isRequired,
    trainer: string.isRequired,
    schedule: string.isRequired,
    category: string.isRequired,
    title: string.isRequired,
    chip: string.isRequired,
    text: string.isRequired
  })
};

export default CardSlider;
