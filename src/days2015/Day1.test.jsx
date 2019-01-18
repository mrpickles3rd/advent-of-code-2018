import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day1 from './Day1';

describe('<Day1 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day1 />);
  });

  describe('part one', () => {
    it('(()) and ()() both result in floor 0.', () => {
      const input = '(())';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('0');

      const input2 = '()()';
      const comp2 = shallow(<Day1 input={input2} />);
      expect(comp2.find('#output').text()).toEqual('0');
    });

    it('((( and (()(()( both result in floor 3', () => {
      const input = '(((';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('3');

      const input2 = '(()(()(';
      const comp2 = shallow(<Day1 input={input2} />);
      expect(comp2.find('#output').text()).toEqual('3');
    });

    it('))((((( also results in floor 3', () => {
      const input = '))(((((';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('3');
    });

    it('()) and ))( both result in floor -1', () => {
      const input = '())';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('-1');

      const input2 = '))(';
      const comp2 = shallow(<Day1 input={input2} />);
      expect(comp2.find('#output').text()).toEqual('-1');
    });

    it('))) and )())()) both result in floor -3', () => {
      const input = ')))';
      const comp = shallow(<Day1 input={input} />);
      expect(comp.find('#output').text()).toEqual('-3');

      const input2 = ')())())';
      const comp2 = shallow(<Day1 input={input2} />);
      expect(comp2.find('#output').text()).toEqual('-3');
    });
  });

  describe('part two', () => {
    it(') causes him to enter the basement at character position 1', () => {
      const input2 = ')';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('1');
    });

    it('()()) causes him to enter the basement at character position 5', () => {
      const input2 = '()())';
      const comp = shallow(<Day1 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('5');
    });
  });
});
