import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import {RouteHandler, browserHistory} from 'react-router';
import firebase from 'firebase';
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
    //var PropelClient = window.goog.propel.PropelClient;
    if (propelClient) {

      //var propelClient = new PropelClient('./sw.js');
      propelClient.addEventListener('statuschange', function (event) {
        if (event.permissionStatus === 'denied') {
          // Disable UI
        } else if (event.currentSubscription) {
          if (!localStorage.getItem('currentSubscription')) {
            var user = firebase.auth().currentUser;
            let registrationID = event.currentSubscription.endpoint.split('https://android.googleapis.com/gcm/send/')[1];
            let userEmail = user.email;
            let firebaseRef = firebase.database().ref('subscriptions');
            firebaseRef.push({
              "regID": registrationID,
              "email" : userEmail,
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
        // var user = firebase.auth().currentUser;
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
