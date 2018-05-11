const initialState = [
  {id: 1, text : 'Pastas', selected: false},
  {id: 2, text : 'Salads', selected: true},
  {id: 3,text : 'Meat', selected: false},
  {id: 4,text : 'Desserts', selected: true}]


const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
    return state.map(category =>
      (category.id === action.id)
        ? {...category, selected: !category.selected}
        : category
    )
    default:
      return state
  }
}

export default categories
