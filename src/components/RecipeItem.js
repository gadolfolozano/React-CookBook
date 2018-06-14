import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = props => (
  <div className="recipeContainer">
    <p>
      Name: {props.recipe.name}
      <br />
      Description: {props.recipe.description}
      <br />
      Category: {props.recipe.category.name}
      <br />
      Ingredients:&nbsp;
      {
        props.recipe.ingredients.map((ingredientName, index) => (
          <b key={index}>
            { ingredientName } &nbsp;
          </b>))
      }
    </p>
    <button
      onClick={props.showEditRecipe}
    >
      Edit
    </button>

    <button
      className="cancelbtn"
      onClick={props.removeRecipe}
    >
      Delete
    </button>
  </div>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
};

export { RecipeItem };
