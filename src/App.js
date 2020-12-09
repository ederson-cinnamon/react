import React, { Component } from 'react';

class Index extends Component {
  state = { increment: 0 }
  render() {
    return (<div>
      <p>{this.state.increment}</p>
      <button onClick={() => {
        this.setState({ increment: ++this.state.increment })
      }}>Increment</button>
    </div>);
  }
}

export default Index;