import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Cricket_board from './components/Cricket_board';
import Cricket_input from './components/Cricket_input';

class App extends (Component) {

  getUsers = () => {
    return axios.get('/users')
      .then(users => console.log(users.data))
  }

  getRandomNumber = () => {
    return axios.post('/number')
      .then(results => console.log(results.data))
  }

  render(){
    return (
      <div className="App">
        <h1>hellow world</h1>
        <button onClick={this.getUsers}>get users</button>
        <button onClick={this.getRandomNumber}>random_number</button>
        <Cricket_board/>
        <Cricket_input/>
      </div>
    );
  }
}

export default App;
