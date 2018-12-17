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
    it('...', () => {
      const input = '....';
      const comp = shallow(<Day3 input={input} />);
      expect(comp.find('#output').text()).toEqual('????');
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
