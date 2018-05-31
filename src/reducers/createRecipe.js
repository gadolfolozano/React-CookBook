import {
  SHOW_CREATE_RECIPE,
  HIDE_CREATE_RECIPE,
} from '../actions';

const INITIAL_STATE = {
  mustShowCreateRecipe: false,
};

const createRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_RECIPE:
      return { ...state, mustShowCreateRecipe: true };
    case HIDE_CREATE_RECIPE:
      return { ...state, mustShowCreateRecipe: false };
    default:
      return state;
  }
};

export default createRecipe;
