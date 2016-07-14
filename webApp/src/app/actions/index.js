import alt from '../alt';
import firebase from 'firebase';

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

  login(router) {
    return (dispatch) => {
      firebase.auth().signInWithEmailAndPassword('sagar.shelar@outlook.com', 'Sagar@123')
        .then(function (user) {
          dispatch(user);
          router.transitionTo('/chat');
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert('Error:' + errorMessage);
        });
    };
  }
}

export default alt.createActions(Actions);
