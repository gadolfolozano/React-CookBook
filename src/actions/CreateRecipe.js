import { BASE_API, SAVE_RECIPE } from '../config';

export const SHOW_CREATE_RECIPE = 'SHOW_CREATE_RECIPE';
export const HIDE_CREATE_RECIPE = 'HIDE_CREATE_RECIPE';
export const RECIPE_NAME_CHANGED = 'RECIPE_NAME_CHANGED';
export const RECIPE_DESCRIPTION_CHANGED = 'RECIPE_DESCRIPTION_CHANGED';
export const INGREDIENT_INPUT_CHANGED = 'INGREDIENT_INPUT_CHANGED';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const REQUEST_SAVE_RECIPE = 'REQUEST_SAVE_RECIPE';
export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_ERROR = 'SAVE_RECIPE_ERROR';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const CHEFF_NAME_INPUT_CHANGED = 'CHEFF_NAME_INPUT_CHANGED';
export const SHOW_DELETE_RECIPE_CONFIRMATION = 'SHOW_DELETE_RECIPE_CONFIRMATION';
export const HIDE_DELETE_RECIPE_CONFIRMATION = 'HIDE_DELETE_RECIPE_CONFIRMATION';
export const RECIPE_NAME_ERROR = 'RECIPE_NAME_ERROR';
export const RECIPE_DESCRIPTION_ERROR = 'RECIPE_DESCRIPTION_ERROR';
export const RECIPE_CHEFF_NAME_ERROR = 'RECIPE_CHEFF_NAME_ERROR';
export const INGREDIENT_ERROR = 'INGREDIENT_ERROR';

const saveRecipeError = () => ({
  type: SAVE_RECIPE_ERROR,
});

const saveRecipeSucess = json => ({
  type: SAVE_RECIPE_SUCCESS,
  response: json,
});

const requestSaveRecipe = () => ({
  type: REQUEST_SAVE_RECIPE,
});

const performSaveRecipe = (token, recipe) => (dispatch) => {
  dispatch(requestSaveRecipe());
  return fetch(BASE_API.concat(SAVE_RECIPE), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token,
    },
    body: JSON.stringify({ recipe }),
  })
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        dispatch(saveRecipeError());
      } else {
        dispatch(saveRecipeSucess(json));
      }
    });
};

const recipeNameError = () => ({
  type: RECIPE_NAME_ERROR,
});

const recipeDescriptionError = () => ({
  type: RECIPE_DESCRIPTION_ERROR,
});

const recipeCheffNameError = () => ({
  type: RECIPE_CHEFF_NAME_ERROR,
});

const ingredientError = () => ({
  type: INGREDIENT_ERROR,
});

function validateInputs(dispatch, recipe) {
  let validate = true;
  const { name, description, cheffName } = recipe;
  if (name === '' || name.length < 2) {
    dispatch(recipeNameError());
    validate = false;
  }
  if (description === '' || description.length < 2) {
    dispatch(recipeDescriptionError());
    validate = false;
  }
  if (cheffName === '' || cheffName.length < 2) {
    dispatch(recipeCheffNameError());
    validate = false;
  }
  return validate;
}

export const saveRecipe = (token, recipe) => (dispatch) => {
  if (token && recipe && validateInputs(dispatch, recipe)) {
    dispatch(performSaveRecipe(token, recipe));
  } else {
    dispatch(saveRecipeError());
  }
};

export const showCreateRecipe = () => ({
  type: SHOW_CREATE_RECIPE,
});

export const hideCreateRecipe = () => ({
  type: HIDE_CREATE_RECIPE,
});

export const showDeleteRecipeConfirmation = recipeId => ({
  type: SHOW_DELETE_RECIPE_CONFIRMATION,
  recipeId,
});

export const hideDeleteRecipeConfirmation = () => ({
  type: HIDE_DELETE_RECIPE_CONFIRMATION,
});

export const recipeNameChanged = text => ({
  type: RECIPE_NAME_CHANGED,
  payload: text,
});

export const recipeDescriptionChanged = text => ({
  type: RECIPE_DESCRIPTION_CHANGED,
  payload: text,
});

export const recipeCheffNameChanged = text => ({
  type: CHEFF_NAME_INPUT_CHANGED,
  payload: text,
});

export const ingredientInputChanged = text => ({
  type: INGREDIENT_INPUT_CHANGED,
  payload: text,
});

let nextIngredientId = 10;
const addIngredientToList = (ingredientName) => {
  nextIngredientId += 1;
  return {
    type: ADD_INGREDIENT,
    payload: ingredientName,
    id: nextIngredientId,
  };
};

export const addIngredient = ingredientName => (dispatch) => {
  if (ingredientName === '' || ingredientName.length < 2) {
    dispatch(ingredientError());
  } else {
    dispatch(addIngredientToList(ingredientName));
  }
};

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  id,
});

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  id,
});
