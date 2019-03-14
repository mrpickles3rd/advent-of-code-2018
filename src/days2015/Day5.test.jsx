import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day5 from './Day5';

describe('<Day5 />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day5 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should work with enzyme', () => {
    shallow(<Day5 />);
  });

  describe('part one', () => {
    describe('A nice string is one with all of the following properties', () => {
      it('It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou', () => {
        const comp1 = shallow(<Day5 input="aei" />);
        expect(comp1.find('#output').text()).toEqual('nice');

        const comp2 = shallow(<Day5 input="xazegov" />);
        expect(comp2.find('#output').text()).toEqual('nice');

        const comp3 = shallow(<Day5 input="aeiouaeiouaeiou" />);
        expect(comp3.find('#output').text()).toEqual('nice');
      });

      it('It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).', () => {
        const comp = shallow(<Day5 input="xx" />);
        expect(comp.find('#output').text()).toEqual('nice');

        const comp2 = shallow(<Day5 input="abcdde" />);
        expect(comp2.find('#output').text()).toEqual('nice');

        const comp3 = shallow(<Day5 input="aabbccdd" />);
        expect(comp3.find('#output').text()).toEqual('nice');
      });

      describe('It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements', () => {
        it('ab is naughty', () => {
          let comp = shallow(<Day5 input="ab" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="abui" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="aab" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="abb" />);
          expect(comp.find('#output').text()).toEqual('naughty');
        });

        it('cd is naughty', () => {
          let comp = shallow(<Day5 input="cd" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="cduio" />);
          expect(comp.find('#output').text()).toEqual('naughty');

          comp = shallow(<Day5 input="ccd" />);
          expect(comp.find('#output').text()).toEqual('naughty');

          comp = shallow(<Day5 input="cdd" />);
          expect(comp.find('#output').text()).toEqual('naughty');
        });

        it('pq is naughty', () => {
          let comp = shallow(<Day5 input="pq" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="pqaeuio" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="ppq" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="pqq" />);
          expect(comp.find('#output').text()).toEqual('naughty');
        });

        it('xy is naughty', () => {
          let comp = shallow(<Day5 input="xy" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="xyaeuio" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="xxy" />);
          expect(comp.find('#output').text()).toEqual('naughty');
          comp = shallow(<Day5 input="xyy" />);
          expect(comp.find('#output').text()).toEqual('naughty');
        });
      });
    });

    describe('For example', () => {
      it('ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings', () => {
        const input = 'ugknbfddgicrmopn';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('nice');
      });

      it('aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap', () => {
        const input = 'aaa';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('nice');
      });

      it('jchzalrnumimnmhp is naughty because it has no double letter', () => {
        const input = 'jchzalrnumimnmhp';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('naughty');
      });

      it('haegwjzuvuyypxyu is naughty because it contains the string xy', () => {
        const input = 'haegwjzuvuyypxyu';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('naughty');
      });

      it('dvszwmarrgswjxmb is naughty because it contains only one vowel', () => {
        const input = 'dvszwmarrgswjxmb';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('naughty');
      });
    });

    it('Day 5 Part 1 is', () => {
      const comp = shallow(<Day5 input="asd" />);
      expect(comp.find('#output').text()).toEqual('naughty OR nice?');
    });
  });

  describe('part two', () => {
    it('with 6 zeros', () => {
      const comp = shallow(<Day5 input="iwrupvqb" input2 />);
      expect(comp.find('#output').text()).toEqual('9958218');
    });
  });
});
