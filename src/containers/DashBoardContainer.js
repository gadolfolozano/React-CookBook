import { connect } from 'react-redux';
import {
  toggleCategory,
  fetchCategories,
  logout,
  getDashboard,
  showCreateRecipe,
  hideCreateRecipe,
  recipeNameChanged,
  recipeDescriptionChanged,
} from '../actions';
import { DashBoard } from '../components';

const mapStateToProps = state => ({
  categories: state.dashboard.categories,
  recipes: state.dashboard.recipes,
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  token: state.auth.token,
  recipeName: state.createRecipe.recipeName,
  recipeDescription: state.createRecipe.recipeDescription,
});

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  logout: token => dispatch(logout(token)),
  getDashboard: token => dispatch(getDashboard(token)),
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  hideCreateRecipe: () => dispatch(hideCreateRecipe()),
  recipeNameChanged: text => dispatch(recipeNameChanged(text)),
  recipeDescriptionChanged: text => dispatch(recipeDescriptionChanged(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
