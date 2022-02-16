import React from 'react';
import PropTypes from 'prop-types';

function Day1({ input, input2, name, name2, handleInputChange }) {
  const output = input.split('').reduce((a, b) => (b === ')' ? a - 1 : a + 1), 0);

  let i = 0;
  let character;
  input2.split('').reduce((a, b) => {
    i += 1;
    const ret = b === ')' ? a - 1 : a + 1;
    if (ret === -1 && !character) character = i;
    return ret;
  }, 0);
  const output2 = character;

  return (
    <div>
      <p>
        {'2015 D1 P1 - '}
        <span id="output">{output}</span>
      </p>
      <p>
        {'2015 D1 P2 - '}
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
