import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

import Day2 from './Day2'; // eslint-disable-line import/no-extraneous-dependencies

Enzyme.configure({ adapter: new Adapter() });

describe('<Day2 />', () => {
  const MIN_PROP_TYPES = { input: '', input2: '' };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day2 {...MIN_PROP_TYPES} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day2 {...MIN_PROP_TYPES} />);
  });
});
