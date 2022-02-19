import React from 'react';
import PropTypes from 'prop-types';
// import MD5 from 'md5.js';

function Day4({ input, input2, name, name2, handleInputChange }) {
  let tries = 10000000;
  let count = 0;
  let notDone = true;
  let output;
  let output2;

  // while (tries >= 0 && notDone) {
  //   tries -= 1;
  //   count += 1;

  //   const s = new MD5().update(`${input}${count}`).digest('hex');

  //   if (s.indexOf('00000') === 0) {
  //     output = count;
  //     if (!input2) {
  //       notDone = false;
  //     }
  //   }

  //   if (s.indexOf('000000') === 0) {
  //     output2 = count;
  //     notDone = false;
  //   }
  // }

  return (
    <div>
      <p>
        {'2015 D4 P1 - '}
        <span id="output">{`${output}`}</span>
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
  input2: PropTypes.bool,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day4.defaultProps = {
  input: '',
  input2: false,
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day4;
