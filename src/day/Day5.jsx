import React from 'react';
import PropTypes from 'prop-types';

function Day5({ input, input2, name, name2, handleInputChange }) {
  const output = input;
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
