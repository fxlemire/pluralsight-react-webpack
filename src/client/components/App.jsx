import * as colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import ChannelList from './ChannelList.jsx';
import ChatStore from '../stores/ChatStore';
import Login from './Login.jsx';
import MessageBox from './MessageBox.jsx';
import MessageList from './MessageList.jsx';
import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

@connectToStores
class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static getStores() {
    return [ChatStore];
  }

  static propTypes = {
    user: React.PropTypes.object
  };

  getChildContext() {
    lightBaseTheme.palette.accent1Color = colors.pink400;
    lightBaseTheme.palette.primary1Color = colors.blue500;
    lightBaseTheme.palette.primary2Color = colors.blue700;
    lightBaseTheme.palette.primary3Color = colors.blue100;

    return {
      muiTheme: getMuiTheme(lightBaseTheme)
    };
  }

  render() {
    let view = <Login />;

    if (this.props.user) {
      view = (
        <div>
          <div className="app-container">
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      );
    }

    return (
      <div>
        <AppBar title="Awesome Chat App" />
        {view}
      </div>
    );
  }
}

export default App;
