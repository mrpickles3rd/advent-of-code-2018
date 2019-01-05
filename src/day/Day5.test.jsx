import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day5 from './Day5';

describe('<Day5 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day5 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day5 />);
  });

  describe('part one', () => {
    it('In aA, a and A react, leaving nothing behind', () => {
      const input = 'aA';
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('');
      expect(comp.find('#output').text()).toEqual(`${''.length}`);
    });

    it('In abBA, bB destroys itself, leaving aA. As above, this then destroys itself, leaving nothing', () => {
      const input = 'abBA';
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('');
      expect(comp.find('#output').text()).toEqual(`${''.length}`);
    });

    it('In abAB, no two adjacent units are of the same type, and so nothing happens', () => {
      const input = 'abAB';
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('abAB');
      expect(comp.find('#output').text()).toEqual(`${'abAB'.length}`);
    });

    it('In aabAAB, even though aa and AA are of the same type, their polarities match, and so nothing happens', () => {
      const input = 'aabAAB';
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('aabAAB');
      expect(comp.find('#output').text()).toEqual(`${'aabAAB'.length}`);
    });

    it('In dabAcCaCBAcCcaDA', () => {
      const input = 'dabAcCaCBAcCcaDA';
      // dabAaCBAcaDA
      // dabCBAcaDA
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('dabCBAcaDA');
      expect(comp.find('#output').text()).toEqual(`${'dabCBAcaDA'.length}`);
    });
  });

  describe('part two', () => {
    it('which guard is most frequently asleep on the same minute', () => {
      const input1 = ``;
      const comp = shallow(<Day5 input1={input1} />);
      expect(comp.find('#output2').text()).toEqual(`...`);
    });
  });
});
