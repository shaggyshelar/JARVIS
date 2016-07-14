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

//let Route = Router.Route;
// let DefaultRoute = Router.DefaultRoute;

// let routes = (
//   <Route path="/" handler={SmartHomeApp}>
//     <DefaultRoute handler={Dashboard} />
//     <Route path="login" handler={Login} />
//   </Route>
// );

// Router.run(routes, Router.HashLocation, (Root)=> {
//   React.render(<Root />, document.getElementById('app'));
// });

render((
  <Router history={browserHistory}>
    <Route path="/" component={SmartHomeApp}>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'))