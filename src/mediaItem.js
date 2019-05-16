import React, { Component } from 'react';
import superagent from 'superagent';

import api from "./helpers/api";

class MediaItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      didSave: false
    }
    
    this.api = api();
  }

  handleSave = (userId, mediaId) => {
    if (this.props.user.id) {
      superagent.post(`${this.api}/save/${userId}/${mediaId}`)
        .then(response => {
          if (response.text === 'Media saved.') {
            this.setState({ didSave: true });
          }
        })
        .catch(err => {
          console.log('err', err);
        })
    }
  }

  render() {
    let buttonText = this.state.didSave ? 'Saved' : 'Save Media';

    return (
      <li key={this.props.media.id}>
        <a href={this.props.media.url}>{this.props.media.title}</a>
        <p>{this.props.media.descr}</p>
        <button onClick={() => this.handleSave(this.props.user.id, this.props.media.id)}>{buttonText}</button>
      </li>
    )
  }
}

export default MediaItem;
