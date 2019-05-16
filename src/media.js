import React, { Component, Fragment } from "react";
import superagent from "superagent";

import MediaItem from "./mediaItem.js";

import api from "./helpers/api";

class Media extends Component {
  constructor(props) {
    super(props);

    this.api = api();
  }

  componentDidMount() {
    superagent.get(`${this.api}/all-media`).then(response => {
      this.props.mediaHandler(response.body);
    });
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.mediaList.map(media => {
            return (
              <MediaItem 
                key={media.id} 
                media={media} 
                user={this.props.user}
                saveButton={true}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Media;
