import React, { Component, Fragment } from 'react';
import superagent from 'superagent';

import Media from './media.js';
import Header from './header.js';
import Login from './login.js';
import SavedMedia from './savedMedia.js';

import api from './helpers/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      user: {}
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
        this.setState({ user: data.body });
        localStorage.setItem('user', JSON.stringify(data.body));
      });
  }

  mediaHandler = (media) => {
    this.setState({ media });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Login 
          handleUserInput={this.handleUserInput}
          handleUserLogin={this.handleUserLogin}
        />
        <Media 
          mediaHandler={this.mediaHandler} 
          mediaList={this.state.media}
          user={this.state.user}
        />
        <SavedMedia />
      </Fragment>
    );
  }
}

export default App;
