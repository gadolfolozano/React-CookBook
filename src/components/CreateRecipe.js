import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.nameChanged = this.nameChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
  }

  nameChanged(event) {
    this.props.onRecipeNameChanged(event.target.value);
  }

  descriptionChanged(event) {
    this.props.onRecipeDescriptionChanged(event.target.value);
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content" >
          <label htmlFor="name"><b>Nombre del plato</b></label>
          <input
            id="name"
            type="text"
            placeholder="Ingresa un nombre"
            required
            value={this.props.recipeName}
            onChange={this.nameChanged}
          />

          <label htmlFor="description"><b>Preparación</b></label>
          <textarea
            id="description"
            type="text"
            placeholder="Ingresa la Preparación"
            required
            value={this.props.recipeDescription}
            onChange={this.descriptionChanged}
          />

          <button>
            Guardar
          </button>

          <button
            className="cancelbtn"
            onClick={this.props.onCloseClicked}
          >
            Close
          </button>

        </div>
      </div>
    );
  }
}

CreateRecipe.propTypes = {
  onCloseClicked: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  onRecipeNameChanged: PropTypes.func.isRequired,
  onRecipeDescriptionChanged: PropTypes.func.isRequired,
};

export { CreateRecipe };
