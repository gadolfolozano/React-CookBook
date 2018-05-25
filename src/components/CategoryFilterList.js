import React, { Component } from 'react';
import { CategoryFilter } from '../components';
import PropTypes from 'prop-types'

class CategoryFilterList extends Component {

  componentDidMount(){
    this.props.fetchCategories();
  }

  onLogoutClick(event) {
    event.preventDefault();
    const { token } = this.props;
    this.props.logout(token);
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const { token, history } = this.props
    if(!token) {
      history.replace('/')
    }
  }

  renderFilters(){
    const { categories } = this.props

    if(categories.length == 0) {
      return <p>Loading categories...</p>
    }
    return (
      <div>
        {
          this.props.categories.map( category =>
          <CategoryFilter
            key={category.id}
            {...category}
            onClick={() => this.props.toggleCategory(category.id)}
          />
        )}
        <button
          className="cancelbtn"
          onClick = {this.onLogoutClick.bind(this)}>
          LogOut
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
      </div>
    );
  }
}

CategoryFilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export { CategoryFilterList };
