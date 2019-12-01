import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day1 from './Day1';
import input from './Day1.input';

describe('<Day1 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day1 />);
  });

  it('12, divide by 3 and round down to get 4, then subtract 2 to get 2', () => {
    const testInput = '12';
    const comp = shallow(<Day1 input={testInput} />);
    expect(comp.find('#output').text()).toEqual('2');
  });

  it('14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2', () => {
    const testInput = '14';
    const comp = shallow(<Day1 input={testInput} />);
    expect(comp.find('#output').text()).toEqual('2');
  });

  it('1969, the fuel required is 654', () => {
    const testInput = '1969';
    const comp = shallow(<Day1 input={testInput} />);
    expect(comp.find('#output').text()).toEqual('654');
  });

  it('100756, the fuel required is 33583', () => {
    const testInput = '100756';
    const comp = shallow(<Day1 input={testInput} />);
    expect(comp.find('#output').text()).toEqual('33583');
  });

  it('Should do more then one calculation 14 + 12 => 4', () => {
    const testInput = '12\n14';
    const comp = shallow(<Day1 input={testInput} />);
    expect(comp.find('#output').text()).toEqual('4');
  });

  it('Should get the day 1 part 1 result', () => {
    const RESULT = '3502510';
    const comp = shallow(<Day1 input={input} />);
    expect(comp.find('#output').text()).toEqual(RESULT);
  });
});
