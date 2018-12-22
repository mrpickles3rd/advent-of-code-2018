import React from 'react';
import PropTypes from 'prop-types';

function Day2({ input, input2, name, name2, handleInputChange }) {
  let twos = 0;
  let threes = 0;

  input.split('\n').forEach((val) => {
    const counts = {};
    let two = 0;
    let three = 0;

    val.split('').forEach((v) => {
      counts[v] = ((counts[v] + 1) || 0);
    });

    Object.keys(counts).forEach((v) => {
      if (counts[v] === 1) two = 1;
      if (counts[v] === 2) three = 1;
    });

    twos += two;
    threes += three;
  });

  const arr = input2
    .split('\n');

  const matched = arr.filter((aRow => arr.some((thisRow) => {
    if (aRow === thisRow) return false;
    let notMatched = 0;
    const filterItem = aRow.split('');
    const checkItem = thisRow.split('');

    filterItem.forEach((letterVal, letterIDX) => {
      notMatched = (checkItem[letterIDX] !== letterVal)
        ? (notMatched + 1)
        : notMatched;
    });

    return notMatched === 1;
  })));

  let win;
  if (matched.length === 2) {
    const m1 = matched[0].split('');
    const m2 = matched[1].split('');

    win = m1.filter((v, i) => v === m2[i]).join('');
  }

  return (
    <div>
      <p>
        {'D2 P1: '}
      </p>
      <pre id="output">{twos * threes}</pre>
      <p>
        {'D2 P2: '}
      </p>
      <pre id="output2">{win || 'No Match Found :('}</pre>

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
