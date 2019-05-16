import React, { Fragment } from 'react';
import superagent from 'superagent';
//saved media is from our db, not the api- Delete below?
import api from './helpers/api.js';

class Media extends React.Component {
//see comment on 3 - savedMedia is a result from the db not the API
  componentDidMount() {
    let endpoint = api();
    superagent.get(`${endpoint}/all-media`)
      .then(res => {
        this.props.mediaHandler(res.body);
      });
  }

  render() {
    return (
        //this should return saved media object/table
      <Fragment>
        <ul>
          
        </ul>
      </Fragment>
    );
  }
}

export default SavedMedia;
