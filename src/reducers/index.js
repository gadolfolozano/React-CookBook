import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import categories from './categories'

export default combineReducers({
  todos,
  visibilityFilter,
  categories
})
