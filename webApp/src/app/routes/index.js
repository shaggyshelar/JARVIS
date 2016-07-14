import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
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
      <IndexRoute component={Dashboard}/>
      <Route path="login"  component={Login} />
    </Route>
  </Router>
), document.getElementById('app'))