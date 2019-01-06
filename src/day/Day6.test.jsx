import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day6 from './Day6';

describe('<Day6 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day6 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day6 />);
  });

  describe('part one', () => {
    it('...?', () => {
      const input = '';
      const comp = shallow(<Day6 input={input} />);
      expect(comp.find('#output').text()).toEqual(`${''.length}`);
    });
  });

  describe('part two', () => {
    it('?...', () => {
      const input2 = '';
      const comp = shallow(<Day6 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual(`${''.length}`);
    });
  });
});
