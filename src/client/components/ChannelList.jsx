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
  constructor(props) {
    super(props);
    ChatStore.getChannels();
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static propTypes = {
    channels: React.PropTypes.object
  };

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
