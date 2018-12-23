import React, { Component } from 'react';
import './App.css';

import SelectDay from './SelectDay';

import dayMap from './day';

const DAYS = [...Object.keys(dayMap)];
const DEFAULT_DAY = DAYS[DAYS.length - 1];

class App extends Component {
  state = {
    showDay: DEFAULT_DAY,
    input: '',
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
