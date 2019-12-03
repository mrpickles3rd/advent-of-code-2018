import React, { useState } from 'react';
import './App.css';

import yearMap from './years';

const YEAR_KEYS = [...Object.keys(yearMap)];
const DEFAULT_YEAR_KEY = YEAR_KEYS[YEAR_KEYS.length - 1]; // YEAR_KEYS[0];

function getDayToShow(yearKey) {
  return Object.keys(yearMap[yearKey])[Object.keys(yearMap[yearKey]).length - 1];
}

function getDayKey(yearKey) {
  return Object.keys(yearMap[yearKey]);
}

function App() {
  const [showYear, setYear] = useState(DEFAULT_YEAR_KEY);
  const [showDay, setDay] = useState(getDayToShow(DEFAULT_YEAR_KEY));
  const [dayKeys, setDayKeys] = useState(getDayKey(DEFAULT_YEAR_KEY));
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  function handleChangeYear({ target: { value: yearKey } }) {
    setInput('');
    setInput2('');
    setYear(yearKey);
    setDay(getDayToShow(yearKey));
    setDayKeys(getDayKey(yearKey));
  }

  function handleChangeDay({ target: { value } }) {
    setInput('');
    setInput2('');
    setDay(value);
  }

  function handleInputChange({ target: { value, name } }) {
    const inputMap = { input: setInput, input2: setInput2 };
    inputMap[name](value); // ToDo: Fix this madness :/
  }

  const Day = yearMap[showYear][showDay];

  return (
    <div>
      <select id="year" value={showYear} onChange={handleChangeYear}>
        {YEAR_KEYS.map(v => (<option key={v} value={v}>{v}</option>))}
      </select>
      <select id="day" value={showDay} onChange={handleChangeDay}>
        {dayKeys.map(v => (<option key={v} value={v}>{v}</option>))}
      </select>
      <hr />
      <Day
        input={input}
        input2={input2}
        name="input"
        name2="input2"
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
