import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_INPUT_ERROR,
  PASSWORD_INPUT_ERROR,
  REQUEST_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from '../actions';

const getToken = () => {
  if (sessionStorage) {
    return sessionStorage.getItem('jwtToken');
  }
  return '';
};

const INITIAL_STATE = {
  username: '',
  password: '',
  isFetching: false,
  usernameError: false,
  passwordError: false,
  loginError: false,
  token: getToken(),
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return {
        ...state,
        username: action.payload,
        usernameError: false,
        loginError: false,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
        passwordError: false,
        loginError: false,
      };
    case REQUEST_LOGIN:
      return { ...state, isFetching: true, loginError: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.user,
        token: action.token,
      };
    case LOGIN_ERROR:
      return { ...state, isFetching: false, loginError: true };
    case USERNAME_INPUT_ERROR:
      return { ...state, usernameError: true, loginError: false };
    case PASSWORD_INPUT_ERROR:
      return { ...state, passwordError: true, loginError: false };
    case REQUEST_LOGOUT:
      return { ...state, isFetching: true, loginError: false };
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      return { ...state, ...INITIAL_STATE, token: '' };
    default:
      return state;
  }
};

export default auth;
