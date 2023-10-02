/* eslint-disable react/no-multi-comp */
import React from 'react';
import { t } from 'i18next';

import CartItem from '~components/CartItem';
import TotalItem from '~components/TotalItem';
import { AMOUNT_DUE_TODAY, CART_DEFAULT_DATA, total, subtotal } from '~constants/cart';

import styles from './styles.module.scss';

function Cart() {
  return (
    <div className={styles.container}>
      <TotalItem
        className={`${styles.totalCost} ${styles.subtotal}`}
        text={t('checkout:SUBTOTAL')}
        price={subtotal}
      />
      <div className={styles.cartItemsContainer}>
        {CART_DEFAULT_DATA?.map(item => (
          <CartItem
            className="m-bottom-6"
            id={item.id}
            key={item.id}
            name={item.name}
            picture={item.picture}
            description={item.description}
            price={item.price}
            color={item.color}
          />
        ))}
      </div>
      <TotalItem className={styles.totalCost} text={t('checkout:ORDER_TOTAL')} price={total} />
      <TotalItem
        className={`${styles.totalCost} ${styles.amountDue}`}
        text={t('checkout:AMOUNT_DUE_TODAY')}
        price={AMOUNT_DUE_TODAY}
      />
    </div>
  );
}

Cart.displayName = 'Cart';

export default Cart;
