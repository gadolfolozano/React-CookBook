import {
  SHOW_CREATE_RECIPE,
  HIDE_CREATE_RECIPE,
  RECIPE_NAME_CHANGED,
  RECIPE_DESCRIPTION_CHANGED,
  CHEFF_NAME_INPUT_CHANGED,
  INGREDIENT_INPUT_CHANGED,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  REQUEST_SAVE_RECIPE,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
  SELECT_CATEGORY,
  SHOW_EDIT_RECIPE,
  SHOW_DELETE_RECIPE_CONFIRMATION,
  HIDE_DELETE_RECIPE_CONFIRMATION,
  REQUEST_REMOVE_RECIPE,
  RECIPE_NAME_ERROR,
  RECIPE_DESCRIPTION_ERROR,
  RECIPE_CHEFF_NAME_ERROR,
  INGREDIENT_ERROR,
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
  cheffName: '',
  mustShowDeleteRecipeConfirmation: false,
  recipeIdToRemove: '',
  recipeNameError: false,
  recipeDescriptionError: false,
  cheffNameError: false,
  ingredientError: false,
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
    case RECIPE_NAME_ERROR:
      return { ...state, recipeNameError: true };
    case RECIPE_DESCRIPTION_ERROR:
      return { ...state, recipeDescriptionError: true };
    case RECIPE_CHEFF_NAME_ERROR:
      return { ...state, cheffNameError: true };
    case INGREDIENT_ERROR:
      return { ...state, ingredientError: true };
    case SHOW_CREATE_RECIPE:
      return {
        ...state,
        mustShowCreateRecipe: true,
        error: '',
        recipeId: '',
      };
    case HIDE_CREATE_RECIPE:
      return { ...state, ...INITIAL_STATE };
    case RECIPE_NAME_CHANGED:
      return {
        ...state,
        recipeName: action.payload,
        error: '',
        recipeNameError: false,
      };
    case RECIPE_DESCRIPTION_CHANGED:
      return {
        ...state,
        recipeDescription: action.payload,
        error: '',
        recipeDescriptionError: false,
      };
    case CHEFF_NAME_INPUT_CHANGED:
      return {
        ...state,
        cheffName: action.payload,
        error: '',
        cheffNameError: false,
      };
    case INGREDIENT_INPUT_CHANGED:
      return {
        ...state,
        ingredientInput: action.payload,
        error: '',
        ingredientError: false,
      };
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
        cheffName: action.recipe.cheffName,
      };
    case SHOW_DELETE_RECIPE_CONFIRMATION:
      return {
        ...state,
        mustShowDeleteRecipeConfirmation: true,
        recipeIdToRemove: action.recipeId,
      };
    case REQUEST_REMOVE_RECIPE:
    case HIDE_DELETE_RECIPE_CONFIRMATION:
      return {
        ...state,
        mustShowDeleteRecipeConfirmation: false,
        recipeIdToRemove: '',
      };
    default:
      return state;
  }
};

export default createRecipe;
