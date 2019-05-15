import React, { Fragment } from 'react';
import superagent from 'superagent';

class Media extends React.Component{

  componentDidMount(){
    superagent.get('https://final-back-end.herokuapp.com/all-media')
      .then(res =>{
        this.props.mediaHandler(res.body);
      });
  }

  render(){
    return(
      <React.Fragment>

        <ul>
          {this.props.mediaList.map( (key,idx) => {
            return (
              <li key={idx}>
                <a href={key.url}>{key.title}</a>
                <button>Save Media</button>
                <p>{key.descr}</p>
              </li>
            );
          })}
          
        </ul>
      </React.Fragment>

    );
  }

}
export default Media;