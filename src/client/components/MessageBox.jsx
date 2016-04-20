import Card from 'material-ui/Card';
import Firebase from 'firebase';
import React from 'react';
import trim from 'trim';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.firebaseRef = new Firebase('https://pluralsight-react-webpack.firebaseio.com/messages');
  }

  onChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  onKeyUp(event) {
    const RETURN_KEY_CODE = 13;

    if (event.keyCode === RETURN_KEY_CODE && trim(event.target.value) !== '') {
      event.preventDefault();

      this.firebaseRef.push({message: this.state.message});

      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <Card className="message-box">
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
        />
      </Card>
    );
  }
}

export default MessageBox;
