import React, { Component } from 'react';

class Index extends Component {
  state = { date: new Date() }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
        <p>date today is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Index;