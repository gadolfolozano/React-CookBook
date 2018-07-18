import {
  REQUEST_GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
  TOGGLE_CATEGORY,
  SAVE_RECIPE_SUCCESS,
  REMOVE_RECIPE_SUCCESS,
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

const removeItemFromArrayById = (items, id) => {
  const result = [];
  items.forEach((item) => {
    if (item.id !== id) {
      result.push(item);
    }
  });
  return result;
};

const updateRecipes = (recipes, recipe) => {
  const result = [];
  let found = false;
  recipes.forEach((item) => {
    if (item.id === recipe.id) {
      result.push(recipe);
      found = true;
    } else {
      result.push(item);
    }
  });
  if (!found) {
    result.push(recipe);
  }
  return result;
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
    case SAVE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: updateRecipes(state.recipes, action.response.recipe),
      };
    case REMOVE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: removeItemFromArrayById(state.recipes, action.response.removedId),
      };
    default:
      return state;
  }
};

export default auth;
