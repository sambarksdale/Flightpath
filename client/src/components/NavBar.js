import React, { Component } from 'react'
import './NavBar.css'
import Login from '../components/Login'
import Signup from '../components/Signup'

class UserSelect extends Component {

    render(){
        return(
            <div className="navbar">
                <div className="user-selector">
                {
                    this.props.player.loggedIn ?
                    <div>{this.props.player.p1_userName}</div> 
                    :
                    <div className="form-container">
                        <Login userLogin={this.props.userLogin} player={this.props.player}/>
                        {/* <Signup userSignup={this.props.userSignup} player={this.props.player}/> */}
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default UserSelect