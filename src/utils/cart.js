import { DEFAULT_LOCALE, DEFAULT_CURRENCY } from '~constants/locale';

const DEFAULT_OPTIONS = {
  currency: DEFAULT_CURRENCY,
  useGrouping: true
};

export const formatPrice = (price, locale = DEFAULT_LOCALE, options = DEFAULT_OPTIONS) =>
  price.toLocaleString(locale, options);
