import alt from '../alt';
import firebase from 'firebase';
import {browserHistory} from 'react-router';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  login(credentials) {
    return (dispatch) => {
      //firebase.auth().signInWithEmailAndPassword('sagar.shelar@outlook.com', 'Sagar@123')
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(function (user) {
          dispatch(user);
          browserHistory.replace('/dashboard');
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert('Error:' + errorMessage);
        });
    };
  }

  subscribe() {
    return (dispatch) => {
      propelClient.subscribe();
    };
  }

  unsubscribe() {
    return (dispatch) => {
      propelClient.unsubscribe();
      localStorage.removeItem("currentSubscription");
    };
  }
}

export default alt.createActions(Actions);
