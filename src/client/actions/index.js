import Firebase from 'firebase';
import alt from '../alt';

class Actions {
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
