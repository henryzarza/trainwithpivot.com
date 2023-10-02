/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeScriptLoader from 'react-stripe-script-loader';
import { t } from 'i18next';

import Layout from '~components/Layout';
import Cart from '~components/Cart';
import ErrorBoundary from '~components/ErrorBoundary';
import { getCartInformation } from '~constants/cart';

import OrderForm from './components/OrderForm';
import styles from './styles.module.scss';

function Checkout() {
  return (
    <ErrorBoundary>
      <StripeScriptLoader
        uniqueId="card-element"
        script="https://js.stripe.com/v3/"
        loader={t('order:LOADING')}
      >
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_TEST_API_KEY}>
          <Elements>
            <Layout
              heroSectionBreak={-window.innerHeight}
              hideLinks
              navbarClassName={styles.navbar}
              solidNavbar
            >
              <div className={styles.container}>
                <div className={styles.content}>
                  <h1 className={`subtitle ${styles.yourCart}`}>{t('checkout:YOUR_CART', { number: 2 })}</h1>
                  <div className={styles.cartContainer}>
                    <Cart className={styles.cartInnerContainer} cartItems={getCartInformation()} />
                    <p className={`base-text ${styles.messaging}`}>{t('checkout:MESSAGING')}</p>
                  </div>
                </div>
                <OrderForm />
              </div>
            </Layout>
          </Elements>
        </StripeProvider>
      </StripeScriptLoader>
    </ErrorBoundary>
  );
}

Checkout.displayName = 'Checkout';

export default Checkout;
