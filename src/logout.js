import React, { Fragment } from 'react';

const Logout = (props) => (
  <Fragment>
    <p>Hello, {props.user.username}</p>
    <button onClick={props.handleUserLogout}>Logout</button>
  </Fragment>
);

export default Logout;
