import { connect } from 'react-redux';
import {
  logout,
  getDashboard,
  searchInputChanged,
  searchRecipe,
} from '../actions';
import { DashBoard } from '../components';

const mapStateToProps = state => ({
  recipes: state.dashboard.recipes,
  token: state.auth.token,
  searchInput: state.searchRecipe.searchInput,
});

const mapDispatchToProps = dispatch => ({
  logout: token => dispatch(logout(token)),
  getDashboard: token => dispatch(getDashboard(token)),
  searchInputChanged: text => dispatch(searchInputChanged(text)),
  searchRecipe: (token, query) => dispatch(searchRecipe(token, query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
