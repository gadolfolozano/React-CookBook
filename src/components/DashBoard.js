import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RecipeList } from '../components';
import CreateUpdateRecipeContainer from '../containers/CreateUpdateRecipeContainer';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onCreateRecipeClick = this.onCreateRecipeClick.bind(this);
  }

  componentDidMount() {
    const { token, history } = this.props;
    if (!token) {
      history.replace('/login');
      return;
    }
    this.props.getDashboard(token);
  }

  componentDidUpdate() {
    const { token, history } = this.props;
    if (!token) {
      history.replace('/login');
    }
  }

  onLogoutClick(event) {
    event.preventDefault();
    const { token } = this.props;
    this.props.logout(token);
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

        <button
          className="cancelbtn"
          onClick={this.onLogoutClick}
        >
          LogOut
        </button>

        <RecipeList
          recipes={this.props.recipes}
          removeRecipe={this.props.removeRecipe}
          showEditRecipe={this.props.showEditRecipe}
          token={this.props.token}
        />

        <button
          onClick={this.onCreateRecipeClick}
        >
          Create Recipe
        </button>

        {this.renderCreateRecipe()}
      </div>
    );
  }
}

DashBoard.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  logout: PropTypes.func.isRequired,
  getDashboard: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string,
  showCreateRecipe: PropTypes.func.isRequired,
  mustShowCreateRecipe: PropTypes.bool.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  showEditRecipe: PropTypes.func.isRequired,
};

DashBoard.defaultProps = {
  token: '',
};

export { DashBoard };
