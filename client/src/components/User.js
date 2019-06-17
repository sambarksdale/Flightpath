import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {getUserById} from '../util'
import './User.css'
import GamesTable from './GamesTable';

class User extends Component {

  state={
      username: "",
      password: "",
      id: ""
  }

  componentDidMount(){
    getUserById(this.props.user.match.params.id)
      .then(user=>{
        this.setState({username: user[0].username, password: user[0].password, id: user[0].id}, ()=>{console.log(this.state)})
      })

  }

  userUpdate = (event)=>{
    event.preventDefault()
    let userData = {
      id: this.props.user.match.params.id,
      username: document.getElementById("edit-username").value,
      password: document.getElementById("edit-password").value
    }
    this.props.userEdit(userData)
    this.setState({username:userData.username, password:userData.password})
  }

  deleteUser = (event)=>{
    console.log("delete user")
    event.preventDefault()
    this.props.userDelete(this.props.user.match.params.id)
  }


  funcs = ()=>{
    console.log(this.state.user.username)
  }

  render(){

    const Table = (props)=>(<GamesTable
      user={props}
    />)

    return(
      <div>
        <div className="user-edit">
          <form>
            <div>
              <input type="text" id="edit-username" defaultValue={this.state.username}/>
            </div>
            <div>
              <input type="password" id="edit-password" defaultValue={this.state.password}/>
            </div>
            <button onClick={this.userUpdate}>save</button>
          </form>
          <div>
            <Link to='/' onClick={()=>{this.props.userDelete(this.props.user.match.params.id)}} ><div>Delete User</div></Link> 
          </div>
        </div>  
        <Switch>
          <Route path='/user/:id' render={Table}/>
        </Switch>
      </div>
    )
  }
}

export default User;