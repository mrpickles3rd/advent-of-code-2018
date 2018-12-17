import React from 'react';
import PropTypes from 'prop-types';

function Day3({ input, input2 }) {
  // NOTE: Not handling zeros (0), just added one or two to the result.
  function getStartingSize(rows) {
    // This is a bit OTT and way to big for what I need.
    const xy = rows
      .map(a => [(a[0] + a[2] + 2), (a[1] + a[3] + 2)])
      .reduce((a, b) => [(a[0] + b[0]), (a[1] + b[1])], [0, 0]);

    const grid = Array.from({ length: xy[1] }, () => Array.from({ length: xy[0] }, () => 0));

    return grid;
  }
  const values = input.split('\n').map(
    v => v.replace(/(\s+|,|:|x)/g, '').split('').slice(3, 10).map(v2 => parseInt(v2, 10)),
  );
  const grid = getStartingSize(values);

  values.forEach((v, idx) => {
    for (let i = 0; i < v[3]; i += 1) {
      for (let j = 0; j < v[3]; j += 1) {
        grid[v[0] + i][v[1] + j] = grid[v[0] + i][v[1] + j] ? 'X' : idx + 1;
      }
    }
  });

  let output = 0;
  grid.forEach(v => v.forEach((v2) => { output = v2 === 'X' ? output += 1 : output += 0; }));

  const output2 = input2;

  return (
    <div>
      <p>
        {'D3 P1 - '}
        <span id="output">{output || 'OPPS! :('}</span>
        <pre>{JSON.stringify(grid.map(v => v.join(', ')), null, 3)}</pre>
      </p>
      <p>
        {'D3 P2 - '}
        <span id="output2">{output2}</span>
      </p>
    </div>
  );
}

Day3.propTypes = {
  input: PropTypes.string,
  input2: PropTypes.string,
};

Day3.defaultProps = {
  input: '',
  input2: '',
};

export default Day3;
