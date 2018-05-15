import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import PropTypes from 'prop-types'
import { Header, SearchBox, CategoryFilterList } from '../components'
import Filters from './Filters'

class App extends Component {

  componentDidMount(){
    const{ dispatch } = this.props
    dispatch(fetchCategories())
  }

  renderFilters(){
    const { categories } = this.props

    if(categories.items.length == 0) {
      return <p>Loading categories...</p>
    }
    return <Filters/>
  }

  render() {
    return (
      <div>
        <Header>Avantica CookBook pruebas (Mode: {process.env.NODE_ENV})</Header>
        <SearchBox/>
        {this.renderFilters()}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(mapStateToProps)(App)
