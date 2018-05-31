import {
  REQUEST_GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
  TOGGLE_CATEGORY,
} from '../actions';

const INITIAL_STATE = {
  categories: [],
  recipes: [],
  isLoading: false,
  error: false,
  mustShowCreateRecipe: false,
};

const toggleCategory = (items, id) =>
  items.map(category =>
    ((category.id === id)
      ? { ...category, selected: !category.selected }
      : category));

const parseCategories = (items) => {
  const parsedArray = [];
  items.forEach((item) => {
    parsedArray.push({ id: item.id, text: item.name, selected: false });
  });
  return parsedArray;
};

const parseRecipes = (items) => {
  const parsedArray = [];
  items.forEach((item) => {
    parsedArray.push({ id: item.id, name: item.name, description: item.description });
  });
  return parsedArray;
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_GET_DASHBOARD:
      return { ...state, isLoading: true, error: false };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        categories: parseCategories(action.response.categories),
        recipes: parseRecipes(action.response.recipes),
        user: action.response.user,
      };
    case GET_DASHBOARD_ERROR:
      return { ...state, isLoading: false, error: true };
    case TOGGLE_CATEGORY:
      return { ...state, categories: toggleCategory(state.categories, action.id) };
    default:
      return state;
  }
};

export default auth;
