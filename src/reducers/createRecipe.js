import {
  SHOW_CREATE_RECIPE,
  HIDE_CREATE_RECIPE,
  RECIPE_NAME_CHANGED,
  RECIPE_DESCRIPTION_CHANGED,
  INGREDIENT_INPUT_CHANGED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REQUEST_SAVE_RECIPE,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
  SELECT_CATEGORY,
  SHOW_EDIT_RECIPE,
} from '../actions';

const INITIAL_STATE = {
  mustShowCreateRecipe: false,
  recipeName: '',
  recipeDescription: '',
  ingredientInput: '',
  ingredients: [],
  isLoading: false,
  error: '',
  categoryIdSelected: '',
  recipeId: '',
};

const removeItemFromArrayById = (items, id) => {
  const result = [];
  items.forEach((item) => {
    if (item.id !== id) {
      result.push(item);
    }
  });
  return result;
};

const parseIngredients = (ingredients) => {
  const parsedArray = [];
  ingredients.forEach((ingredient, index) => {
    parsedArray.push({ id: index, name: ingredient });
  });
  return parsedArray;
};

const createRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CREATE_RECIPE:
      return {
        ...state,
        mustShowCreateRecipe: true,
        error: '',
        recipeId: '',
      };
    case HIDE_CREATE_RECIPE:
      return { ...state, mustShowCreateRecipe: false, error: '' };
    case RECIPE_NAME_CHANGED:
      return { ...state, recipeName: action.payload, error: '' };
    case RECIPE_DESCRIPTION_CHANGED:
      return { ...state, recipeDescription: action.payload, error: '' };
    case INGREDIENT_INPUT_CHANGED:
      return { ...state, ingredientInput: action.payload, error: '' };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredientInput: '',
        ingredients: [...state.ingredients, { id: action.id, name: action.payload }],
        error: '',
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: removeItemFromArrayById(state.ingredients, action.id),
        error: '',
      };
    case REQUEST_SAVE_RECIPE:
      return { ...state, isLoading: true, error: '' };
    case SAVE_RECIPE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case SAVE_RECIPE_ERROR:
      return { ...state, isLoading: false, error: 'Ocurrió un error' };
    case SELECT_CATEGORY:
      return { ...state, categoryIdSelected: action.id };
    case SHOW_EDIT_RECIPE:
      return {
        ...state,
        mustShowCreateRecipe: true,
        error: '',
        recipeId: action.recipe.id,
        recipeName: action.recipe.name,
        recipeDescription: action.recipe.description,
        ingredientInput: '',
        ingredients: parseIngredients(action.recipe.ingredients),
        categoryIdSelected: action.recipe.category.id,
      };
    default:
      return state;
  }
};

export default createRecipe;
