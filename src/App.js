import React, { Component } from 'react';
import './App.css';
import { Header, SearchBox, Filters } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header>Avantica CookBook</Header>
        <SearchBox/>
        <Filters />
      </div>
    );
  }
}

export default App;
