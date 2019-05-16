import React, { Component, Fragment } from 'react';
import superagent from 'superagent';

import Media from './media.js';
import Header from './header.js';
import Login from './login.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [],
      user: {}
    }
  }

  handleUserLogin = async e => {
    e.preventDefault();

    superagent.post(`${process.env.REACT_APP_DEV_API}/create-user/${this.state.inputUserName}`)
    .then(function (response){
      console.log(response);
    })

    // let saveUser = {id: 1, userName: 'testUse'};

    // save to state
    // this.setState({saveUser}, () => {
    //   console.log(this.state.saveUser);
    //   localStorage.setItem('user',JSON.stringify(this.state.saveUser));
    // });
    // save to localStorage

  }

  mediaHandler = (media) => {
    this.setState({ media }, () => console.log(this.state.media));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Login 
          handleUserLogin={this.handleUserLogin}
        />
        <Media 
          mediaHandler={this.mediaHandler} 
          mediaList={this.state.media} 
        />
      </Fragment>
    );
  }
}

export default App;
