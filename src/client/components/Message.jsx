import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import React from 'react';

class Message extends React.Component {
  static propTypes = {
    message: React.PropTypes.string,
    profilePic: React.PropTypes.string
  };

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.profilePic}/>}>
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
