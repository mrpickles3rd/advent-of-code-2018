import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Wordle } from './index';

const WORD_1_TEXT = 'word-1';
const CORRECTNESS_1 = `${WORD_1_TEXT}-correctness-1`;

describe('Wordle/index.js', () => {
//   beforeAll(() => {
//     const mockDataWords = `asdfg
// aqwer
// aszxc`;

//     jest.mock('./_data-words', () => ({ 'data-words': mockDataWords }));
//   });

  test('Should render without braking', () => {
    const defaultHeading = 'Default Heading';
    render(<Wordle />);

    expect(screen.getByRole('heading')).toHaveTextContent(defaultHeading);
  });

  test('Should display the top 5 words from a provided source', () => {
    render(<Wordle />);
    const bestWordsListID = 'best-words-list';

    expect(screen.getAllByTestId(bestWordsListID)).toHaveLength(5);
  });

  // import { data_words } from './_data-words';
  test('Should sort the top 5 words by waiting', () => {
    render(<Wordle test="test" />);
    const bestWordsListID = 'best-words-list';

    expect(screen.getAllByTestId(bestWordsListID)).toHaveLength(5);
    expect(screen.getByRole('list')).toBe({});
  });

  describe('for the first word', () => {
    test('Should have a input linked to a label', () => {
      render(<Wordle />);
      const wordInput1 = screen.getByLabelText('Enter your 1st five letter word');
      const inputtedText = 'abcde';

      expect(wordInput1).toBeInTheDocument();

      userEvent.click(wordInput1);
      userEvent.keyboard(inputtedText);

      expect(screen.getByTestId(WORD_1_TEXT)).toHaveValue(inputtedText);
    });

    test('Should only accept upto 5 letters', () => {
      render(<Wordle />);
      const wordInput1 = screen.getByLabelText('Enter your 1st five letter word');
      const inputtedText = 'abcde';

      userEvent.click(wordInput1);
      userEvent.keyboard(`${inputtedText} This will not be displayed`);

      expect(screen.getByTestId(WORD_1_TEXT)).toHaveValue(inputtedText);
    });

    test('Should have letter correctness settings', async () => {
      render(<Wordle />);
      const correctnessInputs = 5;
      expect(await screen.findAllByTestId(CORRECTNESS_1)).toHaveLength(correctnessInputs);
    });

    test('Should have a set 1st word filter button', async () => {
      render(<Wordle />);
      const setWord1FilterButton = `set-${CORRECTNESS_1}`;
      // expect(await screen.findByTestId(setWord1FilterButton)).toBeInTheDocument();
      expect(screen.getByTestId(setWord1FilterButton)).toBeInTheDocument();
    });
  });
});
