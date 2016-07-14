import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SmartHomeApp from '../smartHomeApp';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import Action from '../components/action';
import Device from '../components/device';
import Location from '../components/location';
import User from '../components/user';
import AddDevice from '../components/addDevice';
import AddAction from '../components/addAction';
import AddUser from '../components/addUser';
import AddLocation from '../components/addLocation';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={SmartHomeApp}>
      <IndexRoute component={Dashboard}/>
      <Route path="login"  component={Login} />
      <Route path="actions" component={Action} />
      <Route path="devices" component={Device} />
      <Route path="locations" component={Location} />
      <Route path="users" component={User} />
      <Route path="addDevice" component={AddDevice} />
      <Route path="addAction" component={AddAction} />
      <Route path="addLocation" component={AddLocation} />
      <Route path="addUser" component={AddUser} />

    </Route>
  </Router>
), document.getElementById('app'))

