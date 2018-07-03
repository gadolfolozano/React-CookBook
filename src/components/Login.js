import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/main.css';

class Login extends Component {
  componentDidMount() {

  }

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
      history.replace('/home')
    }
  }

  render() {
    return (
      <div className="container" >
        <TextField
          label="Username"
          type="text"
          placeholder="Enter Username"
          required
          value = {this.props.username}
          disabled={this.props.isFetching}
          onChange = {this.onUsernameChange.bind(this)} />
        {this.renderErrorUsername()}
        <br />

        <TextField
          label="Password"
          type="password"
          placeholder="Enter Password"
          required
          value = {this.props.password}
          disabled={this.props.isFetching}
          onChange = {this.onPasswordChange.bind(this)}  />
        {this.renderErrorPassword()}

        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={this.props.isFetching}
          onClick = {this.onButtonClick.bind(this)} >
          Login
        </Button>
        {this.renderErrorLogin()}

      </div>
    );
  }
}

export { Login };
