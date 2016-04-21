import Firebase from 'firebase';
import alt from '../alt';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading'
    );
  }

  login(args) {
    return dispatch => {
      const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/messages');

      firebaseRef.authWithOAuthPopup('google', (error, authData) => {
        if (error) {
          return;
        }

        dispatch(authData);
      });
    };
  }
}

export default alt.createActions(Actions);
