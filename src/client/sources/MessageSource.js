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

          firebaseRef.on('child_added', message => {
            const messageValue = message.val();

            messageValue.key = message.key();
            Actions.messageReceived(messageValue);
          });
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  },
  sendMessage: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          resolve();
        } else {
          firebaseRef.push({
            message: state.message,
            date: new Date().toUTCString(),
            author: state.user.google.displayName,
            userId: state.user.uid,
            profilePic: state.user.google.profileImageURL
          });

          resolve();
        }
      });
    },
    success: Actions.sendMessageSuccess,
    error: Actions.sendMessageError
  }
};

export default MessageSource;
