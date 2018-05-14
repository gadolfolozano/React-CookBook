import { connect } from 'react-redux'
import { toggleCategory } from '../actions'
import { CategoryFilterList } from '../components'

const mapStateToProps = state => ({
  categories: state.categories.items
})

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryFilterList)
