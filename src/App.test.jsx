import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';

import dayMap from './days2018';
import yearMap from './years';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<App />);
  });

  it('should render 2 <select /> elements', () => {
    const component = shallow(<App />);

    expect(component.find('select').length).toBe(2);
  });

  it('should render <SelectYear /> with the options from `years`', () => {
    const component = mount(<App />);
    const expectedYearOptions = Object.keys(yearMap).length;

    expect(component.find('#year option').length).toBeGreaterThan(0);
    expect(component.find('#year option').length).toBe(expectedYearOptions);
  });

  it('should render <SelectDay /> with the options from `day/index.js`', () => {
    const component = mount(<App />);
    const expectedOptions = Object.keys(dayMap).length;

    expect(component.find('#day option').length).toBeGreaterThan(0);
    expect(component.find('#day option').length).toBe(expectedOptions);
  });

  it('should render `select` with the selected being the last in `day/index.js`', () => {
    const component = mount(<App />);
    const expectedSelected = Object.keys(dayMap)[Object.keys(dayMap).length - 1];

    expect(component.find('select#day').props().value).toBe(expectedSelected);
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
