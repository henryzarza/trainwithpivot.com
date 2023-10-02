import React from 'react';

import styles from './styles.module.scss';

function Loading() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerDot} />
    </div>
  );
}

export default Loading;
