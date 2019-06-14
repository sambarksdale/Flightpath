import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import {authenticateUser, newUser} from './util'
import Cricket from './components/Cricket.js'
import GameDetail from './components/GameDetail'
import NavBar from './components/NavBar'
import User from './components/User.js'

class App extends Component {

  state = {
    player1: {
      p1_userName: "player 1",
      p1_id: 1,
      loggedIn: true,
    },
    player2: {
      p2_userName: "player 2",
      p2_id: null,
      loggedIn: false
    },
    gametype: "",
    turnLog: []
  }

  userLogin = (data,player)=>{
    return authenticateUser(data)
      .then((user)=>{
        if (user === "failed"){alert("failed")}
        else if(player === "player 1"){
          this.setPLayer1(user)
        }

      })
  }

  userSignup = (data,player)=>{
    return newUser(data)
      .then(user=>{
        if (user === "failed"){alert("failed")}
        else if(player === "player 1"){
          this.setPLayer1(user)
        }
      })
  }

  setPLayer1 = (user)=>{
    let username = user[0].username
    let id = user[0].id
    let player1 = {...this.state.player1}
    player1.p1_userName = username
    player1.p1_id = id
    player1.loggedIn = true
    this.setState({player1})
  }

  setPLayer2 = (user)=>{
    let username = user[0].username
    let id = user[0].id
    let player2 = {...this.state.player2}
    player2.p2_userName = username
    player2.p2_id = id
    player2.loggedIn = true
    this.setState({player2})
  }

  updateTurnLog = (snapshot)=>{
    let turns = []
    turns = this.state.turnLog
    turns.push(snapshot)
    this.setState({turnLog:turns})
  }


  render(){
    const CricketGame = ()=>(<Cricket
      state={this.state}
      updateTurnLog={this.updateTurnLog}
    />)
    const UserProfile = (props)=>(<User
      user={props}
    />)
    return (
      <Router>
        <div className="App">
          <div>
            <NavBar userLogin={this.userLogin} userSignup={this.userSignup} player={this.state.player1}/>
            <Switch>
              <Route exact path="/" render={CricketGame}/>
              <Route exact path="/user/:id" render={UserProfile}/>
              <Route exact path='/user/:id/game/:game_id' component={GameDetail}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
