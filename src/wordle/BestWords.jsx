import React from 'react';
import PropTypes from 'prop-types';

import { BEST_WORD_LIST_ID } from './_constants';

function BestWords({ words = [{}], to = 5 }) {
  const from = 0;

  return (
    <ul>
      {[...words].slice(from, to).map(({ word, wait }) => {
        const listItem = (
          <li data-testid={BEST_WORD_LIST_ID} key={`${word}-${wait}`}>
            {word}
            {' - '}
            {wait}
          </li>
        );

        return listItem;
      })}
    </ul>
  );
}

BestWords.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      wait: PropTypes.number,
    }),
  ),
  to: PropTypes.number,
};

export { BestWords };
