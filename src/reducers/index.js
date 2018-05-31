import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';
import createRecipe from './createRecipe';

export default combineReducers({
  auth,
  dashboard,
  createRecipe,
});
