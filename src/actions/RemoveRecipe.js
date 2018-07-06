import { BASE_API, REMOVE_RECIPE } from '../config';

export const REQUEST_REMOVE_RECIPE = 'REQUEST_REMOVE_RECIPE';
export const REMOVE_RECIPE_SUCCESS = 'REMOVE_RECIPE_SUCCESS';
export const REMOVE_RECIPE_ERROR = 'REMOVE_RECIPE_ERROR';

const removeRecipeError = () => ({
  type: REMOVE_RECIPE_ERROR,
});

const removeRecipeSucess = json => ({
  type: REMOVE_RECIPE_SUCCESS,
  response: json,
});

const requestRemoveRecipe = () => ({
  type: REQUEST_REMOVE_RECIPE,
});

const performRemoveRecipe = (token, recipeId) => (dispatch) => {
  dispatch(requestRemoveRecipe());
  return fetch(BASE_API.concat(REMOVE_RECIPE), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token,
    },
    body: JSON.stringify({ recipe: { id: recipeId } }),
  })
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        dispatch(removeRecipeError());
      } else {
        dispatch(removeRecipeSucess(json));
      }
    });
};

export const removeRecipe = (token, recipeId) => (dispatch) => {
  if (token && recipeId) {
    dispatch(performRemoveRecipe(token, recipeId));
  } else {
    dispatch(removeRecipeError());
  }
};
