import React, { Component } from 'react';
import { Header, SearchBox, CategoryFilterList } from '../components'
import Filters from '../containers/Filters'

class App extends Component {
  render() {

    const categories = [
      {id: 1, text : 'Pastas', selected: true},
      {id: 2, text : 'Salads', selected: false},
      {id: 3,text : 'Meat', selected: true},
      {id: 4,text : 'Desserts', selected: false}]

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
