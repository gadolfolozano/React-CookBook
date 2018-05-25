import { combineReducers } from 'redux'
import categories from './categories'
import auth from './auth'
import dashboard from './dashboard'

export default combineReducers({
  categories,
  auth,
  dashboard
})
