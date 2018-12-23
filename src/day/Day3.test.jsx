import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day3 from './Day3';

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
    it('How many square inches of fabric are within two or more claims', () => {
      const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual('4');
    });

    it('How many square inches of fabric are within two or more claims', () => {
      const input = `#1 @ 10,13: 14x14
#2 @ 13,11: 14x14
#3 @ 15,15: 12x12
#4 @ 11,11: 11x15`;
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual('226');
    });
  });

  describe('part two', () => {
    it('should find the only compleat square (3)', () => {
      const input2 = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;
      const comp = shallow(<Day3 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('3');
    });
  });
});
