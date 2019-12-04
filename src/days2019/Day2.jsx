import React from 'react';
import PropTypes from 'prop-types';

import _input from './Day2.input';

function add([a, b]) {
  return a + b;
}

function multiply([a, b]) {
  return a * b;
}

function getValues(IntcodeProgram, programLocation) {
  const firstValueLocation = IntcodeProgram[programLocation + 1];
  const secondValueLocation = IntcodeProgram[programLocation + 2];

  return [
    IntcodeProgram[firstValueLocation],
    IntcodeProgram[secondValueLocation],
  ];
}

function updateLocation(IntcodeProgram, programLocation) {
  const location = IntcodeProgram[programLocation + 3];
  return location;
}

function getNumber(n) {
  return parseInt(n, 10);
}

function Day2({ startupCodes, input = _input, input2 = '', name, name2, handleInputChange }) {
  // IntcodeProgram initialization ;-P
  const IntcodeProgram = input.split(',').map(getNumber);
  // Running the program
  const isRunning = startupCodes;

  if (isRunning) {
    startupCodes
      .map(getNumber)
      .forEach((val, idx) => {
        IntcodeProgram[idx + 1] = val;
      });
  }
  let programLocation = 0;
  let timeout = 999;
  // let check = 0;
  while (timeout > 0) {
    const programAction = IntcodeProgram[programLocation];

    if (programAction === 99) {
      break;
    }

    const action = programAction === 1 ? add : multiply; // map? else if? switch?
    const value = action(getValues(IntcodeProgram, programLocation));
    IntcodeProgram[updateLocation(IntcodeProgram, programLocation)] = value;

    programLocation += 4;
    timeout -= 1;
  }


  const output = isRunning ? IntcodeProgram[0] : IntcodeProgram.join(',');
  const output2 = input2;

  return (
    <div>
      <p>
        {'2019 Day2 P1 - '}
        <span id="output">{output}</span>
      </p>
      <p>
        {'2019 Day2 P2 - '}
        <span id="output2">{output2}</span>
      </p>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day2.propTypes = {
  // ToDo: fix eslint hack
  startupCodes: PropTypes.arrayOf(PropTypes.string), // eslint-disable-line react/require-default-props
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day2.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day2;
