import { BASE_API, LOGIN, LOGOUT } from '../config'
import md5 from 'js-md5'

//Login
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_ERROR= 'LOGIN_ERROR'
export const USERNAME_CHANGED= 'USERNAME_CHANGED'
export const PASSWORD_CHANGED= 'PASSWORD_CHANGED'
export const USERNAME_INPUT_ERROR= 'USERNAME_INPUT_ERROR'
export const PASSWORD_INPUT_ERROR= 'PASSWORD_INPUT_ERROR'
//Logout
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const LOGOUT_SUCCESS= 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR= 'LOGOUT_ERROR'

export const usernameChanged = (text) => ({
    type: USERNAME_CHANGED,
    payload: text
})

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
})

const usernameError = () => ({
    type: USERNAME_INPUT_ERROR
})

const passwordError = () => ({
    type: PASSWORD_INPUT_ERROR
})

const requestLogin = () => ({
  type: REQUEST_LOGIN
})

const loginSuccess = (json) => ({
  type: LOGIN_SUCCESS,
  user: json.user,
  token: json.token,
  receivedAt: Date.now()
})

const loginError = () => ({
  type: LOGIN_ERROR,
  receivedAt: Date.now()
})

export const login = (username, password) => dispatch => {
  if(validateInputs(dispatch, username, password)){
    dispatch(performLogin(username, password))
  }
}

function validateInputs(dispatch, username, password) {
  var validate = true
  if(username === '' || username.length < 6){
    dispatch(usernameError())
    validate = false
  }
  if(password === '' || password.length < 6){
    dispatch(passwordError())
    validate = false
  }
  return validate;
}

const performLogin = (username, password) => dispatch => {
  const passwordEcrypted = md5(password)
  dispatch(requestLogin())
  return fetch(BASE_API.concat(LOGIN), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password: passwordEcrypted})
    })
    .then(response => response.json())
    .then(json => {
      if(json.error) {
        dispatch(loginError())
      } else {
        sessionStorage.setItem('jwtToken', json.token);
        dispatch(loginSuccess(json))
      }
    })
}

export const logout = (token) => dispatch => {
  sessionStorage.setItem('jwtToken', '');
  if(token){
    dispatch(performLogout(token))
  }else {
    dispatch(logoutSuccess())
  }
}

const performLogout = (token) => dispatch => {
    dispatch(requestLogout())
    return fetch(BASE_API.concat(LOGOUT), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token})
    })
    .then(response => response.json())
    .then(json => {
      if(json.error) {
        dispatch(logoutError())
      } else {
        dispatch(logoutSuccess())
      }
    })
}

const requestLogout = () => ({
  type: REQUEST_LOGOUT,
  receivedAt: Date.now()
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  receivedAt: Date.now()
})

const logoutError = () => ({
  type: LOGOUT_ERROR,
  receivedAt: Date.now()
})
