import React from 'react';
import PropTypes from 'prop-types';

function Day3({ input, input2, name, name2, handleInputChange }) {
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
    v => v.replace(/(\s+|,|:|x|#|@)/g, '').split('').slice(1, 5).map(v2 => parseInt(v2, 10)),
  );
  const grid = Array.from({ length: 12 }, () => Array.from({ length: 12 }, () => 0)); // getStartingSize(values);

  values.forEach((v, idx) => {
    for (let i = 0; i < v[2]; i += 1) { // ToDo: Check the v[n] x/y value
      for (let j = 0; j < v[3]; j += 1) { // ToDo: Check the v[n] x/y value
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
      </p>
      <pre>{JSON.stringify(grid.map(v => v.join(', ')), null, 3)}</pre>
      <p>
        {'D3 P2 - '}
        <span id="output2">{output2}</span>
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
  input: `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
#4 @ 1,1: 1x5`,
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day3;
