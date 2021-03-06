import {bind, datasource, decorate} from 'alt-utils/lib/decorators';
import Actions from '../actions';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';
import alt from '../alt';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor() {
    this.state = {
      user: null,
      messages: null,
      messagesLoading: true
    };
  }

  @bind(Actions.channelOpened)
  channelOpened(selectedChannel) {
    _(this.state.channels)
      .values()
      .each(channel => {
        channel.selected = false;
      });

    selectedChannel.selected = true;

    this.setState({channels: this.state.channels, selectedChannel});

    setTimeout(this.getInstance().getMessages, 100); // eslint-disable-line no-magic-numbers
  }

  @bind(Actions.login)
  login(user) {
    this.setState({user});
  }

  @bind(Actions.messageReceived)
  messageReceived(message) {
    if (this.state.messages[message.key]) {
      return;
    }

    this.state.messages[message.key] = message;
    this.setState({messages: this.state.messages});
  }

  @bind(Actions.messagesLoading)
  messagesLoading() {
    this.setState({messagesLoading: true});
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;

    _(channels)
      .keys()
      .forEach((key, index) => {
        channels[key].key = key;

        if (channels[key].selected) {
          selectedChannel = channels[key];
        }
      });

    this.setState({
      channels,
      selectedChannel
    });

    setTimeout(this.getInstance().getMessages, 100); // eslint-disable-line no-magic-numbers
  }

  @bind(Actions.messagesReceived)
  receivedMessages(messages) {
    _(messages)
      .keys()
      .each(k => {
        messages[k].key = k;
      });

    this.setState({messages, messagesLoading: false});
  }

  @bind(Actions.sendMessage)
  sendMessage(message) {
    this.state.message = message;
    setTimeout(this.getInstance().sendMessage, 100); // eslint-disable-line no-magic-numbers
  }
}

export default alt.createStore(ChatStore);
