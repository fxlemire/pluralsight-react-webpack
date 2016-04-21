import Actions from '../actions';
import Firebase from 'firebase';

const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/channels');

const ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once('value', dataSnapshot => {
          const channels = dataSnapshot.val();

          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
};

export default ChannelSource;
