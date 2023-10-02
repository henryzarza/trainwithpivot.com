import React from 'react';
import { string, func } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route, useLocation, Redirect } from 'react-router-dom';

import { getOgMetaTags, completeOgObject } from '~utils/seo';
import Routes from '~constants/routes';

function RouteItem({ title, description, canAccess, ...config }) {
  const ogTags = getOgMetaTags(completeOgObject({ title, description, url: config.path }));
  const locationParams = useLocation();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {ogTags}
      </Helmet>
      {!canAccess || canAccess(locationParams) ? <Route {...config} /> : <Redirect to={Routes.HOME} />}
    </>
  );
}

RouteItem.propTypes = {
  description: string.isRequired,
  title: string.isRequired,
  canAccess: func
};

export default RouteItem;
