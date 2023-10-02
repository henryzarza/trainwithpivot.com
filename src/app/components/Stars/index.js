import React from 'react';
import { bool, number, string, element } from 'prop-types';

import styles from './styles.module.scss';
import { ReactComponent as StarWhiteIcon } from './assets/ic_star_white.svg';
import { ReactComponent as StarGreyIcon } from './assets/ic_star_grey.svg';

const MAX_STARS = 5;

export const EMPTY_STAR_COLOR_COMPONENT = {
  white: StarWhiteIcon,
  grey: StarGreyIcon
};

function Stars({ className, max, showText, value, starClassName, starComponent: StarComponent }) {
  const completedStars = Math.floor(value);
  const hasHalfStar = value > completedStars && value < completedStars + 1;

  const getStarClass = starNumber => {
    const colorClass = StarComponent === EMPTY_STAR_COLOR_COMPONENT.grey ? styles.greyStar : '';
    let completedClass = '';
    if (starNumber <= completedStars) {
      completedClass = styles.completedStar;
    } else if (starNumber === completedStars + 1 && hasHalfStar) {
      completedClass = styles.halfStar;
    } else {
      completedClass = styles.emptyStar;
    }
    return `${completedClass} ${colorClass}`;
  };

  return (
    <div className={`${styles.starsContainer} ${className}`}>
      {[...Array(max).keys()].map(index => (
        <StarComponent key={index} className={`${styles.star} ${getStarClass(index + 1)} ${starClassName}`} />
      ))}
      {showText && <span className={styles.text}>{`${value}/${max}`}</span>}
    </div>
  );
}

Stars.defaultProps = {
  className: '',
  max: MAX_STARS,
  starClassName: '',
  starComponent: EMPTY_STAR_COLOR_COMPONENT.white
};

Stars.propTypes = {
  className: string,
  max: number,
  showText: bool,
  starClassName: string,
  starComponent: element,
  value: number
};

export default Stars;
