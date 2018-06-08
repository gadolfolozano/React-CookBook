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
    <button>
      Edit
    </button>

    <button
      className="cancelbtn"
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
};

export { RecipeItem };
