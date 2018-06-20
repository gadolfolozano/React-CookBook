import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  hideCreateRecipe,
  recipeNameChanged,
  recipeDescriptionChanged,
  ingredientInputChanged,
  addIngredient,
  removeIngredient,
  saveRecipe,
  selectCategory,
  removeRecipe,
} from '../actions';
import { MAX_INGREDIENTS } from '../config';
import { IngredientList, CategoryChooser } from '../components';

class CreateUpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.nameChanged = this.nameChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.ingredientNameChanged = this.ingredientNameChanged.bind(this);
    this.addIngredientClick = this.addIngredientClick.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
  }

  nameChanged(event) {
    this.props.recipeNameChanged(event.target.value);
  }

  descriptionChanged(event) {
    this.props.recipeDescriptionChanged(event.target.value);
  }

  ingredientNameChanged(event) {
    this.props.ingredientInputChanged(event.target.value);
  }

  addIngredientClick(event) {
    event.preventDefault();
    const { ingredients, ingredientInput } = this.props;
    if (ingredients.length < MAX_INGREDIENTS && ingredientInput) {
      this.props.addIngredient(ingredientInput);
    }
  }

  saveClicked(event) {
    event.preventDefault();

    const ingredients = [];
    this.props.ingredients.forEach((item) => {
      ingredients.push(item.name);
    });

    const recipe = {
      id: this.props.recipeId,
      name: this.props.recipeName,
      description: this.props.recipeDescription,
      category: { id: this.props.categoryIdSelected },
      ingredients,
    };

    this.props.saveRecipe(this.props.token, recipe);
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content" >
          <label htmlFor="recipeName"><b>Nombre del plato</b></label>
          <input
            id="recipeName"
            type="text"
            placeholder="Ingresa un nombre"
            required
            value={this.props.recipeName}
            onChange={this.nameChanged}
            disabled={this.props.isLoading}
          />

          <label htmlFor="description"><b>Preparación</b></label>
          <textarea
            id="description"
            type="text"
            placeholder="Ingresa la Preparación"
            required
            value={this.props.recipeDescription}
            onChange={this.descriptionChanged}
            disabled={this.props.isLoading}
          />

          Seleciona una categoria:
          <br />
          <CategoryChooser
            categories={this.props.categories}
            selectCategory={this.props.selectCategory}
            categoryIdSelected={this.props.categoryIdSelected}
          />

          <label htmlFor="ingredients"><b>Ingredientes</b></label>
          <input
            id="ingredients"
            type="text"
            placeholder="Ingresa un nombre"
            required
            value={this.props.ingredientInput}
            onChange={this.ingredientNameChanged}
            disabled={this.props.isLoading}
          />

          <button
            onClick={this.addIngredientClick}
            disabled={this.props.isLoading}
          >
            Agregar ingrediente
          </button>

          <IngredientList
            ingredients={this.props.ingredients}
            onRemoveItem={this.props.removeIngredient}
            disabled={this.props.isLoading}
          />

          <button
            disabled={this.props.isLoading}
            onClick={this.saveClicked}
          >
            Guardar
          </button>

          <button
            className="cancelbtn"
            onClick={this.props.hideCreateRecipe}
            disabled={this.props.isLoading}
          >
            Close
          </button>

        </div>
      </div>
    );
  }
}

CreateUpdateRecipe.propTypes = {
  hideCreateRecipe: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeNameChanged: PropTypes.func.isRequired,
  recipeDescriptionChanged: PropTypes.func.isRequired,
  ingredientInput: PropTypes.string.isRequired,
  ingredientInputChanged: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
  categoryIdSelected: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  recipeId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  categories: state.dashboard.categories,
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  token: state.auth.token,
  recipeName: state.createRecipe.recipeName,
  recipeDescription: state.createRecipe.recipeDescription,
  ingredientInput: state.createRecipe.ingredientInput,
  ingredients: state.createRecipe.ingredients,
  isLoading: state.createRecipe.isLoading,
  createRecipeError: state.createRecipe.error,
  categoryIdSelected: state.createRecipe.categoryIdSelected,
  recipeId: state.createRecipe.recipeId,
});

const mapDispatchToProps = dispatch => ({
  hideCreateRecipe: () => dispatch(hideCreateRecipe()),
  recipeNameChanged: text => dispatch(recipeNameChanged(text)),
  recipeDescriptionChanged: text => dispatch(recipeDescriptionChanged(text)),
  ingredientInputChanged: text => dispatch(ingredientInputChanged(text)),
  addIngredient: ingredientName => dispatch(addIngredient(ingredientName)),
  removeIngredient: id => dispatch(removeIngredient(id)),
  saveRecipe: (token, recipe) => dispatch(saveRecipe(token, recipe)),
  selectCategory: id => dispatch(selectCategory(id)),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUpdateRecipe);
