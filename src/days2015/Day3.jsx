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

  const Santa = { x0y0: 1 };
  const roboSanta = { x0y0: 1 };
  let SantaX = 0;
  let SantaY = 0;
  let roboSantaX = 0;
  let roboSantaY = 0;
  let output2 = 1;
  input2.split('').forEach((v, i) => {
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
