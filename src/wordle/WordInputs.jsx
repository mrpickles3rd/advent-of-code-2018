import React from 'react';

import { LetterCorrectnessSetting } from './LetterCorrectnessSetting';

function WordInputs(params) {
  return (
    <>
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

export { WordInputs };
