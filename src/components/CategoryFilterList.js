import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CategoryFilter } from '../components'

class CategoryFilterList extends Component {
  
  render() {
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
    );
  }
}

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired
}

export { CategoryFilterList }
