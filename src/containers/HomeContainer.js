import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  showCreateRecipe,
  removeRecipe,
  showEditRecipe,
} from '../actions';
import { RecipeList } from '../components';
import CreateUpdateRecipeContainer from '../containers/CreateUpdateRecipeContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onCreateRecipeClick = this.onCreateRecipeClick.bind(this);
  }

  onCreateRecipeClick(event) {
    event.preventDefault();
    this.props.showCreateRecipe();
  }

  renderCreateRecipe() {
    const { mustShowCreateRecipe } = this.props;

    if (mustShowCreateRecipe) {
      return (
        <CreateUpdateRecipeContainer />
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <RecipeList
          recipes={this.props.recipes}
          removeRecipe={this.props.removeRecipe}
          showEditRecipe={this.props.showEditRecipe}
          token={this.props.token}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.onCreateRecipeClick}
        >
          Crear Receta
        </Button>

        {this.renderCreateRecipe()}
      </div>
    );
  }
}

Home.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  token: PropTypes.string,
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
  showCreateRecipe: PropTypes.func.isRequired,
  mustShowCreateRecipe: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  token: '',
};

const mapStateToProps = state => ({
  recipes: state.dashboard.recipes,
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
  showEditRecipe: recipe => dispatch(showEditRecipe(recipe)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
