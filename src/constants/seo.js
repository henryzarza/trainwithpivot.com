import logo from '~assets/logo.png';

import { DEFAULT_LOCALE } from './locale';

export const APP_URL = window.location.hostname;

export const DEFAULT_OG_OBJECT = {
  title: null,
  description: null,
  image: logo,
  type: 'website',
  locale: DEFAULT_LOCALE
};
