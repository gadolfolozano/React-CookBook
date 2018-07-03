import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';
import createRecipe from './createRecipe';
import searchRecipe from './searchRecipe';

export default combineReducers({
  auth,
  dashboard,
  createRecipe,
  searchRecipe,
});
