import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAX_INGREDIENTS } from '../config';
import { IngredientList } from '../components';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.nameChanged = this.nameChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.ingredientNameChanged = this.ingredientNameChanged.bind(this);
    this.addIngredientClick = this.addIngredientClick.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
  }

  nameChanged(event) {
    this.props.onRecipeNameChanged(event.target.value);
  }

  descriptionChanged(event) {
    this.props.onRecipeDescriptionChanged(event.target.value);
  }

  ingredientNameChanged(event) {
    this.props.onIngredientNameChanged(event.target.value);
  }

  addIngredientClick(event) {
    event.preventDefault();
    const { ingredients, ingredientName } = this.props;
    if (ingredients.length < MAX_INGREDIENTS && ingredientName) {
      this.props.onAddClick(ingredientName);
    }
  }

  saveClicked(event) {
    event.preventDefault();

    const recipe = {
      name: this.props.recipeName,
      description: this.props.recipeDescription,
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

          <label htmlFor="ingredients"><b>Ingredientes</b></label>
          <input
            id="ingredients"
            type="text"
            placeholder="Ingresa un nombre"
            required
            value={this.props.ingredientName}
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
            onRemoveItem={this.props.onRemoveItem}
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
            onClick={this.props.onCloseClicked}
            disabled={this.props.isLoading}
          >
            Close
          </button>

        </div>
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  onCloseClicked: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  onRecipeNameChanged: PropTypes.func.isRequired,
  onRecipeDescriptionChanged: PropTypes.func.isRequired,
  ingredientName: PropTypes.string.isRequired,
  onIngredientNameChanged: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export { CreateRecipe };
