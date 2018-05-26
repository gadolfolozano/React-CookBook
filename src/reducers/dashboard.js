import {
  REQUEST_GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
  TOGGLE_CATEGORY
} from '../actions'

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_GET_DASHBOARD:
      return { ...state, isLoading: true, error: false  };
    case GET_DASHBOARD_SUCCESS:
      return { ...state, ...INITIAL_STATE, categories: parseCategories(action.response.categories), user: action.response.user };
    case GET_DASHBOARD_ERROR:
      return { ...state, isLoading: false, error: true };
    case TOGGLE_CATEGORY:
      return {...state, categories: toggleCategory(state.categories, action.id)}
    default:
      return state;
  }
}

const toggleCategory = (items, id) => {
  return items.map(category =>
    (category.id === id)
      ? {...category, selected: !category.selected}
      : category)
}

const parseCategories = (items) => {
  var parsedArray = []
  items.forEach((item, index) => {
    parsedArray.push({id: item.id, text: item.name, selected: false})
  });
  return parsedArray
}

export default auth
