import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USERNAME_CHANGED,
  PASSWORD_CHANGED
} from '../actions'

const auth = (state = {
  username: '',
  password: '',
  isFetching: false
  }, action) => {
    switch (action.type) {
      case USERNAME_CHANGED:
        return { ...state, username: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case REQUEST_LOGIN:
        return { ...state, isFetching: true };
      case LOGIN_SUCCESS:
        return { ...state, isFetching: false, user: action.user };
      case LOGIN_ERROR:
        return { ...state, isFetching: false };
      default:
        return state;
    }
}

export default auth
