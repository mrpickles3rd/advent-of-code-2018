import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line camelcase
import { util_processWords } from './_util_processWords';
import { NOT_USED, BANG_ON, NOT_QUITE } from './_constants';

import { LetterCorrectnessSetting } from './LetterCorrectnessSetting';
import { BestWords } from './BestWords';
import { WordInputs } from './WordInputs';

const appState = [
  { /*
    word,
    wait, */
  },
];

const filterState = {
  [NOT_USED]: [
    /* string */
  ],
  [BANG_ON]: [
    {/* letter, at */},
  ],
  [NOT_QUITE]: [
    {/* letter, at */},
  ],
},

function Wordle({ heading = 'Default Heading', test = 'Default Test Helper' }) {
  const [wordInput1, setWordInput1] = useState('');
  const [words, setWords] = useState(appState);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words')
      .then((res) => res.text())
      .then((t) => setWords(util_processWords(t)))
      .catch((e) => console.error(e));
  }, []);

  function handleWord1Change({ target: { value } }) {
    const shouldUpdate = value.length <= 5;
    if (shouldUpdate) {
      setWordInput1(value);
    }
  }

  function handleFilterWord1() {
    console.log('SET Filter 1');
  }

  const WORD_1_ID = 'word-1';
  const CORRECTNESS_1 = `${WORD_1_ID}-correctness-1`;
  const FILTER_ID_1 = `set-${CORRECTNESS_1}`;
  return (
    <>
      <h1>{heading}</h1>

      <br />

      {/* eslint-disable-next-line camelcase */}
      <BestWords words={words} test={test} />

      <br />

      <label htmlFor={WORD_1_ID}>Enter your 1st five letter word </label>
      <input
        type="text"
        placeholder="abcde"
        data-testid={WORD_1_ID}
        id={WORD_1_ID}
        value={wordInput1}
        onChange={handleWord1Change}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={FILTER_ID_1} data-testid={FILTER_ID_1} onClick={handleFilterWord1}>
        {FILTER_ID_1.replaceAll(/(-)/g, ' ')}
      </button>

      <br />

      <LetterCorrectnessSetting CORRECTNESS_1={CORRECTNESS_1} Nth="0" />
      <LetterCorrectnessSetting CORRECTNESS_1={CORRECTNESS_1} Nth="1" />
      <LetterCorrectnessSetting CORRECTNESS_1={CORRECTNESS_1} Nth="2" />
      <LetterCorrectnessSetting CORRECTNESS_1={CORRECTNESS_1} Nth="3" />
      <LetterCorrectnessSetting CORRECTNESS_1={CORRECTNESS_1} Nth="4" />
    </>
  );
}

Wordle.propTypes = {
  heading: PropTypes.string,
  test: PropTypes.string,
};

export { Wordle };
