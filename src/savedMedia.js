import React, { Component, Fragment } from "react";
import superagent from "superagent";

import MediaItem from './mediaItem.js';
import Header from './header.js';

import api from "./helpers/api";

class SavedMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: {},
      savedMedia: []
    };

    this.api = api();
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.id) {
      this.setState({ isLoggedIn: true, user });

      superagent.get(`${this.api}/saved/${user.id}`)
        .then(response => {
          this.setState({ savedMedia: response.body });
        })
        .catch(err => console.log('err', err));
    }
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
          <ul>
            {this.state.savedMedia.map(media => {
              return (
                <MediaItem
                  key={media.id}
                  media={media}
                  saveButton={false}
                />
              );
            })}
          </ul>
        </main>
      </Fragment>
    );
  }
}

export default SavedMedia;
