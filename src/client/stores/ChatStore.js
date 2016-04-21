import {bind, datasource, decorate} from 'alt-utils/lib/decorators';
import Actions from '../actions';
import ChannelSource from '../sources/ChannelSource';
import _ from 'lodash';
import alt from '../alt';

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = {user: null};
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;

    _(channels)
      .keys()
      .forEach((key, index) => {
        channels[key].key = key;

        if (index === 0) {
          channels[key].selected = true;
          selectedChannel = channels[key];
        }
      });

    this.setState({
      channels,
      selectedChannel
    });
  }

  @bind(Actions.login)
  login(user) {
    this.setState({user});
  }
}

export default alt.createStore(ChatStore);
