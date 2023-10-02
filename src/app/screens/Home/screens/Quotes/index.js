import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { SLIDER_CONFIG, SLIDER_CONTENT } from './constants';
import styles from './styles.module.scss';

function Quotes() {
  return (
    <section className={styles.section}>
      <Carousel className={styles.slider} {...SLIDER_CONFIG}>
        {SLIDER_CONTENT.map(slider => (
          <div key={slider.id} className={styles.container}>
            <img className={styles.logo} src={slider.image} alt={slider.logoAlt} />
            <p className={styles.text}>{slider.text}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Quotes;
