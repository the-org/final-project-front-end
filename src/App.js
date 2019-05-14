import React from 'react';
import superagent from 'superagent';

class App extends React.Component {
  render() {
    return (
      <>
        <Test />
      </>
    );
  }
}

class Test extends React.Component {
  render() {
    return(
      await superagent.get('https://final-back-end.herokuapp.com/')
    );
  }
}

export default App;
