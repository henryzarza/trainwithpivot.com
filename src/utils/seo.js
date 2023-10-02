import React from 'react';

import { DEFAULT_OG_OBJECT, APP_URL } from '~constants/seo';

export const completeOgObject = ({ title, description, url }) => ({
  ...DEFAULT_OG_OBJECT,
  title,
  description,
  url: `${APP_URL}${url}`
});

export const getOgMetaTags = data =>
  Object.keys(data).map(key => <meta key={key} property={`og:${key}`} content={data[key]} />);
