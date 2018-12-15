import React from 'react';
import PropTypes from 'prop-types';

function Day2({ input = '', input2 = '' }) {
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

  const win = arr.filter((aRow) => {
    // console.log('filter((aRow')
    return arr.some((thisRow) => {
      // console.log('every((thisRow')
      if (aRow === thisRow) return false;

      let notMatched = 0;

      const filterItem = aRow.split('');
      const checkItem = thisRow.split('');
      // console.log('filterItem === ', filterItem, ' && checkItem === ', checkItem)
      // if idx indexOf -1 === 2 time -> POP;
      filterItem.forEach((letterVal, letterIDX) => { // ToDo: matched > 1 -> POP!
        // console.log('forEach((letterVal, letterIDX')
        notMatched = (checkItem[letterIDX] !== letterVal)
          ? (notMatched + 1)
          : notMatched;
      });
// console.log('RETURN notMatched === ', notMatched)
      return notMatched === 1;
    });
  });

  return (
    <div>
      <pre id="output">{twos * threes}</pre>
      <pre id="output2">{JSON.stringify(win, null, 3)}</pre>
    </div>
  );
}

Day2.propTypes = {
  input: PropTypes.string, // eslint-disable-line react/require-default-props
  input2: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default Day2;
