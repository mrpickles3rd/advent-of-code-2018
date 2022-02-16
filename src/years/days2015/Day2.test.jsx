/* eslint-disable max-len */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day2 from './Day2';

describe('<Day2 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day2 />);
  });

  describe('part one', () => {
    it('A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58', () => {
      const input = `2x3x4
      4x2x3
      3x4x2`;
      const comp = shallow(<Day2 input={input} />);
      expect(comp.find('#output').text()).toEqual(`${58 * 3}`);
    });

    it('A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43', () => {
      const input = '1x1x10';
      const comp = shallow(<Day2 input={input} />);
      expect(comp.find('#output').text()).toEqual('43');
    });
  });

  describe('part two', () => {
    it('A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.', () => {
      const input1 = '2x3x4';
      const comp = shallow(<Day2 input={input1} />);
      expect(comp.find('#output2').text()).toEqual('34');
    });

    it('A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.', () => {
      const input1 = `1x1x10
      1x1x10`;
      const comp = shallow(<Day2 input={input1} />);
      expect(comp.find('#output2').text()).toEqual(`${14 * 2}`);
    });
  });
});
