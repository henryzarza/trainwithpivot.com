/* eslint-disable react/no-multi-comp */
import React, { useMemo } from 'react';
import { t } from 'i18next';
import { useLocation } from 'react-router-dom';

import Layout from '~components/Layout';
import CartItem from '~components/CartItem';
import TotalItem from '~components/TotalItem';
import { MAIN_PRODUCT_ID, AMOUNT_DUE_TODAY } from '~constants/cart';

import styles from './styles.module.scss';
import AddressData from './components/AddressData';

function Confirmation() {
  const {
    data: { cartItems, customer, order, color }
  } = useLocation();

  const { stripePreOrderId: orderNumber } = order;
  const { billingAddress, shippingAddress, email, phoneNumber, firstName, lastName } = customer;
  const total = useMemo(
    () =>
      cartItems.reduce((result, item) => (typeof item.price === 'number' ? item.price + result : result), 0),
    [cartItems]
  );

  return (
    <Layout className={styles.mainContent} heroSectionBreak={-window.innerHeight} hideLinks>
      <h1 className={styles.title}>{t('order:ORDER_CONFIRM_TITLE')}</h1>
      <div className={styles.orderInfo}>
        <h2 className="small-subtitle m-bottom-2">{`${t('order:YOUR_ORDER_NUMBER_IS')}:`}</h2>
        <span className={styles.orderNumber}>{orderNumber}</span>
        <p className={styles.orderConfirmMessage}>{t('order:ORDER_CONFIRM_MESSAGE')}</p>
        <div className={`column ${styles.cartItems}`}>
          {cartItems?.map(item => (
            <CartItem
              className={`m-bottom-2 ${styles.cartItem}`}
              id={item.id}
              key={item.id}
              name={item.name}
              picture={item.picture}
              description={item.description}
              price={item.price}
              color={item.id === MAIN_PRODUCT_ID && color}
            />
          ))}
        </div>
        {total && <TotalItem className={styles.totalCost} text={t('checkout:ORDER_TOTAL')} price={total} />}
        <TotalItem
          className={`${styles.totalCost} ${styles.amountDue}`}
          text={t('checkout:AMOUNT_DUE_TODAY')}
          price={AMOUNT_DUE_TODAY}
        />
      </div>
      <div className={styles.customerDetails}>
        <div className="column m-bottom-6">
          <h2 className="small-subtitle m-bottom-2">{t('order:CUSTOMER_DETAILS')}</h2>
          <span className="base-text">{t('order:EMAIL', { email })}</span>
          <span className="base-text">{t('order:TEL', { tel: phoneNumber })}</span>
        </div>
        <div className={styles.addressDataWrapper}>
          <AddressData
            className="item-1 m-bottom-6"
            title={t('order:BILLING_ADDRESS')}
            firstName={firstName}
            lastName={lastName}
            {...billingAddress}
          />
          <AddressData
            className="item-1"
            title={t('order:SHIPPING_ADDRESS')}
            firstName={firstName}
            lastName={lastName}
            {...shippingAddress}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Confirmation;
