import React from 'react';
import PropTypes from 'prop-types';

import day1input from './Day1.input';

function Day1({ input = day1input, input2, name, name2, handleInputChange }) {
  function getValue(acc, val) {
    return acc + Math.floor(parseInt(val, 10) / 3) - 2;
  }
  const output = input.split('\n').reduce(getValue, 0);
  const output2 = input2;

  return (
    <div>
      <p>
        {'2019 D1 P1 - '}
        <span id="output">{output}</span>
      </p>
      <p>
        {'2019 D1 P2 - '}
        <span id="output2">{output2}</span>
      </p>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day1.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day1.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day1;
