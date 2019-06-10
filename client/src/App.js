import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Cricket from './components/Cricket'

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
        <Cricket/>
      </div>
    );
  }
}

export default App;
