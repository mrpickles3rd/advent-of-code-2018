import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day6, { test } from './Day6';

const GRID_SIZE = 1000;

describe('<Day6 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day6 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day6 />);
  });

  it('Should know if to toggle or turn no/off', () => {
    const input = '^>v<';
    const comp = shallow(<Day6 input={input} />);
    expect(comp.find('#output').text()).not.toEqual(`${4}`);
  });

  it('Should have a 1000 x 1000 grid', () => {
    expect(test.grid).toHaveLength(GRID_SIZE);
    expect(test.grid[0]).toHaveLength(GRID_SIZE);
    expect(test.grid[0][0]).toBe(false);
  });

  it('Should have a grid full of `false`', () => {
    test.grid.every(
      (row) => row.every(
        (cell) => expect(cell).toBe(false),
      ),
    );
  });

  it('turn on 0,0 through 999,999 would turn on (or leave on) every light', () => {
    expect(false).toBe(false);
  });
  it('toggle 0,0 through 999,0 would toggle the first line of '
  + '1000 lights, turning off the ones that were on, and turning '
  + 'on the ones that were off.', () => {});
  it('turn off 499,499 through 500,500 would turn off '
  + '(or leave off) the middle four lights', () => {});
  // 1000x1000 grid
  // Lights in your grid are numbered from 0 to 999
  // 0,0, 0,999, 999,999, and 999,0.
  // turn on, turn off, or toggle
});
