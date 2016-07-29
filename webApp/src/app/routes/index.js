import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore';

import SmartHomeApp from '../smartHomeApp';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import Action from '../components/action';
import Device from '../components/device';
import Room from '../components/room';
import Scene from '../components/scene';
import Location from '../components/location';
import User from '../components/user';
import AddDevice from '../components/addDevice';
import AddAction from '../components/addAction';
import AddUser from '../components/addUser';
import AddLocation from '../components/addLocation';
import Notification from '../components/notification';
import TimeLine from '../components/timeLine';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var config = {
  apiKey: "AIzaSyDIXCGE7OJgPvn8zO_jqKRkSHpziBbB2z4",
  authDomain: "smarthome-46be4.firebaseapp.com",
  databaseURL: "https://smarthome-46be4.firebaseio.com",
  storageBucket: "smarthome-46be4.appspot.com",
};
firebase.initializeApp(config);

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={SmartHomeApp}>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="login"  component={Login} />
        <Route path="actions" component={Action} />
        <Route path="devices" component={Device} />
        <Route path="rooms" component={Room} />
        <Route path="scenes" component={Scene} />
        <Route path="locations" component={Location} />
        <Route path="users" component={User} />
        <Route path="addDevice" component={AddDevice} />
        <Route path="addAction" component={AddAction} />
        <Route path="addLocation" component={AddLocation} />
        <Route path="addUser" component={AddUser} />
        <Route path="notification" component={Notification} />
        <Route path="timeLine" component={TimeLine} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))