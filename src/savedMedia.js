import React, { Component, Fragment } from "react";
import superagent from "superagent";

import api from "./helpers/api";

class SavedMedia extends Component {
  constructor(props) {
    super(props);
    this.api = api();
  }

  componentDidMount() {
    superagent.get(`${this.api}/saved/:userId:`).then(response => {
      this.props.mediaHandler(response.body);
    });
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.mediaList.map(media => {
            return <MediaItem key={media.id} media={media} user={this.props.user} />;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Media;
