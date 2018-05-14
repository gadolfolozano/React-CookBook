import React, { Component } from 'react';
import { CategoryFilter } from '../components';
import PropTypes from 'prop-types'

const CategoryFilterList = (props) => (
  <div>
    {
      props.categories.map( category =>
      <CategoryFilter
        key={category.id}
        {...category}
        onClick={() => props.toggleCategory(category.id)}
      />
    )}
  </div>
);

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired
}

export { CategoryFilterList };
