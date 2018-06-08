import React from 'react';
import PropTypes from 'prop-types';
import { CategoryOption } from '../components';

const CategoryChooser = props => (
  <div>
    {
      props.categories.map(category =>
        (<CategoryOption
          key={category.id}
          {...category}
          categoryIdSelected={props.categoryIdSelected}
          onClick={() => props.selectCategory(category.id)}
        />))
    }
  </div>
);

CategoryChooser.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  categoryIdSelected: PropTypes.string.isRequired,
};

export { CategoryChooser };
