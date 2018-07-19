import {
  SEARCH_INPUT_CHANGED,
  SEARCH_RECIPE_SUCCESS,
  SEARCH_RECIPE_ERROR,
  REQUEST_SEARCH_RECIPE,
} from '../actions';

const parseRecipes = (items) => {
  const parsedArray = [];
  items.forEach((item) => {
    parsedArray.push({
      id: item.id,
      name: item.name,
      description: item.description,
      ingredients: item.ingredients,
      category: item.category,
      cheffName: item.cheffName,
    });
  });
  return parsedArray;
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  searchInput: '',
  recipes: [],
};

const searchRecipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGED:
      return {
        ...state,
        searchInput: action.payload,
      };
    case REQUEST_SEARCH_RECIPE:
      return { ...state, loading: true, error: false };
    case SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: parseRecipes(action.response.recipes),
        loading: false,
        error: false,
      };
    case SEARCH_RECIPE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default searchRecipe;
