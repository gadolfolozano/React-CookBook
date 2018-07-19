import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

const IngredientList = props => (
  <div>
    {
      props.ingredients.map(ingredient =>
        (<Chip
          key={ingredient.id}
          label={ingredient.name}
          onDelete={() => props.onRemoveItem(ingredient.id)}
        />))
    }
  </div>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export { IngredientList };
