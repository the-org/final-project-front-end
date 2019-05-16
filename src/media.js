import React, { Fragment } from 'react';
import superagent from 'superagent';

class Media extends React.Component {
  componentDidMount() {
    superagent.get(`${process.env.REACT_APP_DEV_API}/all-media`)
      .then(res => {
        this.props.mediaHandler(res.body);
      });
  }

  handleSave(mediaId){
    //get userId from localstorage
    // let userId = JSON.parse(localStorage.getItem('user')).id;
    // console.log(userId);
    //send userId and article Id to backend
    // superagent.post(`${process.env.REACT_APP_DEV_API}/save/${userId}/${mediaId}`);
  }

  render() {
    return (
      <Fragment>
        <ul>
          {this.props.mediaList.map((key) => {
            return (
              <li key={key.id}>
                <a href={key.url}>{key.title}</a>
                <p>{key.descr}</p>
                <button onClick={this.handleSave(key.id)}>Save Media</button>
              </li>
            );
          })}

        </ul>
      </Fragment>
    );
  }
}

export default Media;
