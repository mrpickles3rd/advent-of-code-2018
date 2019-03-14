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
    it('If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so', () => {
      const input = 'abcdef';
      const comp = shallow(<Day4 input={input} />);
      expect(comp.find('#output').text()).toEqual('609043');
    });

    it('If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef...', () => {
      const input = 'pqrstuv';
      const comp = shallow(<Day4 input={input} />);
      expect(comp.find('#output').text()).toEqual('1048970');
    });

    it('Day 4 Part 1 is', () => {
      const comp = shallow(<Day4 input="iwrupvqb" />);
      expect(comp.find('#output').text()).toEqual('???');
    });
  });

  describe('part two', () => {
    it('^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south', () => {
      const input1 = '^v';
      const comp = shallow(<Day4 input={input1} />);
      expect(comp.find('#output2').text()).toEqual('3');
    });
  });
});
