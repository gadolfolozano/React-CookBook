import { connect } from 'react-redux';
import {
  toggleCategory,
  fetchCategories,
  logout,
  getDashboard,
  showCreateRecipe,
  hideCreateRecipe,
} from '../actions';
import { DashBoard } from '../components';

const mapStateToProps = state => ({
  categories: state.dashboard.categories,
  recipes: state.dashboard.recipes,
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  logout: token => dispatch(logout(token)),
  getDashboard: token => dispatch(getDashboard(token)),
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  hideCreateRecipe: () => dispatch(hideCreateRecipe()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
