import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day2 from './Day2';
import input from './Day2.input';
// import input2 from './Day2.input2';

describe('<Day2 />', () => {
  const MIN_PROPS = { input: '99' };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day2 {...MIN_PROPS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day2 {...MIN_PROPS} />);
  });

  describe('a basic application should "initialize";', () => {
    it('adds and multiplies /* (1===add 2===multiplies) */ (position +1, position + 2) AT (location +3)', () => {
      /*
        1) 1 === ADD; position => (9) => 30, position => (10) => 40; AT location => (3) => location[3] === p1 + p2
        2) 2 === ADD;
            position => (3) => 70 //was 3 now 70 due to step 1,
            position => (11) => => 50;
            AT location => (0) => location[0] === p1 * p2
      */
      const testInput = '1,9,10,3,'
                      + '2,3,11,0,'
                      + '99,'
                      + '30,40,50';
      // test first time (adding) only
      // const output = '1,9,10,70,'
      //              + '2,3,11,0,'
      //              + '99,'
      //              + '30,40,50';
      // test adding and multiplying (2 line of the Intcode Program)
      const output = '3500,9,10,70,'
                  + '2,3,11,0,'
                  + '99,'
                  + '30,40,50';
      const comp = shallow(<Day2 input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });
  });

  describe('edges cases on "initialization";', () => {
    it('1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)', () => {
      const testInput = '1,0,0,0,99';
      const output = '2,0,0,0,99';
      const comp = shallow(<Day2 input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });

    it('2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)', () => {
      const testInput = '2,3,0,3,99';
      const output = '2,3,0,6,99';
      const comp = shallow(<Day2 input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });

    it('2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801)', () => {
      const testInput = '2,4,4,5,99,0';
      const output = '2,4,4,5,99,9801';
      const comp = shallow(<Day2 input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });

    it('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
      const testInput = '1,1,1,4,99,5,6,0,99';
      const output = '30,1,1,4,2,5,6,0,99';
      const comp = shallow(<Day2 input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });
  });

  describe('get the result from the running program', () => {
    it('should "set the program input" by setting index 1 === 12 and index 2 === 2', () => {
      /*
        Once you have a working computer, the first step is to restore the gravity assist program
        (your puzzle input) to the "1202 program alarm" state it had just before the last computer caught fire.
        To do this, before running the program,
        ... replace position 1 with the value 12
        ... and replace position 2 with the value 2.
        What value is left at position 0 after the program halts?
      */

      const startupCodes = ['12', '02']; // ToDo: split 1202 somehow

      const testInput = `${'1' || '2'},3,3,0,99,0,0,0,0,0,0,0,3`;
      const output = '5';

      const comp = shallow(<Day2 startupCodes={startupCodes} input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });

    it('should "set the program input" by setting index 1 === 12 and index 2 === 2', () => {
      const startupCodes = ['12', '02']; // ToDo: split 1202 somehow
      const testInput = input;
      const output = '8017076';

      const comp = shallow(<Day2 startupCodes={startupCodes} input={testInput} />);
      expect(comp.find('#output').text()).toBe(output);
    });
  });
});
