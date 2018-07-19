import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  showCreateRecipe,
  removeRecipe,
  showEditRecipe,
  showDeleteRecipeConfirmation,
  hideDeleteRecipeConfirmation,
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
          showEditRecipe={this.props.showEditRecipe}
          token={this.props.token}
          showDeleteRecipeConfirmation={this.props.showDeleteRecipeConfirmation}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.onCreateRecipeClick}
        >
          Crear Receta
        </Button>

        {this.renderCreateRecipe()}

        <Dialog
          open={this.props.mustShowDeleteRecipeConfirmation}
          onClose={() => this.props.hideDeleteRecipeConfirmation()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Eliminar Receta</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Esta seguro que desea eliminar esta receta?.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.hideDeleteRecipeConfirmation()} color="primary">
              NO
            </Button>
            <Button onClick={() => this.props.removeRecipe(this.props.token, this.props.recipeIdToRemove)} color="primary" autoFocus>
              SI
            </Button>
          </DialogActions>
        </Dialog>
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
  recipeIdToRemove: PropTypes.string.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
  showCreateRecipe: PropTypes.func.isRequired,
  mustShowCreateRecipe: PropTypes.bool.isRequired,
  mustShowDeleteRecipeConfirmation: PropTypes.bool.isRequired,
  showDeleteRecipeConfirmation: PropTypes.func.isRequired,
  hideDeleteRecipeConfirmation: PropTypes.func.isRequired,
};

Home.defaultProps = {
  token: '',
};

const mapStateToProps = state => ({
  recipes: state.dashboard.recipes,
  mustShowCreateRecipe: state.createRecipe.mustShowCreateRecipe,
  mustShowDeleteRecipeConfirmation: state.createRecipe.mustShowDeleteRecipeConfirmation,
  token: state.auth.token,
  recipeIdToRemove: state.createRecipe.recipeIdToRemove,
});

const mapDispatchToProps = dispatch => ({
  showCreateRecipe: () => dispatch(showCreateRecipe()),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
  showEditRecipe: recipe => dispatch(showEditRecipe(recipe)),
  showDeleteRecipeConfirmation: recipeId => dispatch(showDeleteRecipeConfirmation(recipeId)),
  hideDeleteRecipeConfirmation: () => dispatch(hideDeleteRecipeConfirmation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
