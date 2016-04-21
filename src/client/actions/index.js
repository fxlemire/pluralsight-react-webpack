import Firebase from 'firebase';
import alt from '../alt';
import {browserHistory} from 'react-router';

class Actions {
  constructor() {
    this.generateActions(
      'channelOpened',
      'channelsReceived',
      'channelsFailed',
      'messageReceived',
      'messagesFailed',
      'messagesReceived',
      'messagesLoading',
      'sendMessage',
      'sendMessageSuccess',
      'sendMessageError'
    );
  }

  login() {
    return dispatch => {
      const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/messages');

      firebaseRef.authWithOAuthPopup('google', (error, authData) => {
        if (error) {
          return;
        }

        dispatch(authData);

        browserHistory.push('/chat');
      });
    };
  }
}

export default alt.createActions(Actions);
