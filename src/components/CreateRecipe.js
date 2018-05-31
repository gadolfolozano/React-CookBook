import React from 'react';
import PropTypes from 'prop-types';

const CreateRecipe = props => (
  <div>
    <p>CREATE RECIPE</p>
    <button
      className="cancelbtn"
      onClick={props.onCloseClicked}
    >
      Close
    </button>
  </div>
);

CreateRecipe.propTypes = {
  onCloseClicked: PropTypes.func.isRequired,
};

export { CreateRecipe };
