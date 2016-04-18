import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'hi there, how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render() {
    let key = 0;
    const messageNodes = this.state.messages.map(m => <div key={key++}>{m}</div>);

    return (<div>{messageNodes}</div>);
  }
}

export default App;
