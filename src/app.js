import React, { Component, Fragment } from 'react';

import Media from './media.js';
import Header from './header.js';

import api from './helpers/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: []
    }
    this.api = api();
  }

  mediaHandler = (media) => {
    this.setState({ media });
  }

  render() {
    return (
      <Fragment>
        <Header
          handleUserInput={this.props.handleUserInput}
          handleUserLogin={this.props.handleUserLogin}
          isLoggedIn={this.props.isLoggedIn}
          user={this.props.user}
          handleUserLogout={this.props.handleUserLogout}
        />
        <main>
          <Media
            mediaHandler={this.mediaHandler}
            mediaList={this.state.media}
            user={this.state.user}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
