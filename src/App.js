import React, { Component } from 'react';

class Index extends Component {
  state = { increment: 0 }
  render() {
    var { increment } = this.state
    return (<div>
      <p>{increment}</p>
      <button onClick={() => {
        this.setState({ increment: ++increment })
      }}>Increment</button>
    </div>);
  }
}

export default Index;