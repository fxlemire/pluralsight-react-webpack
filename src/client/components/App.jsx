import AppBar from 'material-ui/AppBar';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import MessageList from './MessageList.jsx';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightBaseTheme)
    };
  }

  render() {
    return (
      <div>
        <AppBar title="Awesome Chat App" />
        <div className="app-container">
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default App;
