import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Cricket from './components/Cricket'
import User from './components/User'

class App extends (Component) {

  state = {
    p1_id: 1,
    p1_userName: "sam barksdale",
    p2_id: 2,
    p2_userName: "wayne barksdlae",
    gameType: "cricket"
  }

  getUsers = () => {
    return axios.get('/users')
      .then(users => console.log(users.data))
  }

  getRandomNumber = () => {
    return axios.post('/number')
      .then(results => console.log(results.data))
  }

  render(){
    const CricketGame = ()=>(<Cricket/>)
    const UserProfile = ()=>(<User/>)
    return (
      <Router>
        <div className="App">
          <h1>hellow world</h1>
          <button onClick={this.getUsers}>get users</button>
          <button onClick={this.getRandomNumber}>random_number</button>
          <Switch>
            <Route path="/game/cricket" render={CricketGame}/>
            <Route path="/user/:id" render={UserProfile}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
