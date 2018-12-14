import React from 'react';
import PropTypes from 'prop-types';

function Day1({ input = '', input2 = '' }) {
  const output = input.split('\n').reduce((a, b) => (a + parseInt(b, 10)), 0);

  const arr = [];
  let tries = 10;
  let reduceNum = 0;
  let win = false;
  let output2;

  do {
    tries--;

    reduceNum = input2.split('\n').reduce((a, b) => {
      arr.push(a);
      let n = a + parseInt(b, 10);
      if (!win && arr.indexOf(n) >= 0) {
        output2 = n;
        win = true;
      }
      return n;
    }, reduceNum);
  } while (!win && tries > 0);

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
