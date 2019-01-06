import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day4 from './Day4';

describe('<Day4 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day4 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day4 />);
  });

  describe('part one', () => {
    it('times the "ID" with the most mins', () => {
      const input = `[1518-11-01 00:05] falls asleep
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
[1518-11-05 00:55] wakes up`;
      const comp = shallow(<Day4 input={input} />);
      const ID = 10;
      const mostTime = 24;
      expect(comp.find('#output').text()).toEqual(`${ID * mostTime}`);
    });
  });

  describe('part two', () => {
    it('which guard is most frequently asleep on the same minute', () => {
      const input = `[1518-11-01 00:05] falls asleep
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
[1518-11-05 00:55] wakes up`;
      const comp = shallow(<Day4 input={input} />);
      const ID = 99;
      const mostTime = 45;
      expect(comp.find('#output2').text()).toEqual(`${ID * mostTime}`);
    });
  });
});
