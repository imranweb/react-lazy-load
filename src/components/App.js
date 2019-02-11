import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {welcome:'Hello Visitor!'};
  }

  render() {
    return(
      <h1>{this.state.welcome}</h1>
    )
  }
}

export default App;