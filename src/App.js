import React, { Fragment } from 'react';
import 'normalize.css';
import { Global } from '@emotion/core';

import globalStyles from './App.styles';
import { Home } from './components/pages/Home';

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Home />
    </Fragment>
  );
}

export default App;
