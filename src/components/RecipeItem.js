import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = props => (
  <div>
    <p>
      {props.recipe.name} - {props.recipe.description}
    </p>
  </div>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export { RecipeItem };
