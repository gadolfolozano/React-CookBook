import { BASE_API, LOGIN } from '../config'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
export const LOGIN_ERROR= 'LOGIN_ERROR'
export const USERNAME_CHANGED= 'USERNAME_CHANGED'
export const PASSWORD_CHANGED= 'PASSWORD_CHANGED'

export const usernameChanged = (text) => ({
    type: USERNAME_CHANGED,
    payload: text
})

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
})

const requestLogin = () => ({
  type: REQUEST_LOGIN
})

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user: user,
  receivedAt: Date.now()
})

const loginError = () => ({
  type: LOGIN_ERROR,
  receivedAt: Date.now()
})

export const performLogin = (username, password) => dispatch => {
  dispatch(requestLogin())
  return fetch(BASE_API.concat(LOGIN), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => {
      if(json.error) {
        dispatch(loginError())
      } else {
        dispatch(loginSuccess(json.user))
      }
    })
}
