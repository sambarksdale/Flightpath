import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import {authenticateUser, newUser, updateUser, deleteUserById, getRandomNumber} from './util'
import Cricket from './components/Cricket.js'
import GameDetail from './components/GameDetail'
import NavBar from './components/NavBar'
import User from './components/User.js'

class App extends Component {

  state = {
    player1: {
      p1_userName: "player 1",
      p1_id: null,
      loggedIn: false,
    },
    player2: {
      p2_userName: "player 2",
      p2_id: null,
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
        console.log(user)
        if(user[0].id === this.state.player1.p1_id){
          this.setPLayer1(user)
          // console.log(user[0].username)
          // this.setState({p1_userName:user[0].username}, ()=>{console.log(this.state.player1.p1_userName)})
          }else{
            this.setPLayer2(user)
            console.log("update player 2")
            this.setState({p2_userName:user[0].username})
          }
      })
  }

  userDelete = (id)=>{
    console.log("delete user")
    deleteUserById(id)
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
      userEdit={this.userEdit}
      userDelete={this.userDelete}
    />)
    return (
      <Router>
        <div className="App">
          <NavBar userLogin={this.userLogin} userSignup={this.userSignup} state={this.state}/>
          <button onClick={()=>{getRandomNumber()}}>test number</button>
          <div>
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
