import Card from 'material-ui/Card';
import Channel from './Channel.jsx';
import List from 'material-ui/List';
import React from 'react';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    };
  }

  render() {
    let key = 0;
    const channelNodes = this.state.channels.map(c => <Channel key={key++} channel={c} />);

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
