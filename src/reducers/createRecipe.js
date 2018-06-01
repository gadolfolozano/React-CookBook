import {
  SHOW_CREATE_RECIPE,
  HIDE_CREATE_RECIPE,
  RECIPE_NAME_CHANGED,
  RECIPE_DESCRIPTION_CHANGED,
} from '../actions';

const INITIAL_STATE = {
  mustShowCreateRecipe: false,
  recipeName: '',
  recipeDescription: '',
};

const createRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_RECIPE:
      return { ...state, mustShowCreateRecipe: true };
    case HIDE_CREATE_RECIPE:
      return { ...state, mustShowCreateRecipe: false };
    case RECIPE_NAME_CHANGED:
      return { ...state, recipeName: action.payload };
    case RECIPE_DESCRIPTION_CHANGED:
      return { ...state, recipeDescription: action.payload };
    default:
      return state;
  }
};

export default createRecipe;
