import React from 'react';
import PropTypes from 'prop-types';

function Day3({ input, input2, name, name2, handleInputChange }) {
  let output = 1;
  const obj = { x0y0: 1 };
  let x = 0;
  let y = 0;
  input.split('').forEach((v) => {
    if (v === '^' || v === 'v') {
      x += v === '^' ? 1 : -1;
    } else {
      y += v === '>' ? 1 : -1;
    }

    if (obj[`x${x}y${y}`]) {
      obj[`x${x}y${y}`] += 1;
    } else {
      output += 1;
      obj[`x${x}y${y}`] = 1;
    }
  });

  const key1 = 'Santa';
  const key2 = 'roboSanta';
  const obj2 = {
    [key1]: {
      x0y0: 1,
      x: 0,
      y: 0,
    },
    [key2]: {
      x0y0: 1,
      x: 0,
      y: 0,
    },
  };
  let output2 = 1;
  input.split('').forEach((v, i) => {
    const santa = (i % 2 === 1) ? key1 : key2;

    if (v === '^' || v === 'v') {
      obj2[santa].x += v === '^' ? 1 : -1;
    } else {
      obj2[santa].y += v === '>' ? 1 : -1;
    }

    if (obj2[santa][`x${obj2[santa].x}y${obj2[santa].y}`]) {
      obj2[santa][`x${obj2[santa].x}y${obj2[santa].y}`] += 1;
    } else {
      output2 += 1;
      obj2[santa][`x${obj2[santa].x}y${obj2[santa].y}`] = 1;
    }
  });
console.log('obj2 === ', obj2)
  return (
    <div>
      <p>
        {'2015 D3 P1 - '}
        <span id="output">{output || 'ERROR'}</span>
      </p>
      <p>
        {'2015 D3 P2 - '}
        <span id="output2">{`${output2}`}</span>
      </p>

      <textarea name={name} value={input} onChange={handleInputChange} />
      <textarea name={name2} value={input2} onChange={handleInputChange} />
    </div>
  );
}

Day3.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
  name: PropTypes.string,
  name2: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Day3.defaultProps = {
  input: '',
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day3;
