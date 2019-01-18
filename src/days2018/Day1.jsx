import React from 'react';
import PropTypes from 'prop-types';

function Day1({ input, input2, name, name2, handleInputChange }) {
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
      <p>
        {'D1 P1 - '}
        <span id="output">{Number.isNaN(output) ? 'Output was not a number :(' : output}</span>
      </p>
      <p>
        {'D1 P2 - '}
        <span id="output2">
          {typeof output2 === 'number' ? output2 : `Finished the run when win === "${win}" && tries === "${tries}"`}
        </span>
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
