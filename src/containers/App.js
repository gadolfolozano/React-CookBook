import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import DashBoardContainer from './DashBoardContainer';
import LoginContainer from './LoginContainer';

const App = () => (
  <div>
    <Route exact path="/" component={DashBoardContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default withRouter(App);
