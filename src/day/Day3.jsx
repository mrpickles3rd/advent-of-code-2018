import React from 'react';
import PropTypes from 'prop-types';

function Day3({ input, input2 }) {
  const output = input;
  const output2 = input2;

  return (
    <div>
      <p>
        {'D3 P1 - '}
        <span id="output">{Number.isNaN(output) ? 'Output was not a number :(' : output}</span>
      </p>
      <p>
        {'D3 P2 - '}
        <span id="output2">{output2}</span>
      </p>
    </div>
  );
}

Day3.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
};

Day3.defaultProps = {
  input: '',
  input2: '',
};

export default Day3;
