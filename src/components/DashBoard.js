import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';
import SearchResultContainer from '../containers/SearchResultContainer';
import HomeContainer from '../containers/HomeContainer';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.searchInputChanged = this.searchInputChanged.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
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

  onSearchClick(event) {
    event.preventDefault();
    const { history, match, searchInput } = this.props;
    history.push(`${match.url}/search/${searchInput}`);
  }

  searchInputChanged(event) {
    this.props.searchInputChanged(event.target.value);
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

        <Input
          id="search"
          margin="normal"
          placeholder="Buscar"
          value={this.props.searchInput}
          onChange={this.searchInputChanged}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.onSearchClick}
        >
          Buscar
        </Button>

        <div>
          <Route exact path={this.props.match.url} component={HomeContainer} />
          <Route exact path={`${this.props.match.url}/search/:query`} component={SearchResultContainer} />
        </div>
      </div>
    );
  }
}

DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
  getDashboard: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string,
  searchInputChanged: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

DashBoard.defaultProps = {
  token: '',
};

export { DashBoard };
