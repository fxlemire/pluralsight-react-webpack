import * as colors from 'material-ui/styles/colors';
import Actions from '../actions';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';

class Channel extends React.Component {
  static propTypes = {
    channel: React.PropTypes.object
  }

  onClick() {
    Actions.channelOpened(this.props.channel);
  }

  render() {
    const style = {};

    if (this.props.channel.selected) {
      style.backgroundColor = colors.grey100;
    }

    return (
      <ListItem style={style} onClick={this.onClick.bind(this)}>{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
