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
      const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2
#4 @ 1,1: 1x5`;
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual('7');
    });
  });

  describe('part two', () => {
    it('...', () => {
      const input2 = '...';
      const comp = shallow(<Day3 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('???');
    });
  });
});
