import React, { Component } from 'react'
import './Login.css'

class P2Login extends Component {

    getUserData = (event)=>{
        let user = {}
        event.preventDefault()
        let username = document.getElementById("p2-login-username").value
        let password = document.getElementById("p2-login-password").value
        user.username = username
        user.password = password
        this.props.userLogin(user,this.props.player.p2_userName)
    }

    toggleLogin = ()=>{
        this.props.p2ViewLogin()
    }

    toggleSignup = ()=>{
        this.props.p2ViewSignup()
    }

    render(){          
        return(
            <form onSubmit={this.getUserData} className="login-container">
                <div class="dropdown">
                    <div onClick={this.getUserData} class="dropbtn">Sign In</div>
                    <div class="dropdown-content">
                        <div onClick={this.toggleLogin}>Sign In</div>
                        <div onClick={this.toggleSignup}>New User</div>
                    </div>
                </div>
                <div>
                    <input type="text" id="p2-login-username" placeholder="username"></input>
                </div>
                <div>
                    <input type="password" id="p2-login-password"placeholder="password"></input>
                </div>
            </form>

        )
    }
}

export default P2Login