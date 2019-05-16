import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './app.js'
import Media from './media.js';
import Header from './header.js';
import Login from './login.js';

function Main() {
  return (
    <Router>

    <Route exact path="/" component={App} />
    {/* <Route path="/about" component={AboutUs} />
    <Route path="/saved" component={SavedMedia} /> */}

    </Router>
  );
}

export default Main;