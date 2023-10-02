import React from 'react';

import Layout from '~components/Layout';

import Hero from './screens/Hero';
import Specs from './screens/Specs';
import Included from './screens/Included';
import Subscription from './screens/Subscription';
import Reviews from './screens/Reviews';
import Returns from './screens/Returns';
import Faq from './screens/Faq';
import styles from './styles.module.scss';

function Product() {
  return (
    <Layout className={styles.productMain}>
      <Hero />
      <Specs />
      <Included />
      <Subscription />
      <Reviews />
      <Returns />
      <Faq />
    </Layout>
  );
}

Product.displayName = 'Product';

export default Product;
