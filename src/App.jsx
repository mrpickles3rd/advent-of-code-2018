import React, { Component } from 'react';

import Day1 from './day/Day1';

import './App.css';

class App extends Component {
  state = {
    input: '',
    input2: '',
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleChange2 = (event) => {
    this.setState({ input2: event.target.value });
  }

  render() {
    const { input, input2 } = this.state;
    return (
      <div>
        <Day1 input={input} input2={input2} />
        <textarea value={input} onChange={this.handleChange} />
        <textarea value={input2} onChange={this.handleChange2} />
      </div>
    );
  }
}

export default App;
