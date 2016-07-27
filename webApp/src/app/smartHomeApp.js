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
    marginLeft: '1px'
  },
  contentWhenMedium: {
    marginLeft: '201px',
  },
};

navigator.browserInfo = (function () {
  var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

class SmartHomeApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.changeTheme = this.changeTheme.bind(this);

    this.state = {
      open: false,
      isOnline: navigator.onLine
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  getOfflineTheme() {
    var offlineTheme =getMuiTheme({
      palette:{
        primary1Color:'#717171',
        primary2Color:'#aaaaaa',
        primary3Color:'#aaaaaa',
        accent1Color: '#717171',
        accent2Color: '#717171',
        accent3Color: '#717171',
        canvasColor:  '#aaaaaa',
       },
    });
    this.setState({
      currentTheme: offlineTheme
    });
}

componentDidMount() {
  if (this.state.isOnline) {
    if (localStorage.getItem("selectedTheme")) {
      if (localStorage.getItem("selectedTheme") === "darkTheme") {
        this.setState({
          currentTheme: getMuiTheme(darkBaseTheme)
        });
      }
      else {
        this.setState({
          currentTheme: getMuiTheme()
        });
      }
    }
  }
  else if (!this.state.isOnline) {
      this.getOfflineTheme();
  }
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
          console.log("OS:: " + navigator.platform);
          console.log("Browser:: " + navigator.browserInfo);
          let registrationID = event.currentSubscription.endpoint.split('https://android.googleapis.com/gcm/send/')[1];
          let userEmail = user.email;
          console.log("UserEmail:: " + userEmail);
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
      if (localStorage.getItem('currentSubscription')) {
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
changeTheme(theme) {
  if (theme === "darkTheme")
    this.setState({
      currentTheme: getMuiTheme(darkBaseTheme)
    });
  else {
    this.setState({
      currentTheme: getMuiTheme()
    });
  }
  localStorage.setItem("selectedTheme", theme);
}

render() {
  let {
    open,
  } = this.state;
  let docked = false;
  let showMenuIconButton = true;
  let childStyle;
  if (this.props.width === LARGE || this.props.width === MEDIUM) {
    docked = true;
    open = true;
    showMenuIconButton = false;
    childStyle = Object.assign(styles.content, styles.contentWhenMedium);
  }
  else {
    childStyle = { marginLeft: '1px' };
  }
  return (
    <MuiThemeProvider muiTheme={this.state.currentTheme}>
      <div>
        <Header style={childStyle} openDrawer={this.openDrawer} changeTheme={this.changeTheme} showMenuIconButton={showMenuIconButton}/>
        <div style={childStyle}>
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
