import React, {Component} from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import {RouteHandler, browserHistory} from 'react-router';
import firebase from 'firebase';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {onSubscribtionChange} from './actions/firebaseActions';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';

import Login from './components/login';
import Dashboard from './components/dashboard';
import Sidebar from './layout/sidebar';
import Header from './layout/header';
import '../www/assets/css/bootstrap.min.css';
import '../www/assets/css/slick.css';
import 'material-design-icons/iconfont/material-icons.css';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  content: {
  },
  contentWhenMedium: {
    marginLeft: '201px',
  },
};

const muiTheme = getMuiTheme(darkBaseTheme, {
  list: { color: "#303030" }
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
        if (event.permissionStatus === 'denied') {
          // Disable UI
        } else if (event.currentSubscription) {
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
        if(localStorage.getItem('currentSubscription')) {
          onSubscribtionChange(true);
          onUserStatusChange(user);
        }
      } else {
        onUserStatusChange(null);
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
    let {
      open,
    } = this.state;
    let docked = false;
    let showMenuIconButton = true;
    if (this.props.width === LARGE || this.props.width === MEDIUM) {
      docked = true;
      open = true;
      showMenuIconButton = false;
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }
    else{
       styles.content = {marginLeft:0};
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header openDrawer={this.openDrawer} showMenuIconButton={showMenuIconButton}/>
            <div style={styles.content}>
              {this.props.children}
            </div>
          <Sidebar isOpen={open} docked={docked} closeDrawer={this.closeDrawer}/>
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
    },
    onUserStatusChange: (status) => {
      dispatch(onUserStatusChange(status));
    }
  }
}

export default withWidth()(connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartHomeApp));
