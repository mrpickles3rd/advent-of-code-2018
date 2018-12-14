import React from 'react';
import PropTypes from 'prop-types';

function Day2({ input = '', input2 = '' }) {
  const output = input;
  const output2 = input2;
  return (
    <div>
      <p id="output">{output}</p>
      <p id="output2">{output2}</p>
    </div>
  );
}

Day2.propTypes = {
  input: PropTypes.string, // eslint-disable-line react/require-default-props
  input2: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default Day2;
