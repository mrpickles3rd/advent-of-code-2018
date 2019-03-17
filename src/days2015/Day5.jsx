import React from 'react';
import PropTypes from 'prop-types';

function notNaughty(input) {
  return input.search(/(ab|cd|pq|xy)/) < 0;
}

function hasVowels(input) {
  return input.split('').reduce((a, b) => {
    if (b.search(/[aeiou]/) >= 0) {
      return a + 1;
    }

    return a;
  }, 0) >= 3;
}

function doubleLetters(input) {
  return input.split('').some((v, i, a) => {
    if (a[i - 1]) {
      return v === a[i - 1];
    }

    return false;
  });
}

function has2pairs(s) {
  const obj = {};
  return s.split('').some((v, i, a) => {
    if (i > 0) {
      const key = `${a[i - 1]}${v}`;
      const notOverlapping = `${a[i - 2]}${a[i - 1]}` !== key;
      if (notOverlapping && obj[key]) {
        return true;
      }
      obj[key] = 1;
      return false;
    }
    return false;
  });
}

function repeatingLetter(s) {
  return s.split('').some((v, i, a) => {
    if (i > 1) {
      if (a[i - 2] === v) {
        return true;
      }
      return false;
    }
    return false;
  });
}

function Day5({ input, input2, name, name2, handleInputChange }) {
  let output = 0;
  let output2 = 0;

  input.split('\n').forEach((v) => {
    output += notNaughty(v) && hasVowels(v) && doubleLetters(v) ? 1 : 0;
    output2 += repeatingLetter(v) && has2pairs(v) ? 1 : 0;
  });

  return (
    <div>
      <p>
        {'2015 D5 P1 - '}
        <span id="output">{`${output}`}</span>
      </p>
      <p>
        {'2015 D5 P2 - '}
        <span id="output2">{`${output2}`}</span>
      </p>

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

export { notNaughty, hasVowels, doubleLetters, has2pairs, repeatingLetter };
