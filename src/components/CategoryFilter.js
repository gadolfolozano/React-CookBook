import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => (
  <div>
    <label htmlFor={props.id}>
      <input
        id={props.id}
        onChange={props.onClick}
        type="checkbox"
        checked={props.selected}
      />{props.text}
    </label>
    <br />
  </div >
);

CategoryFilter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { CategoryFilter };
