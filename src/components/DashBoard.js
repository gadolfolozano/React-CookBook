import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryFilterList, RecipeList } from '../components';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
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
};

DashBoard.defaultProps = {
  token: '',
};

export { DashBoard };
