import React from 'react';
import PropTypes from 'prop-types';

function Day1({ input, input2 }) {
  const output = input.split('\n').reduce((a, b) => (a + parseInt(b, 10)), 0);

  const arr = [];
  let tries = 1000;
  let reduceNum = 0;
  let win = false;
  let output2;

  function numbers(a, b) {
    arr.push(a);
    const n = a + parseInt(b, 10);

    if (!win && arr.indexOf(n) >= 0) {
      output2 = n;
      win = true;
    }

    return n;
  }

  do {
    tries -= 1;
    reduceNum = input2.split('\n').reduce(numbers, reduceNum);
  } while (!win && tries > 0);

  return (
    <div>
      <p id="output">{Number.isNaN(output) ? 'Output was not a number :(' : output}</p>
      <p id="output2">{output2}</p>
    </div>
  );
}

Day1.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
};

Day1.defaultProps = {
  input: '',
  input2: '',
};

export default Day1;
