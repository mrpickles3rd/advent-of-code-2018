import React, { Component } from 'react';

import Day1 from './day/Day1';
import Day2 from './day/Day2';

import './App.css';

class App extends Component {
  state = {
    d1input: '',
    d1input2: '',
    d2input: '',
    d2input2: '',
  }

  handleDay1Change = (event) => {
    this.setState({ d1input: event.target.value });
  }

  handleDay1Change2 = (event) => {
    this.setState({ d1input2: event.target.value });
  }

  handleDay2Change = (event) => {
    this.setState({ d2input: event.target.value });
  }

  handleDay2Change2 = (event) => {
    this.setState({ d2input2: event.target.value });
  }

  render() {
    const {
      d1input, d1input2, d2input, d2input2,
    } = this.state;

    return (
      <div>
        <Day1 input={d1input} input2={d1input2} />
        <textarea value={d1input} onChange={this.handleDay1Change} />
        <textarea value={d1input2} onChange={this.handleDay1Change2} />
        <hr />
        <Day2 input={d2input} input2={d2input2} />
        <textarea value={d2input} onChange={this.handleDay2Change} />
        <textarea value={d2input2} onChange={this.handleDay2Change2} />
      </div>
    );
  }
}

export default App;
