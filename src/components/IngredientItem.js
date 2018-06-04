import React from 'react';
import PropTypes from 'prop-types';

const IngredientItem = props => (
  <div>
    {props.text}
    <button
      className="cancelbtn"
      onClick={props.onRemoveItem}
    >
    X
    </button>
  </div >
);

IngredientItem.propTypes = {
  text: PropTypes.string.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export { IngredientItem };
