import React from 'react';
import { t } from 'i18next';
import { number, string } from 'prop-types';

import { formatPrice } from '~utils/cart';

function TotalItem({ text, price, className }) {
  return (
    <span className={`row middle space-between small-subtitle ${className}`}>
      {t(`checkout:${text}`)}
      <strong className="small-subtitle">{t('checkout:PRICE', { price: formatPrice(price) })}</strong>
    </span>
  );
}

TotalItem.defaultProps = {
  className: '',
  price: 0
};

TotalItem.propTypes = {
  text: string.isRequired,
  className: string,
  price: number
};

TotalItem.displayName = 'TotalItem';

export default TotalItem;
