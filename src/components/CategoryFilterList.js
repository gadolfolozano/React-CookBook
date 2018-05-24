import React, { Component } from 'react';
import { CategoryFilter } from '../components';
import PropTypes from 'prop-types'

class CategoryFilterList extends Component {

  componentDidMount(){
    this.props.fetchCategories();
  }

  renderFilters(){
    const { categories } = this.props

    if(categories.length == 0) {
      return <p>Loading categories...</p>
    }
    return (
      <div>
        {
          this.props.categories.map( category =>
          <CategoryFilter
            key={category.id}
            {...category}
            onClick={() => this.props.toggleCategory(category.id)}
          />
        )}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
      </div>
    );
  }
}

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired
}

export { CategoryFilterList };
