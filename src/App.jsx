import React, { Component } from 'react';
import './App.css';

import yearMap from './years';

const YEAR_KEYS = [...Object.keys(yearMap)];
const DEFAULT_YEAR_KEY = YEAR_KEYS[0]; // YEAR_KEYS[YEAR_KEYS.length - 1];

function getDayToShow(yearKey) {
  return Object.keys(yearMap[yearKey])[Object.keys(yearMap[yearKey]).length - 1];
}

function getDayKey(yearKey) {
  return Object.keys(yearMap[yearKey]);
}

class App extends Component {
  state = {
    showYear: DEFAULT_YEAR_KEY,
    showDay: getDayToShow(DEFAULT_YEAR_KEY),
    dayKeys: getDayKey(DEFAULT_YEAR_KEY),
    input: '',
    input2: '',
  }

  handleChangeYear = ({ target: { value: yearKey } }) => {
    this.setState({
      input: '',
      input2: '',
      showYear: yearKey,
      showDay: getDayToShow(yearKey),
      dayKeys: getDayKey(yearKey),
    });
  }

  handleChangeDay = ({ target: { value } }) => {
    this.setState({ input: '', input2: '', showDay: value });
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { input, input2, showDay, showYear, dayKeys } = this.state;

    const Day = yearMap[showYear][showDay];

    return (
      <div>
        <select id="year" value={showYear} onChange={this.handleChangeYear}>
          {YEAR_KEYS.map(v => (<option key={v} value={v}>{v}</option>))}
        </select>
        <select id="day" value={showDay} onChange={this.handleChangeDay}>
          {dayKeys.map(v => (<option key={v} value={v}>{v}</option>))}
        </select>
        <hr />
        <Day
          input={input}
          input2={input2}
          name="input"
          name2="input2"
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
