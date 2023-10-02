import React from 'react';

import Routes from './components/Routes';
import '../scss/application.scss';

function App() {
  return <Routes />;
}

App.displayName = 'App';

App.defaultProps = {
  loading: false
};

export default App;
