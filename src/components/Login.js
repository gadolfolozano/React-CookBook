import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import '../styles/main.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const { token, user, history } = this.props
    if (token && user) {
      history.replace('/home')
    }
  }

  onUsernameChange(event) {
    this.props.usernameChanged(event.target.value.trim());
  }

  onPasswordChange(event) {
    this.props.passwordChanged(event.target.value);
  }

  onLoginButtonClick(event) {
    event.preventDefault();
    const { username, password } = this.props;
    this.props.login(username, password);
  }

  render() {
    return (
      <div className="container" >

        <FormControl error={this.props.usernameError} disabled={this.props.isFetching} aria-describedby="name-error-text">
          <InputLabel htmlFor="name-error">Nombre de usuario</InputLabel>
          <Input id="name-error" value={this.props.username} onChange={this.onUsernameChange} />
          <FormHelperText id="name-error-text">{this.props.usernameError ? 'nombre de usuario invalido' : ''}</FormHelperText>
        </FormControl>

        <br />

        <FormControl error={this.props.passwordError} disabled={this.props.isFetching} aria-describedby="password-error-text">
          <InputLabel htmlFor="password-error">Contraseña</InputLabel>
          <Input id="password-error" type="password" value={this.props.password} onChange={this.onPasswordChange} />
          <FormHelperText id="password-error-text">{this.props.passwordError ? 'contraseña invalida' : ''}</FormHelperText>
        </FormControl>

        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={this.props.isFetching}
          onClick={this.onLoginButtonClick}
        >
          Login
        </Button>
        <FormHelperText error={this.props.loginError} id="login-error-text">{this.props.loginError ? 'Error de login' : ''}</FormHelperText>

      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  usernameError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  loginError: PropTypes.bool.isRequired,
  usernameChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export { Login };
