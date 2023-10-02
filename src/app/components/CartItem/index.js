import React from 'react';
import { t } from 'i18next';
import { number, string, bool } from 'prop-types';

import { formatPrice } from '~utils/cart';
import { DEFAULT_SYMBOL_CURRENCY } from '~constants/locale';

import styles from './styles.module.scss';

function CartItem({ className, description, picture, name, price, remove, color }) {
  return (
    <div className={`${styles.cartItem} ${className}`}>
      {picture && <img src={picture} className={styles.itemPicture} alt={name} />}
      <span className={styles.itemName}>{name}</span>
      {description && <span className={styles.itemDescription}>{description}</span>}
      {color && <span className={styles.itemColor}>{t(`product:${color}`)}</span>}
      {remove && (
        <button type="button" className={styles.removeBtn}>
          {t('checkout:REMOVE')}
        </button>
      )}
      <span className={styles.itemPrice}>{`${DEFAULT_SYMBOL_CURRENCY}${formatPrice(price)}`}</span>
    </div>
  );
}

CartItem.defaultProps = {
  className: ''
};

CartItem.propTypes = {
  className: string,
  color: string,
  description: string,
  name: string,
  picture: string,
  price: number,
  remove: bool
};

export default CartItem;
