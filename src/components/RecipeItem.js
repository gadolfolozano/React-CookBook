import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const RecipeItem = props => (
  <div className="recipeContainer">
    <p>
      Name: {props.recipe.name}
      <br />
      Description: {props.recipe.description}
      <br />
      Category: {props.recipe.category.name}
      <br />
      Chef: {props.recipe.cheffName}
      <br />
      Ingredients:&nbsp;
      {
        props.recipe.ingredients.map((ingredientName, index) => (
          <b key={index}>
            { ingredientName } &nbsp;
          </b>))
      }
    </p>

    <Button
      variant="contained"
      color="primary"
      onClick={props.showEditRecipe}
    >
      Editar
    </Button>

    <Button
      variant="contained"
      color="secondary"
      onClick={props.removeRecipe}
    >
      Eliminar
    </Button>
  </div>
);

RecipeItem.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cheffName: PropTypes.string.isRequired,
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
