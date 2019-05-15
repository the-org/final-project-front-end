import React, { Fragment } from 'react';
import superagent from 'superagent';

class Media extends React.Component {

  componentDidMount() {
    superagent.get('https://final-back-end.herokuapp.com/all-media')
      .then(res => {
        this.props.mediaHandler(res.body);
      });
  }

  render() {
    return (
      <Fragment>
        <ul>

          {this.props.mediaList.map((key, idx) => {
            return (
              <li key={idx}>
                <a href={key.url}>{key.title}</a>
                <p>{key.descr}</p>
              </li>
            );
          })}

        </ul>
      </Fragment>
    );
  }
}

export default Media;
