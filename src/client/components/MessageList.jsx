import Card from 'material-ui/Card';
import ChatStore from '../stores/ChatStore';
import List from 'material-ui/List';
import Message from './Message.jsx';
import React from 'react';
import _ from 'lodash';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {}
    };
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static propTypes = {
    messages: React.PropTypes.object
  };

  render() {
    const messageNodes = this.props.messages
      ? _.values(this.props.messages).map(m => <Message key={m.key} message={m.message} profilePic={m.profilePic} />)
      : null;

    return (
      <Card className="message-list">
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
