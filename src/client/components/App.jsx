import * as colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Chat from './Chat.jsx';
import ChatStore from '../stores/ChatStore';
import Login from './Login.jsx';
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
    const view = this.props.user ? <Chat /> : <Login />;

    return (
      <div>
        <AppBar title="Awesome Chat App" />
        {view}
      </div>
    );
  }
}

export default App;
