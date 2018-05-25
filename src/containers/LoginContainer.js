import React, { Component } from 'react';
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, login } from '../actions'
import { Login } from '../components'

const mapStateToProps = state => ({
  username: state.auth.username,
  usernameError: state.auth.usernameError,
  password: state.auth.password,
  passwordError: state.auth.passwordError,
  loginError: state.auth.loginError,
  isFetching: state.auth.isFetching,
  user: state.auth.user,
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  usernameChanged: text => dispatch(usernameChanged(text)),
  passwordChanged: text => dispatch(passwordChanged(text)),
  login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
