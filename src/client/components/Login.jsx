import Actions from '../actions';
import Card from 'material-ui/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

class Login extends React.Component {
  onClick() {
    Actions.login();
  }

  render() {
    return (
      <Card className="login-card">
        <CardText className="login-text">
          To start chatting, please log in using your Google account.
        </CardText>
        <RaisedButton style={{display: 'block'}} label="Log in with Google" onClick={this.onClick.bind(this)}/>
      </Card>
    );
  }
}

module.exports = Login;
