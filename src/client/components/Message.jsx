import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import React from 'react';
import littleMac from '../images/punchout_littlemac.gif';

class Message extends React.Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={littleMac}/>}>
        {this.props.message}
      </ListItem>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.string
};

export default Message;
