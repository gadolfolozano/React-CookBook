import React, { Component } from 'react';
import { Header, SearchBox, CategoryFilterList } from '../components'
import Filters from '../containers/Filters'

class App extends Component {
  render() {
    return (
      <div>
        <Header>Avantica CookBook (Mode: {process.env.NODE_ENV})</Header>
        <SearchBox/>
        <Filters/>
      </div>
    );
  }
}

export { App };
