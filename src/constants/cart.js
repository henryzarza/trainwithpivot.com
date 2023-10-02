import { t } from 'i18next';

import LocalStorageService from '~services/LocalStorageService';
import PivotWhiteThumb from '~assets/product/pivot-white-thumb.png';
import PivotBlackThumb from '~assets/product/pivot-black-thumb.png';
import SubscriptionThumb from '~assets/product/subscription-thumb.png';
import {
  PRICES,
  DEFAULT_SUBSCRIPTION_TIME,
  DEFAULT_WARRANTY_TIME,
  SUBSCRIPTION_RECURRENCY,
  PIVOT_COLOR_OPTIONS
} from '~constants/product';

const MEMBERSHIP_MONTHLY_FEE = `${PRICES.membershipFee}/${SUBSCRIPTION_RECURRENCY}`;

export const AMOUNT_DUE_TODAY = 250;

export const MAIN_PRODUCT_ID = 1;

export const PRODUCT_SKUS = {
  white: 'beta-light',
  black: 'beta-dark'
};

export const CART_DEFAULT_DATA = [
  {
    id: MAIN_PRODUCT_ID,
    name: t('product:PIVOT_NAME'),
    description: t('product:PIVOT_DESCRIPTION', { warranty: DEFAULT_WARRANTY_TIME }),
    picture: PivotWhiteThumb,
    price: 1995,
    canRemove: true
  },
  {
    id: 2,
    name: t('product:SUBSCRIPTION_NAME', { time: DEFAULT_SUBSCRIPTION_TIME }),
    description: t('product:SUBSCRIPTION_DESCRIPTION', {
      price: PRICES.membershipFee,
      recurrency: SUBSCRIPTION_RECURRENCY
    }),
    picture: SubscriptionThumb,
    price: MEMBERSHIP_MONTHLY_FEE,
    canRemove: true
  },
  {
    id: 3,
    name: t('product:DELIVERY_AND_INSTALLATION_NAME'),
    price: 200
  }
];

export const getCartInformation = () => {
  const color = LocalStorageService.getStationColor();
  CART_DEFAULT_DATA[0].picture = color === PIVOT_COLOR_OPTIONS.white ? PivotWhiteThumb : PivotBlackThumb;
  CART_DEFAULT_DATA[0].color = color;
  return CART_DEFAULT_DATA;
};

export const total = CART_DEFAULT_DATA.reduce(
  (result, item) => (typeof item.price === 'number' ? item.price + result : result),
  0
);
export const subtotal = CART_DEFAULT_DATA.find(item => item.id === MAIN_PRODUCT_ID).price;
