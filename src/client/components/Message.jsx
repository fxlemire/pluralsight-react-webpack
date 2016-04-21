import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';

class Message extends React.Component {
  static propTypes = {
    message: React.PropTypes.object
  };

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic}/>}>
        {this.props.message.message}
      </ListItem>
    );
  }
}

export default Message;
