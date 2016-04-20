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
      messages: []
    };

    const firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/messages');

    firebaseRef.once('value', dataSnapshot => {
      const messagesVal = dataSnapshot.val();
      const messages = _(messagesVal)
        .keys()
        .map(messageKey => {
          const clonedMessageObject = _.clone(messagesVal[messageKey]);

          clonedMessageObject.key = messageKey;

          return clonedMessageObject;
        })
        .value();

      this.setState({messages});
    });

    this.firebaseRef = firebaseRef;
  }

  render() {
    const messageNodes = this.state.messages.map(m => <Message key={m.key} message={m.message} profilePic={m.profilePic} />);

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
