import React, { Component } from 'react';
import { Header, SearchBox, Filters } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header>Avantica CookBook (Mode: {process.env.NODE_ENV})</Header>
        <SearchBox/>
        <Filters />
      </div>
    );
  }
}

export default App;
