import * as colors from 'material-ui/styles/colors';
import Actions from '../actions';
import {Link} from 'react-router';
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
      <Link to={`/chat/${this.props.channel.key}`} style={{textDecoration: 'none'}}>
        <ListItem style={style}>{this.props.channel.name}</ListItem>
      </Link>
    );
  }
}

export default Channel;
