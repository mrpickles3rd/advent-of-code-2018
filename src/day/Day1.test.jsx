import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

import Day1 from './Day1'; // eslint-disable-line import/no-extraneous-dependencies

Enzyme.configure({ adapter: new Adapter() });

describe('<Day1 />', () => {
  const MIN_PROP_TYPES = { input: '' };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day1 {...MIN_PROP_TYPES} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day1 {...MIN_PROP_TYPES} />);
  });

  describe('part one', () => {
    it('+1, +1, +1 results in  3', () => {
      const input = '+1\n+1\n+1';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('3');
    });

    it('+1, +1, -2 results in  0', () => {
      const input = '+1\n+1\n-2';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('0');
    });

    it('-1, -2, -3 results in -6', () => {
      const input = '-1\n-2\n-3';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('-6');
    });
  });

  describe('part two', () => {
    it('+1, -1 first reaches 0 twice', () => {
      const input2 = '+1\n-1';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('0');
    });

    it('+3, +3, +4, -2, -4 first reaches 10 twice', () => {
      const input2 = '+3\n+3\n+4\n-2\n-4';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('10');
    });

    it('-6, +3, +8, +5, -6 first reaches 5 twice', () => {
      const input2 = '-6\n+3\n+8\n+5\n-6';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('5');
    });

    it('+7, +7, -2, -7, -4 first reaches 14 twice', () => {
      const input2 = '+7\n+7\n-2\n-7\n-4';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('14');
    });

    it('+1, -2, +3, +1 after looping over list finds 2 twice', () => {
      const input2 = '+1\n-2\n+3\n+1';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('2');
    });
  });
});
