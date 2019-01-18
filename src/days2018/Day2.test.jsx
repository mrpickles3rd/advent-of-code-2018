import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day2 from './Day2';

describe('<Day2 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day2 />);
  });

  describe(('Part 1'), () => {
    describe.skip('setup tests', () => {
      it('abcdef contains no letters that appear exactly two or three times', () => {
        const input = 'abcdef';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([0, 0]));
      });
      it('bababc contains two a and three b, so it counts for both', () => {
        const input = 'bababc';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([1, 1]));
      });

      it('abbcde contains two b, but no letter appears exactly three times', () => {
        const input = 'abbcde';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([1, 0]));
      });

      it('abcccd contains three c, but no letter appears exactly two times', () => {
        const input = 'abcccd';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([0, 1]));
      });

      it('aabcdd contains two a and two d, but it only counts once', () => {
        const input = 'aabcdd';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([1, 0]));
      });

      it('abcdee contains two e', () => {
        const input = 'abcdee';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([1, 0]));
      });

      it('ababab contains three a and three b, but it only counts once', () => {
        const input = 'ababab';
        const comp = shallow(<Day2 input={input} />);
        expect(comp.find('#output').text()).toEqual(JSON.stringify([0, 1]));
      });
    });

    it('makes the sum === 4 * 3 = 12', () => {
      const input = 'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab';
      const comp = shallow(<Day2 input={input} />);
      expect(comp.find('#output').text()).toEqual(JSON.stringify(4 * 3));
    });

    it('makes the sum === 4 * 3 = 12', () => {
      const input = 'abcdefffff\nbababbcccccvbnnn\n'; // a ===2 - n === 3
      const comp = shallow(<Day2 input={input} />);
      expect(comp.find('#output').text()).toEqual(JSON.stringify(1 * 1));
    });
  });

  describe(('Part 2'), () => {
    it('"fgij" - The boxes will have IDs which differ by exactly one character', () => {
      const input2 = 'abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz'; // a ===2 - n === 3
      const comp = shallow(<Day2 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('fgij');
    });

    it('"aaaaa" - The boxes will have IDs which differ by exactly one character', () => {
      const input2 = 'caaaaa\nbbaaaa\nxaaaaa'; // a ===2 - n === 3
      const comp = shallow(<Day2 input2={input2} />);
      expect(comp.find('#output2').text()).toEqual('aaaaa');
    });
  });
});
