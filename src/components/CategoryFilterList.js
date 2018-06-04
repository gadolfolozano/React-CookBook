import React from 'react';
import PropTypes from 'prop-types';
import { CategoryFilter } from '../components';

const CategoryFilterList = props => (
  <div>
    {
      props.categories.map(category =>
        (<CategoryFilter
          key={category.id}
          {...category}
          onClick={() => props.toggleCategory(category.id)}
        />))
    }
  </div>
);

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export { CategoryFilterList };
