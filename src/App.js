import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Error } from './components/pages/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
