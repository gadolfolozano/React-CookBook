import React from 'react';
import PropTypes from 'prop-types';

const CreateRecipe = props => (
  <div className="modal">
    <div className="modal-content" >
      <label htmlFor="name"><b>Nombre del plato</b></label>
      <input
        id="name"
        type="text"
        placeholder="Ingresa un nombre"
        required
      />

      <label htmlFor="description"><b>Preparación</b></label>
      <textarea
        id="description"
        type="text"
        placeholder="Ingresa la Preparación"
        required
      />

      <button>
        Guardar
      </button>

      <button
        className="cancelbtn"
        onClick={props.onCloseClicked}
      >
        Close
      </button>

    </div>
  </div>
);

CreateRecipe.propTypes = {
  onCloseClicked: PropTypes.func.isRequired,
};

export { CreateRecipe };
