import React from 'react';
import PropTypes from 'prop-types';
import { RecipeItem } from '../components';

const RecipeList = props => (
  <div>
    <div className="unique" />
    {
      props.recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          removeRecipe={() => props.showDeleteRecipeConfirmation(recipe.id)}
          showEditRecipe={() => props.showEditRecipe(recipe)}
        />
      ))
    }
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cheffName: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};

export { RecipeList };
