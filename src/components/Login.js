import React, { Component } from 'react';
import '../styles/main.css';

class Login extends Component {

  onUsernameChange(event) {
    this.props.usernameChanged(event.target.value.trim());
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value);
  }

  onButtonClick(event) {
    event.preventDefault();
    const { username, password } = this.props;
    this.props.login(username, password);
  }

  renderErrorUsername(){
    const { usernameError } = this.props

    if(usernameError) {
      return <p className="errorText">Invalid username</p>
    }
  }

  renderErrorPassword(){
    const { passwordError } = this.props

    if(passwordError) {
      return <p className="errorText">Invalid password</p>
    }
  }

  renderErrorLogin(){
    const { loginError } = this.props

    if(loginError) {
      return <p className="errorText">Authentication failed</p>
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    const { token, user, history } = this.props
    if(token && user) {
      history.replace('/')
    }
  }

  render() {
    return (
      <div className="container" >
        <label><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          required
          value = {this.props.username}
          disabled={this.props.isFetching}
          onChange = {this.onUsernameChange.bind(this)} />
        {this.renderErrorUsername()}

        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          required
          value = {this.props.password}
          disabled={this.props.isFetching}
          onChange = {this.onPasswordChange.bind(this)}  />
        {this.renderErrorPassword()}

        <button
          disabled={this.props.isFetching}
          onClick = {this.onButtonClick.bind(this)} >
          Login
        </button>
        {this.renderErrorLogin()}

      </div>
    );
  }
}

export { Login };
