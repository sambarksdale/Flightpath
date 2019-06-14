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

    render(){          
        return(
            <form onSubmit={this.getUserData} className="login-container">
                <div>
                    <input type="text" id="p1-login-username" placeholder="username"></input>
                </div>
                <div>
                    <input type="password" id="p1-login-password"placeholder="password"></input>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="/user/1">Link 3</a>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default Login