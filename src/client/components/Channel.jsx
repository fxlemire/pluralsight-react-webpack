import * as colors from 'material-ui/styles/colors';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';

class Channel extends React.Component {
  static propTypes = {
    channel: React.PropTypes.object
  }

  render() {
    const style = {};

    if (this.props.channel.selected) {
      style.backgroundColor = colors.grey50;
    }

    return (
      <ListItem style={style}>{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
