import {
  REQUEST_GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR
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
      return { ...state, ...INITIAL_STATE, categories: action.response.categories, user: action.response.user };
    case GET_DASHBOARD_ERROR:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
}

export default auth
