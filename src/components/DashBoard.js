import React, { Component } from 'react';
import { CategoryFilterList } from '../components';
import PropTypes from 'prop-types'

class DashBoard extends Component {

  componentDidMount(){
    
  }

  onLogoutClick(event) {
    event.preventDefault();
    const { token } = this.props;
    this.props.logout(token);
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const { token, history } = this.props
    if(!token) {
      history.replace('/login')
    }
  }

  renderFilters(){
    const { categories } = this.props

    if(categories.length == 0) {
      return <p>Loading categories...</p>
    }
    return (
      <div>


      </div>
    )
  }

  render() {
    return (
      <div>
        <CategoryFilterList
          categories={this.props.categories}
          toggleCategory={this.props.toggleCategory}/>
        <button
          className="cancelbtn"
          onClick = {this.onLogoutClick.bind(this)}>
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
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleCategory: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export { DashBoard };
