import React from 'react';
import PropTypes from 'prop-types';

function SelectDay({ DAYS, showDay, handleChangeDay }) {
  return (
    <select value={showDay} onChange={handleChangeDay}>
      {DAYS.map(v => (<option key={v} value={v}>{v}</option>))}
    </select>
  );
}

SelectDay.propTypes = {
  DAYS: PropTypes.arrayOf(PropTypes.string),
  showDay: PropTypes.string,
  handleChangeDay: PropTypes.func,
};

SelectDay.defaultProps = {
  DAYS: [],
  showDay: 0,
  handleChangeDay: () => {},
};

export default SelectDay;
