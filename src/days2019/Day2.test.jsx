import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day2 from './Day2';
// import input from './Day2.input';
// import input2 from './Day2.input2';

describe('<Day2 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day2 />);
  });

  it('12, divide by 3 and round down to get 4, then subtract 2 to get 2', () => {
    const testInput = '1,9,10,3,'
                    + '2,3,11,0,'
                    + '99,'
                    + '30,40,50';
    const output = '1,9,10,70,'
                 + '2,3,11,0,'
                 + '99,'
                 + '30,40,50';
    const comp = shallow(<Day2 input={testInput} />);
    expect(comp.find('#output').text()).toBe(output);
  });
});
