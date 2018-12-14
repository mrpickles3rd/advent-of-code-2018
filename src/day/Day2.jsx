import React from 'react';
import PropTypes from 'prop-types';

function Day2({ input = '', input2 = '' }) {
  let twos = 0;
  let threes = 0;
  const counts = {};

  input.split('\n').forEach((val) => {
    let two = 0;
    let three = 0;

    val.split('').forEach((v) => {
      counts[v] = (1 + (counts[v]) || 0);
    });

    Object.keys(counts).forEach((v) => {
      if (counts[v] === 1) two = 1;
      if (counts[v] === 2) three = 1;
    });

    twos += two;
    threes += three;
  });
  const output2 = input2;

  return (
    <div>
      <pre id="output">{twos * threes}</pre>
      <p id="output2">{output2}</p>
    </div>
  );
}

Day2.propTypes = {
  input: PropTypes.string, // eslint-disable-line react/require-default-props
  input2: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default Day2;
