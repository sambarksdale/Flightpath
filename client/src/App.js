import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import {authenticateUser, newUser, updateUser, deleteUserById, getRandomNumber, getTableData} from './util'
import Cricket from './components/Cricket.js'
import GameDetail from './components/GameDetail'
import NavBar from './components/NavBar'
import User from './components/User.js'

class App extends Component {

  state = {
    player1: {
      p1_userName: "player 1",
      p1_id: 1,
      loggedIn: false,
    },
    player2: {
      p2_userName: "player 2",
      p2_id: 1,
      loggedIn: false,
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
        } else {this.setPLayer2(user)}

      })
  }

  userSignup = (data,player)=>{
    return newUser(data)
      .then(user=>{
        if (user === "failed"){alert("failed")}
          else if(player === "player 1"){
            this.setPLayer1(user)
          } else {this.setPLayer2(user)}
      })
  }

  userEdit = (data)=>{
    return updateUser(data.id, data)
      .then(user=>{
        if(user[0].id === this.state.player1.p1_id){
          this.setPLayer1(user)
          }else{
            this.setPLayer2(user)
          }
      })
  }

  userDelete = (id)=>{
    deleteUserById(id)
    if(this.state.player1.p1_id == id){
      this.logoutPLayer1()
    } else {
      this.logoutPLayer2()
    }
  }

  setPLayer1 = (user)=>{
    let username = user[0].username
    let id = user[0].id
    let player1 = {...this.state.player1}
    player1.p1_userName = username
    player1.p1_id = id
    player1.loggedIn = true
    this.setState({player1}, ()=>{console.log(this.state.player1)})
  }

  setPLayer2 = (user)=>{
    let username = user[0].username
    let id = user[0].id
    let player2 = {...this.state.player2}
    player2.p2_userName = username
    player2.p2_id = id
    player2.loggedIn = true
    this.setState({player2}, ()=>{console.log(this.state.player2)})
  }

  updateTurnLog = (snapshot)=>{
    let turns = []
    turns = this.state.turnLog
    turns.push(snapshot)
    this.setState({turnLog:turns})
  }

  getTableRows = ()=>{
    console.log("table")
    let id = {id:2}
    getTableData(id)
      .then(rows => {
        console.log(rows)
      })
  }

  logoutPLayer1 = ()=>{
    let player1 = {
      p1_userName: "player 1",
      p1_id: 1,
      loggedIn: false
    }
    this.setState({player1}, ()=>{console.log(this.state.player1)})
  }

  logoutPLayer2 = ()=>{
    let player2 = {
      p2_userName: "player 2",
      p2_id: 1,
      loggedIn: false
    }
    this.setState({player2}, ()=>{console.log(this.state.player2)})
  }


  render(){
    const CricketGame = ()=>(<Cricket
      state={this.state}
      updateTurnLog={this.updateTurnLog}
    />)
    const UserProfile = (props)=>(<User
      user={props}
      userEdit={this.userEdit}
      userDelete={this.userDelete}
    />)

    const Detail = (props)=>(<GameDetail
      user={props}
    />)
    return (
      <Router>
        <div className="App">
          <NavBar userLogin={this.userLogin} userSignup={this.userSignup} state={this.state} p1Logout={this.logoutPLayer1} p2Logout={this.logoutPLayer2}/>
          <div>
            <Switch>
              <Route exact path="/" render={CricketGame}/>
              <Route exact path="/user/:id" render={UserProfile}/>
              <Route exact path='/user/:id/game/:game_id' render={Detail}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
