import React from 'react';
import PropTypes from 'prop-types';

import _input from './Day2.input';

function add([a, b]) {
  return a + b;
}

function multiply([a, b]) {
  return a * b;
}

function getValues(memory, programLocation) {
  const firstValueLocation = memory[programLocation + 1];
  const secondValueLocation = memory[programLocation + 2];

  return [
    memory[firstValueLocation],
    memory[secondValueLocation],
  ];
}

function updateLocation(memory, programLocation) {
  const location = memory[programLocation + 3];
  return location;
}

function getNumber(n) {
  return parseInt(n, 10);
}

function IntcodeComputer(inputs, inishalMemory) {
  // MEMORY initialization ;-P
  // // // // // const memory = inishalMemory.split(',').map(getNumber);
  const memory = [...inishalMemory];
  // Running the program
  const isRunning = !!inputs;

  if (isRunning) {
    inputs.map(getNumber).forEach(
      (val, idx) => { memory[idx + 1] = val; },
    );
  }
  let programLocation = 0;
  let timeout = 999;
  // let check = 0;
  while (timeout > 0) {
    const programAction = memory[programLocation];

    if (programAction === 99) {
      break;
    }

    const action = programAction === 1 ? add : multiply; // map? else if? switch?
    const value = action(getValues(memory, programLocation));
    memory[updateLocation(memory, programLocation)] = value;

    programLocation += 4;
    timeout -= 1;
  }

  const output = isRunning ? memory[0] : memory.join(',');
  return output;
}

// ToDo: `input = _input` ... Needed?
// Default Props ... Time off and I forgot about it :(
function Day2({ startupCodes, input = _input, input2 = '', name, name2, handleInputChange }) {
  const inishalMemory = input.split(',').map(getNumber);

  const isRunningProgram = (Array.isArray(startupCodes) && startupCodes.length > 0);
  const inputs = isRunningProgram ? startupCodes.map(getNumber) : false;
  const output = IntcodeComputer(inputs, inishalMemory);

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
  startupCodes: PropTypes.arrayOf(PropTypes.string),
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day2.defaultProps = {
  startupCodes: [],
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day2;
