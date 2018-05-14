import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  TOGGLE_CATEGORY
} from '../actions'

const resCategories = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        items: parseItems(action.resCategories),
        lastUpdated: action.receivedAt
      }
    case TOGGLE_CATEGORY:
      return {...state, items: toggleCategory(state.items, action.id)}
    default:
      return state
  }
}

const toggleCategory = (items, id) => {
  return items.map(category =>
    (category.id === id)
      ? {...category, selected: !category.selected}
      : category)
}

const parseItems = (items) => {
  var parsedArray = []
  items.forEach((item, index) => {
    parsedArray.push({id: item.id, text: item.name, selected: false})
  });
  return parsedArray
}

export default resCategories
