import React from 'react';
import PropTypes from 'prop-types';

function byDate(a, b) {
  const a2 = a.substring(0, 18).replace(/(\[|\s+|-|:)/g, '').substring(0, 12);
  const b2 = b.substring(0, 18).replace(/(\[|\s+|-|:)/g, '').substring(0, 12);

  if (a2 > b2) return 1;
  if (a2 < b2) return -1;
  return 0;
}

function Day4({ input, input2, name, name2, handleInputChange }) {
  let id;
  const list = {};

  input.split('\n').map(v => v.trim()).sort(byDate).forEach((v, idx, arr) => {
    if (v.indexOf('Guard #') >= 0) {
      id = parseInt(v.substring(v.indexOf('#') + 1, v.length), 10);
      if (!list[id]) {
        list[id] = { sleep: 0, values: [] };
      }
    }

    if (list[id]) {
      if (v.indexOf('wakes up') >= 0) {
        const a = v.substring(0, 18).replace(/(\[|\s+|-|:)/g, '').substring(0, 12);
        const b = arr[idx - 1]
          ? arr[idx - 1].substring(0, 18).replace(/(\[|\s+|-|:)/g, '').substring(0, 12)
          : 0;

        list[id].sleep += parseInt(a, 10) - parseInt(b, 10);
        list[id].values.push({
          from: parseInt(b.substring(10, 12), 10),
          to: parseInt(a.substring(10, 12), 10),
        });
      }
    }
  });

  const mostSleep = Object.keys(list).map(
    key => ({ key, sleep: list[key].sleep }),
  ).sort((a, b) => b.sleep - a.sleep)[0].key;

  const aaaaa = Array.from({ length: 60 }, (v, idx) => ({ idx, val: 0 }));

  list[mostSleep].values.forEach(({ from, to }) => {
    for (let i = from; i < to; i += 1) {
      aaaaa[i].val += 1;
    }
  });

  const output = aaaaa.sort((a, b) => b.val - a.val)[0].idx * mostSleep;
  const output2 = input2;

  return (
    <div>
      <p>
        {'D4 P1 - '}
      </p>
      <pre id="output">{JSON.stringify(output, null, 3)}</pre>
      <p>
        {'D4 P2 - '}
        <span id="output2">{output2}</span>
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
  input: `[1518-11-01 00:05] falls asleep
[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`,
  input2: '',
  name: '',
  name2: '',
  handleInputChange: () => {},
};

export default Day4;
