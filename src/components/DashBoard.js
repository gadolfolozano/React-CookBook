import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryFilterList } from '../components';

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

  renderFilters() {
    const { categories } = this.props;

    if (categories.length === 0) {
      return <p>Loading categories...</p>;
    }
    return (
      <div />
    );
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
