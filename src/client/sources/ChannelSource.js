import Actions from '../actions';
import Firebase from 'firebase';
import _ from 'lodash';

const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/channels');

const ChannelSource = {
  getChannels: {
    remote(state, selectedChannelKey) {
      return new Promise((resolve, reject) => {
        firebaseRef.once('value', dataSnapshot => {
          const channels = dataSnapshot.val();
          const channelKey = selectedChannelKey || _.keys(channels)[0];
          const selectedChannel = channels[channelKey];

          if (selectedChannel) {
            selectedChannel.selected = true;
          }

          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
};

export default ChannelSource;
