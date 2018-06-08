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
    },
    body: JSON.stringify({ token, recipe }),
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

export const saveRecipe = (token, recipe) => (dispatch) => {
  if (token && recipe) {
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

export const recipeNameChanged = text => ({
  type: RECIPE_NAME_CHANGED,
  payload: text,
});

export const recipeDescriptionChanged = text => ({
  type: RECIPE_DESCRIPTION_CHANGED,
  payload: text,
});

export const ingredientInputChanged = text => ({
  type: INGREDIENT_INPUT_CHANGED,
  payload: text,
});

let nextIngredientId = 0;
export const addIngredient = (ingredientName) => {
  nextIngredientId += 1;
  return {
    type: ADD_INGREDIENT,
    payload: ingredientName,
    id: nextIngredientId,
  };
};

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  id,
});

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  id
});
