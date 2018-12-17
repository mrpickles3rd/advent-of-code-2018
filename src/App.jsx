import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Day1 from './day/Day1';
import Day2 from './day/Day2';
import Day3 from './day/Day3';

import './App.css';

const DAYS = ['Day1', 'Day2', 'Day3'];

function SelectDay({ showDay, handleChangeDay }) {
  return (
    <select value={showDay} onChange={handleChangeDay}>
      {DAYS.map(v => (<option key={v} value={v}>{v}</option>))}
    </select>
  );
}

SelectDay.propTypes = {
  showDay: PropTypes.string,
  handleChangeDay: PropTypes.func,
};

SelectDay.defaultProps = {
  showDay: DAYS[0],
  handleChangeDay: () => {},
};

class App extends Component {
  state = {
    showDay: DAYS[0],
    d1input: '',
    d1input2: '',
    d2input: '',
    d2input2: '',
    d3input: '',
    d3input2: '',
  }

  handleChangeDay = (event) => {
    this.setState({ showDay: event.target.value });
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { d1input, d1input2, d2input, d2input2, d3input, d3input2, showDay } = this.state;

    return (
      <div>
        <SelectDay showDay={showDay} handleChangeDay={this.handleChangeDay} />
        <hr />
        <Day3 input={d3input} input2={d3input2} />
        <textarea name="d3input" value={d3input} onChange={this.handleInputChange} />
        <textarea name="d3input2" value={d3input2} onChange={this.handleInputChange} />
        <hr />
        <Day2 input={d2input} input2={d2input2} />
        <textarea name="d2input" value={d2input} onChange={this.handleInputChange} />
        <textarea name="d2input2" value={d2input2} onChange={this.handleInputChange} />
        <hr />
        <Day1 input={d1input} input2={d1input2} />
        <textarea name="d1input" value={d1input} onChange={this.handleInputChange} />
        <textarea name="d1input2" value={d1input2} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
