import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchRecipe,
  removeRecipe,
  showEditRecipe,
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
          removeRecipe={this.props.removeRecipe}
          showEditRecipe={this.props.showEditRecipe}
          token={this.props.token}
        />
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
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
  searchRecipe: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

SearchResult.defaultProps = {
  token: '',
};

const mapStateToProps = state => ({
  filteredRecipes: state.searchRecipe.recipes,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  searchRecipe: (token, query) => dispatch(searchRecipe(token, query)),
  removeRecipe: (token, recipeId) => dispatch(removeRecipe(token, recipeId)),
  showEditRecipe: recipe => dispatch(showEditRecipe(recipe)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult);
