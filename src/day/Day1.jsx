import React from 'react';
import PropTypes from 'prop-types';

function Day1({ input = '', input2 = '' }) {
  const output = input.split('\n').reduce((a, b) => (a + parseInt(b, 10)), 0);
  const res = {};
  const output2 = input2.split('\n').reduce((a, b) => {
    return a + parseInt(b, 10);
  }, 0);
  console.log('-=-=-=-=-=-=- ', res)
  console.log('input2 ', input2)

  return (
    <div>
      <p id="output">{output}</p>
      <p id="output2">{output2}</p>
    </div>
  );
}

Day1.propTypes = {
  input: PropTypes.string, // eslint-disable-line react/require-default-props
  input2: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default Day1;
