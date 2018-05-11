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
      />
    )}
  </div>
);

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export { CategoryFilterList };
