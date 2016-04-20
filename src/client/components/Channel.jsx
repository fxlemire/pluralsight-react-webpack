import {ListItem} from 'material-ui/List';
import React from 'react';

class Channel extends React.Component {
  render() {
    return (
      <ListItem>{this.props.channel}</ListItem>
    );
  }
}

Channel.propTypes = {
  channel: React.PropTypes.string
};

export default Channel;
