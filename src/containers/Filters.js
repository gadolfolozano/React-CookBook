import { connect } from 'react-redux'
import { toggleCategory, fetchCategories } from '../actions'
import { CategoryFilterList } from '../components'

const mapStateToProps = state => ({
  categories: state.categories.items
})

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id)),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryFilterList)
