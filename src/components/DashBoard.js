import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryFilterList, RecipeList, CreateRecipe } from '../components';

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
        <CreateRecipe
          onCloseClicked={() => this.props.hideCreateRecipe()}
          recipeName={this.props.recipeName}
          onRecipeNameChanged={this.props.recipeNameChanged}
          recipeDescription={this.props.recipeDescription}
          onRecipeDescriptionChanged={this.props.recipeDescriptionChanged}
          onIngredientNameChanged={this.props.ingredientInputChanged}
          ingredientName={this.props.ingredientInput}
          onAddClick={this.props.addIngredient}
          onRemoveItem={this.props.removeIngredient}
          ingredients={this.props.ingredients}
          isLoading={this.props.isLoading}
          saveRecipe={this.props.saveRecipe}
          token={this.props.token}
          selectCategory={this.props.selectCategory}
          categoryIdSelected={this.props.categoryIdSelected}
          categories={this.props.categories}
        />);
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
          removeRecipe={this.props.removeRecipe}
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
  recipeName: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeNameChanged: PropTypes.func.isRequired,
  recipeDescriptionChanged: PropTypes.func.isRequired,
  ingredientInputChanged: PropTypes.func.isRequired,
  ingredientInput: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  categoryIdSelected: PropTypes.string,
  removeRecipe: PropTypes.func.isRequired,
};

DashBoard.defaultProps = {
  token: '',
  categoryIdSelected: '',
};

export { DashBoard };
