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
    if (this.props.isLoggedIn) {
      superagent.get(`${this.api}/saved/${this.props.user.id}`)
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
      </Fragment>
    );
  }
}

export default SavedMedia;
