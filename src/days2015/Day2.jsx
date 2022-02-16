import React from 'react';
import PropTypes from 'prop-types';

function descending(a, b) {
  return a - b;
}

function Day2({ input, input2, name, name2, handleInputChange }) {
  let output2 = 0;
  const output = input.split('\n').map((v) => {
    const [l, w, h] = v.split('x').map((v2) => parseInt(v2, 10));
    const p1 = [(2 * l * w), (2 * w * h), (2 * h * l)].sort(descending);

    const p2 = [l, w, h].sort(descending);

    output2 += (p2[0] * 2) + (p2[1] * 2) + (p2[0] * p2[1] * p2[2]);

    return p1.reduce(
      (a, b) => a + b,
      p1[0] / 2,
    );
  }).reduce((a, b) => a + b, 0);

  return (
    <div>
      <p>
        {'2015 D2 P1 - '}
        <span id="output">{output || 'ERROR'}</span>
      </p>
      <p>
        {'2015 D2 P2 - '}
        <span id="output2">{`${output2}`}</span>
      </p>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day2.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day2.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day2;
