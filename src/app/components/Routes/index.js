import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { t } from 'i18next';

import Suspense from '../Suspense';

import RouteItem from './components/RouteItem';
import { ROUTES } from './constants';
import ScrollToTop from './components/ScrollToTop';

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense>
        <Switch>
          {ROUTES.map(({ title, description, ...rest }) => (
            <RouteItem key={rest.path} title={t(title)} description={t(description)} {...rest} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
