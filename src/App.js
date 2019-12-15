import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Global } from '@emotion/core';

import globalStyles from './App.styles';
import { Home } from './components/pages/Home';
import { Error } from './components/pages/Error';

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
