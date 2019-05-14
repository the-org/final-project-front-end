import React, { Component } from 'react';
import superagent from 'superagent';

class App extends Component {
  
  componentDidMount(){
    superagent.get('https://final-back-end.herokuapp.com')
      .then(res =>{
        console.log(res);
      });
  }
  render() {
    return (
      <>
        <p>test</p>
      </>
    );
  }
}

export default App;
