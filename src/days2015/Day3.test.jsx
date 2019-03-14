import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day3 from './Day3';
import Day3P1 from './Day3P1.json';

describe('<Day3 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day3 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day3 />);
  });

  describe('part one', () => {
    it('> delivers presents to 2 houses: one at the starting location, and one to the east', () => {
      const input = '>';
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual(`${2}`);
    });

    it('^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location', () => {
      const input = '^>v<';
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual(`${4}`);
    });

    it('^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses', () => {
      const input = '^v^v^v^v^v';
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual(`${2}`);
    });

    it('Day 3 Part 1 is', () => {
      const comp = shallow(<Day3 input={Day3P1} />);
      expect(comp.find('#output').text()).toEqual(`${2572}`);
    });
  });

  describe('part two', () => {
    it('^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south', () => {
      const input1 = '^v';
      const comp = shallow(<Day3 input={input1} />);
      expect(comp.find('#output2').text()).toEqual('3');
    });

    it('^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started', () => {
      const input1 = '^>v<';
      const comp = shallow(<Day3 input={input1} />);
      expect(comp.find('#output2').text()).toEqual('3');
    });

    it('^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other', () => {
      const input1 = '^v^v^v^v^v';
      const comp = shallow(<Day3 input={input1} />);
      expect(comp.find('#output2').text()).toEqual('11');
    });

    it('Day 3 p 2 is', () => {
      const comp = shallow(<Day3 input={Day3P1} />);
      expect(comp.find('#output2').text()).toEqual('2783');
    });
  });
});
