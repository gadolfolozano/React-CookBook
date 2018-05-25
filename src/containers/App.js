import React, { Component } from 'react';
import Filters from './Filters'
import LoginContainer from './LoginContainer'
import { withRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginContainer}/>
        <Route path="/category" component={Filters}/>
      </div>
    );
  }

}

export default withRouter(App)
