import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

const MessageSource = {
  getMessages: {
    remote(state) {
      if (firebaseRef) {
        firebaseRef.off();
      }

      firebaseRef = new Firebase(`https://pluralsight-react-webpack.firebaseio.com/messages/${state.selectedChannel.key}`);

      return new Promise((resolve, reject) => {
        firebaseRef.once('value', dataSnapshot => {
          const messages = dataSnapshot.val();

          resolve(messages);
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed
  }
};

export default MessageSource;
