import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Wordle({ heading = 'Default Heading' }) {
  const [word1, setWord1] = useState('');

  function handleWord1Change({ target: { value } }) {
    const shouldUpdate = value.length <= 5;
    if (shouldUpdate) {
      setWord1(value);
    }
  }

  const WORD_1_TEXT = 'word-1';
  return (
    <>
      <h1>{heading}</h1>
      <label htmlFor={WORD_1_TEXT}>Enter your 1st five letter word </label>
      <input
        type="text"
        placeholder="abcde"
        data-testid={WORD_1_TEXT}
        id={WORD_1_TEXT}
        value={word1}
        onChange={handleWord1Change}
      />
    </>
  );
}

// <input type="text" placeholder="5-letter word" id="word-1" value={word1} onChange={handleWord1Change} />
// <textarea name={name} value={input} onChange={handleInputChange} />

Wordle.propTypes = {
  heading: PropTypes.string,
};

export default Wordle;
