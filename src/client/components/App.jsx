import * as colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  static propTypes = {
    children: React.PropTypes.object,
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
    return (
      <div>
        <AppBar title="Awesome Chat App" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
