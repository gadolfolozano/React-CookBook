import React, { Component } from 'react';
import DashBoardContainer from './DashBoardContainer'
import LoginContainer from './LoginContainer'
import { withRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={DashBoardContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </div>
    );
  }

}

export default withRouter(App)
