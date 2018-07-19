import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {
  hideCreateRecipe,
  recipeNameChanged,
  recipeDescriptionChanged,
  recipeCheffNameChanged,
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
    this.cheffNameChanged = this.cheffNameChanged.bind(this);
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

  cheffNameChanged(event) {
    this.props.recipeCheffNameChanged(event.target.value);
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
      cheffName: this.props.recipeCheff,
      category: { id: this.props.categoryIdSelected },
      ingredients,
    };

    this.props.saveRecipe(this.props.token, recipe);
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content" >

          <FormControl error={false} disabled={this.props.isLoading} aria-describedby="recipe-name-error-text">
            <InputLabel htmlFor="recipe-name-error">Nombre del plato</InputLabel>
            <Input id="recipe-name-error" value={this.props.recipeName} onChange={this.nameChanged} />
            <FormHelperText id="recipe-name-error-text">{false ? 'Nombre de plato incorrecto' : ''}</FormHelperText>
          </FormControl>

          <br />
          <FormControl error={false} disabled={this.props.isLoading} aria-describedby="description-error-text">
            <InputLabel htmlFor="description-error">Preparación</InputLabel>
            <Input id="description-error" value={this.props.recipeDescription} onChange={this.descriptionChanged} />
            <FormHelperText id="description-error-text">{false ? 'Preparación incorrecta' : ''}</FormHelperText>
          </FormControl>

          <br />
          <FormControl error={false} disabled={this.props.isLoading} aria-describedby="cheff-error-text">
            <InputLabel htmlFor="cheff-error">Nombre del chef</InputLabel>
            <Input id="cheff-error" value={this.props.recipeCheff} onChange={this.cheffNameChanged} />
            <FormHelperText id="cheff-error-text">{false ? 'Nombre de chef incorrecto' : ''}</FormHelperText>
          </FormControl>

          <br />
          <br />
          <br />
          <CategoryChooser
            categories={this.props.categories}
            selectCategory={this.props.selectCategory}
            categoryIdSelected={this.props.categoryIdSelected}
          />

          <br />
          <FormControl error={false} disabled={this.props.isLoading} aria-describedby="ingredient-error-text">
            <InputLabel htmlFor="ingredient-error">Ingrediente</InputLabel>
            <Input id="ingredient-error" value={this.props.ingredientInput} onChange={this.ingredientNameChanged} />
            <FormHelperText id="ingredient-error-text">{false ? 'Nombre de ingrediente incorrecto' : ''}</FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            onClick={this.addIngredientClick}
            disabled={this.props.isLoading}
          >
            Agregar
          </Button>

          <IngredientList
            ingredients={this.props.ingredients}
            onRemoveItem={this.props.removeIngredient}
            disabled={this.props.isLoading}
          />

          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            disabled={this.props.isLoading}
            onClick={this.saveClicked}
          >
            Guardar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.hideCreateRecipe}
            disabled={this.props.isLoading}
          >
            Cerrar
          </Button>

        </div>
      </div>
    );
  }
}

CreateUpdateRecipe.propTypes = {
  hideCreateRecipe: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeCheff: PropTypes.string.isRequired,
  recipeNameChanged: PropTypes.func.isRequired,
  recipeDescriptionChanged: PropTypes.func.isRequired,
  recipeCheffNameChanged: PropTypes.func.isRequired,
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
  recipeCheff: state.createRecipe.cheffName,
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
  recipeCheffNameChanged: text => dispatch(recipeCheffNameChanged(text)),
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
