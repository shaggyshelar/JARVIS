import React, {Component} from 'react';
import { connect } from 'react-redux';
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
import {onSubscribtionChange} from './actions/firebaseActions';

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
    //var PropelClient = window.goog.propel.PropelClient;
    let onSubscribtionChange = this.props.onSubscribtionChange; 
    if (propelClient) {

      //var propelClient = new PropelClient('./sw.js');
      propelClient.addEventListener('statuschange', function (event) {
        console.log('insideeeeeeeeeeeeeeeeeee');
        if (event.permissionStatus === 'denied') {
          // Disable UI
        } else if (event.currentSubscription) {
          console.log('setting true');
          onSubscribtionChange(true);
          if (!localStorage.getItem('currentSubscription')) {
            var user = firebase.auth().currentUser;
            let registrationID = event.currentSubscription.endpoint.split('https://android.googleapis.com/gcm/send/')[1];
            let userEmail = user.email;
            let firebaseRef = firebase.database().ref('subscriptions');
            firebaseRef.push({
              "regID": registrationID,
              "email": userEmail,
              "date": new Date().toUTCString(),
            });
            localStorage.setItem("currentSubscription", event.currentSubscription);
          }
        } else {
          // Enable UI
          // Show that user is not subscribed
        }
      });
    }
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        browserHistory.replace('/dashboard');
        if(localStorage.getItem('currentSubscription')){
          console.log('sending tru..........');
          onSubscribtionChange(true);
        }
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

const mapStateToProps = (state) => {
  return {
    isSubscribed: state.isSubscribed
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubscribtionChange: (status) => {
      dispatch(onSubscribtionChange(status));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartHomeApp);