import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NOT_USED, BANG_ON, NOT_QUITE } from './_constants';

function LetterCorrectnessSetting({ CORRECTNESS_1, Nth }) {
  const THING = `${CORRECTNESS_1}-${Nth}`;
  const lableText = ` - L ${Nth} `;
  const yellow = '#f3c237';
  const gray = '#a4aec4';
  const green = '#79b851';

  const [selectValue, setSelectValue] = useState(NOT_USED);
  const [selectedStyle, setSelectedStyle] = useState(gray);

  function handleOnChange({ target: { value } }) {
    switch (value) {
      case NOT_USED:
        setSelectedStyle(gray);
        break;
      case BANG_ON:
        setSelectedStyle(green);
        break;
      case NOT_QUITE:
        setSelectedStyle(yellow);
        break;
      default:
        break;
    }
    setSelectValue(value);
  }

  return (
    <>
      <label style={{ background: selectedStyle }} htmlFor={THING} data-testid={CORRECTNESS_1}>
        {lableText}
      </label>
      <select
        style={{ background: selectedStyle }}
        data-testid={THING}
        id={THING}
        value={selectValue}
        onChange={handleOnChange}
      >
        <option style={{ background: gray }} value={NOT_USED}>{NOT_USED}</option>
        <option style={{ background: green }} value={BANG_ON}>{BANG_ON}</option>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <option style={{ background: yellow }} value={NOT_QUITE}>
          {NOT_QUITE}
          {/* In The Right Place */}
        </option>
      </select>
    </>
  );
}

LetterCorrectnessSetting.propTypes = {
  CORRECTNESS_1: PropTypes.string,
  Nth: PropTypes.string,
};

export { LetterCorrectnessSetting };
