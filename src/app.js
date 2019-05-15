import React, {Component} from 'react';
// import superagent from 'superagent';
import Media from './media.js';
import Header from './header.js';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      Media:[],
    }
  }

  mediaHandler = (Media) => {
    this.setState({Media},() => console.log(this.state.Media));
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Media mediaHandler = {this.mediaHandler} mediaList = {this.state.Media}/>
      </React.Fragment>
    );
  }
}


export default App;
