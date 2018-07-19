import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import {
  searchRecipe,
  removeRecipe,
  showEditRecipe,
  showDeleteRecipeConfirmation,
  hideDeleteRecipeConfirmation,
} from '../actions';
import { RecipeList } from '../components';

class SearchResult extends Component {
  componentDidMount() {
    const { token, match } = this.props;
    this.props.searchRecipe(token, match.params.query);
  }

  componentDidUpdate(prevProps) {
    const { token } = this.props;
    const prevQuery = prevProps.match.params.query;
    const actualQuery = this.props.match.params.query;

    if (actualQuery !== prevQuery) {
      this.props.searchRecipe(token, actualQuery);
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.match.params.query}</h3>
        <RecipeList
          recipes={this.props.filteredRecipes}
          showEditRecipe={this.props.showEditRecipe}
          token={this.props.token}
          showDeleteRecipeConfirmation={this.props.showDeleteRecipeConfirmation}
        />

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

SearchResult.propTypes = {
  filteredRecipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  token: PropTypes.string,
  recipeIdToRemove: PropTypes.string.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
  searchRecipe: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.node,
    }).isRequired,
  }).isRequired,
  mustShowDeleteRecipeConfirmation: PropTypes.bool.isRequired,
  showDeleteRecipeConfirmation: PropTypes.func.isRequired,
  hideDeleteRecipeConfirmation: PropTypes.func.isRequired,
};

SearchResult.defaultProps = {
  token: '',
};

const mapStateToProps = state => ({
  filteredRecipes: state.searchRecipe.recipes,
  mustShowDeleteRecipeConfirmation: state.createRecipe.mustShowDeleteRecipeConfirmation,
  token: state.auth.token,
  recipeIdToRemove: state.createRecipe.recipeIdToRemove,
});

const mapDispatchToProps = dispatch => ({
  searchRecipe: (token, query) => dispatch(searchRecipe(token, query)),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
  showEditRecipe: recipe => dispatch(showEditRecipe(recipe)),
  showDeleteRecipeConfirmation: recipeId => dispatch(showDeleteRecipeConfirmation(recipeId)),
  hideDeleteRecipeConfirmation: () => dispatch(hideDeleteRecipeConfirmation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult);
