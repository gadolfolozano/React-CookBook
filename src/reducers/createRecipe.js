import {
  SHOW_CREATE_RECIPE,
  HIDE_CREATE_RECIPE,
  RECIPE_NAME_CHANGED,
  RECIPE_DESCRIPTION_CHANGED,
  INGREDIENT_INPUT_CHANGED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
} from '../actions';

const INITIAL_STATE = {
  mustShowCreateRecipe: false,
  recipeName: '',
  recipeDescription: '',
  ingredientInput: '',
  ingredients: [],
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
    case INGREDIENT_INPUT_CHANGED:
      return { ...state, ingredientInput: action.payload };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredientInput: '',
        ingredients: [...state.ingredients, { id: action.id, name: action.payload }],
      };
    case REMOVE_INGREDIENT:
    default:
      return state;
  }
};

export default createRecipe;
