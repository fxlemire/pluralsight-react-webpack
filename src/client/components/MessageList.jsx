import Card from 'material-ui/Card';
import Firebase from 'firebase';
import List from 'material-ui/List';
import Message from './Message.jsx';
import React from 'react';
import _ from 'lodash';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {}
    };

    const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/messages');

    firebaseRef.on('child_added', message => {
      if (this.state.messages[message.key()]) {
        return;
      }

      const messages = this.state.messages;
      const messageValue = message.val();

      messageValue.key = message.key();
      messages[messageValue.key] = messageValue;
      this.setState({messages});
    });

    firebaseRef.on('child_removed', message => {
      const key = message.key();
      const messages = this.state.messages;

      Reflect.deleteProperty(messages, key);
      this.setState({messages});
    });

    this.firebaseRef = firebaseRef;
  }

  render() {
    const messageNodes = _.values(this.state.messages).map(m => <Message key={m.key} message={m.message} profilePic={m.profilePic} />);

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
