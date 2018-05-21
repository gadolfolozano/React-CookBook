import { BASE_API, GET_CATEGORIES } from '../config'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

export const toggleCategory = id => ({
  type: TOGGLE_CATEGORY,
  id
})

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
})

export const receiveCategories = (json) => ({
  type: RECEIVE_CATEGORIES,
  resCategories: json.map(child => child),
  receivedAt: Date.now()
})

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch(BASE_API.concat(GET_CATEGORIES))
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json)))
}

export * from './LoginActions';
