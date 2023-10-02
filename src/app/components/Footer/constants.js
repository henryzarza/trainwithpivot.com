import { t } from 'i18next';
import { HashLink } from 'react-router-hash-link';

import Routes from '~constants/routes'; // eslint-disable-next-line
import { TERMS_ID, LEGAL_ID } from '~screens/PrivacyLegalTerms/constants';

import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Youtube } from './assets/youtube.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';

// TODO change all links for the real url
export const LINKS = [
  {
    id: 1,
    link: Routes.ABOUT,
    text: t('Footer:ABOUT')
  },
  {
    id: 2,
    external: true,
    link: 'https://medium.com/@trainwithpivot',
    text: t('Footer:BLOG')
  },
  {
    id: 3,
    external: true,
    link: 'mailto:pivot@astrskpr.com',
    text: t('Footer:PRESS')
  },
  {
    id: 4,
    external: true,
    link: 'https://jobs.lever.co/trainwithpivot',
    text: t('Footer:CAREERS')
  },
  {
    id: 5,
    link: Routes.FINANCING,
    text: t('Footer:FINANCING')
  },
  {
    id: 6,
    link: `${Routes.PRODUCT}#faq`,
    text: t('Footer:FAQ')
  },
  {
    id: 7,
    external: true,
    link: 'mailto:hello@trainwithpivot.com',
    text: t('Footer:SUPPORT')
  },
  {
    id: 8,
    link: Routes.PRIVACY_LEGAL_TERMS,
    text: t('Footer:PRIVACY')
  },
  {
    id: 9,
    link: `${Routes.PRIVACY_LEGAL_TERMS}#${LEGAL_ID}`,
    text: t('Footer:LEGAL')
  },
  {
    id: 10,
    link: `${Routes.PRIVACY_LEGAL_TERMS}#${TERMS_ID}`,
    text: t('Footer:TERMS_OF_USE')
  }
];

export const PHONE_NUMBER = '555-555-5555';

// TODO change all links for the real url
export const SOCIAL_LINKS = [
  {
    id: 1,
    link: 'https://www.instagram.com/teampivot/',
    Icon: Instagram
  },
  {
    id: 2,
    link: 'https://twitter.com/trainwithpivot',
    Icon: Twitter
  },
  {
    id: 3,
    link: 'https://www.youtube.com/channel/UCQY3cVZk6BAonYLl1hoaBkA',
    Icon: Youtube
  },
  {
    id: 4,
    link: 'https://www.facebook.com/trainwithpivot',
    Icon: Facebook
  }
];

export const linkComponent = link => (link.external ? 'a' : HashLink);
export const scrollWithOffset = (el, offset) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + offset });
};

export const NAV_BAR_HEIGTH = 70;

export const EXTERNAL_LINK_ATTRIBUTES = { target: '_blank', rel: 'noopener noreferrer' };
