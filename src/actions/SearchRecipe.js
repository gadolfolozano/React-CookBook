import { BASE_API, SEARCH_RECIPE } from '../config';

export const REQUEST_SEARCH_RECIPE = 'REQUEST_SEARCH_RECIPE';
export const SEARCH_RECIPE_SUCCESS = 'SEARCH_RECIPE_SUCCESS';
export const SEARCH_RECIPE_ERROR = 'SEARCH_RECIPE_ERROR';
export const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED';


export const searchInputChanged = text => ({
  type: SEARCH_INPUT_CHANGED,
  payload: text,
});

const searchRecipeError = () => ({
  type: SEARCH_RECIPE_ERROR,
});

const searchRecipeSucess = json => ({
  type: SEARCH_RECIPE_SUCCESS,
  response: json,
});

const requestSearchRecipe = () => ({
  type: REQUEST_SEARCH_RECIPE,
});

const performSearchRecipe = (token, name) => (dispatch) => {
  dispatch(requestSearchRecipe());
  return fetch(`${BASE_API}${SEARCH_RECIPE}/?value=${name}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token,
    },
  })
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        dispatch(searchRecipeError());
      } else {
        dispatch(searchRecipeSucess(json));
      }
    });
};

export const searchRecipe = (token, name) => (dispatch) => {
  if (token && name) {
    dispatch(performSearchRecipe(token, name));
  } else {
    dispatch(searchRecipeError());
  }
};
