import React from 'react';
import PropTypes from 'prop-types';

const CategoryOption = props => (
  <div>
    <label htmlFor={props.id}>
      <input
        id={props.id}
        onChange={props.onClick}
        type="checkbox"
        checked={props.categoryIdSelected === props.id}
      />{props.text}
    </label>
    <br />
  </div >
);

CategoryOption.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  categoryIdSelected: PropTypes.string.isRequired,
};

export { CategoryOption };
