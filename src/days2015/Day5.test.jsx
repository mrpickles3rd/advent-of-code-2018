import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Day5, * as test from './Day5';
import Day5P1 from './Day5P1';

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
        expect(test.hasVowels('aei')).toEqual(true);
        expect(test.hasVowels('xazegov')).toEqual(true);
        expect(test.hasVowels('aeiouaeiouaeiou')).toEqual(true);
      });

      it('It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).', () => {
        expect(test.doubleLetters('xx')).toEqual(true);
        // const comp = shallow(<Day5 input="xx" />);
        // expect(comp.find('#output').text()).toEqual('1');

        expect(test.doubleLetters('abcdde')).toEqual(true);
        // const comp2 = shallow(<Day5 input="abcdde" />);
        // expect(comp2.find('#output').text()).toEqual('1');

        expect(test.doubleLetters('aabbccdd')).toEqual(true);
        // const comp3 = shallow(<Day5 input="aabbccdd" />);
        // expect(comp3.find('#output').text()).toEqual('1');
      });

      describe('It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements', () => {
        it('ab is naughty', () => {
          let comp = shallow(<Day5 input="ab" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="abui" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="aab" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="abb" />);
          expect(comp.find('#output').text()).toEqual('0');
        });

        it('cd is naughty', () => {
          let comp = shallow(<Day5 input="cd" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="cduio" />);
          expect(comp.find('#output').text()).toEqual('0');

          comp = shallow(<Day5 input="ccd" />);
          expect(comp.find('#output').text()).toEqual('0');

          comp = shallow(<Day5 input="cdd" />);
          expect(comp.find('#output').text()).toEqual('0');
        });

        it('pq is naughty', () => {
          let comp = shallow(<Day5 input="pq" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="pqaeuio" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="ppq" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="pqq" />);
          expect(comp.find('#output').text()).toEqual('0');
        });

        it('xy is naughty', () => {
          let comp = shallow(<Day5 input="xy" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="xyaeuio" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="xxy" />);
          expect(comp.find('#output').text()).toEqual('0');
          comp = shallow(<Day5 input="xyy" />);
          expect(comp.find('#output').text()).toEqual('0');
        });
      });
    });

    describe('For example', () => {
      it('ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings', () => {
        const input = 'ugknbfddgicrmopn';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('1');
      });

      it('aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap', () => {
        const input = 'aaa';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('1');
      });

      it('should find 2 nice strings', () => {
        const input = `aaa
        aaa`;
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('2');
      });

      it('jchzalrnumimnmhp is naughty because it has no double letter', () => {
        const input = 'jchzalrnumimnmhp';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('0');
      });

      it('haegwjzuvuyypxyu is naughty because it contains the string xy', () => {
        const input = 'haegwjzuvuyypxyu';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('0');
      });

      it('dvszwmarrgswjxmb is naughty because it contains only one vowel', () => {
        const input = 'dvszwmarrgswjxmb';
        const comp = shallow(<Day5 input={input} />);
        expect(comp.find('#output').text()).toEqual('0');
      });
    });

    it('Day 5 Part 1 is', () => {
      const comp = shallow(<Day5 input={Day5P1} />);
      expect(comp.find('#output').text()).toEqual('258');
    });
  });

  describe('part two', () => {
    describe('functions that', () => {
      it('It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).', () => {
        expect(test.has2pairs('xyxy')).toEqual(true);
        expect(test.has2pairs('aabcdefgaa')).toEqual(true);
        expect(test.has2pairs('qjhvhtzxzqqjkmpb')).toEqual(true);
        expect(test.has2pairs('xxyxx')).toEqual(true);

        expect(test.has2pairs('aaa')).toEqual(false); // not overlapping

        expect(test.has2pairs('uurcxstgmygtbstg')).toEqual(true); // tg
      });

      it('It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa', () => {
        expect(test.repeatingLetter('xyx')).toEqual(true);
        expect(test.repeatingLetter('abcdefeghi')).toEqual(true);
        expect(test.repeatingLetter('aaa')).toEqual(true);
        expect(test.repeatingLetter('qjhvhtzxzqqjkmpb')).toEqual(true);
        expect(test.repeatingLetter('xxyxx')).toEqual(true);

        expect(test.repeatingLetter('ieodomkazucvgmuy')).toEqual(true); // odo
      });
    });

    it('Day 5 P 2 is', () => {
      const comp = shallow(<Day5 input={Day5P1} />);
      expect(comp.find('#output2').text()).toEqual('53');
    });
  });
});
