import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Callout({ alt, icon, title, description }) {
  return (
    <div className={styles.container}>
      <img aria-hidden="true" alt={alt} src={icon} className={styles.icon} />
      <span className={`${styles.title} subtitle text-center`}>{title}</span>
      <p className="base-text text-center">{description}</p>
    </div>
  );
}

Callout.defaultProps = {
  alt: ''
};

Callout.propTypes = {
  description: string.isRequired,
  icon: string.isRequired,
  title: string.isRequired,
  alt: string
};

Callout.displayName = 'Callout';

export default Callout;
