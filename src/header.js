import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Login from './login.js';
import Logout from './logout.js';

const Header = (props) => (
  <Fragment>
    <nav>
      <div className="brand">devHub</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/saved">Saved</NavLink>
        <NavLink to="/about">About</NavLink>
        {props.isLoggedIn ?
          <Logout 
            handleUserLogout={props.handleUserLogout} 
            user={props.user}
          /> :
          <Login
            handleUserInput={props.handleUserInput}
            handleUserLogin={props.handleUserLogin}
          />
        }
      </div>
    </nav>
  </Fragment>
);

export default Header;
