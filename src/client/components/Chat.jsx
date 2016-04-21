import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import MessageList from './MessageList.jsx';
import React from 'react';

class Chat extends React.Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default Chat;
