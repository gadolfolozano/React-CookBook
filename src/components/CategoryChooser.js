import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CategoryChooser = props => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Selecciona una categoria</FormLabel>
    <RadioGroup
      aria-label="categories"
      name="categories"
    >
      {
        props.categories.map(category =>
          (<FormControlLabel
            key={category.id}
            value={category.id}
            control={<Radio checked={props.categoryIdSelected === category.id} />}
            label={category.text}
            onChange={() => props.selectCategory(category.id)}
          />))
      }
    </RadioGroup>
  </FormControl>
);

CategoryChooser.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  categoryIdSelected: PropTypes.string.isRequired,
};

export { CategoryChooser };
