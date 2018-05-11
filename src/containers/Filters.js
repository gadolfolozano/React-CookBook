import { connect } from 'react-redux'
import { toggleCategory } from '../actions'
import { CategoryFilterList } from '../components'

const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(
  mapStateToProps
)(CategoryFilterList)
