import React, { Component } from 'react';

class Login extends Component {
  render() {

    return (
      <div>
        <div >
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" required/>

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" required/>

          <button type="submit">Login</button>
        </div>

        <div>
          <button type="button">Cancel</button>
          <span>Forgot <a href="#">password?</a></span>
        </div>
      </div>
    );
  }
}

export { Login };
