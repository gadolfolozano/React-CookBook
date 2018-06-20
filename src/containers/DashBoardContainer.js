import { connect } from 'react-redux';
import {
  logout,
  getDashboard,
  showCreateRecipe,
  hideCreateRecipe,
  recipeNameChanged,
  recipeDescriptionChanged,
  ingredientInputChanged,
  addIngredient,
  removeIngredient,
  saveRecipe,
  selectCategory,
  removeRecipe,
  showEditRecipe,
} from '../actions';
import { DashBoard } from '../components';

const mapStateToProps = state => ({
  categories: state.dashboard.categories,
  recipes: state.dashboard.recipes,
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
  logout: token => dispatch(logout(token)),
  getDashboard: token => dispatch(getDashboard(token)),
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  hideCreateRecipe: () => dispatch(hideCreateRecipe()),
  recipeNameChanged: text => dispatch(recipeNameChanged(text)),
  recipeDescriptionChanged: text => dispatch(recipeDescriptionChanged(text)),
  ingredientInputChanged: text => dispatch(ingredientInputChanged(text)),
  addIngredient: ingredientName => dispatch(addIngredient(ingredientName)),
  removeIngredient: id => dispatch(removeIngredient(id)),
  saveRecipe: (token, recipe) => dispatch(saveRecipe(token, recipe)),
  selectCategory: id => dispatch(selectCategory(id)),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
  showEditRecipe: recipe => dispatch(showEditRecipe(recipe)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
