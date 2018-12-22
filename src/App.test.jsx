import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';

import SelectDay from './SelectDay';
import dayMap from './day';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<App />);
  });

  it('should render <SelectDay />', () => {
    const component = shallow(<App />);

    expect(component.find(SelectDay).length).toBe(1);
  });

  it('should render <SelectDay /> with the options from `day/index.js`', () => {
    const component = mount(<App />);
    const expectedOptions = Object.keys(dayMap).length;

    expect(component.find('option').length).toBeGreaterThan(0);
    expect(component.find('option').length).toBe(expectedOptions);
  });

  it('should render `select` with the selected being the last in `day/index.js`', () => {
    const component = mount(<App />);
    const expectedSelected = Object.keys(dayMap)[Object.keys(dayMap).length - 1];

    expect(component.find('select').props().value).toBeDefined();
    expect(component.find('select').props().value).toContain('Day');
    expect(component.find('select').props().value).toBe(expectedSelected);
  });

  it('should render the selected day', () => {
    const component = shallow(<App />);
    const expectedSelected = Object.keys(dayMap)[Object.keys(dayMap).length - 1];

    expect(component.find(expectedSelected).length).toBeGreaterThan(0);
    expect(expectedSelected).not.toBe('Day1');
    component.setState({ showDay: 'Day1' });
    expect(component.find('Day1').length).toBeGreaterThan(0);
  });
});
