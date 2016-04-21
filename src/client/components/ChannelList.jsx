import Card from 'material-ui/Card';
import Channel from './Channel.jsx';
import ChatStore from '../stores/ChatStore';
import CircularProgress from 'material-ui/CircularProgress';
import List from 'material-ui/List';
import React from 'react';
import _ from 'lodash';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
class ChannelList extends React.Component {
  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static propTypes = {
    channels: React.PropTypes.object,
    params: React.PropTypes.object
  };

  componentDidMount() {
    this.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (this.selectedChannel !== nextProps.params.channel) {
      this.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.selectedChannel);
    }
  }

  render() {
    if (!this.props.channels) {
      return (
        <Card className="wait-card">
          <CircularProgress mode="indeterminate" className="wait-progress" />
        </Card>
      );
    }

    const channelNodes = _(this.props.channels)
      .keys()
      .map(k => {
        const channel = this.props.channels[k];

        return (<Channel key={k} channel={channel} />);
      })
      .value();

    return (
      <Card className="channel-list">
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
