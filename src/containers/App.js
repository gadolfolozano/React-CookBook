import React, { Component } from 'react';
import { connect } from 'react-redux'
import Filters from './Filters'
import LoginContainer from './LoginContainer'

class App extends Component {

  renderApp(){
    const { token } = this.props

    if(token) {
      //return <p>Loading app...</p>
      return <Filters/>
    }
    return <LoginContainer/>
  }

  render() {
    return (
      <div>
       {this.renderApp()}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  token: state.auth.token
})

export default connect(mapStateToProps)(App)
