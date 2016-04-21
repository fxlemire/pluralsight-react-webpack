import ListItem from 'material-ui/List/ListItem';
import React from 'react';

class Channel extends React.Component {
  static propTypes = {
    channel: React.PropTypes.string
  }

  render() {
    return (
      <ListItem>{this.props.channel}</ListItem>
    );
  }
}

export default Channel;
