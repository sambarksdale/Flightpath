import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Signup extends Component {

    getUserData = (event)=>{
        let user = {}
        event.preventDefault()
        let username = document.getElementById("p1-signup-username").value
        let password = document.getElementById("p1-signup-password").value
        user.username = username
        user.password = password
        this.props.userSignup(user,this.props.player.p1_userName)
    }

    toggleLogin = ()=>{
        this.props.p1ViewLogin()
    }

    toggleSignup = ()=>{
        this.props.p1ViewSignup()
    }

    render(){          
        return(
            <form onSubmit={this.getUserData} className="login-container">
                <div>
                    <input type="text" id="p1-signup-username" placeholder="username"></input>
                </div>
                <div>
                    <input type="password" id="p1-signup-password"placeholder="password"></input>
                </div> 
                <div class="dropdown">
                    <div onClick={this.getUserData} class="dropbtn">New User</div>
                    <div class="dropdown-content">
                        <div onClick={this.toggleLogin}>Sign In</div>
                        <div onClick={this.toggleSignup}>New User</div>
                    </div>
                </div>
            </form>

        )
    }
}

export default Signup