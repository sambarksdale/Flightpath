import React, { Component } from 'react'
import './Login.css'

class Login extends Component {

    getUserData = (event)=>{
        let user = {}
        event.preventDefault()
        let username = document.getElementById("p1-login-username").value
        let password = document.getElementById("p1-login-password").value
        user.username = username
        user.password = password
        this.props.userLogin(user,this.props.player.p1_userName)
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
                    <input type="text" id="p1-login-username" placeholder="username"></input>
                </div>
                <div>
                    <input type="password" id="p1-login-password"placeholder="password"></input>
                </div>
                <div class="dropdown">
                    <div onClick={this.getUserData} class="dropbtn">Sign In</div>
                    <div class="dropdown-content">
                        <div onClick={this.toggleLogin}>Sign In</div>
                        <div onClick={this.toggleSignup}>New User</div>
                    </div>
                </div>
            </form>

        )
    }
}

export default Login