import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Wordle from './index';

const TEST_ID = 'word-1';

describe('Wordle/index.js', () => {
  test('Should render without braking', () => {
    const defaultHeading = 'Default Heading';
    render(<Wordle />);

    expect(screen.getByRole('heading')).toHaveTextContent(defaultHeading);
  });

  describe('for the first word', () => {
    test('Should have a input linked to a label', () => {
      render(<Wordle />);
      const wordInput1 = screen.getByLabelText('Enter your 1st five letter word');
      const inputtedText = 'abcde';

      expect(wordInput1).toBeInTheDocument();

      userEvent.click(wordInput1);
      userEvent.keyboard(inputtedText);

      expect(screen.getByTestId(TEST_ID)).toHaveValue(inputtedText);
    });

    test('Should only accept upto 5 letters', () => {
      render(<Wordle />);
      const wordInput1 = screen.getByLabelText('Enter your 1st five letter word');
      const inputtedText = 'abcde';

      userEvent.click(wordInput1);
      userEvent.keyboard(`${inputtedText} This will not be displayed`);

      expect(screen.getByTestId(TEST_ID)).toHaveValue(inputtedText);
    });
  });
});
