import { connect } from 'react-redux'
import { toggleCategory, fetchCategories, logout } from '../actions'
import { DashBoard } from '../components'

const mapStateToProps = state => ({
  categories: state.categories.items,
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  toggleCategory: id => dispatch(toggleCategory(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  logout: token => dispatch(logout(token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
