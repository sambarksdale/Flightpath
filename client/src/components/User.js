import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './User.css'
import GameDetail from './GameDetail'
import GamesTable from './GamesTable';

class User extends Component {

  render(){

    const Table = (props)=>(<GamesTable
      user={props}
    />)

    return(
      <Switch>
        <Route path='/user/:id' render={Table}/>
        <Route exact path='/user/game/:game_id' component={GameDetail}/>
      </Switch>
    )
  }
}

export default User;