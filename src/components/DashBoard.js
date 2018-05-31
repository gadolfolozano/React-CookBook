import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryFilterList, RecipeList, CreateRecipe } from '../components';
//import CreateRecipeContainer from '../containers/CreateRecipeContainer';

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
      return <CreateRecipe onCloseClicked={() => this.props.hideCreateRecipe()} />;
      //return <CreateRecipeContainer />
    }
    return null;
  }

  render() {
    return (
      <div>
        <CategoryFilterList
          categories={this.props.categories}
          toggleCategory={this.props.toggleCategory}
        />

        <button
          className="cancelbtn"
          onClick={this.onLogoutClick}
        >
          LogOut
        </button>

        <RecipeList
          recipes={this.props.recipes}
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
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getDashboard: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string,
  showCreateRecipe: PropTypes.func.isRequired,
  hideCreateRecipe: PropTypes.func.isRequired,
  mustShowCreateRecipe: PropTypes.bool.isRequired,
};

DashBoard.defaultProps = {
  token: '',
};

export { DashBoard };
