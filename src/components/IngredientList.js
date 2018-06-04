import React from 'react';
import PropTypes from 'prop-types';
import { IngredientItem } from '../components';

const IngredientList = props => (
  <div>
    {
      props.ingredients.map(ingredient =>
        (<IngredientItem
          key={ingredient.id}
          text={ingredient.name}
          onRemoveItem={() => props.onRemoveItem(ingredient.id)}
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
