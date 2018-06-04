import React from 'react';
import PropTypes from 'prop-types';

const IngredientItem = props => (
  <div>
    {props.text}
    <button
      className="cancelbtn"
    >
    X
    </button>
  </div >
);

IngredientItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export { IngredientItem };
