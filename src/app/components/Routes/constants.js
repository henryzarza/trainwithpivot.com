import { lazy } from 'react';

import routes from '~constants/routes';

const Home = lazy(() => import('~screens/Home'));
const Classes = lazy(() => import('~screens/Classes'));
const Technology = lazy(() => import('~screens/Technology'));
const Product = lazy(() => import('~screens/Product'));
const Confirmation = lazy(() => import('~screens/Confirmation'));
const Checkout = lazy(() => import('~screens/Checkout'));
const PrivacyLegalTerms = lazy(() => import('~screens/PrivacyLegalTerms'));
const About = lazy(() => import('~screens/About'));
const Financing = lazy(() => import('~screens/Financing'));

export const ROUTES = [
  {
    exact: true,
    path: routes.HOME,
    component: Home,
    title: 'SEO:HOME_TITLE',
    description: 'SEO:HOME_DESCRIPTION'
  },
  {
    exact: true,
    path: routes.PRODUCT,
    component: Product,
    title: 'SEO:PRODUCT_TITLE',
    description: 'SEO:PRODUCT_DESCRIPTION'
  },
  {
    exact: true,
    path: routes.CLASSES,
    component: Classes,
    title: 'SEO:CLASSES_TITLE',
    description: 'SEO:CLASSES_DESCRIPTION'
  },
  {
    exact: true,
    path: routes.TECHNOLOGY,
    component: Technology,
    title: 'SEO:TECHNOLOGY_TITLE',
    description: 'SEO:TECHNOLOGY_DESCRIPTION'
  },
  {
    exact: true,
    path: routes.CHECKOUT,
    component: Checkout,
    title: 'SEO:CHECKOUT_TITLE',
    description: 'SEO:CHECKOUT_DESCRIPTION',
    canAccess: locationParams => locationParams.query?.color
  },
  {
    exact: true,
    path: routes.CONFIRMATION,
    component: Confirmation,
    title: 'SEO:CONFIRMATION_TITLE',
    description: 'SEO:CONFIRMATION_DESCRIPTION',
    canAccess: locationParams =>
      locationParams.data?.cartItems &&
      locationParams.data?.customer &&
      locationParams.data?.order &&
      locationParams.data?.color
  },
  {
    exact: true,
    path: routes.PRIVACY_LEGAL_TERMS,
    component: PrivacyLegalTerms,
    title: 'SEO:TERMS_LEGAL_PRIVACY_TITLE',
    description: 'SEO:LEGAL_PRIVACY_DESCRIPTION'
  },
  {
    exact: true,
    path: routes.ABOUT,
    component: About,
    title: 'SEO:ABOUT',
    description: 'SEO:ABOUT'
  },
  {
    exact: true,
    path: routes.FINANCING,
    component: Financing,
    title: 'SEO:FINANCING',
    description: 'SEO:FINANCING'
  }
];
