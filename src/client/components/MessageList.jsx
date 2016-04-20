import Card from 'material-ui/Card';
import List from 'material-ui/List';
import Message from './Message.jsx';
import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'hi there, how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render() {
    let key = 0;
    const messageNodes = this.state.messages.map(m => <Message key={key++} message={m} />);

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
