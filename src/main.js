import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import superagent from 'superagent';

import App from './app.js';
import SavedMedia from './savedMedia.js';

import api from './helpers/api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoggedIn: false
    }
    this.api = api();
  }

  handleUserInput = async e => {
    let inputUserName = e.target.value;
    this.setState({ inputUserName });
  }

  handleUserLogin = async () => {
    superagent.post(`${this.api}/create-user/${this.state.inputUserName}`)
      .then(data => {
        this.setState({ user: data.body, isLoggedIn: true });
      });
  }

  handleUserLogout = async () => {
    this.setState({ user: {}, isLoggedIn: false });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={props => <App {...props} handleUserInput={this.handleUserInput} handleUserLogin={this.handleUserLogin} isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleUserLogout={this.handleUserLogout} />}
          />
          {/* <Route path="/about" component={AboutUs} /> */}
          <Route
            path="/saved"
            render={props => <SavedMedia {...props} handleUserInput={this.handleUserInput} handleUserLogin={this.handleUserLogin} isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleUserLogout={this.handleUserLogout} />}
          />
        </Switch>
      </Router>
    )
  }
}

export default Main;
