import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day5 from './Day5';
import Day5p1 from './Day5p1.json';
import Day5p2 from './Day5p2.json';

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

    it('the result is...', () => {
      const input = Day5p1;
      const comp = shallow(<Day5 input={input} />);
      // expect(comp.find('#output').text()).toEqual('dabCBAcaDA');
      expect(comp.find('#output').text()).toEqual(`${11754}`);
    });
  });

  describe('part two', () => {
    const input2 = 'dabAcCaCBAcCcaDA';

    describe('with a single test value', () => {
      it('Removing all A/a units produces dbCBcD with length 6', () => {
        const comp = shallow(<Day5 input2={input2} test="A" />);
        expect(comp.find('#output2').text()).toEqual(`${'dbCBcD'.length}`);
      });

      it('Removing all B/b units produces daCAcaDA with length 8', () => {
        const comp = shallow(<Day5 input2={input2} test="B" />);
        expect(comp.find('#output2').text()).toEqual(`${'daCAcaDA'.length}`);
      });

      it('Removing all C/c units produces daDA with length 4', () => {
        const comp = shallow(<Day5 input2={input2} test="C" />);
        expect(comp.find('#output2').text()).toEqual(`${'daDA'.length}`);
      });

      it('Removing all D/d units produces abCBAc with length 6', () => {
        const comp = shallow(<Day5 input2={input2} test="D" />);
        expect(comp.find('#output2').text()).toEqual(`${'abCBAc'.length}`);
      });
    });

    it('should find the shortest polymer you can produce (4)', () => {
      const comp = shallow(<Day5 input2={input2} test="ABCD" />);
      expect(comp.find('#output2').text()).toEqual(`${'daDA'.length}`);
    });

    it('final result for d5p1', () => {
      const comp = shallow(<Day5 input2={Day5p2} />);
      expect(comp.find('#output2').text()).toEqual(`${4098}`);
    });
  });
});
