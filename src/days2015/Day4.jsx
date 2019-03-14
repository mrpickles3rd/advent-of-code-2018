import React from 'react';
import PropTypes from 'prop-types';
import MD5 from 'md5.js';

console.log(new MD5().update('42').digest('hex'));

function Day4({ input, input2, name, name2, handleInputChange }) {
  const output = input;
  const output2 = input2;

  return (
    <div>
      <p>
        {'2015 D4 P1 - '}
        <span id="output">{output || 'ERROR'}</span>
      </p>
      <p>
        {'2015 D4 P2 - '}
        <span id="output2">{`${output2}`}</span>
      </p>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day4.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day4.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day4;
