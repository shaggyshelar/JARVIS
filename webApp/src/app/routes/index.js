import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SmartHomeApp from '../smartHomeApp';
import Login from '../components/login';
import Dashboard from '../components/dashboard';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={SmartHomeApp}>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'))