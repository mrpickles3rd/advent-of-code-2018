import React, { Component } from 'react';
import './App.css';

import SelectDay from './SelectDay';

import dayMap from './day';

const DAYS = [...Object.keys(dayMap)];
const DEFAULT_DAY = DAYS[DAYS.length - 1];

class App extends Component {
  state = {
    showDay: DEFAULT_DAY,
    input: `[1518-11-01 00:05] falls asleep
    [1518-11-01 00:00] Guard #10 begins shift
    [1518-11-01 00:25] wakes up
    [1518-11-01 00:30] falls asleep
    [1518-11-01 00:55] wakes up
    [1518-11-01 23:58] Guard #99 begins shift
    [1518-11-02 00:40] falls asleep
    [1518-11-02 00:50] wakes up
    [1518-11-03 00:05] Guard #10 begins shift
    [1518-11-03 00:24] falls asleep
    [1518-11-03 00:29] wakes up
    [1518-11-04 00:02] Guard #99 begins shift
    [1518-11-04 00:36] falls asleep
    [1518-11-04 00:46] wakes up
    [1518-11-05 00:03] Guard #99 begins shift
    [1518-11-05 00:45] falls asleep
    [1518-11-05 00:55] wakes up`,
    input2: '',
  }

  handleChangeDay = ({ target: { value } }) => {
    this.setState({ input: '', input2: '', showDay: value });
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { input, input2, showDay } = this.state;
    const Day = dayMap[showDay];

    return (
      <div>
        <SelectDay DAYS={DAYS} showDay={showDay} handleChangeDay={this.handleChangeDay} />
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
