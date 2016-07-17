import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import {RouteHandler, browserHistory} from 'react-router';
import firebase from 'firebase';

import Login from './components/login';
import Dashboard from './components/dashboard';
import Sidebar from './layout/sidebar';
import Header from './layout/header';
import '../www/assets/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class SmartHomeApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        browserHistory.replace('/dashboard');
        //firebase.auth().currentUser;
      } else {
        browserHistory.replace('/login');
      }
    });
  }


  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  openDrawer() {
    this.setState({
      open: true,
    });
  }

  closeDrawer() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Sidebar isOpen={this.state.open} closeDrawer={this.closeDrawer} />
          <Header openDrawer={this.openDrawer} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SmartHomeApp;
