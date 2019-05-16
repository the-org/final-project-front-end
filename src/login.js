import React, { Fragment } from 'react';

const Login = (props) => (
  <Fragment>
    <input
      onChange={props.handleUserInput}
      placeholder="Please enter a username"
    />
    <button onClick={props.handleUserLogin}>Submit!</button>
  </Fragment>
)

export default Login;
