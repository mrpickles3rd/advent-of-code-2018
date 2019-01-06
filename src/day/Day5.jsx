import React from 'react';
import PropTypes from 'prop-types';

function getPartOne(val) {
  let tries = 1000;
  let notDone = true;
  let v;

  while (tries > 0 && notDone) {
    v = (v && v.filter(Boolean)) || val;
    tries -= 1;
    notDone = false;
    for (let i = 0; i < v.length; i += 1) {
      if (v[i - 1]) {
        if (
          v[i].toLowerCase() === v[i - 1].toLowerCase()
          && v[i] !== v[i - 1]
        ) {
          v[i] = '';
          v[i - 1] = '';
          notDone = true;
        }
      }
    }
  }

  return v.join('').length;
}

function Day5({ input, input2, name, name2, handleInputChange }) {
  console.time('ASD');
  const output = getPartOne(input.split(''));
  console.timeEnd('ASD');

  const output2 = input2;

  return (
    <div>
      <p>
        {'D5 P1 - '}
      </p>
      <pre id="output">{output}</pre>
      <p>
        {'D5 P2 - '}
      </p>
      <pre id="output2">{output2}</pre>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day5.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day5.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day5;
