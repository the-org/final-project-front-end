import React, { Component, Fragment } from 'react';
import Media from './media.js';
import Header from './header.js';
import Login from './login.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
    }
  }

  mediaHandler = (media) => {
    this.setState({ media }, () => console.log(this.state.media));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Login />
        <Media 
          mediaHandler={this.mediaHandler} 
          mediaList={this.state.media} 
        />
      </Fragment>
    );
  }
}

export default App;
