import React, { Component } from 'react';
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, performLogin } from '../actions'

class Login extends Component {

  onUsernameChange(event) {
    this.props.usernameChanged(event.target.value);
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value);
  }

  onButtonClick(event) {
    event.preventDefault();
    const { username, password } = this.props;

    this.props.performLogin(username, password);
  }

  render() {
    return (
      <div>
        <div >
          <label><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            required
            value = {this.props.username}
            onChange = {this.onUsernameChange.bind(this)} />

          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            value = {this.props.password}
            onChange = {this.onPasswordChange.bind(this)}  />

          <button
            type="submit"
            onClick = {this.onButtonClick.bind(this)} >
            Login
          </button>
        </div>

        <div>
          <button type="button">Cancel</button>
          <span>Forgot <a href="#">password?</a></span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  password: state.auth.password,
})

const mapDispatchToProps = dispatch => ({
  usernameChanged: text => dispatch(usernameChanged(text)),
  passwordChanged: text => dispatch(passwordChanged(text)),
  performLogin: (username, password) => dispatch(performLogin(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

//export { Login };
