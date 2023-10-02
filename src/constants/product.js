import { t } from 'i18next';

export const DIMENSIONS = {
  height: "6'",
  width: "2'2''",
  depth: "1'4''",
  weight: '110'
};

export const PRICES = {
  originalPrice: 1995,
  deferredPrice: 55,
  membershipFee: 40
};

export const PIVOT_COLOR_OPTIONS = {
  black: 'black',
  white: 'white'
};

export const SUBSCRIPTION_RECURRENCY = 'm';
export const DEFAULT_SUBSCRIPTION_TIME = t('time:YEAR', { count: 1 });
export const DEFAULT_WARRANTY_TIME = t('time:YEAR', { count: 1 });
