import React, {Component, Fragment}from 'react';
import superagent from 'superagent';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      inputUserName: '',
      saveUser : {
        id : '',
        userName : '',
      },
    }
  }

  handleInput = async e => {
    let inputUserName = e.target.value;
    this.setState({inputUserName});
  }

  renderFunction = async e => {
    e.preventDefault();

    // comment out superagent call until the backend route is done
    // superagent.post(`https://final-back-end.herokuapp.com/create-user/${this.state.inputUserName}`)
    // .then(function (response){
    //   console.log(response);
    // })

    let saveUser = {id: 1, userName: 'testUse'};

    // save to state
    this.setState({saveUser}, () => {
      console.log(this.state.saveUser);
      localStorage.setItem('user',JSON.stringify(this.state.saveUser));
    });
    // save to localStorage
  }

  render(){ 
    return (
      <Fragment>
        <input onChange= {this.handleInput} placeholder="Please enter a username"></input>
        <button onClick= {this.renderFunction}>Submit!</button>
      </Fragment>

    );
  }

}


export default Login;