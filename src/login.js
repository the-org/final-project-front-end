import React, { Fragment } from 'react';

const Login = (props) => (
  <Fragment>
    <input
      id="username-input"
      onChange={props.handleUserInput}
      placeholder="Please enter a username"
    />
    <button className="user-button" onClick={props.handleUserLogin}>Login</button>
  </Fragment>
)

export default Login;
